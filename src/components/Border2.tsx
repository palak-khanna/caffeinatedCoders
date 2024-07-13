import { FunctionComponent } from "react";
import styles from "./Border2.module.css";

export type Border2Type = {
  className?: string;
};

const Border2: FunctionComponent<Border2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.border, className].join(" ")}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.label}>
            <b className={styles.men}>Men</b>
            <div className={styles.container}>
              <div className={styles.border1} />
            </div>
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.label1}>
            <a className={styles.women}>Women</a>
            <div className={styles.container1}>
              <div className={styles.backgroundbordershadow} />
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.label2}>
            <b className={styles.boys}>Boys</b>
            <div className={styles.container2}>
              <div className={styles.border2} />
            </div>
          </div>
        </div>
        <div className={styles.item3}>
          <div className={styles.label3}>
            <b className={styles.girls}>Girls</b>
            <div className={styles.container3}>
              <div className={styles.border3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Border2;
