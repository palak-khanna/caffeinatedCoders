import { FunctionComponent, useCallback } from "react";
import styles from "./Comment1.module.css";

export type Comment1Type = {
  className?: string;
};

const Comment1: FunctionComponent<Comment1Type> = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18007569665543215/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.instagram.com/cjaslar/");
  }, []);

  return (
    <div className={[styles.comment, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading3}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.link}>
                <a
                  className={styles.cjaslar}
                  href="https://www.instagram.com/cjaslar/"
                  target="_blank"
                >
                  cjaslar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.link1} onClick={onLinkContainerClick}>
            <a
              className={styles.time5h}
              href="https://www.instagram.com/p/C9WDNqgoLQk/c/18007569665543215/"
              target="_blank"
            >
              5h
            </a>
          </div>
          <div className={styles.button1}>1 like</div>
          <div className={styles.buttonReply}>Reply</div>
        </div>
        <div className={styles.commentMedia}>
          <div className={styles.button}>
            <img className={styles.imageIcon} alt="" src="/image-6@2x.png" />
            <div className={styles.link2} onClick={onLinkContainerClick1}>
              <img
                className={styles.njpgIcon}
                loading="lazy"
                alt=""
                src="/49608789-335024707224942-878687061073199104-njpg@2x.png"
              />
              <div className={styles.border} />
            </div>
          </div>
          <div className={styles.commentDetails}>
            <div className={styles.commentDescription}>
              <div className={styles.firstUserMention}>
                <a
                  className={styles.kObrien11}
                  href="https://www.instagram.com/k_obrien11/"
                  target="_blank"
                >
                  @k_obrien11
                </a>
                <div className={styles.secondUserMention}>
                  <div className={styles.whenYouSee}>{` 😳when you see `}</div>
                  <a
                    className={styles.blakelively}
                    href="https://www.instagram.com/blakelively/"
                    target="_blank"
                  >
                    @blakelively
                  </a>
                </div>
                <div className={styles.wearing}> wearing</div>
              </div>
            </div>
            <div className={styles.yourMomsDenim}>
              your moms denim duster. So chic. Nannie has style.
            </div>
          </div>
          <div className={styles.margin}>
            <div className={styles.container4}>
              <div className={styles.button2}>
                <div className={styles.container5}>
                  <img className={styles.imgLike} alt="" src="/img--like.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment1;
