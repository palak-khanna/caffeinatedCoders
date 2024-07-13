import { FunctionComponent, useCallback } from "react";
import BackgroundShadow from "../components/BackgroundShadow";
import Container3 from "../components/Container3";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./YourPostHOMEPAGEEDIT.module.css";

const YourPostHOMEPAGEEDIT: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/womens-wear-dress");
  }, [navigate]);

  const onImageClick1 = useCallback(() => {
    navigate("/womens-wear-tops");
  }, [navigate]);

  const onImageClick2 = useCallback(() => {
    navigate("/mens-suit-wear");
  }, [navigate]);

  return (
    <div className={styles.yourPostHomePageEdit}>
      <BackgroundShadow />
      <main className={styles.gradient}>
        <Container3 containerMarginTop="unset" />
        <section className={styles.section}>
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.background}>
                <div className={styles.storyContainerWrapper}>
                  <div className={styles.storyContainer}>
                    <div className={styles.itemMenuitemStoryByDia}>
                      <div className={styles.buttonmargin}>
                        <div className={styles.button}>
                          <img
                            className={styles.imageIcon}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link}>
                            <img
                              className={styles.njpgIcon}
                              loading="lazy"
                              alt=""
                              src="/445123752-344574384967567-5232937332998865422-njpg@2x.png"
                            />
                            <div className={styles.border} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container1}>
                        <div className={styles.container2}>
                          <div className={styles.diaryofanin}>diaryofanin…</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemMenuitemStoryByThv}>
                      <div className={styles.buttonmargin1}>
                        <div className={styles.button1}>
                          <img
                            className={styles.imageIcon1}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link1}>
                            <img
                              className={styles.njpgIcon1}
                              loading="lazy"
                              alt=""
                              src="/434073400-940034114020065-5492374394550363088-njpg@2x.png"
                            />
                            <div className={styles.border1} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container3}>
                        <div className={styles.container4}>
                          <div className={styles.thv}>thv</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemMenuitemStoryByJai}>
                      <div className={styles.buttonmargin2}>
                        <div className={styles.button2}>
                          <img
                            className={styles.imageIcon2}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link2}>
                            <img
                              className={styles.njpgIcon2}
                              loading="lazy"
                              alt=""
                              src="/446350377-434175255910470-457125339959518894-njpg@2x.png"
                            />
                            <div className={styles.border2} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container5}>
                        <div className={styles.container6}>
                          <div className={styles.jaina656}>jaina_656</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemMenuitemStoryBySim}>
                      <div className={styles.buttonmargin3}>
                        <div className={styles.button3}>
                          <img
                            className={styles.imageIcon3}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link3}>
                            <img
                              className={styles.njpgIcon3}
                              loading="lazy"
                              alt=""
                              src="/432839421-618751633762783-5925266645009694849-njpg@2x.png"
                            />
                            <div className={styles.border3} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container7}>
                        <div className={styles.container8}>
                          <a className={styles.simpforma}>simpforma…</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemMenuitemStoryByAga}>
                      <div className={styles.buttonmargin4}>
                        <div className={styles.button4}>
                          <img
                            className={styles.imageIcon4}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link4}>
                            <img
                              className={styles.njpgIcon4}
                              loading="lazy"
                              alt=""
                              src="/440978870-459632883109585-298141634305880024-njpg@2x.png"
                            />
                            <div className={styles.border4} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container9}>
                        <div className={styles.container10}>
                          <div className={styles.agarwaljyati}>
                            agarwal.jyati
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemMenuitemStoryByMts}>
                      <div className={styles.buttonmargin5}>
                        <div className={styles.button5}>
                          <img
                            className={styles.imageIcon5}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link5}>
                            <img
                              className={styles.njpgIcon5}
                              loading="lazy"
                              alt=""
                              src="/44884218-345707102882519-2446069589734326272-njpg@2x.png"
                            />
                            <div className={styles.border5} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container11}>
                        <div className={styles.container12}>
                          <div className={styles.mtskull01}>mtskull_01</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemMenuitemStoryByHaz}>
                      <div className={styles.buttonmargin6}>
                        <div className={styles.button6}>
                          <img
                            className={styles.imageIcon6}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link6}>
                            <img
                              className={styles.njpgIcon6}
                              loading="lazy"
                              alt=""
                              src="/436627626-970613997283941-1380121645053437497-njpg@2x.png"
                            />
                            <div className={styles.border6} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container13}>
                        <div className={styles.container14}>
                          <div className={styles.hazirjawabi}>hazirjawabi</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemMenuitemStoryByShw}>
                      <div className={styles.buttonmargin7}>
                        <div className={styles.button7}>
                          <img
                            className={styles.imageIcon7}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.link7}>
                            <img
                              className={styles.njpgIcon7}
                              alt=""
                              src="/441189441-355070234229528-7205407431646537397-njpg@2x.png"
                            />
                            <div className={styles.border7} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container15}>
                        <div className={styles.container16}>
                          <div className={styles.shwetasing}>shwetasing…</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.imageCaption}>
                  <img
                    className={styles.image31Icon}
                    loading="lazy"
                    alt=""
                    src="/image-31@2x.png"
                  />
                  <h1 className={styles.jissooInSingapore}>
                    Jissoo in Singapore 🍁❤️
                  </h1>
                  <img
                    className={styles.image32Icon}
                    loading="lazy"
                    alt=""
                    src="/image-32@2x.png"
                    onClick={onImageClick}
                  />
                </div>
              </div>
              <img
                className={styles.image8Icon}
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
              <img
                className={styles.image10Icon}
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
                onClick={onImageClick1}
              />
              <img
                className={styles.image11Icon}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
                onClick={onImageClick2}
              />
              <img
                className={styles.image13Icon}
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
              <img
                className={styles.image14Icon}
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
                onClick={onImageClick2}
              />
            </div>
          </div>
          <Footer />
        </section>
        <div className={styles.image26} />
      </main>
    </div>
  );
};

export default YourPostHOMEPAGEEDIT;
