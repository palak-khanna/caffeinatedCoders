import { FunctionComponent } from "react";
import styles from "./VerticalBorder.module.css";

export type VerticalBorderType = {
  className?: string;
};

const VerticalBorder: FunctionComponent<VerticalBorderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.verticalborder, className].join(" ")}>
      <div className={styles.container}>
        <b className={styles.discountRange}>Discount Range</b>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.label}>
            <div className={styles.andAbove}>10% and above</div>
            <div className={styles.container1}>
              <div className={styles.border} />
            </div>
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.label1}>
            <div className={styles.andAbove1}>20% and above</div>
            <div className={styles.container2}>
              <div className={styles.border1} />
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.label2}>
            <div className={styles.andAbove2}>30% and above</div>
            <div className={styles.container3}>
              <div className={styles.border2} />
            </div>
          </div>
        </div>
        <div className={styles.item3}>
          <div className={styles.label3}>
            <div className={styles.andAbove3}>40% and above</div>
            <div className={styles.container4}>
              <div className={styles.border3} />
            </div>
          </div>
        </div>
        <div className={styles.item4}>
          <div className={styles.label4}>
            <div className={styles.andAbove4}>50% and above</div>
            <div className={styles.container5}>
              <div className={styles.border4} />
            </div>
          </div>
        </div>
        <div className={styles.item5}>
          <div className={styles.label5}>
            <div className={styles.andAbove5}>60% and above</div>
            <div className={styles.container6}>
              <div className={styles.border5} />
            </div>
          </div>
        </div>
        <div className={styles.item6}>
          <div className={styles.label6}>
            <div className={styles.andAbove6}>70% and above</div>
            <div className={styles.container7}>
              <div className={styles.border6} />
            </div>
          </div>
        </div>
        <div className={styles.item7}>
          <div className={styles.label7}>
            <div className={styles.andAbove7}>80% and above</div>
            <div className={styles.container8}>
              <div className={styles.border7} />
            </div>
          </div>
        </div>
        <div className={styles.item8}>
          <div className={styles.label8}>
            <div className={styles.andAbove8}>90% and above</div>
            <div className={styles.container9}>
              <div className={styles.border8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBorder;
