import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore.module.css";

const Explore: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkImageClick = useCallback(() => {
    window.open("https://www.myntra.com/");
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/wishlist");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.myntra.com/checkout/cart");
  }, []);

  const onContainerClick = useCallback(() => {
    navigate("/explore-post-1");
  }, [navigate]);

  const onLinkContainerClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainerClick1 = useCallback(() => {
    navigate("/posting-page");
  }, [navigate]);

  const onLinkDirectMessaging4NeClick = useCallback(() => {
    window.open("https://www.instagram.com/direct/inbox/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.instagram.com/pkhanna17/");
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/myntra-studio-edit");
  }, [navigate]);

  return (
    <div className={styles.explore}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <img
              className={styles.linkIcon}
              loading="lazy"
              alt=""
              src="/link@2x.png"
              onClick={onLinkImageClick}
            />
          </div>
          <div className={styles.navigationMenu}>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <div className={styles.link}>
                  <a className={styles.men}>Men</a>
                </div>
              </div>
            </div>
            <div className={styles.womenKidsMenu}>
              <div className={styles.container4}>
                <div className={styles.container5}>
                  <div className={styles.link1}>
                    <a className={styles.women}>Women</a>
                  </div>
                </div>
              </div>
              <div className={styles.container6}>
                <div className={styles.container7}>
                  <div className={styles.link2}>
                    <a className={styles.kids}>Kids</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container8}>
              <div className={styles.container9}>
                <div className={styles.link3}>
                  <a className={styles.homeLiving}>{`Home & Living`}</a>
                </div>
              </div>
            </div>
            <div className={styles.container10}>
              <div className={styles.container11}>
                <div className={styles.link4}>
                  <a className={styles.beauty}>Beauty</a>
                </div>
              </div>
            </div>
          </div>
          <a className={styles.studio}>Studio</a>
          <a className={styles.superscriptNew}>new</a>
          <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          <a className={styles.profile}>Profile</a>
          <div className={styles.containerWrapper}>
            <div className={styles.container12}>
              <div className={styles.input}>
                <input
                  className={styles.container13}
                  placeholder="Search for products, brands and more"
                  type="text"
                />
              </div>
              <div className={styles.link5}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image-15@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.wishlistBagIconsWrapper}>
            <div className={styles.wishlistBagIcons}>
              <div className={styles.link6} onClick={onLinkContainerClick}>
                <img
                  className={styles.imageIcon2}
                  alt=""
                  src="/image-21@2x.png"
                />
                <a className={styles.wishlist}>Wishlist</a>
              </div>
              <div className={styles.link7} onClick={onLinkContainerClick1}>
                <img
                  className={styles.imageIcon3}
                  alt=""
                  src="/image-34@2x.png"
                />
                <a className={styles.bag}>Bag</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.container14} onClick={onContainerClick}>
        <section className={styles.imageSlider}>
          <div className={styles.verticalNavigation}>
            <div className={styles.container15}>
              <div className={styles.verticalborder}>
                <div className={styles.background}>
                  <div className={styles.container16}>
                    <div
                      className={styles.link8}
                      onClick={onLinkContainerClick2}
                    >
                      <div className={styles.container17}>
                        <div className={styles.container18}>
                          <div className={styles.container19}>
                            <img
                              className={styles.imgHome}
                              loading="lazy"
                              alt=""
                              src="/img--home.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.container20}>
                          <div className={styles.container21}>
                            <div className={styles.container22}>
                              <a className={styles.home}>Home</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container23}>
                    <div className={styles.link9}>
                      <div className={styles.container24}>
                        <div className={styles.container25}>
                          <div className={styles.container26}>
                            <img
                              className={styles.imgExplore}
                              loading="lazy"
                              alt=""
                              src="/img--explore.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.container27}>
                          <div className={styles.container28}>
                            <div className={styles.container29}>
                              <a className={styles.explore1}>Explore</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.container30}
                    onClick={onContainerClick1}
                  >
                    <div className={styles.container31}>
                      <div className={styles.container32}>
                        <img
                          className={styles.imgNewPost}
                          loading="lazy"
                          alt=""
                          src="/img--new-post.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.container33}>
                      <div className={styles.container34}>
                        <div className={styles.container35}>
                          <div className={styles.create}>Create</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.linkDirectMessaging4Ne}
                    onClick={onLinkDirectMessaging4NeClick}
                  >
                    <div className={styles.container36}>
                      <div className={styles.container37}>
                        <div className={styles.container38}>
                          <img
                            className={styles.imgMessenger}
                            loading="lazy"
                            alt=""
                            src="/img--messenger.svg"
                          />
                          <div className={styles.container39}>
                            <div className={styles.backgroundborder}>
                              <div className={styles.container40}>
                                <a className={styles.a}>4</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.container41}>
                        <div className={styles.container42}>
                          <div className={styles.container43}>
                            <div className={styles.messages}>Messages</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container44} />
                  <div className={styles.containerParent}>
                    <div className={styles.container45}>
                      <div className={styles.link10}>
                        <div className={styles.container46}>
                          <div className={styles.container47}>
                            <div className={styles.container48}>
                              <img
                                className={styles.imgNotifications}
                                alt=""
                                src="/img--notifications.svg"
                              />
                              <div className={styles.container49}>
                                <div className={styles.backgroundborder1} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.container50}>
                            <div className={styles.container51}>
                              <div className={styles.container52}>
                                <div className={styles.container53}>
                                  <div className={styles.container54}>
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
                    <div className={styles.container55}>
                      <div
                        className={styles.link11}
                        onClick={onLinkContainerClick3}
                      >
                        <div className={styles.container56}>
                          <div className={styles.container57}>
                            <div className={styles.container58}>
                              <div className={styles.link12}>
                                <img
                                  className={styles.njpgIcon}
                                  alt=""
                                  src="/434243569-385077337778848-8668198796112953130-njpg@2x.png"
                                />
                                <div className={styles.border} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.container59}>
                            <div className={styles.container60}>
                              <div className={styles.container61}>
                                <div className={styles.profile1}>Profile</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.backgroundInner}>
                    <div
                      className={styles.backWrapper}
                      onClick={onFrameContainerClick}
                    >
                      <div className={styles.back}>BACK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.c6cb04782d814b11afa1fd1802ef33Icon}
              loading="lazy"
              alt=""
              src="/9c6cb04782d814b11afa1fd1802ef330jpg@2x.png"
            />
          </div>
          <div className={styles.sliderItems}>
            <div className={styles.imageCaption}>
              <div className={styles.horizontalDivider}>
                <div className={styles.container62} />
              </div>
              <img
                className={styles.bfe0bf16335119e3641e68c3634870Icon}
                loading="lazy"
                alt=""
                src="/6bfe0bf16335119e3641e68c36348701jpg@2x.png"
              />
            </div>
            <img
              className={styles.bfb29b0ee2009f3be9e61eeabfdb63Icon}
              loading="lazy"
              alt=""
              src="/bfb29b0ee2009f3be9e61eeabfdb6368jpg@2x.png"
            />
          </div>
          <div className={styles.sliderItems1}>
            <img
              className={styles.a133ceeb3f61a80e09d2aa0c18910eIcon}
              loading="lazy"
              alt=""
              src="/a133ceeb3f61a80e09d2aa0c18910ec9jpg@2x.png"
            />
            <img
              className={styles.f4348fdec30e8e45d01e0b276726bIcon}
              loading="lazy"
              alt=""
              src="/063f4348fdec30e8e45d01e0b276726bjpg@2x.png"
            />
          </div>
        </section>
        <section className={styles.fabd549cccf7c7c8604ff71ceec041Parent}>
          <img
            className={styles.fabd549cccf7c7c8604ff71ceec041Icon}
            loading="lazy"
            alt=""
            src="/96fabd549cccf7c7c8604ff71ceec041jpg@2x.png"
          />
          <img
            className={styles.link5564ed6e4acfbaa6d9d89f1}
            loading="lazy"
            alt=""
            src="/link--5564ed6e4acfbaa6d9d89f1a289de472jpg1@2x.png"
          />
          <div className={styles.f32312f448dc600fc44cb13415343d}>
            <img
              className={styles.b0ff37d043520ec1f3e6cb881001Icon}
              loading="lazy"
              alt=""
              src="/91676b0ff37d043520ec1f3e6cb88100-1@2x.png"
            />
          </div>
          <div className={styles.f3ced90d680e05ea57d9842f216254}>
            <div className={styles.f3ced90d680e05ea57d9842f216254Child} />
          </div>
          <img
            className={styles.b9950361b138de2edc09ecc690ba94Icon}
            loading="lazy"
            alt=""
            src="/5b9950361b138de2edc09ecc690ba944jpg@2x.png"
          />
          <img
            className={styles.c4b8a821e584ac3e0d9b82543ba1c2Icon}
            loading="lazy"
            alt=""
            src="/c4b8a821e584ac3e0d9b82543ba1c2a9jpg@2x.png"
          />
        </section>
        <input className={styles.containerChild} type="text" />
        <section className={styles.productGrid}>
          <img
            className={styles.jpgIcon}
            loading="lazy"
            alt=""
            src="/12jpg@2x.png"
          />
          <img
            className={styles.jpgIcon1}
            loading="lazy"
            alt=""
            src="/11jpg@2x.png"
          />
          <img
            className={styles.jpgIcon2}
            loading="lazy"
            alt=""
            src="/4jpg@2x.png"
          />
          <img
            className={styles.jpgIcon3}
            loading="lazy"
            alt=""
            src="/7jpg@2x.png"
          />
          <img
            className={styles.jpgIcon4}
            loading="lazy"
            alt=""
            src="/1jpg@2x.png"
          />
          <img
            className={styles.jpgIcon5}
            loading="lazy"
            alt=""
            src="/2jpg@2x.png"
          />
          <img
            className={styles.jpgIcon6}
            loading="lazy"
            alt=""
            src="/5jpg@2x.png"
          />
          <img
            className={styles.jpgIcon7}
            loading="lazy"
            alt=""
            src="/8jpg@2x.png"
          />
          <img
            className={styles.jpgIcon8}
            loading="lazy"
            alt=""
            src="/10jpg@2x.png"
          />
          <img
            className={styles.jpgIcon9}
            loading="lazy"
            alt=""
            src="/3jpg@2x.png"
          />
          <img
            className={styles.jpgIcon10}
            loading="lazy"
            alt=""
            src="/6jpg@2x.png"
          />
          <div className={styles.productItems}>
            <img
              className={styles.jpgIcon11}
              loading="lazy"
              alt=""
              src="/9jpg@2x.png"
            />
            <div className={styles.background1}>
              <div className={styles.border1} />
              <b className={styles.flat200Off}>FLAT ₹200 OFF</b>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Explore;
