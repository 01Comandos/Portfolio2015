import { useState } from "react";
import styles from "./Project.module.css";

const Project = ({ isMobile, pictures, name, description }) => {
  const [isHover, setHover] = useState(false);

  return (
    <article
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={pictures.mobile} className={styles.pictureMobile} />
      <img
        src={pictures.desktop}
        className={`${styles.picture} ${isHover ? styles.animation : null}`}
      />
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.textContainer}>
        <p className={styles.description}>{description}</p>
        {(isMobile || isHover) && <img src="/icons/icon-arrow.svg" />}
      </div>
    </article>
  );
};

export default Project;
