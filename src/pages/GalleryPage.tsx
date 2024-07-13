import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GalleryPage.module.css";

const GalleryPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/post-caption");
  }, [navigate]);

  return (
    <div className={styles.galleryPage}>
      <main className={styles.gallery}>
        <section className={styles.frameParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.image30Icon}
            loading="lazy"
            alt=""
            src="/image-301@2x.png"
          />
        </section>
        <div className={styles.openFile} />
        <img
          className={styles.image20Icon}
          alt=""
          src="/image-201@2x.png"
          onClick={onImageClick}
        />
      </main>
    </div>
  );
};

export default GalleryPage;
