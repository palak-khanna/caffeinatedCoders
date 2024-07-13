import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Container3.module.css";

export type Container3Type = {
  className?: string;

  /** Style props */
  containerMarginTop?: CSSProperties["marginTop"];

  /** Action props */
  __PH1__?: () => void;
};

const Container3: FunctionComponent<Container3Type> = ({
  className = "",
  containerMarginTop,
  __PH1__,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: containerMarginTop,
    };
  }, [containerMarginTop]);

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
    navigate("/profile");
  }, [navigate]);

  return (
    <div
      className={[styles.container, className].join(" ")}
      style={containerStyle}
    >
      <div className={styles.verticalborder}>
        <div className={styles.container1}>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <div className={styles.container4}>
                  <img
                    className={styles.imgHome}
                    loading="lazy"
                    alt=""
                    src="/img--home.svg"
                  />
                </div>
              </div>
              <div className={styles.container5}>
                <div className={styles.container6}>
                  <div className={styles.container7}>
                    <a className={styles.home}>Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container8} onClick={onContainerClick}>
          <div className={styles.link1}>
            <div className={styles.container9}>
              <div className={styles.container10}>
                <div className={styles.container11}>
                  <img
                    className={styles.imgExplore}
                    loading="lazy"
                    alt=""
                    src="/img--explore.svg"
                  />
                </div>
              </div>
              <div className={styles.container12}>
                <div className={styles.container13}>
                  <div className={styles.container14}>
                    <a className={styles.explore}>Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container15} onClick={__PH1__}>
          <div className={styles.container16}>
            <div className={styles.container17}>
              <img
                className={styles.imgNewPost}
                loading="lazy"
                alt=""
                src="/img--new-post.svg"
              />
            </div>
          </div>
          <div className={styles.container18}>
            <div className={styles.container19}>
              <div className={styles.container20}>
                <a className={styles.create}>Create</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.linkDirectMessaging4Ne}
          onClick={onLinkDirectMessaging4NeClick}
        >
          <div className={styles.container21}>
            <div className={styles.container22}>
              <div className={styles.container23}>
                <img
                  className={styles.imgMessenger}
                  loading="lazy"
                  alt=""
                  src="/img--messenger.svg"
                />
                <div className={styles.container24}>
                  <div className={styles.backgroundborder}>
                    <div className={styles.container25}>
                      <a className={styles.emptyNotification}>4</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container26}>
              <div className={styles.container27}>
                <div className={styles.container28}>
                  <a className={styles.messages}>Messages</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container29} />
        <div className={styles.containerParent}>
          <div className={styles.container30}>
            <div className={styles.link2}>
              <div className={styles.container31}>
                <div className={styles.container32}>
                  <div className={styles.container33}>
                    <img
                      className={styles.imgNotifications}
                      loading="lazy"
                      alt=""
                      src="/img--notifications.svg"
                    />
                    <div className={styles.container34}>
                      <div className={styles.backgroundborder1} />
                    </div>
                  </div>
                </div>
                <div className={styles.container35}>
                  <div className={styles.container36}>
                    <div className={styles.container37}>
                      <div className={styles.container38}>
                        <div className={styles.container39}>
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
          <div className={styles.container40}>
            <div className={styles.link3} onClick={onLinkContainerClick1}>
              <div className={styles.container41}>
                <div className={styles.container42}>
                  <div className={styles.container43}>
                    <div className={styles.link4}>
                      <img
                        className={styles.njpgIcon}
                        loading="lazy"
                        alt=""
                        src="/434243569-385077337778848-8668198796112953130-njpg@2x.png"
                      />
                      <div className={styles.border} />
                    </div>
                  </div>
                </div>
                <div className={styles.container44}>
                  <div className={styles.container45}>
                    <div className={styles.container46}>
                      <div className={styles.profile}>Profile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
