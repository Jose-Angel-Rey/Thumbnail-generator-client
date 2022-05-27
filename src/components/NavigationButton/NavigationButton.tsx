import styles from "./NavigationButton.module.scss";
import { useNavigate } from "react-router-dom";

type NavigationButtonProps = {
  to: string;
  text: string;
  icon: React.ReactElement;
};

const NavigationButton = ({ to, text, icon }: NavigationButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={styles.navigationButton}
    >
      {icon}
      {text}
    </button>
  );
};

export default NavigationButton;
