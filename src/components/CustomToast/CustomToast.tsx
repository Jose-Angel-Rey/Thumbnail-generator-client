import styles from "./CustomToast.module.scss";

type CustomToastProps = {
  icon: React.ReactNode;
  message: string;
};

const CustomToast = ({ icon, message }: CustomToastProps) => {
  return (
    <div className={styles.container}>
      {icon}
      {message}
    </div>
  );
};

export default CustomToast;
