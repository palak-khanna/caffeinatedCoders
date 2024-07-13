import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundBorder from "./BackgroundBorder";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import Comment1 from "./Comment1";
import MessageIcon from "./MessageIcon";
import Container1 from "./Container1";
import styles from "./Container2.module.css";

export type Container2Type = {
  className?: string;
};

const Container2: FunctionComponent<Container2Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/myntra-studio-edit");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/wszkekel/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18035761880063216/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.instagram.com/kristine_x23/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17860979565190335/");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.instagram.com/katalynrose/");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18054063562678824/");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://www.instagram.com/suyanne.castro/");
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17945731169820181/");
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18040032118938782/");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18240292600256764/");
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open("https://www.instagram.com/ghazmarinho/");
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18057844102569298/");
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open("https://www.instagram.com/kekkelai/");
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/17883865233066710/");
  }, []);

  const onLinkContainerClick14 = useCallback(() => {
    window.open("https://www.instagram.com/valeriealden_/");
  }, []);

  const onLinkContainerClick15 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/c/18055020916637698/");
  }, []);

  const onLinkContainerClick16 = useCallback(() => {
    window.open("https://www.instagram.com/p/C9WDNqgoLQk/liked_by/");
  }, []);

  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.overlay}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.dialog}>
              <div className={styles.container3}>
                <div className={styles.dialog1}>
                  <div className={styles.container4}>
                    <div className={styles.backgroundParent}>
                      <div className={styles.background}>
                        <div className={styles.container5} />
                        <img
                          className={styles.ce9fe4de0ab71d1f9c9096d62eadeaIcon}
                          alt=""
                          src="/ce9fe4de0ab71d1f9c9096d62eadea37-1@2x.png"
                        />
                        <div className={styles.marginContainer}>
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
                      </div>
                      <div
                        className={styles.backButtonContainer}
                        onClick={onBackButtonContainerClick}
                      >
                        <div className={styles.back}>{`BACK `}</div>
                      </div>
                    </div>
                    <div className={styles.container6}>
                      <div className={styles.background11}>
                        <BackgroundBorder
                          prop="/31494727-2251836558376575-3631982868445528064-njpg@2x.png"
                          ethnicLover="Ethnic_lover"
                        />
                        <div className={styles.verticalborder}>
                          <div className={styles.list}>
                            <div className={styles.buttonItem}>
                              <div className={styles.container7}>
                                <div className={styles.container8}>
                                  <div className={styles.button}>
                                    <img
                                      className={styles.imageIcon}
                                      alt=""
                                      src="/image-5@2x.png"
                                    />
                                    <div className={styles.link}>
                                      <img
                                        className={styles.njpgIcon}
                                        alt=""
                                        src="/31494727-2251836558376575-3631982868445528064-njpg-1@2x.png"
                                      />
                                      <div className={styles.border} />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.newCollectionComing}>
                                  New Collection coming for you guys!!!!
                                </div>
                              </div>
                            </div>
                            <div className={styles.frameParent}>
                              <FrameComponent3 />
                              <FrameComponent2 />
                              <div className={styles.containerWrapper}>
                                <div className={styles.container9}>
                                  <div className={styles.buttonParent}>
                                    <div className={styles.button1}>
                                      <div
                                        className={styles.link1}
                                        onClick={onLinkContainerClick}
                                      >
                                        <img
                                          className={styles.imageIcon1}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon1}
                                          alt=""
                                          src="/44884218-345707102882519-2446069589734326272-njpg1@2x.png"
                                        />
                                        <div className={styles.border1} />
                                      </div>
                                    </div>
                                    <div className={styles.postHeadings}>
                                      <div className={styles.heading3Parent}>
                                        <div className={styles.heading3}>
                                          <div className={styles.container10}>
                                            <div className={styles.container11}>
                                              <div className={styles.link2}>
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
                                      <div className={styles.container12}>
                                        <div
                                          className={styles.link3}
                                          onClick={onLinkContainerClick1}
                                        >
                                          <a
                                            className={styles.time16h}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18035761880063216/"
                                            target="_blank"
                                          >
                                            16h
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
                                  <div className={styles.margin9}>
                                    <div className={styles.container13}>
                                      <div className={styles.button2}>
                                        <div className={styles.container14}>
                                          <img
                                            className={styles.imgLike}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.containerContainer}>
                                <div className={styles.container15}>
                                  <div className={styles.buttonGroup}>
                                    <div className={styles.button3}>
                                      <div
                                        className={styles.link4}
                                        onClick={onLinkContainerClick2}
                                      >
                                        <img
                                          className={styles.imageIcon2}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon2}
                                          alt=""
                                          src="/91140242-159327265222197-835732126778261504-njpg@2x.png"
                                        />
                                        <div className={styles.border2} />
                                      </div>
                                    </div>
                                    <div className={styles.frameGroup}>
                                      <div className={styles.heading3Group}>
                                        <div className={styles.heading31}>
                                          <div className={styles.container16}>
                                            <div className={styles.container17}>
                                              <div className={styles.link5}>
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
                                      <div className={styles.container18}>
                                        <div
                                          className={styles.link6}
                                          onClick={onLinkContainerClick3}
                                        >
                                          <a
                                            className={styles.time16h1}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/17860979565190335/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button21}>
                                          2 likes
                                        </div>
                                        <div className={styles.buttonReply1}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin10}>
                                    <div className={styles.container19}>
                                      <div className={styles.button4}>
                                        <div className={styles.container20}>
                                          <img
                                            className={styles.imgLike1}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <FrameComponent1 prop="/408489242-677217227595047-4074553682981009151-njpg@2x.png" />
                              <div className={styles.containerFrame}>
                                <div className={styles.container21}>
                                  <div className={styles.buttonContainer}>
                                    <div className={styles.button5}>
                                      <div
                                        className={styles.link7}
                                        onClick={onLinkContainerClick4}
                                      >
                                        <img
                                          className={styles.imageIcon3}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.ajpgIcon}
                                          loading="lazy"
                                          alt=""
                                          src="/11350833-919855174767423-1864940764-ajpg@2x.png"
                                        />
                                        <div className={styles.border3} />
                                      </div>
                                    </div>
                                    <div className={styles.frameContainer}>
                                      <div className={styles.heading3Container}>
                                        <div className={styles.heading32}>
                                          <div className={styles.container22}>
                                            <div className={styles.container23}>
                                              <div className={styles.link8}>
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
                                      <div className={styles.container24}>
                                        <div
                                          className={styles.link9}
                                          onClick={onLinkContainerClick5}
                                        >
                                          <a
                                            className={styles.time16h2}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18054063562678824/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button13}>
                                          13 likes
                                        </div>
                                        <div className={styles.buttonReply2}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin11}>
                                    <div className={styles.container25}>
                                      <div className={styles.button6}>
                                        <div className={styles.container26}>
                                          <img
                                            className={styles.imgLike2}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <FrameComponent />
                              <div className={styles.frameDiv}>
                                <div className={styles.container27}>
                                  <div className={styles.buttonParent1}>
                                    <div className={styles.button7}>
                                      <div
                                        className={styles.link10}
                                        onClick={onLinkContainerClick6}
                                      >
                                        <img
                                          className={styles.imageIcon4}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon3}
                                          loading="lazy"
                                          alt=""
                                          src="/355889223-2230805183974838-2664369776895807332-njpg@2x.png"
                                        />
                                        <div className={styles.border4} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent1}>
                                      <div className={styles.heading3Parent1}>
                                        <div className={styles.heading33}>
                                          <div className={styles.container28}>
                                            <div className={styles.container29}>
                                              <div className={styles.link11}>
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
                                      <div className={styles.container30}>
                                        <div
                                          className={styles.link12}
                                          onClick={onLinkContainerClick7}
                                        >
                                          <a
                                            className={styles.time16h3}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/17945731169820181/"
                                            target="_blank"
                                          >
                                            16h
                                          </a>
                                        </div>
                                        <div className={styles.button16}>
                                          16 likes
                                        </div>
                                        <div className={styles.buttonReply3}>
                                          Reply
                                        </div>
                                        <div className={styles.button8}>
                                          <div className={styles.container31}>
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
                                  <div className={styles.margin12}>
                                    <div className={styles.container32}>
                                      <div className={styles.button9}>
                                        <div className={styles.container33}>
                                          <img
                                            className={styles.imgLike3}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.containerWrapper1}>
                                <div className={styles.container34}>
                                  <div className={styles.buttonParent2}>
                                    <div className={styles.button10}>
                                      <div className={styles.link13}>
                                        <img
                                          className={styles.imageIcon5}
                                          alt=""
                                          src="/image-121@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon4}
                                          loading="lazy"
                                          alt=""
                                          src="/449215556-3752600088361957-2059024180130633285-njpg@2x.png"
                                        />
                                        <div className={styles.border5} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent2}>
                                      <div className={styles.heading3Parent2}>
                                        <div className={styles.heading34}>
                                          <div className={styles.container35}>
                                            <div className={styles.container36}>
                                              <div className={styles.link14}>
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
                                      <div className={styles.container37}>
                                        <div
                                          className={styles.link15}
                                          onClick={onLinkContainerClick8}
                                        >
                                          <a
                                            className={styles.time11h}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/18040032118938782/"
                                            target="_blank"
                                          >
                                            11h
                                          </a>
                                        </div>
                                        <div className={styles.button31}>
                                          3 likes
                                        </div>
                                        <div className={styles.buttonReply4}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin13}>
                                    <div className={styles.container38}>
                                      <div className={styles.button12}>
                                        <div className={styles.container39}>
                                          <img
                                            className={styles.imgLike4}
                                            alt=""
                                            src="/img--like.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.userPost}>
                                <div className={styles.container40}>
                                  <div className={styles.postElements}>
                                    <div className={styles.button14}>
                                      <div className={styles.link16}>
                                        <img
                                          className={styles.imageIcon6}
                                          alt=""
                                          src="/image-121@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon5}
                                          alt=""
                                          src="/341748519-765275224994330-5452322094325370884-njpg@2x.png"
                                        />
                                        <div className={styles.border6} />
                                      </div>
                                    </div>
                                    <div className={styles.postHeader}>
                                      <div className={styles.heading35}>
                                        <div className={styles.container41}>
                                          <div className={styles.container42}>
                                            <div className={styles.link17}>
                                              <a
                                                className={
                                                  styles.juliachangcoaching
                                                }
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
                                      <div className={styles.caption}>
                                        <div
                                          className={styles.likeINeedContainer}
                                        >
                                          <span
                                            className={
                                              styles.likeINeedContainer1
                                            }
                                          >
                                            <p className={styles.likeINeed}>
                                              like I need to add a Canadian prom
                                              dress to my closet, so my
                                            </p>
                                            <p
                                              className={
                                                styles.canadianSuitDoesnt
                                              }
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
                                    <div className={styles.margin14}>
                                      <div className={styles.container43}>
                                        <div className={styles.button15}>
                                          <div className={styles.container44}>
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
                                  <div className={styles.postMetadata}>
                                    <div className={styles.container45}>
                                      <div
                                        className={styles.link18}
                                        onClick={onLinkContainerClick9}
                                      >
                                        <a
                                          className={styles.time16h4}
                                          href="https://www.instagram.com/p/C9WDNqgoLQk/c/18240292600256764/"
                                          target="_blank"
                                        >
                                          16h
                                        </a>
                                      </div>
                                      <div className={styles.button22}>
                                        2 likes
                                      </div>
                                      <div className={styles.buttonReply5}>
                                        Reply
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.frameWrapper}>
                                <div className={styles.frameParent3}>
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
                              <Comment1 />
                              <div className={styles.frameWrapper1}>
                                <div className={styles.frameParent4}>
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
                              <div className={styles.anotherPost}>
                                <div className={styles.container46}>
                                  <div className={styles.postComponents}>
                                    <div className={styles.button17}>
                                      <div
                                        className={styles.link19}
                                        onClick={onLinkContainerClick10}
                                      >
                                        <img
                                          className={styles.imageIcon7}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.njpgIcon6}
                                          alt=""
                                          src="/230018328-566049091430584-2119382968293004201-njpg@2x.png"
                                        />
                                        <div className={styles.border7} />
                                      </div>
                                    </div>
                                    <div className={styles.overlayContent}>
                                      <div
                                        className={styles.dialogContentWrapper}
                                      >
                                        <div className={styles.heading36}>
                                          <div className={styles.container47}>
                                            <div className={styles.container48}>
                                              <div className={styles.link20}>
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
                                        <div className={styles.whereIsParent}>
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
                                        <div className={styles.backgroundItem}>
                                          {" "}
                                          ?
                                        </div>
                                      </div>
                                      <div className={styles.container49}>
                                        <div
                                          className={styles.link21}
                                          onClick={onLinkContainerClick11}
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
                                        <div className={styles.buttonReply6}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin15}>
                                    <div className={styles.container50}>
                                      <div className={styles.button18}>
                                        <div className={styles.container51}>
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
                              <div className={styles.frameWrapper2}>
                                <div className={styles.frameParent5}>
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
                              <div className={styles.containerWrapper2}>
                                <div className={styles.container52}>
                                  <div className={styles.buttonParent3}>
                                    <div className={styles.button19}>
                                      <div
                                        className={styles.link22}
                                        onClick={onLinkContainerClick12}
                                      >
                                        <img
                                          className={styles.imageIcon8}
                                          alt=""
                                          src="/image-6@2x.png"
                                        />
                                        <img
                                          className={styles.ajpgIcon1}
                                          alt=""
                                          src="/11326286-1590577381203363-1342144259-ajpg@2x.png"
                                        />
                                        <div className={styles.border8} />
                                      </div>
                                    </div>
                                    <div className={styles.frameParent6}>
                                      <div className={styles.heading3Parent3}>
                                        <div className={styles.heading37}>
                                          <div className={styles.container53}>
                                            <div className={styles.container54}>
                                              <div className={styles.link23}>
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
                                          className={styles.storrowjewelry}
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
                                      <div className={styles.container55}>
                                        <div
                                          className={styles.link24}
                                          onClick={onLinkContainerClick13}
                                        >
                                          <a
                                            className={styles.time15h}
                                            href="https://www.instagram.com/p/C9WDNqgoLQk/c/17883865233066710/"
                                            target="_blank"
                                          >
                                            15h
                                          </a>
                                        </div>
                                        <div className={styles.button23}>
                                          2 likes
                                        </div>
                                        <div className={styles.buttonReply7}>
                                          Reply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.margin16}>
                                    <div className={styles.container56}>
                                      <div className={styles.button20}>
                                        <div className={styles.container57}>
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
                              <div className={styles.container58}>
                                <div className={styles.button24}>
                                  <div
                                    className={styles.link25}
                                    onClick={onLinkContainerClick14}
                                  >
                                    <img
                                      className={styles.imageIcon9}
                                      alt=""
                                      src="/image-6@2x.png"
                                    />
                                    <img
                                      className={styles.njpgIcon7}
                                      alt=""
                                      src="/424948064-805424981629171-7512136065339103882-njpg@2x.png"
                                    />
                                    <div className={styles.border9} />
                                  </div>
                                </div>
                                <div className={styles.exploreIconWrapper}>
                                  <div className={styles.exploreIcon}>
                                    <div className={styles.heading38}>
                                      <div className={styles.margin17}>
                                        <div className={styles.container59}>
                                          <div className={styles.container60}>
                                            <div className={styles.link26}>
                                              <a
                                                className={styles.valeriealden}
                                                href="https://www.instagram.com/valeriealden_/"
                                                target="_blank"
                                              >
                                                valeriealden_
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles.margin18}>
                                        <img
                                          className={styles.imgVerified}
                                          alt=""
                                          src="/img--verified.svg"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={styles.cantWaitTo}
                                    >{`Can’t wait to see `}</div>
                                    <a
                                      className={styles.itendswithusmovie}
                                      href="https://www.instagram.com/itendswithusmovie/"
                                      target="_blank"
                                    >
                                      @itendswithusmovie
                                    </a>
                                    <div className={styles.div}> 🌸💜</div>
                                  </div>
                                  <div className={styles.container61}>
                                    <div
                                      className={styles.link27}
                                      onClick={onLinkContainerClick15}
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
                                    <div className={styles.buttonReply8}>
                                      Reply
                                    </div>
                                  </div>
                                </div>
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
                              <div className={styles.item}>
                                <img
                                  className={styles.imgLoadMoreComments}
                                  alt=""
                                  src="/img--load-more-comments.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.section}>
                            <div className={styles.profileIconWrapper}>
                              <div className={styles.margin20}>
                                <div className={styles.container64}>
                                  <div className={styles.button26}>
                                    <div className={styles.container65}>
                                      <img
                                        className={styles.imgLike9}
                                        alt=""
                                        src="/img--like-14.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.homeLinkBlock}>
                                <img
                                  className={styles.imgComment}
                                  loading="lazy"
                                  alt=""
                                  src="/img--comment.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.imgSharePostWrapper}>
                              <img
                                className={styles.imgSharePost}
                                loading="lazy"
                                alt=""
                                src="/img--share-post.svg"
                              />
                            </div>
                            <div className={styles.margin21}>
                              <img
                                className={styles.imgSave}
                                alt=""
                                src="/img--save.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.newPostIconBlock}>
                            <div className={styles.creationMenu}>
                              <div className={styles.section1}>
                                <div className={styles.container66}>
                                  <div
                                    className={styles.link28}
                                    onClick={onLinkContainerClick16}
                                  >
                                    <div className={styles.container67}>
                                      <a
                                        className={styles.likes}
                                        href="https://www.instagram.com/p/C9WDNqgoLQk/liked_by/"
                                        target="_blank"
                                      >
                                        777,977 likes
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <MessageIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.backgroundshadow}>
                  <img
                    className={styles.containerIcon}
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
        </div>
      </div>
    </section>
  );
};

export default Container2;
