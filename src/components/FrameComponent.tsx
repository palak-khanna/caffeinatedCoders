import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18045677818879085/");
  }, []);

  return (
    <div className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.button}>
          <div className={styles.link}>
            <img className={styles.imageIcon} alt="" src="/image-121@2x.png" />
            <img
              className={styles.njpgIcon}
              loading="lazy"
              alt=""
              src="/450405445-8544532038913655-4905644266332024506-njpg@2x.png"
            />
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
                      className={styles.blakelivelybrazil}
                      href="https://www.instagram.com/blakelivelybrazil/"
                      target="_blank"
                    >
                      blakelivelybrazil
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.world}>world. 😍❤</div>
            </div>
            <div className={styles.isabelaLivingThe}>
              Isabela living the dream of every girl in the
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.link2} onClick={onLinkContainerClick}>
              <a
                className={styles.time14h}
                href="https://www.instagram.com/p/C9WDNqgoLQk/c/18045677818879085/"
                target="_blank"
              >
                14h
              </a>
            </div>
            <div className={styles.button3}>3 likes</div>
            <div className={styles.buttonReply}>Reply</div>
          </div>
        </div>
        <div className={styles.margin}>
          <div className={styles.container4}>
            <div className={styles.button1}>
              <div className={styles.container5}>
                <img className={styles.imgLike} alt="" src="/img--like.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
