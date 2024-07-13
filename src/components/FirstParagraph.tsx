import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import styles from "./FirstParagraph.module.css";

export type FirstParagraphType = {
  className?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FirstParagraph: FunctionComponent<FirstParagraphType> = ({
  className = "",
  propMinWidth,
}) => {
  const firstParagraphStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18240292600256764/");
  }, []);

  return (
    <div
      className={[styles.firstParagraph, className].join(" ")}
      style={firstParagraphStyle}
    >
      <div className={styles.secondParagraph}>
        <div className={styles.heading3}>
          <div className={styles.container}>
            <div className={styles.container1}>
              <div className={styles.link}>
                <a
                  className={styles.juliachangcoaching}
                  href="https://www.instagram.com/juliachangcoaching/"
                  target="_blank"
                >
                  juliachangcoaching
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className={styles.ericahjohnston}
          href="https://www.instagram.com/ericahjohnston/"
          target="_blank"
        >
          @ericahjohnston
        </a>
        <a
          className={styles.staceynixonfit}
          href="https://www.instagram.com/staceynixonfit/"
          target="_blank"
        >
          @staceynixonfit
        </a>
        <div className={styles.looks}> looks</div>
        <div className={styles.thirdParagraph}>
          <div className={styles.likeINeedContainer}>
            <span className={styles.likeINeedContainer1}>
              <p className={styles.likeINeed}>
                like I need to add a Canadian prom dress to my closet, so my
              </p>
              <p
                className={styles.canadianSuitDoesnt}
              >{`Canadian suit doesn’t get lonely lol! `}</p>
            </span>
          </div>
          <a
            className={styles.ilovedenim}
            href="https://www.instagram.com/explore/tags/ilovedenim/"
            target="_blank"
          >
            #ilovedenim
          </a>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.link1} onClick={onLinkContainerClick}>
          <a
            className={styles.time16h}
            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18240292600256764/"
            target="_blank"
          >
            16h
          </a>
        </div>
        <div className={styles.button2}>2 likes</div>
        <div className={styles.buttonReply}>Reply</div>
      </div>
    </div>
  );
};

export default FirstParagraph;
