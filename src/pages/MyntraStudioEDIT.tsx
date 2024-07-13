import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Container3 from "../components/Container3";
import Footer from "../components/Footer";
import styles from "./MyntraStudioEDIT.module.css";

const MyntraStudioEDIT: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/posting-page");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/womens-wear-tops");
  }, [navigate]);

  const onImageClick1 = useCallback(() => {
    navigate("/mens-suit-wear");
  }, [navigate]);

  return (
    <div className={styles.myntraStudioEdit}>
      <Header
        containerAlignSelf="unset"
        containerMarginLeft="-5px"
        containerWidth="1263.3px"
      />
      <main className={styles.gradient}>
        <Container3 __PH1__={onContainerClick} />
        <section className={styles.section}>
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.background}>
                <img
                  className={styles.image34Icon}
                  loading="lazy"
                  alt=""
                  src="/image-342@2x.png"
                />
              </div>
              <img
                className={styles.image8Icon}
                loading="lazy"
                alt=""
                src="/image-82@2x.png"
              />
              <img
                className={styles.image10Icon}
                loading="lazy"
                alt=""
                src="/image-103@2x.png"
                onClick={onImageClick}
              />
              <div className={styles.container1}>
                <img
                  className={styles.image9Icon}
                  alt=""
                  src="/image-91@2x.png"
                />
                <div className={styles.image3} />
                <div className={styles.image4} />
              </div>
              <img
                className={styles.image7Icon}
                loading="lazy"
                alt=""
                src="/image-72@2x.png"
                onClick={onImageClick}
              />
              <img
                className={styles.image11Icon}
                loading="lazy"
                alt=""
                src="/image-113@2x.png"
              />
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-123@2x.png"
                onClick={onImageClick1}
              />
              <img
                className={styles.image13Icon}
                loading="lazy"
                alt=""
                src="/image-132@2x.png"
              />
              <img
                className={styles.image14Icon}
                loading="lazy"
                alt=""
                src="/image-142@2x.png"
                onClick={onImageClick1}
              />
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default MyntraStudioEDIT;
