import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.tablistParent}>
        <div className={styles.tablist}>
          <div className={styles.tab}>
            <div className={styles.imgWrapper}>
              <img className={styles.imgIcon} alt="" src="/img.svg" />
            </div>
            <div className={styles.posts}>Posts</div>
          </div>
          <div className={styles.tablistInner}>
            <div className={styles.frameGroup}>
              <div className={styles.imgContainer}>
                <img className={styles.imgIcon1} alt="" src="/img-1.svg" />
              </div>
              <div className={styles.reels}>Reels</div>
            </div>
          </div>
          <div className={styles.tablistChild}>
            <div className={styles.frameContainer}>
              <div className={styles.imgFrame}>
                <img className={styles.imgIcon2} alt="" src="/img-2.svg" />
              </div>
              <div className={styles.tagged}>Tagged</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.linkParent}>
            <img
              className={styles.linkIcon}
              loading="lazy"
              alt=""
              src="/link2.svg"
            />
            <img
              className={styles.linkIcon1}
              loading="lazy"
              alt=""
              src="/link-1.svg"
            />
          </div>
          <div className={styles.gridImagesThree}>
            <img
              className={styles.linkIcon2}
              loading="lazy"
              alt=""
              src="/link-2.svg"
            />
            <img
              className={styles.linkIcon3}
              loading="lazy"
              alt=""
              src="/link-3.svg"
            />
          </div>
          <div className={styles.linkGroup}>
            <img
              className={styles.linkIcon4}
              loading="lazy"
              alt=""
              src="/link-4.svg"
            />
            <img
              className={styles.linkIcon5}
              loading="lazy"
              alt=""
              src="/link-5.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.linkContainer}>
          <img
            className={styles.linkIcon6}
            loading="lazy"
            alt=""
            src="/link-6.svg"
          />
          <img
            className={styles.linkIcon7}
            loading="lazy"
            alt=""
            src="/link-7.svg"
          />
        </div>
        <div className={styles.profileNameParent}>
          <div className={styles.profileName}>
            <img
              className={styles.linkIcon8}
              loading="lazy"
              alt=""
              src="/link-8.svg"
            />
            <img
              className={styles.linkIcon9}
              loading="lazy"
              alt=""
              src="/link-9.svg"
            />
          </div>
          <div className={styles.stats}>
            <img
              className={styles.linkIcon10}
              loading="lazy"
              alt=""
              src="/link-10.svg"
            />
            <img
              className={styles.linkIcon11}
              loading="lazy"
              alt=""
              src="/link-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.linkParent1}>
          <img
            className={styles.linkIcon12}
            loading="lazy"
            alt=""
            src="/link-12.svg"
          />
          <img
            className={styles.linkIcon13}
            loading="lazy"
            alt=""
            src="/link-13.svg"
          />
        </div>
        <div className={styles.imageItemParent}>
          <div className={styles.imageItem}>
            <img
              className={styles.linkIcon14}
              loading="lazy"
              alt=""
              src="/link-14.svg"
            />
            <img
              className={styles.linkIcon15}
              loading="lazy"
              alt=""
              src="/link-15.svg"
            />
          </div>
          <div className={styles.backgroundParent}>
            <img
              className={styles.backgroundIcon}
              loading="lazy"
              alt=""
              src="/background-1@2x.png"
            />
            <img
              className={styles.linkIcon16}
              loading="lazy"
              alt=""
              src="/link-16.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
