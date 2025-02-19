import styles from "../styles/service_landing_page.module.css";
import Image from "next/image";
export default function ServiceLandingPage({
  width,
  height,
  index,
  title,
  description,
}) {
  const str = "/landing_page_service_" + index + ".png";
  return (
    <div className={styles.container}>
      <Image src={str} width={width} height={height} alt="service" />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
