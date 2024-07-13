import { FunctionComponent, useCallback } from "react";
import BackgroundShadow from "../components/BackgroundShadow";
import { useNavigate } from "react-router-dom";
import BackgroundBorder from "../components/BackgroundBorder";
import FrameComponent1 from "../components/FrameComponent1";
import FirstParagraph from "../components/FirstParagraph";
import EngagementCount from "../components/EngagementCount";
import MessageIcon from "../components/MessageIcon";
import Container1 from "../components/Container1";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackButtonWrapperClick = useCallback(() => {
    navigate("/myntra-studio-edit");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/seemasundays/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17886299496071088/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18082850359491470/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.instagram.com/wszkekel/");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18035761880063216/");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://www.instagram.com/kristine_x23/");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17860979565190335/");
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open("https://www.instagram.com/katalynrose/");
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18054063562678824/");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18045677818879085/");
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open("https://www.instagram.com/suyanne.castro/");
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17945731169820181/");
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18040032118938782/");
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open("https://www.instagram.com/cjaslar/");
  }, []);

  const onLinkContainerClick14 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18007569665543215/");
  }, []);

  const onLinkContainerClick15 = useCallback(() => {
    window.open("https://www.instagram.com/ghazmarinho/");
  }, []);

  const onLinkContainerClick16 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18057844102569298/");
  }, []);

  const onLinkContainerClick17 = useCallback(() => {
    window.open("https://www.instagram.com/kekkelai/");
  }, []);

  const onLinkContainerClick18 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17883865233066710/");
  }, []);

  const onLinkContainerClick19 = useCallback(() => {
    window.open("https://www.instagram.com/valeriealden_/");
  }, []);

  const onLinkContainerClick20 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18055020916637698/");
  }, []);

  return (
    <div className={styles.profile}>
      <BackgroundShadow />
      <div className={styles.container}>
        <main className={styles.overlay}>
          <section className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.dialog}>
                <div className={styles.container3}>
                  <div className={styles.dialog1}>
                    <div className={styles.container4}>
                      <div className={styles.backgroundParent}>
                        <div className={styles.background}>
                          <div className={styles.container5}>
                            <div className={styles.container6}>
                              <div className={styles.item}>
                                <div className={styles.button}>
                                  <div className={styles.button1}>
                                    <img
                                      className={styles.containerIcon}
                                      alt=""
                                      src="/container1@2x.png"
                                    />
                                  </div>
                                  <div className={styles.overlay1}>
                                    <div className={styles.button2}>
                                      <div className={styles.container7}>
                                        <img
                                          className={styles.imgTags}
                                          loading="lazy"
                                          alt=""
                                          src="/img--tags.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.marginBackgroundRow}>
                                <div className={styles.margin}>
                                  <div className={styles.background1} />
                                </div>
                                <div className={styles.margin1}>
                                  <div className={styles.background2} />
                                </div>
                                <div className={styles.margin2}>
                                  <div className={styles.background3} />
                                </div>
                                <div className={styles.margin3}>
                                  <div className={styles.background4} />
                                </div>
                                <div className={styles.margin4}>
                                  <div className={styles.background5} />
                                </div>
                                <div className={styles.margin5}>
                                  <div className={styles.background6} />
                                </div>
                                <div className={styles.margin6}>
                                  <div className={styles.background7} />
                                </div>
                                <div className={styles.margin7}>
                                  <div className={styles.background8} />
                                </div>
                                <div className={styles.margin8}>
                                  <div className={styles.background9} />
                                </div>
                                <div className={styles.background10} />
                              </div>
                              <div className={styles.nextButtonWrapper}>
                                <div className={styles.buttonNext}>
                                  <img
                                    className={styles.imageIcon}
                                    alt=""
                                    src="/image11@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.backButtonWrapper}
                          onClick={onBackButtonWrapperClick}
                        >
                          <div className={styles.back}>{`BACK `}</div>
                        </div>
                      </div>
                      <div className={styles.container8}>
                        <div className={styles.background11}>
                          <BackgroundBorder
                            prop="/31494727-2251836558376575-3631982868445528064-njpg1@2x.png"
                            ethnicLover="blakelively"
                          />
                          <div className={styles.verticalborder}>
                            <div className={styles.list}>
                              <div className={styles.postImage}>
                                <div className={styles.imageContainer}>
                                  <div className={styles.imageLinkContainer}>
                                    <div className={styles.button3}>
                                      <div className={styles.link}>
                                        <img
                                          className={styles.imageIcon1}
                                          alt=""
                                          src="/image-5@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon}
                                          loading="lazy"
                                          alt=""
                                          src="/31494727-2251836558376575-3631982868445528064-njpg-11@2x.png"
                                        />
                                        <div className={styles.border} />
                                      </div>
                                    </div>
                                    <div className={styles.postCaption}>
                                      <div
                                        className={styles.captionContentParent}
                                      >
                                        <div className={styles.captionContent}>
                                          <div className={styles.frameParent}>
                                            <div
                                              className={styles.heading2Parent}
                                            >
                                              <div className={styles.heading2}>
                                                <div className={styles.margin9}>
                                                  <div
                                                    className={
                                                      styles.container9
                                                    }
                                                  >
                                                    <div
                                                      className={
                                                        styles.container10
                                                      }
                                                    >
                                                      <div
                                                        className={styles.link1}
                                                      >
                                                        <a
                                                          className={
                                                            styles.blakelively
                                                          }
                                                        >
                                                          blakelively
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className={styles.margin10}
                                                >
                                                  <img
                                                    className={
                                                      styles.imgVerified
                                                    }
                                                    alt=""
                                                    src="/img--verified.svg"
                                                  />
                                                </div>
                                              </div>
                                              <div
                                                className={
                                                  styles.youSayCanadian
                                                }
                                              >
                                                You say Canadian Prom Dress, I
                                                say It’s Britney
                                              </div>
                                            </div>
                                            <div
                                              className={styles.birthdayMessage}
                                            >
                                              <div
                                                className={
                                                  styles.bitchHappyBelatedBirtWrapper
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles.bitchHappyBelated
                                                  }
                                                >{`Bitch👖👖👖 Happy belated birthday to `}</div>
                                              </div>
                                              <a
                                                className={
                                                  styles.brandonsklenar
                                                }
                                                href="https://www.instagram.com/brandonsklenar/"
                                                target="_blank"
                                              >
                                                @brandonsklenar
                                              </a>
                                            </div>
                                          </div>
                                          <div className={styles.we}> We</div>
                                        </div>
                                        <div
                                          className={styles.celebrationMessage}
                                        >
                                          <div className={styles.frameGroup}>
                                            <div
                                              className={
                                                styles.hadSoMuchFunCelebratingWiWrapper
                                              }
                                            >
                                              <div
                                                className={styles.hadSoMuch}
                                              >{`had so much fun celebrating with all the `}</div>
                                            </div>
                                            <a
                                              className={
                                                styles.itendswithusmovie
                                              }
                                              href="https://www.instagram.com/itendswithusmovie/"
                                              target="_blank"
                                            >
                                              @itendswithusmovie
                                            </a>
                                          </div>
                                          <div className={styles.castWhoWas}>
                                            cast who was in town. :(
                                          </div>
                                        </div>
                                        <div className={styles.captionUsers}>
                                          <a
                                            className={styles.isabelaferrer}
                                            href="https://www.instagram.com/isabela.ferrer/"
                                            target="_blank"
                                          >
                                            @isabela.ferrer
                                          </a>
                                          <div className={styles.makingMyMy}>
                                            {" "}
                                            making my “My Size Barbie” dreams
                                            come true,
                                          </div>
                                        </div>
                                        <div className={styles.lettingMeDress}>
                                          letting me dress her up for the night.
                                          I’m still 🤤over all the
                                        </div>
                                        <div className={styles.captionUsers1}>
                                          <a
                                            className={styles.storrowjewelry}
                                            href="https://www.instagram.com/storrowjewelry/"
                                            target="_blank"
                                          >
                                            @storrowjewelry
                                          </a>
                                          <div
                                            className={
                                              styles.layeredNecklacesAnd
                                            }
                                          >
                                            {" "}
                                            layered necklaces and charms ✨
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className={styles.photographerCredit}
                                      >
                                        <div
                                          className={styles.div}
                                        >{`📸: `}</div>
                                        <div
                                          className={styles.photographerName}
                                        >
                                          <a
                                            className={styles.thestewartofny}
                                            href="https://www.instagram.com/thestewartofny/"
                                            target="_blank"
                                          >
                                            @thestewartofny
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.paparazziComment}>
                                  <div className={styles.iDontUsuallyContainer}>
                                    <p className={styles.iDontUsually}>
                                      *I don’t usually post or encourage pap
                                      shots but these guys
                                    </p>
                                    <p className={styles.leaveMyKids}>
                                      leave my kids alone so they have my
                                      respect 🫡
                                    </p>
                                  </div>
                                  <div className={styles.container11}>
                                    <div className={styles.edited16h}>
                                      Edited · 16h
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems}>
                                <div className={styles.container12}>
                                  <div className={styles.button4}>
                                    <div
                                      className={styles.link2}
                                      onClick={onLinkContainerClick}
                                    >
                                      <img
                                        className={styles.imageIcon2}
                                        alt=""
                                        src="/image-6@2x.png"
                                      />
                                      <img
                                        className={styles.njpgIcon1}
                                        loading="lazy"
                                        alt=""
                                        src="/449832417-4058692154365992-792190112603746186-njpg1@2x.png"
                                      />
                                      <div className={styles.border1} />
                                    </div>
                                  </div>
                                  <div className={styles.commentDetailsParent}>
                                    <div className={styles.commentDetails}>
                                      <div className={styles.commentActions}>
                                        <div className={styles.commentUser}>
                                          <div className={styles.heading3}>
                                            <div className={styles.container13}>
                                              <div
                                                className={styles.container14}
                                              >
                                                <div className={styles.link3}>
                                                  <a
                                                    className={
                                                      styles.seemasundays
                                                    }
                                                    href="https://www.instagram.com/seemasundays/"
                                                    target="_blank"
                                                  >
                                                    seemasundays
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.iCantBelieve}>
                                            I can’t believe Hasan Minhaj gets to
                                            hang out
                                          </div>
                                        </div>
                                        <div className={styles.margin11}>
                                          <div className={styles.container15}>
                                            <div className={styles.button5}>
                                              <div
                                                className={styles.container16}
                                              >
                                                <img
                                                  className={styles.imgLike}
                                                  loading="lazy"
                                                  alt=""
                                                  src="/img--like.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles.withBlakeLively}>
                                        with Blake Lively lol
                                      </div>
                                    </div>
                                    <div className={styles.container17}>
                                      <div
                                        className={styles.link4}
                                        onClick={onLinkContainerClick1}
                                      >
                                        <a
                                          className={styles.time2h}
                                          href="https://www.instagram.com/p/C9WDNqgoLQk/c/17886299496071088/"
                                          target="_blank"
                                        >
                                          2h
                                        </a>
                                      </div>
                                      <div className={styles.button11}>
                                        1 like
                                      </div>
                                      <div className={styles.buttonReply}>
                                        Reply
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems1}>
                                <div className={styles.container18}>
                                  <div className={styles.button6}>
                                    <div className={styles.link5}>
                                      <img
                                        className={styles.imageIcon3}
                                        alt=""
                                        src="/image-5@2x.png"
                                      />
                                      <img
                                        className={styles.njpgIcon2}
                                        loading="lazy"
                                        alt=""
                                        src="/72477997-956326691397137-6344788275361742848-njpg1@2x.png"
                                      />
                                      <div className={styles.border2} />
                                    </div>
                                  </div>
                                  <div className={styles.frameContainer}>
                                    <div className={styles.frameDiv}>
                                      <div className={styles.heading3Parent}>
                                        <div className={styles.heading31}>
                                          <div className={styles.container19}>
                                            <div className={styles.container20}>
                                              <div className={styles.link6}>
                                                <a
                                                  className={
                                                    styles.storrowjewelry1
                                                  }
                                                  href="https://www.instagram.com/storrowjewelry/"
                                                  target="_blank"
                                                >
                                                  storrowjewelry
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.weveNeverLooked}>
                                          We’ve never looked better 🥹🥹😍 styling
                                        </div>
                                      </div>
                                      <div className={styles.parent}>
                                        <div
                                          className={styles.div1}
                                        >{`💯❣️🥰 `}</div>
                                        <div className={styles.taggedUsers}>
                                          <a
                                            className={styles.blakelively1}
                                            href="https://www.instagram.com/blakelively/"
                                            target="_blank"
                                          >
                                            @blakelively
                                          </a>
                                          <a
                                            className={styles.isabelaferrer1}
                                            href="https://www.instagram.com/isabela.ferrer/"
                                            target="_blank"
                                          >
                                            @isabela.ferrer
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.container21}>
                                      <div
                                        className={styles.link7}
                                        onClick={onLinkContainerClick2}
                                      >
                                        <a
                                          className={styles.time16h}
                                          href="https://www.instagram.com/p/C9WDNqgoLQk/c/18082850359491470/"
                                          target="_blank"
                                        >
                                          16h
                                        </a>
                                      </div>
                                      <div className={styles.button39}>
                                        39 likes
                                      </div>
                                      <div className={styles.buttonReply1}>
                                        Reply
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin12}>
                                    <div className={styles.container22}>
                                      <div className={styles.button7}>
                                        <div className={styles.container23}>
                                          <img
                                            className={styles.imgLike1}
                                            loading="lazy"
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems2}>
                                <div className={styles.container24}>
                                  <div className={styles.buttonParent}>
                                    <div className={styles.button8}>
                                      <div
                                        className={styles.link8}
                                        onClick={onLinkContainerClick3}
                                      >
                                        <img
                                          className={styles.imageIcon4}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon3}
                                          alt=""
                                          src="/44884218-345707102882519-2446069589734326272-njpg2@2x.png"
                                        />
                                        <div className={styles.border3} />
                                      </div>
                                    </div>
                                    <div className={styles.postCaptionWrappers}>
                                      <div className={styles.postCaptionRows}>
                                        <div className={styles.heading32}>
                                          <div className={styles.container25}>
                                            <div className={styles.container26}>
                                              <div className={styles.link9}>
                                                <a
                                                  className={styles.wszkekel}
                                                  href="https://www.instagram.com/wszkekel/"
                                                  target="_blank"
                                                >
                                                  wszkekel
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.isabelaAndBlake}>
                                          Isabela and Blake, too splendid.
                                        </div>
                                      </div>
                                      <div className={styles.container27}>
                                        <div
                                          className={styles.link10}
                                          onClick={onLinkContainerClick4}
                                        >
                                          <a
                                            className={styles.time16h1}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18035761880063216/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button12}>
                                          1 like
                                        </div>
                                        <div className={styles.buttonReply2}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin13}>
                                    <div className={styles.container28}>
                                      <div className={styles.button9}>
                                        <div className={styles.container29}>
                                          <img
                                            className={styles.imgLike2}
                                            loading="lazy"
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems3}>
                                <div className={styles.container30}>
                                  <div className={styles.buttonGroup}>
                                    <div className={styles.button10}>
                                      <div
                                        className={styles.link11}
                                        onClick={onLinkContainerClick5}
                                      >
                                        <img
                                          className={styles.imageIcon5}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon4}
                                          alt=""
                                          src="/91140242-159327265222197-835732126778261504-njpg1@2x.png"
                                        />
                                        <div className={styles.border4} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent1}>
                                      <div className={styles.heading3Group}>
                                        <div className={styles.heading33}>
                                          <div className={styles.container31}>
                                            <div className={styles.container32}>
                                              <div className={styles.link12}>
                                                <a
                                                  className={styles.kristineX23}
                                                  href="https://www.instagram.com/kristine_x23/"
                                                  target="_blank"
                                                >
                                                  kristine_x23
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.hasanInRed}>
                                          Hasan in red 🔥
                                        </div>
                                      </div>
                                      <div className={styles.container33}>
                                        <div
                                          className={styles.link13}
                                          onClick={onLinkContainerClick6}
                                        >
                                          <a
                                            className={styles.time16h2}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/17860979565190335/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button21}>
                                          2 likes
                                        </div>
                                        <div className={styles.buttonReply3}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin14}>
                                    <div className={styles.container34}>
                                      <div className={styles.button13}>
                                        <div className={styles.container35}>
                                          <img
                                            className={styles.imgLike3}
                                            loading="lazy"
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <FrameComponent1 prop="/408489242-677217227595047-4074553682981009151-njpg1@2x.png" />
                              <div className={styles.postItems4}>
                                <div className={styles.container36}>
                                  <div className={styles.buttonContainer}>
                                    <div className={styles.button14}>
                                      <div
                                        className={styles.link14}
                                        onClick={onLinkContainerClick7}
                                      >
                                        <img
                                          className={styles.imageIcon6}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.ajpgIcon}
                                          loading="lazy"
                                          alt=""
                                          src="/11350833-919855174767423-1864940764-ajpg1@2x.png"
                                        />
                                        <div className={styles.border5} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent2}>
                                      <div className={styles.heading3Container}>
                                        <div className={styles.heading34}>
                                          <div className={styles.container37}>
                                            <div className={styles.container38}>
                                              <div className={styles.link15}>
                                                <a
                                                  className={styles.katalynrose}
                                                  href="https://www.instagram.com/katalynrose/"
                                                  target="_blank"
                                                >
                                                  katalynrose
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.sheIsBeauty}>
                                          She is beauty, she is grace 🤍🤍🤍
                                        </div>
                                      </div>
                                      <div className={styles.container39}>
                                        <div
                                          className={styles.link16}
                                          onClick={onLinkContainerClick8}
                                        >
                                          <a
                                            className={styles.time16h3}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18054063562678824/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button131}>
                                          13 likes
                                        </div>
                                        <div className={styles.buttonReply4}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin15}>
                                    <div className={styles.container40}>
                                      <div className={styles.button15}>
                                        <div className={styles.container41}>
                                          <img
                                            className={styles.imgLike4}
                                            loading="lazy"
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems5}>
                                <div className={styles.container42}>
                                  <div className={styles.buttonParent1}>
                                    <div className={styles.button16}>
                                      <img
                                        className={styles.imageIcon7}
                                        alt=""
                                        src="/image-121@2x.png"
                                      />
                                      <div className={styles.link17}>
                                        <img
                                          className={styles.njpgIcon5}
                                          loading="lazy"
                                          alt=""
                                          src="/450405445-8544532038913655-4905644266332024506-njpg1@2x.png"
                                        />
                                        <div className={styles.border6} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent3}>
                                      <div className={styles.heading3Parent1}>
                                        <div className={styles.heading35}>
                                          <div className={styles.container43}>
                                            <div className={styles.container44}>
                                              <div className={styles.link18}>
                                                <a
                                                  className={
                                                    styles.blakelivelybrazil
                                                  }
                                                  href="https://www.instagram.com/blakelivelybrazil/"
                                                  target="_blank"
                                                >
                                                  blakelivelybrazil
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className={styles.isabelaLivingThe}
                                        >
                                          Isabela living the dream of every girl
                                          in the
                                        </div>
                                      </div>
                                      <div className={styles.margin16}>
                                        <div className={styles.container45}>
                                          <div className={styles.button17}>
                                            <div className={styles.container46}>
                                              <img
                                                className={styles.imgLike5}
                                                alt=""
                                                src="/img--like.svg"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.worldWrapper}>
                                    <div className={styles.world}>
                                      world. 😍❤
                                    </div>
                                  </div>
                                  <div className={styles.containerWrapper}>
                                    <div className={styles.container47}>
                                      <div
                                        className={styles.link19}
                                        onClick={onLinkContainerClick9}
                                      >
                                        <a
                                          className={styles.time14h}
                                          href="https://www.instagram.com/p/C9WDNqgoLQk/c/18045677818879085/"
                                          target="_blank"
                                        >
                                          14h
                                        </a>
                                      </div>
                                      <div className={styles.button31}>
                                        3 likes
                                      </div>
                                      <div className={styles.buttonReply5}>
                                        Reply
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems6}>
                                <div className={styles.container48}>
                                  <div className={styles.buttonParent2}>
                                    <div className={styles.button18}>
                                      <div
                                        className={styles.link20}
                                        onClick={onLinkContainerClick10}
                                      >
                                        <img
                                          className={styles.imageIcon8}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon6}
                                          alt=""
                                          src="/355889223-2230805183974838-2664369776895807332-njpg1@2x.png"
                                        />
                                        <div className={styles.border7} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent4}>
                                      <div className={styles.heading3Parent2}>
                                        <div className={styles.heading36}>
                                          <div className={styles.container49}>
                                            <div className={styles.container50}>
                                              <div className={styles.link21}>
                                                <a
                                                  className={
                                                    styles.suyannecastro
                                                  }
                                                  href="https://www.instagram.com/suyanne.castro/"
                                                  target="_blank"
                                                >
                                                  suyanne.castro
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className={styles.muitoSerenaLinda}
                                        >
                                          Muito Serena!! Linda sempre ✨
                                        </div>
                                      </div>
                                      <div className={styles.container51}>
                                        <div
                                          className={styles.link22}
                                          onClick={onLinkContainerClick11}
                                        >
                                          <a
                                            className={styles.time16h4}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/17945731169820181/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button161}>
                                          16 likes
                                        </div>
                                        <div className={styles.buttonReply6}>
                                          Reply
                                        </div>
                                        <div className={styles.button19}>
                                          <div className={styles.container52}>
                                            <div
                                              className={styles.seeTranslation}
                                            >
                                              See translation
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin17}>
                                    <div className={styles.container53}>
                                      <div className={styles.button20}>
                                        <div className={styles.container54}>
                                          <img
                                            className={styles.imgLike6}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems7}>
                                <div className={styles.container55}>
                                  <div className={styles.buttonParent3}>
                                    <div className={styles.button22}>
                                      <div className={styles.link23}>
                                        <img
                                          className={styles.imageIcon9}
                                          alt=""
                                          src="/image-121@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon7}
                                          alt=""
                                          src="/449215556-3752600088361957-2059024180130633285-njpg1@2x.png"
                                        />
                                        <div className={styles.border8} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent5}>
                                      <div className={styles.heading3Parent3}>
                                        <div className={styles.heading37}>
                                          <div className={styles.container56}>
                                            <div className={styles.container57}>
                                              <div className={styles.link24}>
                                                <a
                                                  className={
                                                    styles.mablakelively
                                                  }
                                                  href="https://www.instagram.com/ma.blakelively/"
                                                  target="_blank"
                                                >
                                                  ma.blakelively
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.imLivingFor}>
                                          I’m living for your active era🙃
                                        </div>
                                      </div>
                                      <div className={styles.container58}>
                                        <div
                                          className={styles.link25}
                                          onClick={onLinkContainerClick12}
                                        >
                                          <a
                                            className={styles.time11h}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18040032118938782/"
                                            target="_blank"
                                          >
                                            11h
                                          </a>
                                        </div>
                                        <div className={styles.button32}>
                                          3 likes
                                        </div>
                                        <div className={styles.buttonReply7}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin18}>
                                    <div className={styles.container59}>
                                      <div className={styles.button23}>
                                        <div className={styles.container60}>
                                          <img
                                            className={styles.imgLike7}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.container61}>
                                <div className={styles.button24}>
                                  <div className={styles.link26}>
                                    <img
                                      className={styles.imageIcon10}
                                      alt=""
                                      src="/image-121@2x.png"
                                    />
                                    <img
                                      className={styles.njpgIcon8}
                                      alt=""
                                      src="/341748519-765275224994330-5452322094325370884-njpg1@2x.png"
                                    />
                                    <div className={styles.border9} />
                                  </div>
                                </div>
                                <FirstParagraph propMinWidth="254px" />
                                <div className={styles.margin19}>
                                  <div className={styles.container62}>
                                    <div className={styles.button25}>
                                      <div className={styles.container63}>
                                        <img
                                          className={styles.imgLike8}
                                          alt=""
                                          src="/img--like.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.separator}>
                                <div className={styles.frameParent6}>
                                  <div
                                    className={styles.horizontalDividerWrapper}
                                  >
                                    <div className={styles.horizontalDivider} />
                                  </div>
                                  <div className={styles.viewReplies2}>
                                    View replies (2)
                                  </div>
                                </div>
                              </div>
                              <div className={styles.containerParent}>
                                <div className={styles.container64}>
                                  <div className={styles.button26}>
                                    <div
                                      className={styles.link27}
                                      onClick={onLinkContainerClick13}
                                    >
                                      <img
                                        className={styles.imageIcon11}
                                        alt=""
                                        src="/image-6@2x.png"
                                      />
                                      <img
                                        className={styles.njpgIcon9}
                                        alt=""
                                        src="/49608789-335024707224942-878687061073199104-njpg1@2x.png"
                                      />
                                      <div className={styles.border10} />
                                    </div>
                                  </div>
                                  <div className={styles.commentContent}>
                                    <div className={styles.commentBodyParent}>
                                      <div className={styles.commentBody}>
                                        <div className={styles.userMention}>
                                          <a
                                            className={styles.kObrien11}
                                            href="https://www.instagram.com/k_obrien11/"
                                            target="_blank"
                                          >
                                            @k_obrien11
                                          </a>
                                          <div
                                            className={styles.surpriseMention}
                                          >
                                            <div
                                              className={styles.whenYouSee}
                                            >{` 😳when you see `}</div>
                                            <a
                                              className={styles.blakelively2}
                                              href="https://www.instagram.com/blakelively/"
                                              target="_blank"
                                            >
                                              @blakelively
                                            </a>
                                          </div>
                                          <div className={styles.wearing}>
                                            {" "}
                                            wearing
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles.commentAuthor}>
                                        <div className={styles.heading38}>
                                          <div className={styles.container65}>
                                            <div className={styles.container66}>
                                              <div className={styles.link28}>
                                                <a
                                                  className={styles.cjaslar}
                                                  href="https://www.instagram.com/cjaslar/"
                                                  target="_blank"
                                                >
                                                  cjaslar
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.yourMomsDenim}>
                                          your moms denim duster. So chic.
                                          Nannie has style.
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.container67}>
                                      <div
                                        className={styles.link29}
                                        onClick={onLinkContainerClick14}
                                      >
                                        <a
                                          className={styles.time5h}
                                          href="https://www.instagram.com/p/C9WDNqgoLQk/c/18007569665543215/"
                                          target="_blank"
                                        >
                                          5h
                                        </a>
                                      </div>
                                      <div className={styles.button110}>
                                        1 like
                                      </div>
                                      <div className={styles.buttonReply8}>
                                        Reply
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin20}>
                                    <div className={styles.container68}>
                                      <div className={styles.button27}>
                                        <div className={styles.container69}>
                                          <img
                                            className={styles.imgLike9}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.replyDivider}>
                                  <div className={styles.frameParent7}>
                                    <div
                                      className={
                                        styles.horizontalDividerContainer
                                      }
                                    >
                                      <div
                                        className={styles.horizontalDivider1}
                                      />
                                    </div>
                                    <div className={styles.viewReplies1}>
                                      View replies (1)
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.secondComment}>
                                <div className={styles.container70}>
                                  <div className={styles.userTwoContent}>
                                    <div className={styles.button28}>
                                      <div
                                        className={styles.link30}
                                        onClick={onLinkContainerClick15}
                                      >
                                        <img
                                          className={styles.imageIcon12}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon10}
                                          alt=""
                                          src="/230018328-566049091430584-2119382968293004201-njpg1@2x.png"
                                        />
                                        <div className={styles.border11} />
                                      </div>
                                    </div>
                                    <div className={styles.secondBodyParent}>
                                      <div className={styles.secondBody}>
                                        <div className={styles.heading39}>
                                          <div className={styles.container71}>
                                            <div className={styles.container72}>
                                              <div className={styles.link31}>
                                                <a
                                                  className={styles.ghazmarinho}
                                                  href="https://www.instagram.com/ghazmarinho/"
                                                  target="_blank"
                                                >
                                                  ghazmarinho
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.missingUser}>
                                          <div
                                            className={styles.whereIs}
                                          >{`Where is `}</div>
                                          <a
                                            className={styles.justinbaldoni}
                                            href="https://www.instagram.com/justinbaldoni/"
                                            target="_blank"
                                          >
                                            @justinbaldoni
                                          </a>
                                        </div>
                                        <div className={styles.punctuation}>
                                          {" "}
                                          ?
                                        </div>
                                      </div>
                                      <div className={styles.container73}>
                                        <div
                                          className={styles.link32}
                                          onClick={onLinkContainerClick16}
                                        >
                                          <a
                                            className={styles.time16h5}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18057844102569298/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button101}>
                                          10 likes
                                        </div>
                                        <div className={styles.buttonReply9}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin21}>
                                    <div className={styles.container74}>
                                      <div className={styles.button29}>
                                        <div className={styles.container75}>
                                          <img
                                            className={styles.imgLike10}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.thirdDivider}>
                                  <div className={styles.frameParent8}>
                                    <div
                                      className={styles.horizontalDividerFrame}
                                    >
                                      <div
                                        className={styles.horizontalDivider2}
                                      />
                                    </div>
                                    <div className={styles.viewReplies11}>
                                      View replies (1)
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.postItems8}>
                                <div className={styles.container76}>
                                  <div className={styles.buttonParent4}>
                                    <div className={styles.button30}>
                                      <div
                                        className={styles.link33}
                                        onClick={onLinkContainerClick17}
                                      >
                                        <img
                                          className={styles.imageIcon13}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.ajpgIcon1}
                                          alt=""
                                          src="/11326286-1590577381203363-1342144259-ajpg1@2x.png"
                                        />
                                        <div className={styles.border12} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent9}>
                                      <div className={styles.heading3Parent4}>
                                        <div className={styles.heading310}>
                                          <div className={styles.container77}>
                                            <div className={styles.container78}>
                                              <div className={styles.link34}>
                                                <a
                                                  className={styles.kekkelai}
                                                  href="https://www.instagram.com/kekkelai/"
                                                  target="_blank"
                                                >
                                                  kekkelai
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <a
                                          className={styles.storrowjewelry2}
                                          href="https://www.instagram.com/storrowjewelry/"
                                          target="_blank"
                                        >
                                          @storrowjewelry
                                        </a>
                                        <div className={styles.isTheBest}>
                                          {" "}
                                          is the best !!
                                        </div>
                                      </div>
                                      <div className={styles.container79}>
                                        <div
                                          className={styles.link35}
                                          onClick={onLinkContainerClick18}
                                        >
                                          <a
                                            className={styles.time15h}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/17883865233066710/"
                                            target="_blank"
                                          >
                                            15h
                                          </a>
                                        </div>
                                        <div className={styles.button210}>
                                          2 likes
                                        </div>
                                        <div className={styles.buttonReply10}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin22}>
                                    <div className={styles.container80}>
                                      <div className={styles.button33}>
                                        <div className={styles.container81}>
                                          <img
                                            className={styles.imgLike11}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.thirdComment}>
                                <div className={styles.container82}>
                                  <div className={styles.button34}>
                                    <div
                                      className={styles.link36}
                                      onClick={onLinkContainerClick19}
                                    >
                                      <img
                                        className={styles.imageIcon14}
                                        alt=""
                                        src="/image-6@2x.png"
                                      />
                                      <img
                                        className={styles.njpgIcon11}
                                        alt=""
                                        src="/424948064-805424981629171-7512136065339103882-njpg1@2x.png"
                                      />
                                      <div className={styles.border13} />
                                    </div>
                                  </div>
                                  <div className={styles.commentThreeContent}>
                                    <div className={styles.movieComment}>
                                      <div className={styles.heading311}>
                                        <div className={styles.margin23}>
                                          <div className={styles.container83}>
                                            <div className={styles.container84}>
                                              <div className={styles.link37}>
                                                <a
                                                  className={
                                                    styles.valeriealden
                                                  }
                                                  href="https://www.instagram.com/valeriealden_/"
                                                  target="_blank"
                                                >
                                                  valeriealden_
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles.margin24}>
                                          <img
                                            className={styles.imgVerified1}
                                            alt=""
                                            src="/img--verified.svg"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className={styles.cantWaitTo}
                                      >{`Can’t wait to see `}</div>
                                      <a
                                        className={styles.itendswithusmovie1}
                                        href="https://www.instagram.com/itendswithusmovie/"
                                        target="_blank"
                                      >
                                        @itendswithusmovie
                                      </a>
                                      <div className={styles.div2}> 🌸💜</div>
                                    </div>
                                    <div className={styles.container85}>
                                      <div
                                        className={styles.link38}
                                        onClick={onLinkContainerClick20}
                                      >
                                        <a
                                          className={styles.time16h6}
                                          href="https://www.instagram.com/p/C9WDNqgoLQk/c/18055020916637698/"
                                          target="_blank"
                                        >
                                          16h
                                        </a>
                                      </div>
                                      <div className={styles.button61}>
                                        6 likes
                                      </div>
                                      <div className={styles.buttonReply11}>
                                        Reply
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin25}>
                                    <div className={styles.container86}>
                                      <div className={styles.button35}>
                                        <div className={styles.container87}>
                                          <img
                                            className={styles.imgLike12}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.item1}>
                                  <img
                                    className={styles.imgLoadMoreComments}
                                    alt=""
                                    src="/img--load-more-comments.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <EngagementCount />
                            <MessageIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.backgroundshadow}>
                    <img
                      className={styles.containerIcon1}
                      loading="lazy"
                      alt=""
                      src="/container@2x.png"
                    />
                  </div>
                </div>
              </div>
              <img
                className={styles.imgClose}
                loading="lazy"
                alt=""
                src="/img--close.svg"
              />
              <Container1 />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;
