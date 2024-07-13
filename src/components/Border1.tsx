import { FunctionComponent } from "react";
import styles from "./Border1.module.css";

export type Border1Type = {
  className?: string;
  rs199ToRs73899?: string;
  prop?: string;
  rs73899ToRs147599?: string;
  prop1?: string;
  rs147599ToRs221299?: string;
  prop2?: string;
  rs221299ToRs294999?: string;
  prop3?: string;
};

const Border1: FunctionComponent<Border1Type> = ({
  className = "",
  rs199ToRs73899,
  prop,
  rs73899ToRs147599,
  prop1,
  rs147599ToRs221299,
  prop2,
  rs221299ToRs294999,
  prop3,
}) => {
  return (
    <div className={[styles.border, className].join(" ")}>
      <b className={styles.price}>Price</b>
      <div className={styles.priceRange}>
        <div className={styles.label}>
          <input className={styles.backgroundborder} type="checkbox" />
          <div className={styles.priceValue}>
            <div className={styles.rs199To}>{rs199ToRs73899}</div>
            <div className={styles.emptyPriceRange}>{prop}</div>
          </div>
        </div>
        <div className={styles.label1}>
          <input className={styles.backgroundborder1} type="checkbox" />
          <div className={styles.rs73899ToRs147599Parent}>
            <div className={styles.rs73899To}>{rs73899ToRs147599}</div>
            <div className={styles.emptyPriceValueWrapper}>
              <div className={styles.emptyPriceValue}>{prop1}</div>
            </div>
          </div>
        </div>
        <div className={styles.label2}>
          <input className={styles.backgroundborder2} type="checkbox" />
          <div className={styles.rs147599ToRs221299Parent}>
            <div className={styles.rs147599To}>{rs147599ToRs221299}</div>
            <div className={styles.div}>{prop2}</div>
          </div>
        </div>
        <div className={styles.label3}>
          <input className={styles.backgroundborder3} type="checkbox" />
          <div className={styles.rs221299ToRs294999Parent}>
            <div className={styles.rs221299To}>{rs221299ToRs294999}</div>
            <div className={styles.wrapper}>
              <div className={styles.div1}>{prop3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Border1;
