import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostCaption.module.css";

const PostCaption: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAddCaptionClick = useCallback(() => {
    navigate("/your-post-home-page-edit");
  }, [navigate]);

  return (
    <div className={styles.postCaption}>
      <textarea className={styles.postCaptionChild} rows={17} cols={31} />
      <img
        className={styles.image29Icon}
        loading="lazy"
        alt=""
        src="/image-291@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.image21Parent}>
          <img
            className={styles.image21Icon}
            loading="lazy"
            alt=""
            src="/image-213@2x.png"
          />
          <div className={styles.sooyoWrapper}>
            <b className={styles.sooyo}>sooyo</b>
          </div>
        </div>
        <div className={styles.addCaptionContainerWrapper}>
          <div className={styles.addCaptionContainer}>
            <div className={styles.addCaptionParent}>
              <b className={styles.addCaption}>Add Caption:</b>
              <div className={styles.frameWrapper}>
                <div className={styles.addCaptionGroup}>
                  <img
                    className={styles.addCaptionIcon}
                    alt=""
                    src="/add-caption.svg"
                    onClick={onAddCaptionClick}
                  />
                  <div className={styles.wrapperArrow1}>
                    <img
                      className={styles.wrapperArrow1Child}
                      loading="lazy"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.jissooInSingaporeWrapper}>
              <div className={styles.jissooInSingapore}>
                Jissoo in Singapore 🍁❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCaption;
