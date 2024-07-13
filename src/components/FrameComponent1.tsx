import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  prop?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  prop,
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/heavywaightchamp/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18113545822383357/");
  }, []);

  return (
    <div className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.link} onClick={onLinkContainerClick}>
              <img className={styles.imageIcon} alt="" src="/image-6@2x.png" />
              <img className={styles.njpgIcon} alt="" src={prop} />
              <div className={styles.border} />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.heading3Parent}>
              <div className={styles.heading3}>
                <div className={styles.container1}>
                  <div className={styles.container2}>
                    <div className={styles.link1}>
                      <a
                        className={styles.heavywaightchamp}
                        href="https://www.instagram.com/heavywaightchamp/"
                        target="_blank"
                      >
                        heavywaightchamp
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.heatwaveToday}>heatwave today 🔥</div>
              </div>
              <div className={styles.wellNowI}>
                well now i know the cause of the massive
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
        </div>
        <div className={styles.containerContainer}>
          <div className={styles.container5}>
            <div className={styles.link2} onClick={onLinkContainerClick1}>
              <a
                className={styles.time16h}
                href="https://www.instagram.com/p/C9WDNqgoLQk/c/18113545822383357/"
                target="_blank"
              >
                16h
              </a>
            </div>
            <div className={styles.button2}>2 likes</div>
            <div className={styles.buttonReply}>Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
