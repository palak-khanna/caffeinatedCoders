import { FunctionComponent, useCallback } from "react";
import styles from "./Container4.module.css";

export type Container4Type = {
  className?: string;
};

const Container4: FunctionComponent<Container4Type> = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/bag");
  }, []);

  const onLinkIconClick = useCallback(() => {
    window.open("https://www.myntra.com/trolley-bags");
  }, []);

  const onLinkIconClick1 = useCallback(() => {
    window.open("https://www.myntra.com/flipflops");
  }, []);

  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container1}>
        <div className={styles.wrapperPicture}>
          <img className={styles.pictureIcon} alt="" src="/picture-6@2x.png" />
        </div>
        <div className={styles.link} onClick={onLinkContainerClick}>
          <div className={styles.wrapperPicture1}>
            <img
              className={styles.pictureIcon1}
              alt=""
              src="/picture-7@2x.png"
            />
          </div>
        </div>
        <img className={styles.linkIcon} onClick={onLinkIconClick} />
        <img className={styles.linkIcon1} onClick={onLinkIconClick1} />
        <img className={styles.pictureIcon2} alt="" src="/picture-10@2x.png" />
      </div>
    </div>
  );
};

export default Container4;
