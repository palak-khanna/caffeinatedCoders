import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  bagHref: string;
  bagTarget?: string;

  /** Style props */
  containerAlignSelf?: CSSProperties["alignSelf"];
  containerMarginLeft?: CSSProperties["marginLeft"];
  containerWidth?: CSSProperties["width"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  bagHref,
  bagTarget,
  containerAlignSelf,
  containerMarginLeft,
  containerWidth,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: containerAlignSelf,
      marginLeft: containerMarginLeft,
      width: containerWidth,
    };
  }, [containerAlignSelf, containerMarginLeft, containerWidth]);

  const onLinkImageClick = useCallback(() => {
    window.open("https://www.myntra.com/");
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/wishlist");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.myntra.com/checkout/cart");
  }, []);

  return (
    <header
      className={[styles.header, className].join(" ")}
      style={headerStyle}
    >
      <div className={styles.container}>
        <div className={styles.container1}>
          <img
            className={styles.linkIcon}
            loading="lazy"
            alt=""
            src="/link@2x.png"
            onClick={onLinkImageClick}
          />
        </div>
        <div className={styles.containerParent}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.link}>
                <a className={styles.men}>Men</a>
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <div className={styles.link1}>
                <a className={styles.women}>Women</a>
              </div>
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.container7}>
              <div className={styles.link2}>
                <a className={styles.kids}>Kids</a>
              </div>
            </div>
          </div>
          <div className={styles.container8}>
            <div className={styles.container9}>
              <div className={styles.link3}>
                <a className={styles.homeLiving}>{`Home & Living`}</a>
              </div>
            </div>
          </div>
          <div className={styles.container10}>
            <div className={styles.container11}>
              <div className={styles.link4}>
                <a className={styles.beauty}>Beauty</a>
              </div>
            </div>
          </div>
        </div>
        <a className={styles.studio}>Studio</a>
        <a className={styles.superscriptNew}>new</a>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image1@2x.png"
        />
        <a className={styles.profile}>Profile</a>
        <div className={styles.containerWrapper}>
          <div className={styles.container12}>
            <div className={styles.input}>
              <input
                className={styles.container13}
                placeholder="Search for products, brands and more"
                type="text"
              />
            </div>
            <div className={styles.link5}>
              <img
                className={styles.imageIcon1}
                alt=""
                src="/image-15@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.containerInner}>
          <div className={styles.linkParent}>
            <div className={styles.link6} onClick={onLinkContainerClick}>
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image-21@2x.png"
              />
              <a className={styles.wishlist}>Wishlist</a>
            </div>
            <div className={styles.link7} onClick={onLinkContainerClick1}>
              <img
                className={styles.imageIcon3}
                alt=""
                src="/image-34@2x.png"
              />
              <a className={styles.bag}>Bag</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
