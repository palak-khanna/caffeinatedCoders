import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/seemasundays/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17886299496071088/");
  }, []);

  return (
    <div className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.button}>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <img className={styles.imageIcon} alt="" src="/image-6@2x.png" />
            <img
              className={styles.njpgIcon}
              loading="lazy"
              alt=""
              src="/449832417-4058692154365992-792190112603746186-njpg@2x.png"
            />
            <div className={styles.border} />
          </div>
        </div>
        <div className={styles.topCommentRepliesParent}>
          <div className={styles.topCommentReplies}>
            <div className={styles.commentReplyActions}>
              <div className={styles.commentReplyContent}>
                <div className={styles.commentReplyLikes}>
                  <div className={styles.heading3}>
                    <div className={styles.container1}>
                      <div className={styles.container2}>
                        <div className={styles.link1}>
                          <a
                            className={styles.seemasundays}
                            href="https://www.instagram.com/seemasundays/"
                            target="_blank"
                          >
                            seemasundays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.withYouLol}>with you lol.</div>
              </div>
              <div className={styles.iCantBelieve}>
                I can’t believe Hasan Minhaj gets to hang out
              </div>
            </div>
            <div className={styles.margin}>
              <div className={styles.container3}>
                <div className={styles.button1}>
                  <div className={styles.container4}>
                    <img
                      className={styles.imgLike}
                      alt=""
                      src="/img--like.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container5}>
            <div className={styles.link2} onClick={onLinkContainerClick1}>
              <a
                className={styles.time2h}
                href="https://www.instagram.com/p/C9WDNqgoLQk/c/17886299496071088/"
                target="_blank"
              >
                2h
              </a>
            </div>
            <div className={styles.button11}>1 like</div>
            <div className={styles.buttonReply}>Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
