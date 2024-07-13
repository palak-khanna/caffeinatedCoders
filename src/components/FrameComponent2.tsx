import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18082850359491470/");
  }, []);

  return (
    <div className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.button}>
          <div className={styles.link}>
            <img className={styles.imageIcon} alt="" src="/image-5@2x.png" />
            <img
              className={styles.njpgIcon}
              loading="lazy"
              alt=""
              src="/72477997-956326691397137-6344788275361742848-njpg@2x.png"
            />
            <div className={styles.border} />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.heading3Parent}>
              <div className={styles.heading3}>
                <div className={styles.container1}>
                  <div className={styles.container2}>
                    <div className={styles.link1}>
                      <a
                        className={styles.storrowjewelry}
                        href="https://www.instagram.com/storrowjewelry/"
                        target="_blank"
                      >
                        storrowjewelry
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.weveNeverLooked}>
                We’ve never looked better 🥹🥹😍 styling
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>{`💯❣️🥰 `}</div>
              <div className={styles.repliedByUser}>
                <div className={styles.ethnicLover}>
                  <a
                    className={styles.e}
                    href="https://www.instagram.com/blakelively/"
                    target="_blank"
                  >
                    @E
                  </a>
                </div>
                <div className={styles.link2} />
              </div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.link3} onClick={onLinkContainerClick}>
              <a
                className={styles.time16h}
                href="https://www.instagram.com/p/C9WDNqgoLQk/c/18082850359491470/"
                target="_blank"
              >
                16h
              </a>
            </div>
            <div className={styles.button39}>39 likes</div>
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

export default FrameComponent2;
