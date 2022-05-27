import styles from "./LogoutButton.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutOutlined } from "@ant-design/icons";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      title="Log out"
      className={styles.logoutButton}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log out
      <LogoutOutlined />
    </button>
  );
}
