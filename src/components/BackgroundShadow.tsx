import { FunctionComponent, useCallback } from "react";
import styles from "./BackgroundShadow.module.css";

export type BackgroundShadowType = {
  className?: string;
};

const BackgroundShadow: FunctionComponent<BackgroundShadowType> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/wishlist");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.myntra.com/checkout/cart");
  }, []);

  return (
    <header className={[styles.backgroundshadow, className].join(" ")}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      <nav className={styles.menu}>
        <a className={styles.men}>MEN</a>
        <a className={styles.women}>WOMEN</a>
        <a className={styles.kids}>KIDS</a>
        <a className={styles.homeLiving}>HOME LIVING</a>
        <a className={styles.studio}>STUDIO</a>
      </nav>
      <div className={styles.search}>
        <div className={styles.container1}>
          <div className={styles.input}>
            <input
              className={styles.container2}
              placeholder="Search for products, brands and more"
              type="text"
            />
          </div>
          <div className={styles.backgroundborder}>
            <img className={styles.imageIcon1} alt="" src="/image-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.linkWrapper}>
        <div className={styles.link} onClick={onLinkContainerClick}>
          <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
          <a className={styles.wishlist}>Wishlist</a>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.link1} onClick={onLinkContainerClick1}>
          <img className={styles.imageIcon3} alt="" src="/image-3@2x.png" />
          <a className={styles.bag}>Bag</a>
        </div>
      </div>
    </header>
  );
};

export default BackgroundShadow;
