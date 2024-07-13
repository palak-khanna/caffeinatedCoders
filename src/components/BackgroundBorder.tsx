import { FunctionComponent } from "react";
import styles from "./BackgroundBorder.module.css";

export type BackgroundBorderType = {
  className?: string;
  prop?: string;
  ethnicLover?: string;
};

const BackgroundBorder: FunctionComponent<BackgroundBorderType> = ({
  className = "",
  prop,
  ethnicLover,
}) => {
  return (
    <div className={[styles.backgroundborder, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.container1}>
            <div className={styles.button}>
              <img className={styles.imageIcon} alt="" src="/image-41@2x.png" />
              <div className={styles.link}>
                <img
                  className={styles.njpgIcon}
                  loading="lazy"
                  alt=""
                  src={prop}
                />
                <div className={styles.border} />
              </div>
            </div>
          </div>
          <div className={styles.margin}>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <div className={styles.container4}>
                  <div className={styles.container5}>
                    <div className={styles.container6}>
                      <div className={styles.container7}>
                        <div className={styles.container8}>
                          <div className={styles.link1}>
                            <a className={styles.ethnicLover}>{ethnicLover}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.margin1}>
                        <img
                          className={styles.imgVerified}
                          alt=""
                          src="/img--verified.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container9}>
          <div className={styles.button1}>
            <img
              className={styles.imgMoreOptions}
              loading="lazy"
              alt=""
              src="/img--more-options.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBorder;
