import { FunctionComponent, useCallback } from "react";
import BackgroundShadow from "../components/BackgroundShadow";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import styles from "./ExplorePost.module.css";

const ExplorePost: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/ethnic");
  }, [navigate]);

  return (
    <div className={styles.explorePost1}>
      <BackgroundShadow />
      <main className={styles.explorePost11}>
        <div className={styles.bodyPaints} />
        <Container />
        <img
          className={styles.image27Icon}
          alt=""
          src="/image-27@2x.png"
          onClick={onImageClick}
        />
      </main>
    </div>
  );
};

export default ExplorePost;
