import { FunctionComponent } from "react";
import styles from "./ProductInfoContainer.module.css";

export type ProductInfoContainerType = {
  className?: string;
  fd0176406fe44c4e851c9ba83?: string;
  firstBrandInfo?: string;
  image?: string;
  secondEmptyOverlayContain?: string;
};

const ProductInfoContainer: FunctionComponent<ProductInfoContainerType> = ({
  className = "",
  fd0176406fe44c4e851c9ba83,
  firstBrandInfo,
  image,
  secondEmptyOverlayContain,
}) => {
  return (
    <div className={[styles.productInfoContainer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.container1}>
            <div className={styles.picture}>
              <img
                className={styles.fd0176406fe44c4e851c9ba83aIcon}
                alt=""
                src={fd0176406fe44c4e851c9ba83}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.container2}>
          <b className={styles.firstBrandInfo}>{firstBrandInfo}</b>
        </div>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.container3}>
          <div className={styles.margin}>
            <div className={styles.container4}>
              <b className={styles.emptyContainer}>|</b>
            </div>
          </div>
          <b className={styles.secondEmptyOverlay}>
            {secondEmptyOverlayContain}
          </b>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoContainer;
