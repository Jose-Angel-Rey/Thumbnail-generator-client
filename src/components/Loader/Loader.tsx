import styles from "./Loader.module.scss";
import { Loading3QuartersOutlined } from "@ant-design/icons";

type LoaderProps = {
  message: string;
};

const Loader = ({ message }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <Loading3QuartersOutlined spin />
      <h2>{message}</h2>
    </div>
  );
};

export default Loader;
