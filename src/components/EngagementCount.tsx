import { FunctionComponent, useCallback } from "react";
import styles from "./EngagementCount.module.css";

export type EngagementCountType = {
  className?: string;
};

const EngagementCount: FunctionComponent<EngagementCountType> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/liked_by/");
  }, []);

  return (
    <div className={[styles.engagementCount, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.bottomActions}>
          <div className={styles.margin}>
            <div className={styles.container}>
              <div className={styles.button}>
                <div className={styles.container1}>
                  <img
                    className={styles.imgLike}
                    alt=""
                    src="/img--like-14.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navigationLink}>
            <img
              className={styles.imgComment}
              loading="lazy"
              alt=""
              src="/img--comment.svg"
            />
          </div>
        </div>
        <div className={styles.directMessages}>
          <img
            className={styles.imgSharePost}
            loading="lazy"
            alt=""
            src="/img--share-post.svg"
          />
        </div>
        <div className={styles.margin1}>
          <img className={styles.imgSave} alt="" src="/img--save.svg" />
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.container2}>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <div className={styles.container3}>
              <a
                className={styles.likes}
                href="https://www.instagram.com/p/C9WDNqgoLQk/liked_by/"
                target="_blank"
              >
                777,977 likes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementCount;
