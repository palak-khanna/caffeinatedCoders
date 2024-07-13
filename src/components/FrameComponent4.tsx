import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
  f6db5397005475dA5d5Bf4354?: string;
  prop?: string;
  image?: string;
  k?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  f6db5397005475dA5d5Bf4354,
  prop,
  image,
  k,
}) => {
  return (
    <div className={[styles.containerParent, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.picture}>
            <img
              className={styles.f6db5397005475dA5d5Bf43541Icon}
              alt=""
              src={f6db5397005475dA5d5Bf4354}
            />
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.container1}>
          <b className={styles.b}>{prop}</b>
        </div>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.container2}>
          <div className={styles.margin}>
            <div className={styles.container3}>
              <b className={styles.b1}>|</b>
            </div>
          </div>
          <b className={styles.k}>{k}</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
