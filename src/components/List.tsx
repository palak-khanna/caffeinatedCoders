import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./List.module.css";

export type ListType = {
  className?: string;
  page1Of8607?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propHeight?: CSSProperties["height"];
  propOverflowX?: CSSProperties["overflowX"];
};

const List: FunctionComponent<ListType> = ({
  className = "",
  page1Of8607,
  propMinHeight,
  propHeight,
  propOverflowX,
}) => {
  const listStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
      height: propHeight,
      overflowX: propOverflowX,
    };
  }, [propMinHeight, propHeight, propOverflowX]);

  return (
    <footer className={[styles.list, className].join(" ")} style={listStyle}>
      <div className={styles.pagination}>
        <div className={styles.pageItem}>
          <div className={styles.item}>
            <div className={styles.pageItemContainer}>
              <div className={styles.doubleBorderContainer}>
                <div className={styles.border} />
                <div className={styles.border1} />
              </div>
            </div>
            <b className={styles.page1}>Page 1</b>
          </div>
        </div>
        <button className={styles.item1}>
          <div className={styles.previousPageContainer}>
            <div className={styles.border2} />
          </div>
          <b className={styles.previous}>Previous</b>
        </button>
      </div>
      <div className={styles.currentPageItem}>
        <div className={styles.item2}>
          <div className={styles.page1Of}>{page1Of8607}</div>
        </div>
      </div>
      <button className={styles.item3}>
        <b className={styles.next}>Next</b>
        <div className={styles.nextPageContainer}>
          <div className={styles.border3} />
        </div>
      </button>
    </footer>
  );
};

export default List;
