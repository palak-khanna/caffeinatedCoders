import { FunctionComponent, useCallback } from "react";
import styles from "./BrandCarousel.module.css";

export type BrandCarouselType = {
  className?: string;
};

const BrandCarousel: FunctionComponent<BrandCarouselType> = ({
  className = "",
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/personal-care");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.myntra.com/apparel");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.myntra.com/melange-lifestyle");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.myntra.com/saree");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.myntra.com/fusion-wear");
  }, []);

  return (
    <section className={[styles.brandCarousel, className].join(" ")}>
      <div className={styles.brandCarouselContainer}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.link} onClick={onLinkContainerClick}>
              <div className={styles.wrapperPicture}>
                <img
                  className={styles.pictureIcon}
                  alt=""
                  src="/picture-12@2x.png"
                />
              </div>
            </div>
            <div className={styles.link1} onClick={onLinkContainerClick1}>
              <div className={styles.wrapperPicture1}>
                <img
                  className={styles.pictureIcon1}
                  alt=""
                  src="/picture-13@2x.png"
                />
              </div>
            </div>
            <div className={styles.link2} onClick={onLinkContainerClick2}>
              <div className={styles.wrapperPicture2}>
                <img
                  className={styles.pictureIcon2}
                  alt=""
                  src="/picture-14@2x.png"
                />
              </div>
            </div>
            <div className={styles.link3} onClick={onLinkContainerClick3}>
              <div className={styles.wrapperPicture3}>
                <img
                  className={styles.pictureIcon3}
                  alt=""
                  src="/picture-15@2x.png"
                />
              </div>
            </div>
            <div className={styles.link4} onClick={onLinkContainerClick3}>
              <div className={styles.wrapperPicture4}>
                <img
                  className={styles.pictureIcon4}
                  alt=""
                  src="/picture-16@2x.png"
                />
              </div>
            </div>
            <div className={styles.link5} onClick={onLinkContainerClick4}>
              <div className={styles.wrapperPicture5}>
                <img
                  className={styles.pictureIcon5}
                  alt=""
                  src="/picture-17@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.brandPagination}>
          <div className={styles.paginationDots}>
            <div className={styles.container2}>
              <div className={styles.div}>•</div>
            </div>
            <div className={styles.container3}>
              <div className={styles.div1}>•</div>
            </div>
            <div className={styles.container4}>
              <div className={styles.div2}>•</div>
            </div>
            <div className={styles.container5}>
              <div className={styles.div3}>•</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.container7}>
          <div className={styles.heading4}>
            <b className={styles.grandGlobalBrands}>Grand Global Brands</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
