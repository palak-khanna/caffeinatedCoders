import { FunctionComponent, useCallback } from "react";
import BackgroundShadow from "../components/BackgroundShadow";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigate } from "react-router-dom";
import styles from "./Profile1.module.css";

const Profile1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainerClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onContainerClick1 = useCallback(() => {
    navigate("/posting-page");
  }, [navigate]);

  const onLinkDirectMessaging4NeClick = useCallback(() => {
    window.open("https://www.instagram.com/direct/inbox/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.instagram.com/pkhanna17/");
  }, []);

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/myntra-studio-edit");
  }, [navigate]);

  return (
    <div className={styles.profile}>
      <BackgroundShadow />
      <main className={styles.main}>
        <section className={styles.mainInner}>
          <div className={styles.frameParent}>
            <div className={styles.sectionButtonWrapper}>
              <div className={styles.sectionButton}>
                <div className={styles.link}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image-45@2x.png"
                  />
                  <img
                    className={styles.njpgIcon}
                    loading="lazy"
                    alt=""
                    src="/31494727-2251836558376575-3631982868445528064-njpg2@2x.png"
                  />
                  <div className={styles.border} />
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.heading2Wrapper}>
                  <div className={styles.heading2}>
                    <div className={styles.blakelively}>blakelively</div>
                  </div>
                </div>
                <div className={styles.imgVerifiedWrapper}>
                  <img
                    className={styles.imgVerified}
                    alt=""
                    src="/img--verified1.svg"
                  />
                </div>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button}>
                    <a className={styles.following}>Following</a>
                    <div className={styles.imgDownChevronIconWrapper}>
                      <img
                        className={styles.imgDownChevronIcon}
                        alt=""
                        src="/img--down-chevron-icon1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.containerWrapper}>
                  <div className={styles.container}>
                    <div className={styles.button1}>
                      <a className={styles.message}>Message</a>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <img
                    className={styles.buttonIcon}
                    loading="lazy"
                    alt=""
                    src="/button.svg"
                  />
                </div>
                <img
                  className={styles.buttonImgOptions}
                  alt=""
                  src="/button--img--options.svg"
                />
              </div>
              <div className={styles.postsParent}>
                <div className={styles.posts}>
                  <span className={styles.span}>170</span>
                  <span> posts</span>
                </div>
                <div className={styles.mFollowers}>
                  <span className={styles.m}>44.7M</span>
                  <span> followers</span>
                </div>
                <div className={styles.following1}>
                  <span className={styles.span1}>503</span>
                  <span> following</span>
                </div>
              </div>
              <div className={styles.sectionParent}>
                <div className={styles.section}>
                  <div className={styles.frameDiv}>
                    <div className={styles.blakeLivelyParent}>
                      <div className={styles.blakeLively}>Blake Lively</div>
                      <div className={styles.link1}>
                        <img
                          className={styles.imgThreads}
                          alt=""
                          src="/img--threads.svg"
                        />
                        <div className={styles.container1}>
                          <div className={styles.blakelively1}>blakelively</div>
                        </div>
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.frameParent2}>
                          <div className={styles.founderOfParent}>
                            <div
                              className={styles.founderOf}
                            >{`Founder of `}</div>
                            <div className={styles.bettybuzzWrapper}>
                              <div className={styles.bettybuzz}>@bettybuzz</div>
                            </div>
                          </div>
                          <div className={styles.bettybooze}>
                            @bettybooze 🍸
                          </div>
                        </div>
                        <div className={styles.div}>{` 👼🏼 &`}</div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.imgLinkIconWrapper}>
                        <img
                          className={styles.imgLinkIcon}
                          alt=""
                          src="/img--link-icon.svg"
                        />
                      </div>
                      <div className={styles.container2}>
                        <div className={styles.bettybuzzamazonbettybuzzcom}>
                          bettybuzz.amazon.bettybuzz.com/amazon/BrandStore + 2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.followedByWrapper}>
                      <div className={styles.followedBy}>{`Followed by `}</div>
                    </div>
                    <div className={styles.simpformanyaWrapper}>
                      <div className={styles.simpformanya}>simpformanya</div>
                    </div>
                    <div className={styles.andWrapper}>
                      <div className={styles.and}>{` and `}</div>
                    </div>
                    <div className={styles.nitikhanna5Wrapper}>
                      <div className={styles.nitikhanna5}>niti.khanna.5</div>
                    </div>
                  </div>
                  <div className={styles.sectionChild} />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.businessAccountParent}>
                    <div className={styles.businessAccountContainer}>
                      <p
                        className={styles.businessAccount}
                      >{`Business account `}</p>
                      <p className={styles.p}>{` `}</p>
                    </div>
                    <div className={styles.aboutUs1Wrapper}>
                      <img
                        className={styles.aboutUs1Icon}
                        alt=""
                        src="/aboutus-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainChild}>
          <div className={styles.buttonParent}>
            <div className={styles.button2}>
              <div className={styles.imageParent}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image-52@2x.png"
                />
                <img
                  className={styles.backgroundIcon}
                  loading="lazy"
                  alt=""
                  src="/background@2x.png"
                />
              </div>
            </div>
            <div className={styles.highlight}>
              <div className={styles.bettyBuzz}>Betty Buzz</div>
            </div>
          </div>
        </section>
        <FrameComponent6 />
        <section className={styles.frameSection}>
          <div className={styles.frameParent5}>
            <div className={styles.linkParent}>
              <img
                className={styles.linkIcon}
                loading="lazy"
                alt=""
                src="/link-17.svg"
              />
              <img
                className={styles.linkIcon1}
                loading="lazy"
                alt=""
                src="/link-18.svg"
              />
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.linkGroup}>
                <img
                  className={styles.linkIcon2}
                  loading="lazy"
                  alt=""
                  src="/link-19.svg"
                />
                <img
                  className={styles.linkIcon3}
                  loading="lazy"
                  alt=""
                  src="/link-20.svg"
                />
              </div>
              <div className={styles.linkContainer}>
                <img
                  className={styles.linkIcon4}
                  loading="lazy"
                  alt=""
                  src="/link-21.svg"
                />
                <img className={styles.linkIcon5} alt="" src="/link-22.svg" />
              </div>
            </div>
          </div>
        </section>
        <img
          className={styles.linkIcon6}
          loading="lazy"
          alt=""
          src="/link-23.svg"
        />
        <img
          className={styles.linkIcon7}
          loading="lazy"
          alt=""
          src="/link-24.svg"
        />
        <img className={styles.linkIcon8} alt="" src="/link-25.svg" />
        <img
          className={styles.linkIcon9}
          loading="lazy"
          alt=""
          src="/link-26.svg"
        />
        <img
          className={styles.linkIcon10}
          loading="lazy"
          alt=""
          src="/link-27.svg"
        />
        <img
          className={styles.linkIcon11}
          loading="lazy"
          alt=""
          src="/link-28.svg"
        />
        <img
          className={styles.backgroundIcon1}
          loading="lazy"
          alt=""
          src="/background-2@2x.png"
        />
        <img
          className={styles.backgroundIcon2}
          loading="lazy"
          alt=""
          src="/background-3@2x.png"
        />
        <img
          className={styles.linkIcon12}
          loading="lazy"
          alt=""
          src="/link-29.svg"
        />
        <div className={styles.container3}>
          <div className={styles.verticalborder}>
            <div className={styles.background}>
              <div className={styles.container4}>
                <div className={styles.link2} onClick={onLinkContainerClick}>
                  <div className={styles.container5}>
                    <div className={styles.container6}>
                      <div className={styles.container7}>
                        <img
                          className={styles.imgHome}
                          alt=""
                          src="/img--home.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.container8}>
                      <div className={styles.container9}>
                        <div className={styles.container10}>
                          <a className={styles.home}>Home</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container11} onClick={onContainerClick}>
                <div className={styles.link3}>
                  <div className={styles.container12}>
                    <div className={styles.container13}>
                      <div className={styles.container14}>
                        <img
                          className={styles.imgExplore}
                          alt=""
                          src="/img--explore.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.container15}>
                      <div className={styles.container16}>
                        <div className={styles.container17}>
                          <a className={styles.explore}>Explore</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container18} onClick={onContainerClick1}>
                <div className={styles.container19}>
                  <div className={styles.container20}>
                    <img
                      className={styles.imgNewPost}
                      alt=""
                      src="/img--new-post.svg"
                    />
                  </div>
                </div>
                <div className={styles.container21}>
                  <div className={styles.container22}>
                    <div className={styles.container23}>
                      <a className={styles.create}>Create</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.linkDirectMessaging4Ne}
                onClick={onLinkDirectMessaging4NeClick}
              >
                <div className={styles.container24}>
                  <div className={styles.container25}>
                    <div className={styles.container26}>
                      <img
                        className={styles.imgMessenger}
                        alt=""
                        src="/img--messenger.svg"
                      />
                      <div className={styles.container27}>
                        <div className={styles.backgroundborder}>
                          <div className={styles.container28}>
                            <a className={styles.notificationCounter}>4</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container29}>
                    <div className={styles.container30}>
                      <div className={styles.container31}>
                        <div className={styles.messages}>Messages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container32} />
              <div className={styles.containerParent}>
                <div className={styles.container33}>
                  <div className={styles.link4}>
                    <div className={styles.container34}>
                      <div className={styles.container35}>
                        <div className={styles.container36}>
                          <img
                            className={styles.imgNotifications}
                            alt=""
                            src="/img--notifications.svg"
                          />
                          <div className={styles.container37}>
                            <div className={styles.backgroundborder1} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container38}>
                        <div className={styles.container39}>
                          <div className={styles.container40}>
                            <div className={styles.container41}>
                              <div className={styles.container42}>
                                <div className={styles.notifications}>
                                  Notifications
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container43}>
                  <div className={styles.link5} onClick={onLinkContainerClick1}>
                    <div className={styles.container44}>
                      <div className={styles.container45}>
                        <div className={styles.container46}>
                          <div className={styles.link6}>
                            <img
                              className={styles.njpgIcon1}
                              alt=""
                              src="/434243569-385077337778848-8668198796112953130-njpg@2x.png"
                            />
                            <div className={styles.border1} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container47}>
                        <div className={styles.container48}>
                          <div className={styles.container49}>
                            <a className={styles.profile1}>Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.backButton}
                onClick={onBackButtonContainerClick}
              >
                <div className={styles.back}>{`BACK `}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile1;
