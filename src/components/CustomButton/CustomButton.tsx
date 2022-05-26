import styles from "./CustomButton.module.scss";

type CustomButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
};

const CustomButton = ({ icon, text, onClick }: CustomButtonProps) => {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={() => onClick && onClick()}
    >
      {icon}
      {text}
    </button>
  );
};

export default CustomButton;
