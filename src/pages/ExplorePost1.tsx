import { FunctionComponent, useCallback } from "react";
import BackgroundShadow from "../components/BackgroundShadow";
import Container2 from "../components/Container2";
import { useNavigate } from "react-router-dom";
import styles from "./ExplorePost1.module.css";

const ExplorePost1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/ethnic");
  }, [navigate]);

  return (
    <div className={styles.explorePost2}>
      <BackgroundShadow />
      <main className={styles.explorePost21}>
        <div className={styles.bodyPaints} />
        <Container2 />
        <section className={styles.image28Wrapper}>
          <img
            className={styles.image28Icon}
            alt=""
            src="/image-281@2x.png"
            onClick={onImageClick}
          />
        </section>
      </main>
    </div>
  );
};

export default ExplorePost1;
