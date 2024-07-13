import { FunctionComponent, useCallback } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://about.meta.com/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://about.instagram.com/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://about.instagram.com/blog/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://about.instagram.com/about-us/careers");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://help.instagram.com/");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://developers.facebook.com/docs/instagram");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://www.instagram.com/legal/privacy/");
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open("https://www.instagram.com/legal/terms/");
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("https://www.instagram.com/explore/locations/");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("https://www.instagram.com/web/lite/");
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open("https://www.threads.net/");
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open("https://www.facebook.com/help/instagram/261704639352628");
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open("https://www.instagram.com/accounts/meta_verified/");
  }, []);

  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.margin}>
          <div className={styles.container1}>
            <div className={styles.margin1}>
              <div className={styles.container2}>
                <div className={styles.link} onClick={onLinkContainerClick}>
                  <div className={styles.container3}>
                    <a className={styles.meta}>Meta</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin2}>
              <div className={styles.container4}>
                <div className={styles.link1} onClick={onLinkContainerClick1}>
                  <div className={styles.container5}>
                    <a className={styles.about}>About</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin3}>
              <div className={styles.container6}>
                <div className={styles.link2} onClick={onLinkContainerClick2}>
                  <div className={styles.container7}>
                    <a className={styles.blog}>Blog</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin4}>
              <div className={styles.container8}>
                <div className={styles.link3} onClick={onLinkContainerClick3}>
                  <div className={styles.container9}>
                    <a className={styles.jobs}>Jobs</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin5}>
              <div className={styles.container10}>
                <div className={styles.link4} onClick={onLinkContainerClick4}>
                  <div className={styles.container11}>
                    <a className={styles.help}>Help</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin6}>
              <div className={styles.container12}>
                <div className={styles.link5} onClick={onLinkContainerClick5}>
                  <div className={styles.container13}>
                    <a className={styles.api}>API</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin7}>
              <div className={styles.container14}>
                <div className={styles.link6} onClick={onLinkContainerClick6}>
                  <div className={styles.container15}>
                    <a className={styles.privacy}>Privacy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin8}>
              <div className={styles.container16}>
                <div className={styles.link7} onClick={onLinkContainerClick7}>
                  <div className={styles.container17}>
                    <a className={styles.terms}>Terms</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin9}>
              <div className={styles.container18}>
                <div className={styles.link8} onClick={onLinkContainerClick8}>
                  <div className={styles.container19}>
                    <a
                      className={styles.locations}
                      href="https://www.instagram.com/explore/locations/"
                      target="_blank"
                    >
                      Locations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin10}>
              <div className={styles.container20}>
                <div className={styles.link9} onClick={onLinkContainerClick9}>
                  <div className={styles.container21}>
                    <a
                      className={styles.instagramLite}
                      href="https://www.instagram.com/web/lite/"
                      target="_blank"
                    >
                      Instagram Lite
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin11}>
              <div className={styles.container22}>
                <div className={styles.link10} onClick={onLinkContainerClick10}>
                  <div className={styles.container23}>
                    <a
                      className={styles.threads}
                      href="https://www.threads.net/"
                      target="_blank"
                    >
                      Threads
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin12}>
              <div className={styles.container24}>
                <div className={styles.link11} onClick={onLinkContainerClick11}>
                  <div className={styles.container25}>
                    <a
                      className={styles.contactUploading}
                      href="https://www.facebook.com/help/instagram/261704639352628"
                      target="_blank"
                    >{`Contact Uploading & Non-Users`}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin13}>
              <div className={styles.container26}>
                <div className={styles.link12} onClick={onLinkContainerClick12}>
                  <div className={styles.container27}>
                    <a
                      className={styles.metaVerified}
                      href="https://www.instagram.com/accounts/meta_verified/"
                      target="_blank"
                    >
                      Meta Verified
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.margin14}>
          <div className={styles.container28}>
            <div className={styles.container29}>
              <div className={styles.container30}>
                <div className={styles.container31}>
                  <a className={styles.english}>English</a>
                </div>
                <div className={styles.margin15}>
                  <div className={styles.container32}>
                    <div className={styles.container33}>
                      <img
                        className={styles.imgDownChevronIcon}
                        alt=""
                        src="/img--down-chevron-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin16}>
              <div className={styles.container34}>
                <div className={styles.container35}>
                  <div className={styles.instagramFromMeta}>
                    © 2024 Instagram from Meta
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

export default Footer;
