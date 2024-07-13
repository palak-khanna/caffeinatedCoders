import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostingPage.module.css";

const PostingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSelectFromComputerClick = useCallback(() => {
    navigate("/gallery-page");
  }, [navigate]);

  return (
    <div className={styles.postingPage}>
      <div className={styles.frameParent}>
        <div className={styles.image33Wrapper}>
          <img
            className={styles.image33Icon}
            loading="lazy"
            alt=""
            src="/image-33@2x.png"
          />
        </div>
        <div className={styles.dragPhotosAnd}>Drag photos and videos here</div>
      </div>
      <div className={styles.postingPageInner}>
        <div className={styles.selectFromComputerWrapper}>
          <div
            className={styles.selectFromComputer}
            onClick={onSelectFromComputerClick}
          >
            Select from computer
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingPage;
