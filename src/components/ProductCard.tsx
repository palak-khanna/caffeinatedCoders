import { FunctionComponent, useCallback } from "react";
import styles from "./ProductCard.module.css";

export type ProductCardType = {
  className?: string;
  d97d96df4ed586d5B10baa05f?: string;
  emptyPlaceholder?: string;
  image?: string;
  emptyIconMargin?: string;
  blackberrysHref: string;
  pieceSingleBreastedSuits?: string;
  pieceSingleBreasteHref: string;
  rs8995?: string;
  rs8995Href: string;
};

const ProductCard: FunctionComponent<ProductCardType> = ({
  className = "",
  d97d96df4ed586d5B10baa05f,
  emptyPlaceholder,
  image,
  emptyIconMargin,
  blackberrysHref,
  pieceSingleBreastedSuits,
  pieceSingleBreasteHref,
  rs8995,
  rs8995Href,
}) => {
  const onLinkContainerClick = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-blue-solid-2-piece-single-breasted-suits/20751888/buy"
    );
  }, []);

  return (
    <div className={[styles.productCard, className].join(" ")}>
      <div className={styles.link} onClick={onLinkContainerClick}>
        <div className={styles.container}>
          <div className={styles.background}>
            <div className={styles.picture}>
              <img
                className={styles.d97d96df4ed586d5B10baa05faIcon}
                alt=""
                src={d97d96df4ed586d5B10baa05f}
              />
            </div>
          </div>
        </div>
        <div className={styles.background1}>
          <div className={styles.ad}>AD</div>
        </div>
        <div className={styles.productImageParent}>
          <div className={styles.productImage}>
            <div className={styles.overlay}>
              <div className={styles.container1}>
                <b className={styles.emptyPlaceholder}>{emptyPlaceholder}</b>
              </div>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src={image}
              />
              <div className={styles.container2}>
                <div className={styles.margin}>
                  <div className={styles.container3}>
                    <b className={styles.emptyIconPadding}>|</b>
                  </div>
                </div>
                <b className={styles.emptyIconMargin}>{emptyIconMargin}</b>
              </div>
            </div>
          </div>
          <div className={styles.productTitle}>
            <a
              className={styles.blackberrys}
              href={blackberrysHref}
              target="_blank"
            >
              Blackberrys
            </a>
            <a
              className={styles.pieceSingleBreastedSuits}
              href={pieceSingleBreasteHref}
              target="_blank"
            >
              {pieceSingleBreastedSuits}
            </a>
          </div>
          <a className={styles.rs8995} href={rs8995Href} target="_blank">
            {rs8995}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
