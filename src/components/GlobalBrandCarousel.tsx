import { FunctionComponent, useCallback } from "react";
import styles from "./GlobalBrandCarousel.module.css";

export type GlobalBrandCarouselType = {
  className?: string;
};

const GlobalBrandCarousel: FunctionComponent<GlobalBrandCarouselType> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/women-footwear");
  }, []);

  const onLinkIconClick = useCallback(() => {
    window.open("https://www.myntra.com/men-footwear");
  }, []);

  const onLinkIconClick1 = useCallback(() => {
    window.open("https://www.myntra.com/calvin-klein");
  }, []);

  const onLinkIconClick2 = useCallback(() => {
    window.open("https://www.myntra.com/apparel");
  }, []);

  return (
    <section className={[styles.globalBrandCarousel, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <div className={styles.wrapperPicture}>
              <img
                className={styles.pictureIcon}
                alt=""
                src="/picture-18@2x.png"
              />
            </div>
          </div>
          <img className={styles.linkIcon} onClick={onLinkContainerClick} />
          <img className={styles.linkIcon1} onClick={onLinkIconClick} />
          <img className={styles.linkIcon2} onClick={onLinkIconClick1} />
          <img className={styles.linkIcon3} onClick={onLinkIconClick2} />
          <img className={styles.linkIcon4} onClick={onLinkIconClick2} />
        </div>
      </div>
      <div className={styles.globalBrandPagination}>
        <div className={styles.globalPaginationDots}>
          <div className={styles.container2}>
            <div className={styles.div}>•</div>
          </div>
          <div className={styles.container3}>
            <div className={styles.div1}>•</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBrandCarousel;
