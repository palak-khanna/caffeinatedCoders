import { FunctionComponent } from "react";
import styles from "./Border.module.css";

export type BorderType = {
  className?: string;
  image?: string;
  green?: string;
  prop?: string;
  pink?: string;
  prop1?: string;
  blue?: string;
  prop2?: string;
  black?: string;
  prop3?: string;
  red?: string;
  prop4?: string;
  yellow?: string;
  prop5?: string;
  prop6?: string;
  more?: string;
};

const Border: FunctionComponent<BorderType> = ({
  className = "",
  image,
  green,
  prop,
  pink,
  prop1,
  blue,
  prop2,
  black,
  prop3,
  red,
  prop4,
  yellow,
  prop5,
  prop6,
  more,
}) => {
  return (
    <div className={[styles.border, className].join(" ")}>
      <div className={styles.colorContainer}>
        <div className={styles.colorHeading}>
          <b className={styles.color}>Color</b>
        </div>
        <div className={styles.background}>
          <img className={styles.imageIcon} alt="" src={image} />
        </div>
      </div>
      <div className={styles.colorOptions}>
        <div className={styles.colorOption}>
          <div className={styles.colorOptionElement}>
            <input className={styles.backgroundborder} type="checkbox" />
          </div>
          <div className={styles.colorOptionBackground}>
            <div className={styles.background1} />
          </div>
          <div className={styles.green}>{green}</div>
          <div className={styles.emptyColorNameWrapper}>
            <div className={styles.emptyColorName}>{prop}</div>
          </div>
        </div>
        <div className={styles.colorOption1}>
          <div className={styles.backgroundborderWrapper}>
            <input className={styles.backgroundborder1} type="checkbox" />
          </div>
          <div className={styles.backgroundWrapper}>
            <div className={styles.background2} />
          </div>
          <div className={styles.pink}>{pink}</div>
          <div className={styles.wrapper}>
            <div className={styles.div}>{prop1}</div>
          </div>
        </div>
        <div className={styles.colorOption2}>
          <div className={styles.backgroundborderContainer}>
            <input className={styles.backgroundborder2} type="checkbox" />
          </div>
          <div className={styles.backgroundContainer}>
            <div className={styles.background3} />
          </div>
          <div className={styles.blue}>{blue}</div>
          <div className={styles.container}>
            <div className={styles.div1}>{prop2}</div>
          </div>
        </div>
        <div className={styles.colorOption3}>
          <div className={styles.backgroundborderFrame}>
            <input className={styles.backgroundborder3} type="checkbox" />
          </div>
          <div className={styles.backgroundFrame}>
            <div className={styles.background4} />
          </div>
          <a className={styles.black}>{black}</a>
          <div className={styles.frame}>
            <div className={styles.div2}>{prop3}</div>
          </div>
        </div>
        <div className={styles.colorOption4}>
          <div className={styles.frameDiv}>
            <input className={styles.backgroundborder4} type="checkbox" />
          </div>
          <div className={styles.backgroundWrapper1}>
            <div className={styles.background5} />
          </div>
          <div className={styles.red}>{red}</div>
          <div className={styles.wrapper1}>
            <div className={styles.div3}>{prop4}</div>
          </div>
        </div>
        <div className={styles.colorOption5}>
          <div className={styles.backgroundborderWrapper1}>
            <input className={styles.backgroundborder5} type="checkbox" />
          </div>
          <div className={styles.backgroundWrapper2}>
            <div className={styles.background6} />
          </div>
          <div className={styles.yellow}>{yellow}</div>
          <div className={styles.wrapper2}>
            <div className={styles.div4}>{prop5}</div>
          </div>
        </div>
        <div className={styles.colorOption6}>
          <div className={styles.backgroundborderWrapper2}>
            <input className={styles.backgroundborder6} type="checkbox" />
          </div>
          <div className={styles.backgroundWrapper3}>
            <div className={styles.background7} />
          </div>
          <div className={styles.navyBlue}>{`Navy Blue `}</div>
          <div className={styles.wrapper3}>
            <div className={styles.div5}>{prop6}</div>
          </div>
        </div>
      </div>
      <div className={styles.moreColors}>
        <div className={styles.more}>{more}</div>
      </div>
    </div>
  );
};

export default Border;
