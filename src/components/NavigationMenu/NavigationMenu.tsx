import styles from "./NavigationMenu.module.scss";
import { useState } from "react";
import { Popover } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";

const NavigationMenu = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const handleVisibleChange = (newVisible: boolean) => setIsVisible(newVisible);

  const popoverContent = (
    <div className={styles.content}>
      <button
        type="button"
        className={styles.contentButton}
        onClick={() => {
          isAuthenticated
            ? logout({ returnTo: window.location.origin })
            : loginWithRedirect({ redirectUri: window.location.origin });
          handleVisibleChange(false);
        }}
      >
        {isAuthenticated ? "Log out" : "Log in"}
      </button>
      {location.pathname !== "/upload-image" && (
        <Link
          className={styles.contentLink}
          onClick={() => handleVisibleChange(false)}
          to="/upload-image"
        >
          Generate thumbnails
        </Link>
      )}
    </div>
  );

  return (
    <>
      {!isLoading && (
        <Popover
          content={popoverContent}
          title={isAuthenticated ? `Hi ${user?.nickname}!` : "Hello!"}
          trigger="click"
          visible={isVisible}
          onVisibleChange={handleVisibleChange}
          className={styles.popover}
        >
          <button className={styles.button} type="button" title="Menu">
            {isAuthenticated ? <UserOutlined /> : <MenuOutlined />}
          </button>
        </Popover>
      )}
    </>
  );
};

export default NavigationMenu;
