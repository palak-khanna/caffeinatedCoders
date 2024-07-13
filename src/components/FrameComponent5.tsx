import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/accessories");
  }, []);

  const onContainerClick = useCallback(() => {
    navigate("/myntra-studio-edit");
  }, [navigate]);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.myntra.com/wishlist");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.myntra.com/checkout/cart");
  }, []);

  return (
    <section className={[styles.containerParent, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.link} onClick={onLinkContainerClick}>
          <div className={styles.wrapperPicture}>
            <img
              className={styles.pictureIcon}
              alt=""
              src="/picture-11@2x.png"
            />
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <img
              className={styles.linkIcon}
              loading="lazy"
              alt=""
              src="/link1@2x.png"
            />
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image2@2x.png"
          />
          <a className={styles.profile}>Profile</a>
          <div className={styles.navigationMenu}>
            <div className={styles.menuCategories}>
              <div className={styles.container3}>
                <div className={styles.container4}>
                  <div className={styles.link1}>
                    <a className={styles.men}>Men</a>
                  </div>
                </div>
              </div>
              <div className={styles.container5}>
                <div className={styles.container6}>
                  <div className={styles.link2}>
                    <a className={styles.women}>Women</a>
                  </div>
                </div>
              </div>
              <div className={styles.container7}>
                <div className={styles.container8}>
                  <div className={styles.link3}>
                    <a className={styles.kids}>Kids</a>
                  </div>
                </div>
              </div>
              <div className={styles.containerGroup}>
                <div className={styles.container9}>
                  <div className={styles.container10}>
                    <div className={styles.link4}>
                      <a className={styles.homeLiving}>{`Home & Living`}</a>
                    </div>
                  </div>
                </div>
                <div className={styles.container11}>
                  <div className={styles.container12}>
                    <div className={styles.link5}>
                      <a className={styles.beauty}>Beauty</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container13} onClick={onContainerClick}>
                <a className={styles.studio}>Studio</a>
                <div className={styles.newBadge}>
                  <a className={styles.superscriptNew}>new</a>
                </div>
              </div>
            </div>
            <div className={styles.searchBar}>
              <div className={styles.container14}>
                <div className={styles.input}>
                  <div className={styles.container15}>
                    <div className={styles.searchForProducts}>
                      Search for products, brands and more
                    </div>
                  </div>
                </div>
                <div className={styles.link6}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-110@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.headerLinks}>
            <div className={styles.link7} onClick={onLinkContainerClick1}>
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image-21@2x.png"
              />
              <a className={styles.wishlist}>Wishlist</a>
            </div>
          </div>
          <div className={styles.headerLinks1}>
            <div className={styles.link8} onClick={onLinkContainerClick2}>
              <img
                className={styles.imageIcon3}
                alt=""
                src="/image-310@2x.png"
              />
              <a
                className={styles.bag}
                href="https://www.myntra.com/checkout/cart"
                target="_blank"
              >
                Bag
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
