import { FunctionComponent, useCallback } from "react";
import styles from "./MessageIcon.module.css";

export type MessageIconType = {
  className?: string;
};

const MessageIcon: FunctionComponent<MessageIconType> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/");
  }, []);

  return (
    <div className={[styles.messageIcon, className].join(" ")}>
      <div className={styles.margin}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.link} onClick={onLinkContainerClick}>
              <div className={styles.container2}>
                <a
                  className={styles.time16}
                  href="https://www.instagram.com/p/C9WDNqgoLQk/"
                  target="_blank"
                >
                  16 hours ago
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.exploreLink}>
          <img
            className={styles.imgEmoji}
            loading="lazy"
            alt=""
            src="/img--emoji.svg"
          />
        </div>
        <div className={styles.exploreLabel}>
          <div className={styles.textareaAddAComment}>
            <div className={styles.addAComment}>Add a comment…</div>
          </div>
        </div>
        <div className={styles.newPostButton}>
          <div className={styles.button}>
            <div className={styles.post}>Post</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageIcon;
