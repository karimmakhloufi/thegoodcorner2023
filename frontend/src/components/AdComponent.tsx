import styles from "../styles/Ad.module.css";
import Image from "next/image";

const AdComponent = ({
  id,
  title,
  price,
  description,
}: {
  id: number;
  title: string;
  price: number;
  description: string;
}) => {
  return (
    <div className={styles.container} key={id}>
      <Image
        src="https://picsum.photos/200"
        width={200}
        height={200}
        alt="illustration"
      />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h3>{price} $</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AdComponent;
