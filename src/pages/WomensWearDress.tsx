import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import Border2 from "../components/Border2";
import Border1 from "../components/Border1";
import Border from "../components/Border";
import VerticalBorder from "../components/VerticalBorder";
import { useNavigate } from "react-router-dom";
import ProductInfoContainer from "../components/ProductInfoContainer";
import styles from "./WomensWearDress.module.css";

const WomensWearDress: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.myntra.com/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.myntra.com/clothing");
  }, []);

  const onBackContainerClick = useCallback(() => {
    navigate("/your-post-home-page-edit");
  }, [navigate]);

  const onLinkContainerClick2 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264882/buy"
    );
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/pretty+loving+thing/pretty-loving-thing-chiffon-mini-dress/21097650/buy"
    );
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-sweetheart-neck-a-line-dress/21582122/buy"
    );
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/baesd/baesd-floral-print-v-neck-georgette-maxi-dress/26694318/buy"
    );
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mango/mango-embroidered-sheath-midi-dress/29752792/buy"
    );
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/sera/sera-fuchsia-shirt-collar-cuffed-sleeve-wrap-dress/25218702/buy"
    );
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-strapless-ruched-sheath-mini-dress/24506036/buy"
    );
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264878/buy"
    );
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/dressberry/dressberry-pink-floral-printed-puff-sleeves-square-neck-maxi-dress/24000348/buy"
    );
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/kalini/kalini-floral-layered-georgette-maxi-dress/22222458/buy"
    );
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/baesd/baesd-women-sequined-maxi-dress/28752876/buy"
    );
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-off-white--peach-coloured-floral-a-line-mini-dress/20264812/buy"
    );
  }, []);

  const onLinkContainerClick14 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-blue--white-ditsy-floral-midi-fit--flare-dress/14819674/buy"
    );
  }, []);

  const onLinkContainerClick15 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/tokyo+talkies/tokyo-talkies-white-floral-printed-puff-sleeves-fit--flare-dress/23771840/buy"
    );
  }, []);

  const onLinkContainerClick16 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/roadster/the-roadster-lifestyle-co-floral-printed-cotton-a-line-dress/29904796/buy"
    );
  }, []);

  const onLinkContainerClick17 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/all+about+you/all-about-you-striped-tie-up-neck-batwing-sleeves-kaftan-midi-dress/28761260/buy"
    );
  }, []);

  const onLinkContainerClick18 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/addyvero/addyvero-glitter-ruched-wrap-bodycon-dress/26788328/buy"
    );
  }, []);

  const onLinkContainerClick19 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-v-neck-a-line-dress/21509636/buy"
    );
  }, []);

  const onLinkContainerClick20 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/anouk/anouk-women-red--whitegeometric-printed-pure-cotton-fit-and-flare-midi-dress/19050226/buy"
    );
  }, []);

  const onLinkContainerClick21 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-red-v-neck-puff-sleeves-wrap-dress/27268526/buy"
    );
  }, []);

  const onLinkContainerClick22 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mango/mango-buttoned-flared-sleeves-empire-midi-dress/28844284/buy"
    );
  }, []);

  const onLinkContainerClick23 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/aayu/aayu-floral-georgette-midi-dress/21850888/buy"
    );
  }, []);

  const onLinkContainerClick24 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/baesd/baesd-floral-print-puff-sleeve-georgette-maxi-dress/26694316/buy"
    );
  }, []);

  const onLinkContainerClick25 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mango/mango-floral-print-waist-tie-up-a-line-midi-dress/29933919/buy"
    );
  }, []);

  const onLinkContainerClick26 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/ketch/ketch-shoulder-straps-bodycon-dress/22510992/buy"
    );
  }, []);

  const onLinkContainerClick27 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/kalini/kalini-abstract-printed-flutter-sleeves-maxi-dress/25496242/buy"
    );
  }, []);

  const onLinkContainerClick28 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mango/mango-floral-embroidered-a-line-dress/29752814/buy"
    );
  }, []);

  const onLinkContainerClick29 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/aayu/aayu-floral-printed-fit--flare-midi-dress/21850876/buy"
    );
  }, []);

  const onLinkContainerClick30 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/indibelle/indibelle-burgundy--orange-floral-puff-sleeves-midi-dress/18135174/buy"
    );
  }, []);

  const onLinkContainerClick31 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-round-neck-front-slit-cut-outs-maxi-dress/26225154/buy"
    );
  }, []);

  const onLinkContainerClick32 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/dressberry/dressberry-floral-printed-tiered-shoulder-strap-fit--flare-maxi-dress/25014536/buy"
    );
  }, []);

  const onLinkContainerClick33 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/sheetal+associates/sheetal-associates-flared-sleeve-maxi-dress/29038836/buy"
    );
  }, []);

  const onLinkContainerClick34 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-shoulder-strap-bodycon-midi-dress/23008458/buy"
    );
  }, []);

  const onLinkContainerClick35 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/ziva+fashion/ziva-fashion-self-design-embellished-maxi-sheath-dress/29288016/buy"
    );
  }, []);

  const onLinkContainerClick36 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/dressberry/dressberry-black-v-neck-sheath-dress/27850042/buy"
    );
  }, []);

  const onLinkContainerClick37 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mango/mango-printed-puff-sleeve-a-line-midi-dress/28774548/buy"
    );
  }, []);

  const onLinkContainerClick38 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/iuga/iuga-floral-printed-sheath-dress/27458436/buy"
    );
  }, []);

  const onLinkContainerClick39 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/varanga/varanga-crepe-a-line-midi-dress/24591414/buy"
    );
  }, []);

  const onLinkContainerClick40 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-shoulder-straps-sheath-midi-dress/26225006/buy"
    );
  }, []);

  const onLinkContainerClick41 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/aahwan/aahwan-puff-sleeves-sweetheart-neck-ruched-a-line-mini-dress/26461148/buy"
    );
  }, []);

  const onLinkContainerClick42 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/sera/sera-black-shirt-collar-wrap-mini-dress/25218684/buy"
    );
  }, []);

  const onLinkContainerClick43 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/tulsattva/tulsattva-off-white-midi-dress/19628870/buy"
    );
  }, []);

  const onLinkContainerClick44 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/kassually/kassually-black--red-floral-print-a-line-midi-dress/27164628/buy"
    );
  }, []);

  const onLinkContainerClick45 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/trendyol/trendyol-floral-midi-flared-sleeve-dress/21597488/buy"
    );
  }, []);

  const onLinkContainerClick46 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/aayu/aayu-self-design-ruffles-detail-flounce-georgette-midi-fit--flare-dress/21850892/buy"
    );
  }, []);

  const onLinkContainerClick47 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/athena/athena-lavender-solid-accordion-pleats-wrap-dress/18962952/buy"
    );
  }, []);

  const onLinkContainerClick48 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mango/mango-striped-keyhole-neck-sheath-mini-dress/28197750/buy"
    );
  }, []);

  const onLinkContainerClick49 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/stylum/stylum-cream-coloured--black-bohemian-print-flared-sleeve-fit--flare-dress/22555284/buy"
    );
  }, []);

  const onLinkContainerClick50 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/dodo+%26+moa/dodo--moa-one-shoulder-colourblocked-sheath-midi-dress/28195650/buy"
    );
  }, []);

  const onLinkContainerClick51 = useCallback(() => {
    window.open(
      "https://www.myntra.com/dresses/mango/mango-floral-print-empire-midi-dress/29037634/buy"
    );
  }, []);

  return (
    <div className={styles.womensWearDress}>
      <Header
        bagHref="https://www.myntra.com/checkout/cart"
        bagTarget="_blank"
        containerAlignSelf="stretch"
        containerMarginLeft="unset"
        containerWidth="unset"
      />
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.horizontalDivider}>
            <div className={styles.container} />
          </div>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.link} onClick={onLinkContainerClick}>
                    <a className={styles.home}>Home</a>
                  </div>
                  <div className={styles.departmentSeparator}>/</div>
                </div>
                <div className={styles.item1}>
                  <div className={styles.link1} onClick={onLinkContainerClick1}>
                    <a
                      className={styles.clothing}
                      href="https://www.myntra.com/clothing"
                      target="_blank"
                    >
                      Clothing
                    </a>
                  </div>
                  <div className={styles.div}>/</div>
                </div>
                <div className={styles.item2}>
                  <a className={styles.dresses}>Dresses</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.margin}>
            <div className={styles.container4}>
              <div className={styles.heading1}>
                <a className={styles.dresses1}>Dresses</a>
              </div>
              <div className={styles.container5}>
                <div className={styles.items}>- 127175 items</div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.container6}>
          <div className={styles.section}>
            <div className={styles.horizontalborder}>
              <a className={styles.filters}>FILTERS</a>
              <div className={styles.clearFilter}>
                <a className={styles.clearAll}>CLEAR ALL</a>
              </div>
            </div>
            <Border2 />
            <div className={styles.categories}>
              <div className={styles.border}>
                <b className={styles.categories1}>Categories</b>
                <div className={styles.categoryItems}>
                  <div className={styles.label}>
                    <input
                      className={styles.backgroundborder}
                      type="checkbox"
                    />
                    <div className={styles.categoryNames}>
                      <div className={styles.dresses2}>Dresses</div>
                      <div className={styles.subcategoryDropdown}>
                        <div className={styles.ethnicDressSeparator}>
                          (114754)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.label1}>
                    <input
                      className={styles.backgroundborder1}
                      type="checkbox"
                    />
                    <div className={styles.ethnicDressesParent}>
                      <div className={styles.ethnicDresses}>Ethnic Dresses</div>
                      <div className={styles.div1}>(12428)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.border1}>
                <div className={styles.brandList}>
                  <div className={styles.brandDropdown}>
                    <div className={styles.brandLabel}>
                      <b className={styles.brand}>Brand</b>
                    </div>
                    <div className={styles.background}>
                      <img
                        className={styles.imageIcon}
                        loading="lazy"
                        alt=""
                        src="/image12@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.brandOptions}>
                    <div className={styles.label2}>
                      <input
                        className={styles.backgroundborder2}
                        type="checkbox"
                      />
                      <div className={styles.brandNames}>
                        <div className={styles.trendyol}>Trendyol</div>
                        <div className={styles.moreBrands}>(5137)</div>
                      </div>
                    </div>
                    <div className={styles.label3}>
                      <input
                        className={styles.backgroundborder3}
                        type="checkbox"
                      />
                      <div className={styles.stylecastParent}>
                        <div className={styles.stylecast}>StyleCast</div>
                        <div className={styles.div2}>(5124)</div>
                      </div>
                    </div>
                    <div className={styles.label4}>
                      <input
                        className={styles.backgroundborder4}
                        type="checkbox"
                      />
                      <div className={styles.luluSkyParent}>
                        <div className={styles.luluSky}>{`LULU & SKY`}</div>
                        <div className={styles.div3}>(4311)</div>
                      </div>
                    </div>
                    <div className={styles.label5}>
                      <input
                        className={styles.backgroundborder5}
                        type="checkbox"
                      />
                      <div className={styles.jcCollectionParent}>
                        <div className={styles.jcCollection}>JC Collection</div>
                        <div className={styles.moreBrandSeparatorWrapper}>
                          <div className={styles.moreBrandSeparator}>
                            (3228)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label6}>
                      <input
                        className={styles.backgroundborder6}
                        type="checkbox"
                      />
                      <div className={styles.tokyoTalkiesParent}>
                        <div className={styles.tokyoTalkies}>Tokyo Talkies</div>
                        <div className={styles.div4}>(2844)</div>
                      </div>
                    </div>
                    <div className={styles.label7}>
                      <input
                        className={styles.backgroundborder7}
                        type="checkbox"
                      />
                      <div className={styles.baesdParent}>
                        <div className={styles.baesd}>BAESD</div>
                        <div className={styles.wrapper}>
                          <div className={styles.div5}>(2383)</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label8}>
                      <input
                        className={styles.backgroundborder8}
                        type="checkbox"
                      />
                      <div className={styles.dressberryParent}>
                        <div className={styles.dressberry}>DressBerry</div>
                        <div className={styles.frame}>
                          <div className={styles.div6}>(2256)</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label9}>
                      <input
                        className={styles.backgroundborder9}
                        type="checkbox"
                      />
                      <div className={styles.dodoMoaParent}>
                        <div className={styles.dodoMoa}>{`DODO & MOA`}</div>
                        <div className={styles.frameDiv}>
                          <div className={styles.div7}>(1994)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.showMoreBrands}>
                  <div className={styles.more}>+ 1574 more</div>
                </div>
              </div>
            </div>
            <Border1
              rs199ToRs73899="Rs. 207 to Rs. 75156"
              prop="(127125)"
              rs73899ToRs147599="Rs. 75156 to Rs. 150105"
              prop1="(49)"
              rs147599ToRs221299="Rs. 150105 to Rs. 225054"
              prop2="(6)"
              rs221299ToRs294999="Rs. 225054 to Rs. 300003"
              prop3="(2)"
            />
            <Border
              image="/image-42@2x.png"
              green="Black "
              prop="(21909)"
              pink="Blue "
              prop1="(14508)"
              blue="Pink "
              prop2="(11312)"
              black="Green "
              prop3="(11072)"
              red="White "
              prop4="(9568)"
              yellow="Red "
              prop5="(6232)"
              prop6="(5283)"
              more="+ 38 more"
            />
            <VerticalBorder />
            <div className={styles.back} onClick={onBackContainerClick}>
              <div className={styles.back1}>{`BACK `}</div>
            </div>
          </div>
          <div className={styles.container7}>
            <div className={styles.container8}>
              <div className={styles.section1}>
                <div className={styles.sortHeadings}>
                  <div className={styles.list1}>
                    <div className={styles.itemmargin}>
                      <a className={styles.heading4}>Bundles</a>
                      <img
                        className={styles.imageIcon1}
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                    <div className={styles.itemmargin1}>
                      <div className={styles.heading41}>Country of Origin</div>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                    <div className={styles.itemmargin2}>
                      <div className={styles.heading42}>Size</div>
                      <img
                        className={styles.imageIcon3}
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.backgroundborder10}>
                  <div className={styles.sortByContainer}>
                    <span>{`Sort by : `}</span>
                    <b className={styles.recommended}>Recommended</b>
                  </div>
                  <div className={styles.sortIconContainer}>
                    <img
                      className={styles.imageIcon4}
                      alt=""
                      src="/image-101@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container9}>
              <div className={styles.section2}>
                <div className={styles.productListing}>
                  <div className={styles.productWrapper}>
                    <div className={styles.productItems}>
                      <div className={styles.productItem}>
                        <div className={styles.productLink}>
                          <div
                            className={styles.link2}
                            onClick={onLinkContainerClick2}
                          >
                            <div className={styles.productBackgrounds}>
                              <div className={styles.container10}>
                                <div className={styles.background1}>
                                  <div className={styles.container11}>
                                    <div className={styles.picture}>
                                      <img
                                        className={
                                          styles.be8a4bad6a984069Be3dA0db81Icon
                                        }
                                        alt=""
                                        src="/be8a4bad6a984069be3da0db810b9caf1696402765298varangawomendresses65016964027648991jpg@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay}>
                                <div className={styles.container12}>
                                  <b className={styles.placeholder}>3.8</b>
                                </div>
                                <img
                                  className={styles.imageIcon5}
                                  alt=""
                                  src="/image-104@2x.png"
                                />
                                <div className={styles.container13}>
                                  <div className={styles.margin1}>
                                    <div className={styles.container14}>
                                      <b className={styles.brandPlaceholder}>
                                        |
                                      </b>
                                    </div>
                                  </div>
                                  <b className={styles.k}>1.2k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.productInfoOverlay}>
                              <div className={styles.discountDetails}>
                                <a
                                  className={styles.varanga}
                                  href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264882/buy"
                                  target="_blank"
                                >
                                  Varanga
                                </a>
                                <a
                                  className={styles.solidCrepeALine}
                                  href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264882/buy"
                                  target="_blank"
                                >
                                  Solid Crepe A-Line Midi Dress
                                </a>
                                <div className={styles.priceContainer}>
                                  <a
                                    className={styles.rs683}
                                    href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264882/buy"
                                    target="_blank"
                                  >
                                    Rs. 683
                                  </a>
                                  <a
                                    className={styles.rs3599}
                                    href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264882/buy"
                                    target="_blank"
                                  >
                                    Rs. 3599
                                  </a>
                                  <a
                                    className={styles.off}
                                    href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264882/buy"
                                    target="_blank"
                                  >
                                    (81% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link3}
                          onClick={onLinkContainerClick3}
                        >
                          <ProductInfoContainer
                            fd0176406fe44c4e851c9ba83="/8973d9adeba14c6f924bb12a8b8908771670409983445prettylovingthingblackchiffonminidress1jpg@2x.png"
                            firstBrandInfo="4.3"
                            image="/image-114@2x.png"
                            secondEmptyOverlayContain="110"
                          />
                          <div className={styles.background2}>
                            <a
                              className={styles.prettyLovingThing}
                              href="https://www.myntra.com/dresses/pretty+loving+thing/pretty-loving-thing-chiffon-mini-dress/21097650/buy"
                              target="_blank"
                            >
                              PRETTY LOVING THING
                            </a>
                            <div className={styles.productNameContainer}>
                              <div className={styles.itemShortInfo}>
                                <a
                                  className={styles.chiffonMiniDress}
                                  href="https://www.myntra.com/dresses/pretty+loving+thing/pretty-loving-thing-chiffon-mini-dress/21097650/buy"
                                  target="_blank"
                                >
                                  Chiffon Mini Dress
                                </a>
                                <div className={styles.shortProductPrice}>
                                  <a
                                    className={styles.rs449}
                                    href="https://www.myntra.com/dresses/pretty+loving+thing/pretty-loving-thing-chiffon-mini-dress/21097650/buy"
                                    target="_blank"
                                  >
                                    Rs. 449
                                  </a>
                                  <a
                                    className={styles.rs2999}
                                    href="https://www.myntra.com/dresses/pretty+loving+thing/pretty-loving-thing-chiffon-mini-dress/21097650/buy"
                                    target="_blank"
                                  >
                                    Rs. 2999
                                  </a>
                                  <a
                                    className={styles.off1}
                                    href="https://www.myntra.com/dresses/pretty+loving+thing/pretty-loving-thing-chiffon-mini-dress/21097650/buy"
                                    target="_blank"
                                  >
                                    (85% OFF)
                                  </a>
                                </div>
                              </div>
                              <a
                                className={styles.onlyFewLeft}
                                href="https://www.myntra.com/dresses/pretty+loving+thing/pretty-loving-thing-chiffon-mini-dress/21097650/buy"
                                target="_blank"
                              >
                                Only Few Left!
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link4}
                          onClick={onLinkContainerClick4}
                        >
                          <div className={styles.container15}>
                            <div className={styles.background3}>
                              <div className={styles.container16}>
                                <div className={styles.picture1}>
                                  <img
                                    className={
                                      styles.d3094e6743f9A27646d32bfd94Icon
                                    }
                                    alt=""
                                    src="/5060d3094e6743f9a27646d32bfd94dd1673964921442dresses1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.background4}>
                            <div className={styles.ad}>AD</div>
                          </div>
                          <div className={styles.pictureSaleDetails}>
                            <div className={styles.overlay1}>
                              <div className={styles.container17}>
                                <b className={styles.b}>4</b>
                              </div>
                              <img
                                className={styles.imageIcon6}
                                loading="lazy"
                                alt=""
                                src="/image-19@2x.png"
                              />
                              <div className={styles.container18}>
                                <div className={styles.margin2}>
                                  <div className={styles.container19}>
                                    <b className={styles.saleValue}>|</b>
                                  </div>
                                </div>
                                <b className={styles.priceTag}>561</b>
                              </div>
                            </div>
                            <div className={styles.productDetails}>
                              <a
                                className={styles.trendyol1}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-sweetheart-neck-a-line-dress/21582122/buy"
                                target="_blank"
                              >
                                Trendyol
                              </a>
                              <a
                                className={styles.printedALineDress}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-sweetheart-neck-a-line-dress/21582122/buy"
                                target="_blank"
                              >
                                Printed A-Line Dress
                              </a>
                              <div className={styles.productDiscountValue}>
                                <a
                                  className={styles.rs2051}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-sweetheart-neck-a-line-dress/21582122/buy"
                                  target="_blank"
                                >
                                  Rs. 2051
                                </a>
                                <a
                                  className={styles.rs2699}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-sweetheart-neck-a-line-dress/21582122/buy"
                                  target="_blank"
                                >
                                  Rs. 2699
                                </a>
                                <a
                                  className={styles.off2}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-sweetheart-neck-a-line-dress/21582122/buy"
                                  target="_blank"
                                >
                                  (24% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.productItem1}>
                        <div
                          className={styles.link5}
                          onClick={onLinkContainerClick5}
                        >
                          <div className={styles.containerParent}>
                            <div className={styles.container20}>
                              <div className={styles.background5}>
                                <div className={styles.container21}>
                                  <div className={styles.picture2}>
                                    <img
                                      className={
                                        styles.fb89088Ff2845ae90d8Bd45c67Icon
                                      }
                                      alt=""
                                      src="/4fb89088ff2845ae90d8bd45c678db901703703944222baesdnavybluewhitefloralprintgeorgettemaxidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay2}>
                              <div className={styles.container22}>
                                <b className={styles.b1}>3.8</b>
                              </div>
                              <img
                                className={styles.imageIcon7}
                                alt=""
                                src="/image-133@2x.png"
                              />
                              <div className={styles.container23}>
                                <div className={styles.margin3}>
                                  <div className={styles.container24}>
                                    <b className={styles.wishlistCounter}>|</b>
                                  </div>
                                </div>
                                <b className={styles.k1}>3.1k</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productLink1}>
                            <div className={styles.bottomProduct}>
                              <a
                                className={styles.baesd1}
                                href="https://www.myntra.com/dresses/baesd/baesd-floral-print-v-neck-georgette-maxi-dress/26694318/buy"
                                target="_blank"
                              >
                                BAESD
                              </a>
                              <a
                                className={styles.floralPrintedMaxi}
                                href="https://www.myntra.com/dresses/baesd/baesd-floral-print-v-neck-georgette-maxi-dress/26694318/buy"
                                target="_blank"
                              >
                                Floral Printed Maxi Dress
                              </a>
                              <div className={styles.itemPrice}>
                                <a
                                  className={styles.rs725}
                                  href="https://www.myntra.com/dresses/baesd/baesd-floral-print-v-neck-georgette-maxi-dress/26694318/buy"
                                  target="_blank"
                                >
                                  Rs. 725
                                </a>
                                <a
                                  className={styles.rs3499}
                                  href="https://www.myntra.com/dresses/baesd/baesd-floral-print-v-neck-georgette-maxi-dress/26694318/buy"
                                  target="_blank"
                                >
                                  Rs. 3499
                                </a>
                                <a
                                  className={styles.rs2774Off}
                                  href="https://www.myntra.com/dresses/baesd/baesd-floral-print-v-neck-georgette-maxi-dress/26694318/buy"
                                  target="_blank"
                                >
                                  (Rs. 2774 OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link6}
                          onClick={onLinkContainerClick6}
                        >
                          <div className={styles.containerWrapper}>
                            <div className={styles.container25}>
                              <div className={styles.background6}>
                                <div className={styles.container26}>
                                  <div className={styles.picture3}>
                                    <img
                                      className={
                                        styles.b25f632c864549a4836e32e3bbIcon
                                      }
                                      loading="lazy"
                                      alt=""
                                      src="/b25f632c864549a4836e32e3bb3626141716790087607dressesmangowomendressesmangowomen1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.background7}>
                                <div className={styles.ad1}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner}>
                            <div className={styles.mangoParent}>
                              <a
                                className={styles.mango}
                                href="https://www.myntra.com/dresses/mango/mango-embroidered-sheath-midi-dress/29752792/buy"
                                target="_blank"
                              >
                                MANGO
                              </a>
                              <a
                                className={styles.embroideredSheathMidi}
                                href="https://www.myntra.com/dresses/mango/mango-embroidered-sheath-midi-dress/29752792/buy"
                                target="_blank"
                              >
                                Embroidered Sheath Midi Dress
                              </a>
                              <div className={styles.itemSalePrice}>
                                <a
                                  className={styles.rs7191}
                                  href="https://www.myntra.com/dresses/mango/mango-embroidered-sheath-midi-dress/29752792/buy"
                                  target="_blank"
                                >
                                  Rs. 7191
                                </a>
                                <a
                                  className={styles.rs7990}
                                  href="https://www.myntra.com/dresses/mango/mango-embroidered-sheath-midi-dress/29752792/buy"
                                  target="_blank"
                                >
                                  Rs. 7990
                                </a>
                                <a
                                  className={styles.off3}
                                  href="https://www.myntra.com/dresses/mango/mango-embroidered-sheath-midi-dress/29752792/buy"
                                  target="_blank"
                                >
                                  (10% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link7}
                          onClick={onLinkContainerClick7}
                        >
                          <div className={styles.containerGroup}>
                            <div className={styles.container27}>
                              <div className={styles.background8}>
                                <div className={styles.container28}>
                                  <div className={styles.picture4}>
                                    <img
                                      className={
                                        styles.d8b873f274e440381e1816b7f5Icon
                                      }
                                      alt=""
                                      src="/3d8b873f274e440381e1816b7f5597031695901342743serafuchsiadress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay3}>
                              <div className={styles.container29}>
                                <b className={styles.b2}>4</b>
                              </div>
                              <img
                                className={styles.imageIcon8}
                                alt=""
                                src="/image3@2x.png"
                              />
                              <div className={styles.container30}>
                                <div className={styles.margin4}>
                                  <div className={styles.container31}>
                                    <b className={styles.discountNotification}>
                                      |
                                    </b>
                                  </div>
                                </div>
                                <b className={styles.k2}>1.9k</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkChild}>
                            <div className={styles.seraParent}>
                              <a
                                className={styles.sera}
                                href="https://www.myntra.com/dresses/sera/sera-fuchsia-shirt-collar-cuffed-sleeve-wrap-dress/25218702/buy"
                                target="_blank"
                              >
                                Sera
                              </a>
                              <a
                                className={styles.shirtCollarWrap}
                                href="https://www.myntra.com/dresses/sera/sera-fuchsia-shirt-collar-cuffed-sleeve-wrap-dress/25218702/buy"
                                target="_blank"
                              >
                                Shirt Collar Wrap Dress
                              </a>
                              <div className={styles.pictureSalePrice}>
                                <a
                                  className={styles.rs491}
                                  href="https://www.myntra.com/dresses/sera/sera-fuchsia-shirt-collar-cuffed-sleeve-wrap-dress/25218702/buy"
                                  target="_blank"
                                >
                                  Rs. 491
                                </a>
                                <a
                                  className={styles.rs1694}
                                  href="https://www.myntra.com/dresses/sera/sera-fuchsia-shirt-collar-cuffed-sleeve-wrap-dress/25218702/buy"
                                  target="_blank"
                                >
                                  Rs. 1694
                                </a>
                                <a
                                  className={styles.off4}
                                  href="https://www.myntra.com/dresses/sera/sera-fuchsia-shirt-collar-cuffed-sleeve-wrap-dress/25218702/buy"
                                  target="_blank"
                                >
                                  (71% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.productItem2}>
                        <div className={styles.linkParent}>
                          <div
                            className={styles.link8}
                            onClick={onLinkContainerClick8}
                          >
                            <div className={styles.container32}>
                              <div className={styles.background9}>
                                <div className={styles.container33}>
                                  <div className={styles.picture5}>
                                    <img
                                      className={
                                        styles.ca3660e4849Bb52156267400d0Icon
                                      }
                                      alt=""
                                      src="/85064ca3660e4849bb52156267400d001692120849003trendyoloffshouldersheathminidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.backgroundWrapper}>
                              <div className={styles.background10}>
                                <div className={styles.ad2}>AD</div>
                              </div>
                            </div>
                            <div className={styles.productBadge}>
                              <div className={styles.brandInfo}>
                                <div className={styles.overlay4}>
                                  <div className={styles.container34}>
                                    <b className={styles.placeholder1}>3.9</b>
                                  </div>
                                  <img
                                    className={styles.imageIcon9}
                                    alt=""
                                    src="/image-46@2x.png"
                                  />
                                  <div className={styles.container35}>
                                    <div className={styles.margin5}>
                                      <div className={styles.container36}>
                                        <b className={styles.placeholder2}>|</b>
                                      </div>
                                    </div>
                                    <b className={styles.b3}>82</b>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.background11}>
                                <div className={styles.detailsContainer}>
                                  <a
                                    className={styles.trendyol2}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-strapless-ruched-sheath-mini-dress/24506036/buy"
                                    target="_blank"
                                  >
                                    Trendyol
                                  </a>
                                  <a
                                    className={styles.straplessSheathMini}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-strapless-ruched-sheath-mini-dress/24506036/buy"
                                    target="_blank"
                                  >
                                    Strapless Sheath Mini Dress
                                  </a>
                                  <div className={styles.productPrice}>
                                    <a
                                      className={styles.rs3115}
                                      href="https://www.myntra.com/dresses/trendyol/trendyol-strapless-ruched-sheath-mini-dress/24506036/buy"
                                      target="_blank"
                                    >
                                      Rs. 3115
                                    </a>
                                    <a
                                      className={styles.rs4099}
                                      href="https://www.myntra.com/dresses/trendyol/trendyol-strapless-ruched-sheath-mini-dress/24506036/buy"
                                      target="_blank"
                                    >
                                      Rs. 4099
                                    </a>
                                    <a
                                      className={styles.off5}
                                      href="https://www.myntra.com/dresses/trendyol/trendyol-strapless-ruched-sheath-mini-dress/24506036/buy"
                                      target="_blank"
                                    >
                                      (24% OFF)
                                    </a>
                                  </div>
                                </div>
                                <a
                                  className={styles.onlyFewLeft1}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-strapless-ruched-sheath-mini-dress/24506036/buy"
                                  target="_blank"
                                >
                                  Only Few Left!
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className={styles.link9}
                            onClick={onLinkContainerClick9}
                          >
                            <div className={styles.containerContainer}>
                              <div className={styles.container37}>
                                <div className={styles.background12}>
                                  <div className={styles.container38}>
                                    <div className={styles.picture6}>
                                      <img
                                        className={
                                          styles.f404c383d542cd8fb7C74f8af4Icon
                                        }
                                        alt=""
                                        src="/78f404c383d542cd8fb7c74f8af4521b1696402785576varangawomendresses4816964027851681jpg@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay5}>
                                <div className={styles.container39}>
                                  <b className={styles.placeholder3}>3.8</b>
                                </div>
                                <img
                                  className={styles.imageIcon10}
                                  alt=""
                                  src="/image4@2x.png"
                                />
                                <div className={styles.container40}>
                                  <div className={styles.margin6}>
                                    <div className={styles.container41}>
                                      <b className={styles.saleNotification}>
                                        |
                                      </b>
                                    </div>
                                  </div>
                                  <b className={styles.k3}>1.2k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.productDetails1}>
                              <div className={styles.productName}>
                                <a
                                  className={styles.varanga1}
                                  href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264878/buy"
                                  target="_blank"
                                >
                                  Varanga
                                </a>
                                <a
                                  className={styles.solidCrepeALine1}
                                  href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264878/buy"
                                  target="_blank"
                                >
                                  Solid Crepe A-Line Midi Dress
                                </a>
                                <div className={styles.productPrice1}>
                                  <a
                                    className={styles.rs699}
                                    href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264878/buy"
                                    target="_blank"
                                  >
                                    Rs. 699
                                  </a>
                                  <a
                                    className={styles.rs35991}
                                    href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264878/buy"
                                    target="_blank"
                                  >
                                    Rs. 3599
                                  </a>
                                  <a
                                    className={styles.rs2900Off}
                                    href="https://www.myntra.com/dresses/varanga/varanga-solid-gathered-puff-sleeve-crepe-a-line-midi-dress/25264878/buy"
                                    target="_blank"
                                  >
                                    (Rs. 2900 OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link10}
                          onClick={onLinkContainerClick10}
                        >
                          <div className={styles.containerParent1}>
                            <div className={styles.container42}>
                              <div className={styles.background13}>
                                <div className={styles.container43}>
                                  <div className={styles.picture7}>
                                    <img
                                      className={
                                        styles.d25dFcd842c1A334F8f92e580fIcon
                                      }
                                      alt=""
                                      src="/2870d25dfcd842c1a334f8f92e580fb31689938455915dressberrypinkfloralprintedpuffsleevessquareneckmaxi3jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay6}>
                              <div className={styles.container44}>
                                <b className={styles.b4}>4.3</b>
                              </div>
                              <img
                                className={styles.imageIcon11}
                                alt=""
                                src="/image-28@2x.png"
                              />
                              <div className={styles.container45}>
                                <div className={styles.margin7}>
                                  <div className={styles.container46}>
                                    <b className={styles.b5}>|</b>
                                  </div>
                                </div>
                                <b className={styles.k4}>1.2k</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner1}>
                            <div className={styles.dressberryGroup}>
                              <a
                                className={styles.dressberry1}
                                href="https://www.myntra.com/dresses/dressberry/dressberry-pink-floral-printed-puff-sleeves-square-neck-maxi-dress/24000348/buy"
                                target="_blank"
                              >
                                DressBerry
                              </a>
                              <a
                                className={styles.floralPrintedMaxi1}
                                href="https://www.myntra.com/dresses/dressberry/dressberry-pink-floral-printed-puff-sleeves-square-neck-maxi-dress/24000348/buy"
                                target="_blank"
                              >
                                Floral Printed Maxi Dress
                              </a>
                              <div className={styles.rs799Parent}>
                                <a
                                  className={styles.rs799}
                                  href="https://www.myntra.com/dresses/dressberry/dressberry-pink-floral-printed-puff-sleeves-square-neck-maxi-dress/24000348/buy"
                                  target="_blank"
                                >
                                  Rs. 799
                                </a>
                                <a
                                  className={styles.rs3330}
                                  href="https://www.myntra.com/dresses/dressberry/dressberry-pink-floral-printed-puff-sleeves-square-neck-maxi-dress/24000348/buy"
                                  target="_blank"
                                >
                                  Rs. 3330
                                </a>
                                <a
                                  className={styles.off6}
                                  href="https://www.myntra.com/dresses/dressberry/dressberry-pink-floral-printed-puff-sleeves-square-neck-maxi-dress/24000348/buy"
                                  target="_blank"
                                >
                                  (76% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.productItem3}>
                        <div
                          className={styles.link11}
                          onClick={onLinkContainerClick11}
                        >
                          <div className={styles.containerParent2}>
                            <div className={styles.container47}>
                              <div className={styles.background14}>
                                <div className={styles.container48}>
                                  <div className={styles.picture8}>
                                    <img
                                      className={
                                        styles.d7193de287254e6d9cc712fb0eIcon
                                      }
                                      alt=""
                                      src="/d7193de287254e6d9cc712fb0e429ea01677864432164kalinigreenflorallayeredgeorgettemaxidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay7}>
                              <div className={styles.container49}>
                                <b className={styles.b6}>4.1</b>
                              </div>
                              <img
                                className={styles.imageIcon12}
                                alt=""
                                src="/image-182@2x.png"
                              />
                              <div className={styles.container50}>
                                <div className={styles.margin8}>
                                  <div className={styles.container51}>
                                    <b className={styles.b7}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b8}>754</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner2}>
                            <div className={styles.kaliniParent}>
                              <a
                                className={styles.kalini}
                                href="https://www.myntra.com/dresses/kalini/kalini-floral-layered-georgette-maxi-dress/22222458/buy"
                                target="_blank"
                              >
                                KALINI
                              </a>
                              <a
                                className={styles.floralGeorgetteMaxi}
                                href="https://www.myntra.com/dresses/kalini/kalini-floral-layered-georgette-maxi-dress/22222458/buy"
                                target="_blank"
                              >
                                Floral Georgette Maxi Dress
                              </a>
                              <div className={styles.rs609Parent}>
                                <a
                                  className={styles.rs609}
                                  href="https://www.myntra.com/dresses/kalini/kalini-floral-layered-georgette-maxi-dress/22222458/buy"
                                  target="_blank"
                                >
                                  Rs. 609
                                </a>
                                <a
                                  className={styles.rs3808}
                                  href="https://www.myntra.com/dresses/kalini/kalini-floral-layered-georgette-maxi-dress/22222458/buy"
                                  target="_blank"
                                >
                                  Rs. 3808
                                </a>
                                <a
                                  className={styles.rs3199Off}
                                  href="https://www.myntra.com/dresses/kalini/kalini-floral-layered-georgette-maxi-dress/22222458/buy"
                                  target="_blank"
                                >
                                  (Rs. 3199 OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link12}
                          onClick={onLinkContainerClick12}
                        >
                          <div className={styles.containerParent3}>
                            <div className={styles.container52}>
                              <div className={styles.background15}>
                                <div className={styles.container53}>
                                  <div className={styles.picture9}>
                                    <img
                                      className={
                                        styles.ec452d8468db41ebB9aa3a2d2aIcon
                                      }
                                      alt=""
                                      src="/ec452d8468db41ebb9aa3a2d2aeecdfb1712434266400baesdnetmaxidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay8}>
                              <div className={styles.container54}>
                                <b className={styles.b9}>4.3</b>
                              </div>
                              <img
                                className={styles.imageIcon13}
                                alt=""
                                src="/image-421@2x.png"
                              />
                              <div className={styles.container55}>
                                <div className={styles.margin9}>
                                  <div className={styles.container56}>
                                    <b className={styles.b10}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b11}>40</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner3}>
                            <div className={styles.baesdGroup}>
                              <a
                                className={styles.baesd2}
                                href="https://www.myntra.com/dresses/baesd/baesd-women-sequined-maxi-dress/28752876/buy"
                                target="_blank"
                              >
                                BAESD
                              </a>
                              <a
                                className={styles.sequinedMaxiDress}
                                href="https://www.myntra.com/dresses/baesd/baesd-women-sequined-maxi-dress/28752876/buy"
                                target="_blank"
                              >
                                Sequined Maxi Dress
                              </a>
                              <div className={styles.rs1375Parent}>
                                <a
                                  className={styles.rs1375}
                                  href="https://www.myntra.com/dresses/baesd/baesd-women-sequined-maxi-dress/28752876/buy"
                                  target="_blank"
                                >
                                  Rs. 1375
                                </a>
                                <a
                                  className={styles.rs8599}
                                  href="https://www.myntra.com/dresses/baesd/baesd-women-sequined-maxi-dress/28752876/buy"
                                  target="_blank"
                                >
                                  Rs. 8599
                                </a>
                                <a
                                  className={styles.off7}
                                  href="https://www.myntra.com/dresses/baesd/baesd-women-sequined-maxi-dress/28752876/buy"
                                  target="_blank"
                                >
                                  (84% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link13}
                          onClick={onLinkContainerClick13}
                        >
                          <div className={styles.container57}>
                            <div className={styles.background16}>
                              <div className={styles.picture10}>
                                <img
                                  className={
                                    styles.cd5e44aA9d94015B67f29704e8Icon
                                  }
                                  alt=""
                                  src="/0cd5e44aa9d94015b67f29704e81e8411664909480036dresses1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.background17}>
                            <div className={styles.ad3}>AD</div>
                          </div>
                          <div className={styles.overlayParent}>
                            <div className={styles.overlay9}>
                              <div className={styles.container58}>
                                <b className={styles.b12}>4</b>
                              </div>
                              <img
                                className={styles.imageIcon14}
                                alt=""
                                src="/image5@2x.png"
                              />
                              <div className={styles.container59}>
                                <div className={styles.margin10}>
                                  <div className={styles.container60}>
                                    <b className={styles.b13}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b14}>560</b>
                              </div>
                            </div>
                            <div className={styles.trendyolParent}>
                              <a
                                className={styles.trendyol3}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-off-white--peach-coloured-floral-a-line-mini-dress/20264812/buy"
                                target="_blank"
                              >
                                Trendyol
                              </a>
                              <a
                                className={styles.floralALineMini}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-off-white--peach-coloured-floral-a-line-mini-dress/20264812/buy"
                                target="_blank"
                              >
                                Floral A-Line Mini Dress
                              </a>
                              <div className={styles.rs1884Parent}>
                                <a
                                  className={styles.rs1884}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-off-white--peach-coloured-floral-a-line-mini-dress/20264812/buy"
                                  target="_blank"
                                >
                                  Rs. 1884
                                </a>
                                <a
                                  className={styles.rs2899}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-off-white--peach-coloured-floral-a-line-mini-dress/20264812/buy"
                                  target="_blank"
                                >
                                  Rs. 2899
                                </a>
                                <a
                                  className={styles.off8}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-off-white--peach-coloured-floral-a-line-mini-dress/20264812/buy"
                                  target="_blank"
                                >
                                  (35% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.imageLink}>
                      <div className={styles.productLink2}>
                        <div className={styles.productContainer}>
                          <div
                            className={styles.link14}
                            onClick={onLinkContainerClick14}
                          >
                            <div className={styles.containerParent4}>
                              <div className={styles.container61}>
                                <div className={styles.background18}>
                                  <div className={styles.picture11}>
                                    <img
                                      className={
                                        styles.cc469a7a5c724422Ab26500512Icon
                                      }
                                      alt=""
                                      src="/cc469a7a5c724422ab26500512399b781629947353620mastharbourwomendresses92116299473531555jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay10}>
                                <div className={styles.container62}>
                                  <b className={styles.placeholder4}>4.1</b>
                                </div>
                                <img
                                  className={styles.imageIcon15}
                                  loading="lazy"
                                  alt=""
                                  src="/image-214@2x.png"
                                />
                                <div className={styles.container63}>
                                  <div className={styles.margin11}>
                                    <div className={styles.container64}>
                                      <b className={styles.message}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.padding}>622</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.productInfo}>
                              <div className={styles.brand1}>
                                <a
                                  className={styles.mastHarbour}
                                  href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-blue--white-ditsy-floral-midi-fit--flare-dress/14819674/buy"
                                  target="_blank"
                                >{`Mast & Harbour`}</a>
                                <a
                                  className={styles.ditsyFloralMidi}
                                  href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-blue--white-ditsy-floral-midi-fit--flare-dress/14819674/buy"
                                  target="_blank"
                                >
                                  Ditsy Floral Midi Dress
                                </a>
                                <div className={styles.price}>
                                  <a
                                    className={styles.rs662}
                                    href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-blue--white-ditsy-floral-midi-fit--flare-dress/14819674/buy"
                                    target="_blank"
                                  >
                                    Rs. 662
                                  </a>
                                  <a
                                    className={styles.rs1699}
                                    href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-blue--white-ditsy-floral-midi-fit--flare-dress/14819674/buy"
                                    target="_blank"
                                  >
                                    Rs. 1699
                                  </a>
                                  <a
                                    className={styles.off9}
                                    href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-blue--white-ditsy-floral-midi-fit--flare-dress/14819674/buy"
                                    target="_blank"
                                  >
                                    (61% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link15}
                          onClick={onLinkContainerClick15}
                        >
                          <div className={styles.action}>
                            <div className={styles.container65}>
                              <div className={styles.background19}>
                                <div className={styles.picture12}>
                                  <img
                                    className={
                                      styles.c4649D966434dB38f66f95efe5Icon
                                    }
                                    alt=""
                                    src="/726c4649d966434db38f66f95efe53e31687837509778tokyotalkieswhitefloralprintpuffsleevefitflaredress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay11}>
                              <div className={styles.container66}>
                                <b className={styles.name}>4.4</b>
                              </div>
                              <img
                                className={styles.imageIcon16}
                                loading="lazy"
                                alt=""
                                src="/image-221@2x.png"
                              />
                              <div className={styles.container67}>
                                <div className={styles.margin12}>
                                  <div className={styles.container68}>
                                    <b className={styles.discount}>|</b>
                                  </div>
                                </div>
                                <b className={styles.productCard}>458</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productInfo1}>
                            <div className={styles.placeholder5}>
                              <a
                                className={styles.tokyoTalkies1}
                                href="https://www.myntra.com/dresses/tokyo+talkies/tokyo-talkies-white-floral-printed-puff-sleeves-fit--flare-dress/23771840/buy"
                                target="_blank"
                              >
                                Tokyo Talkies
                              </a>
                              <a
                                className={styles.fitFlare}
                                href="https://www.myntra.com/dresses/tokyo+talkies/tokyo-talkies-white-floral-printed-puff-sleeves-fit--flare-dress/23771840/buy"
                                target="_blank"
                              >{`Fit & Flare Puff Sleeve Dress`}</a>
                              <div className={styles.whitespace}>
                                <a
                                  className={styles.rs749}
                                  href="https://www.myntra.com/dresses/tokyo+talkies/tokyo-talkies-white-floral-printed-puff-sleeves-fit--flare-dress/23771840/buy"
                                  target="_blank"
                                >
                                  Rs. 749
                                </a>
                                <a
                                  className={styles.rs2749}
                                  href="https://www.myntra.com/dresses/tokyo+talkies/tokyo-talkies-white-floral-printed-puff-sleeves-fit--flare-dress/23771840/buy"
                                  target="_blank"
                                >
                                  Rs. 2749
                                </a>
                                <a
                                  className={styles.rs2000Off}
                                  href="https://www.myntra.com/dresses/tokyo+talkies/tokyo-talkies-white-floral-printed-puff-sleeves-fit--flare-dress/23771840/buy"
                                  target="_blank"
                                >
                                  (Rs. 2000 OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.quickAdd}>
                          <div
                            className={styles.link16}
                            onClick={onLinkContainerClick16}
                          >
                            <div className={styles.container69}>
                              <div className={styles.background20}>
                                <div className={styles.picture13}>
                                  <img
                                    className={
                                      styles.ae491584532825e7c88d049c92Icon
                                    }
                                    alt=""
                                    src="/44738ae491584532825e7c88d049c9221717652929715theroadsterlifestylecofloralprintedcottonalinedress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.background21}>
                              <div className={styles.ad4}>AD</div>
                            </div>
                            <div className={styles.action1}>
                              <div className={styles.overlay12}>
                                <div className={styles.container70}>
                                  <b className={styles.label10}>3.4</b>
                                </div>
                                <img
                                  className={styles.imageIcon17}
                                  loading="lazy"
                                  alt=""
                                  src="/image-232@2x.png"
                                />
                                <div className={styles.container71}>
                                  <div className={styles.margin13}>
                                    <div className={styles.container72}>
                                      <b className={styles.brand2}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.name1}>5</b>
                                </div>
                              </div>
                              <div className={styles.title}>
                                <a
                                  className={styles.roadster}
                                  href="https://www.myntra.com/dresses/roadster/the-roadster-lifestyle-co-floral-printed-cotton-a-line-dress/29904796/buy"
                                  target="_blank"
                                >
                                  Roadster
                                </a>
                                <a
                                  className={styles.printedCottonALine}
                                  href="https://www.myntra.com/dresses/roadster/the-roadster-lifestyle-co-floral-printed-cotton-a-line-dress/29904796/buy"
                                  target="_blank"
                                >
                                  Printed Cotton A-Line Dress
                                </a>
                                <div className={styles.original}>
                                  <a
                                    className={styles.rs818}
                                    href="https://www.myntra.com/dresses/roadster/the-roadster-lifestyle-co-floral-printed-cotton-a-line-dress/29904796/buy"
                                    target="_blank"
                                  >
                                    Rs. 818
                                  </a>
                                  <a
                                    className={styles.rs2099}
                                    href="https://www.myntra.com/dresses/roadster/the-roadster-lifestyle-co-floral-printed-cotton-a-line-dress/29904796/buy"
                                    target="_blank"
                                  >
                                    Rs. 2099
                                  </a>
                                  <a
                                    className={styles.off10}
                                    href="https://www.myntra.com/dresses/roadster/the-roadster-lifestyle-co-floral-printed-cotton-a-line-dress/29904796/buy"
                                    target="_blank"
                                  >
                                    (61% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link17}
                          onClick={onLinkContainerClick17}
                        >
                          <div className={styles.icon}>
                            <div className={styles.container73}>
                              <div className={styles.background22}>
                                <div className={styles.picture14}>
                                  <img
                                    className={
                                      styles.a8ce8a0c369642a588ebB0a2b2Icon
                                    }
                                    alt=""
                                    src="/a8ce8a0c369642a588ebb0a2b28a4bf81713523038046allaboutyouwomendresses71817135230376821jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay13}>
                              <div className={styles.container74}>
                                <b className={styles.name2}>4.3</b>
                              </div>
                              <img
                                className={styles.imageIcon18}
                                loading="lazy"
                                alt=""
                                src="/image-212@2x.png"
                              />
                              <div className={styles.container75}>
                                <div className={styles.margin14}>
                                  <div className={styles.container76}>
                                    <b className={styles.discount1}>|</b>
                                  </div>
                                </div>
                                <b className={styles.productCard1}>103</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productInfo2}>
                            <div className={styles.placeholder6}>
                              <a
                                className={styles.allAboutYou}
                                href="https://www.myntra.com/dresses/all+about+you/all-about-you-striped-tie-up-neck-batwing-sleeves-kaftan-midi-dress/28761260/buy"
                                target="_blank"
                              >
                                all about you
                              </a>
                              <a
                                className={styles.stripedKaftanDress}
                                href="https://www.myntra.com/dresses/all+about+you/all-about-you-striped-tie-up-neck-batwing-sleeves-kaftan-midi-dress/28761260/buy"
                                target="_blank"
                              >
                                Striped Kaftan Dress
                              </a>
                              <div className={styles.priceInfo}>
                                <a
                                  className={styles.rs815}
                                  href="https://www.myntra.com/dresses/all+about+you/all-about-you-striped-tie-up-neck-batwing-sleeves-kaftan-midi-dress/28761260/buy"
                                  target="_blank"
                                >
                                  Rs. 815
                                </a>
                                <a
                                  className={styles.rs2399}
                                  href="https://www.myntra.com/dresses/all+about+you/all-about-you-striped-tie-up-neck-batwing-sleeves-kaftan-midi-dress/28761260/buy"
                                  target="_blank"
                                >
                                  Rs. 2399
                                </a>
                                <a
                                  className={styles.off11}
                                  href="https://www.myntra.com/dresses/all+about+you/all-about-you-striped-tie-up-neck-batwing-sleeves-kaftan-midi-dress/28761260/buy"
                                  target="_blank"
                                >
                                  (66% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link18}
                          onClick={onLinkContainerClick18}
                        >
                          <div className={styles.embroideredDress}>
                            <div className={styles.container77}>
                              <div className={styles.background23}>
                                <div className={styles.picture15}>
                                  <img
                                    className={
                                      styles.ac5250040ff4fa3Bcb41579e2fIcon
                                    }
                                    alt=""
                                    src="/5ac5250040ff4fa3bcb41579e2f5a8991704437733010addyveroburgundybodycondress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay14}>
                              <div className={styles.container78}>
                                <b className={styles.originalPriceValue}>4.3</b>
                              </div>
                              <img
                                className={styles.imageIcon19}
                                loading="lazy"
                                alt=""
                                src="/image-252@2x.png"
                              />
                              <div className={styles.container79}>
                                <div className={styles.margin15}>
                                  <div className={styles.container80}>
                                    <b className={styles.dressOffer}>|</b>
                                  </div>
                                </div>
                                <b className={styles.similarItem}>946</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productDetails2}>
                            <div className={styles.dressDetails}>
                              <a
                                className={styles.addyvero}
                                href="https://www.myntra.com/dresses/addyvero/addyvero-glitter-ruched-wrap-bodycon-dress/26788328/buy"
                                target="_blank"
                              >
                                ADDYVERO
                              </a>
                              <a
                                className={styles.glitterBodyconDress}
                                href="https://www.myntra.com/dresses/addyvero/addyvero-glitter-ruched-wrap-bodycon-dress/26788328/buy"
                                target="_blank"
                              >
                                Glitter Bodycon Dress
                              </a>
                              <div className={styles.pricing}>
                                <a
                                  className={styles.rs679}
                                  href="https://www.myntra.com/dresses/addyvero/addyvero-glitter-ruched-wrap-bodycon-dress/26788328/buy"
                                  target="_blank"
                                >
                                  Rs. 679
                                </a>
                                <a
                                  className={styles.rs1999}
                                  href="https://www.myntra.com/dresses/addyvero/addyvero-glitter-ruched-wrap-bodycon-dress/26788328/buy"
                                  target="_blank"
                                >
                                  Rs. 1999
                                </a>
                                <a
                                  className={styles.off12}
                                  href="https://www.myntra.com/dresses/addyvero/addyvero-glitter-ruched-wrap-bodycon-dress/26788328/buy"
                                  target="_blank"
                                >
                                  (66% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link19}
                          onClick={onLinkContainerClick19}
                        >
                          <div className={styles.container81}>
                            <div className={styles.background24}>
                              <div className={styles.picture16}>
                                <img
                                  className={
                                    styles.eaa3dc896f4982881dBfdc0033Icon
                                  }
                                  alt=""
                                  src="/91eaa3dc896f4982881dbfdc0033ca651673447796954dresses1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.adBackground}>
                            <div className={styles.background25}>
                              <div className={styles.ad5}>AD</div>
                            </div>
                          </div>
                          <div className={styles.productOffer}>
                            <div className={styles.productCard2}>
                              <div className={styles.overlay15}>
                                <div className={styles.container82}>
                                  <b className={styles.overlayImage}>3.2</b>
                                </div>
                                <img
                                  className={styles.imageIcon20}
                                  loading="lazy"
                                  alt=""
                                  src="/image-20@2x.png"
                                />
                                <div className={styles.container83}>
                                  <div className={styles.margin16}>
                                    <div className={styles.container84}>
                                      <b className={styles.priceCut}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.vNeckDress}>6</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.background26}>
                              <div className={styles.infoContainer}>
                                <a
                                  className={styles.trendyol4}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-v-neck-a-line-dress/21509636/buy"
                                  target="_blank"
                                >
                                  Trendyol
                                </a>
                                <a
                                  className={styles.vNeckALineDress}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-v-neck-a-line-dress/21509636/buy"
                                  target="_blank"
                                >
                                  V-Neck A-Line Dress
                                </a>
                                <div className={styles.rs2379Parent}>
                                  <a
                                    className={styles.rs2379}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-v-neck-a-line-dress/21509636/buy"
                                    target="_blank"
                                  >
                                    Rs. 2379
                                  </a>
                                  <a
                                    className={styles.rs2799}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-v-neck-a-line-dress/21509636/buy"
                                    target="_blank"
                                  >
                                    Rs. 2799
                                  </a>
                                  <a
                                    className={styles.off13}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-v-neck-a-line-dress/21509636/buy"
                                    target="_blank"
                                  >
                                    (15% OFF)
                                  </a>
                                </div>
                              </div>
                              <a
                                className={styles.onlyFewLeft2}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-v-neck-a-line-dress/21509636/buy"
                                target="_blank"
                              >
                                Only Few Left!
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={styles.printLink}>
                          <div
                            className={styles.link20}
                            onClick={onLinkContainerClick20}
                          >
                            <div className={styles.productShowcase}>
                              <div className={styles.container85}>
                                <div className={styles.background27}>
                                  <div className={styles.picture17}>
                                    <img
                                      className={
                                        styles.e208376B98d4eaa8d0068c9badIcon
                                      }
                                      alt=""
                                      src="/3e208376b98d4eaa8d0068c9badadffa1666951667421anoukwomendresses78216669516668821jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay16}>
                                <div className={styles.container86}>
                                  <b className={styles.b15}>3.5</b>
                                </div>
                                <img
                                  className={styles.imageIcon21}
                                  loading="lazy"
                                  alt=""
                                  src="/image-122@2x.png"
                                />
                                <div className={styles.container87}>
                                  <div className={styles.margin17}>
                                    <div className={styles.container88}>
                                      <b className={styles.emptyBox}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.k5}>5.8k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.productDetails3}>
                              <div className={styles.anoukParent}>
                                <a
                                  className={styles.anouk}
                                  href="https://www.myntra.com/dresses/anouk/anouk-women-red--whitegeometric-printed-pure-cotton-fit-and-flare-midi-dress/19050226/buy"
                                  target="_blank"
                                >
                                  Anouk
                                </a>
                                <a
                                  className={styles.womenPrintedMidi}
                                  href="https://www.myntra.com/dresses/anouk/anouk-women-red--whitegeometric-printed-pure-cotton-fit-and-flare-midi-dress/19050226/buy"
                                  target="_blank"
                                >
                                  Women Printed Midi Dress
                                </a>
                                <div className={styles.pricingInfo}>
                                  <a
                                    className={styles.rs639}
                                    href="https://www.myntra.com/dresses/anouk/anouk-women-red--whitegeometric-printed-pure-cotton-fit-and-flare-midi-dress/19050226/buy"
                                    target="_blank"
                                  >
                                    Rs. 639
                                  </a>
                                  <a
                                    className={styles.rs19991}
                                    href="https://www.myntra.com/dresses/anouk/anouk-women-red--whitegeometric-printed-pure-cotton-fit-and-flare-midi-dress/19050226/buy"
                                    target="_blank"
                                  >
                                    Rs. 1999
                                  </a>
                                  <a
                                    className={styles.off14}
                                    href="https://www.myntra.com/dresses/anouk/anouk-women-red--whitegeometric-printed-pure-cotton-fit-and-flare-midi-dress/19050226/buy"
                                    target="_blank"
                                  >
                                    (68% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.border2}>
                          <div
                            className={styles.link21}
                            onClick={onLinkContainerClick21}
                          >
                            <div className={styles.categories2}>
                              <div className={styles.container89}>
                                <div className={styles.background28}>
                                  <div className={styles.picture18}>
                                    <img
                                      className={
                                        styles.b2cd32f5ee24be38da4291caa1Icon
                                      }
                                      alt=""
                                      src="/8b2cd32f5ee24be38da4291caa1f695c1706789329667mastharbourdress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay17}>
                                <div className={styles.container90}>
                                  <b className={styles.priceRange}>3.8</b>
                                </div>
                                <img
                                  className={styles.imageIcon22}
                                  loading="lazy"
                                  alt=""
                                  src="/image-2811@2x.png"
                                />
                                <div className={styles.container91}>
                                  <div className={styles.margin18}>
                                    <div className={styles.container92}>
                                      <b className={styles.moreDiscounts}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.discountFilter}>306</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.product}>
                              <div className={styles.mastHarbourParent}>
                                <a
                                  className={styles.mastHarbour1}
                                  href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-red-v-neck-puff-sleeves-wrap-dress/27268526/buy"
                                  target="_blank"
                                >{`Mast & Harbour`}</a>
                                <a
                                  className={styles.puffSleevesWrap}
                                  href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-red-v-neck-puff-sleeves-wrap-dress/27268526/buy"
                                  target="_blank"
                                >
                                  Puff Sleeves Wrap Dress
                                </a>
                                <div className={styles.productCard3}>
                                  <a
                                    className={styles.rs629}
                                    href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-red-v-neck-puff-sleeves-wrap-dress/27268526/buy"
                                    target="_blank"
                                  >
                                    Rs. 629
                                  </a>
                                  <a
                                    className={styles.rs20991}
                                    href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-red-v-neck-puff-sleeves-wrap-dress/27268526/buy"
                                    target="_blank"
                                  >
                                    Rs. 2099
                                  </a>
                                  <a
                                    className={styles.off15}
                                    href="https://www.myntra.com/dresses/mast+%26+harbour/mast--harbour-red-v-neck-puff-sleeves-wrap-dress/27268526/buy"
                                    target="_blank"
                                  >
                                    (70% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.product1}>
                          <div
                            className={styles.link22}
                            onClick={onLinkContainerClick22}
                          >
                            <div className={styles.container93}>
                              <div className={styles.background29}>
                                <div className={styles.picture19}>
                                  <img
                                    className={
                                      styles.a177ddd6ebc4db7A9fd6d37bc1Icon
                                    }
                                    alt=""
                                    src="/5a177ddd6ebc4db7a9fd6d37bc1b4d011715689115942mangobuttonedflaredsleevesempiremididress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.background30}>
                              <div className={styles.ad6}>AD</div>
                            </div>
                            <div className={styles.fortyFourthProduct}>
                              <div className={styles.overlay18}>
                                <div className={styles.container94}>
                                  <b className={styles.fortySeventhProduct}>
                                    4.4
                                  </b>
                                </div>
                                <img
                                  className={styles.imageIcon23}
                                  loading="lazy"
                                  alt=""
                                  src="/image-292@2x.png"
                                />
                                <div className={styles.container95}>
                                  <div className={styles.margin19}>
                                    <div className={styles.container96}>
                                      <b className={styles.fiftySecondProduct}>
                                        |
                                      </b>
                                    </div>
                                  </div>
                                  <b className={styles.productContainer1}>28</b>
                                </div>
                              </div>
                              <div className={styles.pagination}>
                                <a
                                  className={styles.mango1}
                                  href="https://www.myntra.com/dresses/mango/mango-buttoned-flared-sleeves-empire-midi-dress/28844284/buy"
                                  target="_blank"
                                >
                                  MANGO
                                </a>
                                <a
                                  className={styles.buttonedEmpireMidi}
                                  href="https://www.myntra.com/dresses/mango/mango-buttoned-flared-sleeves-empire-midi-dress/28844284/buy"
                                  target="_blank"
                                >
                                  Buttoned Empire Midi Dress
                                </a>
                                <div className={styles.pageNumber}>
                                  <a
                                    className={styles.rs2863}
                                    href="https://www.myntra.com/dresses/mango/mango-buttoned-flared-sleeves-empire-midi-dress/28844284/buy"
                                    target="_blank"
                                  >
                                    Rs. 2863
                                  </a>
                                  <a
                                    className={styles.rs4090}
                                    href="https://www.myntra.com/dresses/mango/mango-buttoned-flared-sleeves-empire-midi-dress/28844284/buy"
                                    target="_blank"
                                  >
                                    Rs. 4090
                                  </a>
                                  <a
                                    className={styles.off16}
                                    href="https://www.myntra.com/dresses/mango/mango-buttoned-flared-sleeves-empire-midi-dress/28844284/buy"
                                    target="_blank"
                                  >
                                    (30% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link23}
                          onClick={onLinkContainerClick23}
                        >
                          <div className={styles.footer}>
                            <div className={styles.container97}>
                              <div className={styles.background31}>
                                <div className={styles.picture20}>
                                  <img
                                    className={
                                      styles.de6705e44a74866B50a2b6e760Icon
                                    }
                                    alt=""
                                    src="/1de6705e44a74866b50a2b6e760eb9bf1675685309799aayupinkethnicmotifsgeorgettemaximididress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay19}>
                              <div className={styles.container98}>
                                <b className={styles.footerProductName}>4.1</b>
                              </div>
                              <img
                                className={styles.imageIcon24}
                                loading="lazy"
                                alt=""
                                src="/image-302@2x.png"
                              />
                              <div className={styles.container99}>
                                <div className={styles.margin20}>
                                  <div className={styles.container100}>
                                    <b className={styles.b16}>|</b>
                                  </div>
                                </div>
                                <b className={styles.k6}>6.4k</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner4}>
                            <div className={styles.aayuParent}>
                              <a
                                className={styles.aayu}
                                href="https://www.myntra.com/dresses/aayu/aayu-floral-georgette-midi-dress/21850888/buy"
                                target="_blank"
                              >
                                aayu
                              </a>
                              <a
                                className={styles.floralGeorgetteMidi}
                                href="https://www.myntra.com/dresses/aayu/aayu-floral-georgette-midi-dress/21850888/buy"
                                target="_blank"
                              >
                                Floral Georgette Midi Dress
                              </a>
                              <div className={styles.rs623Parent}>
                                <a
                                  className={styles.rs623}
                                  href="https://www.myntra.com/dresses/aayu/aayu-floral-georgette-midi-dress/21850888/buy"
                                  target="_blank"
                                >
                                  Rs. 623
                                </a>
                                <a
                                  className={styles.rs2599}
                                  href="https://www.myntra.com/dresses/aayu/aayu-floral-georgette-midi-dress/21850888/buy"
                                  target="_blank"
                                >
                                  Rs. 2599
                                </a>
                                <a
                                  className={styles.off17}
                                  href="https://www.myntra.com/dresses/aayu/aayu-floral-georgette-midi-dress/21850888/buy"
                                  target="_blank"
                                >
                                  (76% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.productLink3}>
                        <div className={styles.linkWrapper}>
                          <div
                            className={styles.link24}
                            onClick={onLinkContainerClick24}
                          >
                            <div className={styles.containerParent5}>
                              <div className={styles.container101}>
                                <div className={styles.background32}>
                                  <div className={styles.picture21}>
                                    <img
                                      className={
                                        styles.c0d60c935040c7Ab1cE3776f40Icon
                                      }
                                      alt=""
                                      src="/63c0d60c935040c7ab1ce3776f40b30c1703703942674baesdpinkwhiteprintpuffsleevegeorgettemaxidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay20}>
                                <div className={styles.container102}>
                                  <b className={styles.b17}>3.8</b>
                                </div>
                                <img
                                  className={styles.imageIcon25}
                                  loading="lazy"
                                  alt=""
                                  src="/image-122@2x.png"
                                />
                                <div className={styles.container103}>
                                  <div className={styles.margin21}>
                                    <div className={styles.container104}>
                                      <b className={styles.b18}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.k7}>3.1k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner5}>
                              <div className={styles.baesdContainer}>
                                <a
                                  className={styles.baesd3}
                                  href="https://www.myntra.com/dresses/baesd/baesd-floral-print-puff-sleeve-georgette-maxi-dress/26694316/buy"
                                  target="_blank"
                                >
                                  BAESD
                                </a>
                                <a
                                  className={styles.floralPrintedMaxi2}
                                  href="https://www.myntra.com/dresses/baesd/baesd-floral-print-puff-sleeve-georgette-maxi-dress/26694316/buy"
                                  target="_blank"
                                >
                                  Floral Printed Maxi Dress
                                </a>
                                <div className={styles.rs725Parent}>
                                  <a
                                    className={styles.rs7251}
                                    href="https://www.myntra.com/dresses/baesd/baesd-floral-print-puff-sleeve-georgette-maxi-dress/26694316/buy"
                                    target="_blank"
                                  >
                                    Rs. 725
                                  </a>
                                  <a
                                    className={styles.rs34991}
                                    href="https://www.myntra.com/dresses/baesd/baesd-floral-print-puff-sleeve-georgette-maxi-dress/26694316/buy"
                                    target="_blank"
                                  >
                                    Rs. 3499
                                  </a>
                                  <a
                                    className={styles.rs2774Off1}
                                    href="https://www.myntra.com/dresses/baesd/baesd-floral-print-puff-sleeve-georgette-maxi-dress/26694316/buy"
                                    target="_blank"
                                  >
                                    (Rs. 2774 OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link25}
                          onClick={onLinkContainerClick25}
                        >
                          <div className={styles.containerFrame}>
                            <div className={styles.container105}>
                              <div className={styles.background33}>
                                <div className={styles.picture22}>
                                  <img
                                    className={
                                      styles.e8bacEe29439fBd4784a88870fIcon
                                    }
                                    loading="lazy"
                                    alt=""
                                    src="/937e8bacee29439fbd4784a88870f3821719210047875mangowomendresses73617192100473911jpg@2x.png"
                                  />
                                </div>
                              </div>
                              <div className={styles.background34}>
                                <div className={styles.ad7}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner6}>
                            <div className={styles.mangoGroup}>
                              <a
                                className={styles.mango2}
                                href="https://www.myntra.com/dresses/mango/mango-floral-print-waist-tie-up-a-line-midi-dress/29933919/buy"
                                target="_blank"
                              >
                                MANGO
                              </a>
                              <a
                                className={styles.floralPrintALine}
                                href="https://www.myntra.com/dresses/mango/mango-floral-print-waist-tie-up-a-line-midi-dress/29933919/buy"
                                target="_blank"
                              >
                                Floral Print A-Line Midi Dress
                              </a>
                              <div className={styles.rs4311Parent}>
                                <a
                                  className={styles.rs4311}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-print-waist-tie-up-a-line-midi-dress/29933919/buy"
                                  target="_blank"
                                >
                                  Rs. 4311
                                </a>
                                <a
                                  className={styles.rs4790}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-print-waist-tie-up-a-line-midi-dress/29933919/buy"
                                  target="_blank"
                                >
                                  Rs. 4790
                                </a>
                                <a
                                  className={styles.off18}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-print-waist-tie-up-a-line-midi-dress/29933919/buy"
                                  target="_blank"
                                >
                                  (10% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkContainer}>
                          <div
                            className={styles.link26}
                            onClick={onLinkContainerClick26}
                          >
                            <div className={styles.containerParent6}>
                              <div className={styles.container106}>
                                <div className={styles.background35}>
                                  <div className={styles.picture23}>
                                    <img
                                      className={
                                        styles.f41E3fd455a98bb59b679adcf6Icon
                                      }
                                      alt=""
                                      src="/05666f41e3fd455a98bb59b679adcf631715159681497ketchshoulderstrapsbodycondress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay21}>
                                <div className={styles.container107}>
                                  <b className={styles.placeholder7}>4.3</b>
                                </div>
                                <img
                                  className={styles.imageIcon26}
                                  loading="lazy"
                                  alt=""
                                  src="/image-171@2x.png"
                                />
                                <div className={styles.container108}>
                                  <div className={styles.margin22}>
                                    <div className={styles.container109}>
                                      <b className={styles.message1}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.productInfo3}>357</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner7}>
                              <div className={styles.ketchParent}>
                                <a
                                  className={styles.ketch}
                                  href="https://www.myntra.com/dresses/ketch/ketch-shoulder-straps-bodycon-dress/22510992/buy"
                                  target="_blank"
                                >
                                  KETCH
                                </a>
                                <a
                                  className={styles.shoulderStrapsBodycon}
                                  href="https://www.myntra.com/dresses/ketch/ketch-shoulder-straps-bodycon-dress/22510992/buy"
                                  target="_blank"
                                >
                                  Shoulder Straps Bodycon Dress
                                </a>
                                <div className={styles.current}>
                                  <a
                                    className={styles.rs223}
                                    href="https://www.myntra.com/dresses/ketch/ketch-shoulder-straps-bodycon-dress/22510992/buy"
                                    target="_blank"
                                  >
                                    Rs. 223
                                  </a>
                                  <a
                                    className={styles.rs7991}
                                    href="https://www.myntra.com/dresses/ketch/ketch-shoulder-straps-bodycon-dress/22510992/buy"
                                    target="_blank"
                                  >
                                    Rs. 799
                                  </a>
                                  <a
                                    className={styles.off19}
                                    href="https://www.myntra.com/dresses/ketch/ketch-shoulder-straps-bodycon-dress/22510992/buy"
                                    target="_blank"
                                  >
                                    (72% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link27}
                          onClick={onLinkContainerClick27}
                        >
                          <div className={styles.containerParent7}>
                            <div className={styles.container110}>
                              <div className={styles.background36}>
                                <div className={styles.picture24}>
                                  <img
                                    className={
                                      styles.a897396473042268e5aFad069cIcon
                                    }
                                    alt=""
                                    src="/2a897396473042268e5afad069cb1ffb1697465640832kaliniblackfloralprintfluttersleevegeorgettemaxidress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay22}>
                              <div className={styles.container111}>
                                <b className={styles.b19}>3.9</b>
                              </div>
                              <img
                                className={styles.imageIcon27}
                                loading="lazy"
                                alt=""
                                src="/image-25@2x.png"
                              />
                              <div className={styles.container112}>
                                <div className={styles.margin23}>
                                  <div className={styles.container113}>
                                    <b className={styles.b20}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b21}>158</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner8}>
                            <div className={styles.kaliniGroup}>
                              <a
                                className={styles.kalini1}
                                href="https://www.myntra.com/dresses/kalini/kalini-abstract-printed-flutter-sleeves-maxi-dress/25496242/buy"
                                target="_blank"
                              >
                                KALINI
                              </a>
                              <a
                                className={styles.abstractPrintedMaxi}
                                href="https://www.myntra.com/dresses/kalini/kalini-abstract-printed-flutter-sleeves-maxi-dress/25496242/buy"
                                target="_blank"
                              >
                                Abstract Printed Maxi Dress
                              </a>
                              <div className={styles.rs774Parent}>
                                <a
                                  className={styles.rs774}
                                  href="https://www.myntra.com/dresses/kalini/kalini-abstract-printed-flutter-sleeves-maxi-dress/25496242/buy"
                                  target="_blank"
                                >
                                  Rs. 774
                                </a>
                                <a
                                  className={styles.rs2499}
                                  href="https://www.myntra.com/dresses/kalini/kalini-abstract-printed-flutter-sleeves-maxi-dress/25496242/buy"
                                  target="_blank"
                                >
                                  Rs. 2499
                                </a>
                                <a
                                  className={styles.off20}
                                  href="https://www.myntra.com/dresses/kalini/kalini-abstract-printed-flutter-sleeves-maxi-dress/25496242/buy"
                                  target="_blank"
                                >
                                  (69% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link28}
                          onClick={onLinkContainerClick28}
                        >
                          <div className={styles.containerWrapper1}>
                            <div className={styles.container114}>
                              <div className={styles.background37}>
                                <div className={styles.picture25}>
                                  <img
                                    className={
                                      styles.de256571Cebe4cddB8da20282dIcon
                                    }
                                    loading="lazy"
                                    alt=""
                                    src="/de256571cebe4cddb8da20282d3870e81716790084699dressesmangowomendressesmangowomendressesmangowomendressesma1jpg@2x.png"
                                  />
                                </div>
                              </div>
                              <div className={styles.background38}>
                                <div className={styles.ad8}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner9}>
                            <div className={styles.mangoContainer}>
                              <a
                                className={styles.mango3}
                                href="https://www.myntra.com/dresses/mango/mango-floral-embroidered-a-line-dress/29752814/buy"
                                target="_blank"
                              >
                                MANGO
                              </a>
                              <a
                                className={styles.embroideredALineMaxi}
                                href="https://www.myntra.com/dresses/mango/mango-floral-embroidered-a-line-dress/29752814/buy"
                                target="_blank"
                              >
                                Embroidered A-Line Maxi Dress
                              </a>
                              <div className={styles.rs8541Parent}>
                                <a
                                  className={styles.rs8541}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-embroidered-a-line-dress/29752814/buy"
                                  target="_blank"
                                >
                                  Rs. 8541
                                </a>
                                <a
                                  className={styles.rs9490}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-embroidered-a-line-dress/29752814/buy"
                                  target="_blank"
                                >
                                  Rs. 9490
                                </a>
                                <a
                                  className={styles.off21}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-embroidered-a-line-dress/29752814/buy"
                                  target="_blank"
                                >
                                  (10% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkFrame}>
                          <div
                            className={styles.link29}
                            onClick={onLinkContainerClick29}
                          >
                            <div className={styles.containerParent8}>
                              <div className={styles.container115}>
                                <div className={styles.background39}>
                                  <div className={styles.picture26}>
                                    <img
                                      className={
                                        styles.e8cf8c954c9141cf8ba8D6d344Icon
                                      }
                                      alt=""
                                      src="/e8cf8c954c9141cf8ba8d6d344fd3bce1675685242517aayubrownethnicmotifsgeorgettemaximaxidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay23}>
                                <div className={styles.container116}>
                                  <b className={styles.overlayIcon}>4.1</b>
                                </div>
                                <img
                                  className={styles.imageIcon28}
                                  loading="lazy"
                                  alt=""
                                  src="/image-343@2x.png"
                                />
                                <div className={styles.container117}>
                                  <div className={styles.margin24}>
                                    <div className={styles.container118}>
                                      <b className={styles.saleDetails}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.k8}>6.3k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.productDetails4}>
                              <div className={styles.productDescription}>
                                <a
                                  className={styles.aayu1}
                                  href="https://www.myntra.com/dresses/aayu/aayu-floral-printed-fit--flare-midi-dress/21850876/buy"
                                  target="_blank"
                                >
                                  aayu
                                </a>
                                <a
                                  className={styles.printedFit}
                                  href="https://www.myntra.com/dresses/aayu/aayu-floral-printed-fit--flare-midi-dress/21850876/buy"
                                  target="_blank"
                                >{`Printed Fit & Flare Midi Dress`}</a>
                                <div className={styles.priceDetails}>
                                  <a
                                    className={styles.rs6231}
                                    href="https://www.myntra.com/dresses/aayu/aayu-floral-printed-fit--flare-midi-dress/21850876/buy"
                                    target="_blank"
                                  >
                                    Rs. 623
                                  </a>
                                  <a
                                    className={styles.rs25991}
                                    href="https://www.myntra.com/dresses/aayu/aayu-floral-printed-fit--flare-midi-dress/21850876/buy"
                                    target="_blank"
                                  >
                                    Rs. 2599
                                  </a>
                                  <a
                                    className={styles.off22}
                                    href="https://www.myntra.com/dresses/aayu/aayu-floral-printed-fit--flare-midi-dress/21850876/buy"
                                    target="_blank"
                                  >
                                    (76% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkWrapper1}>
                          <div
                            className={styles.link30}
                            onClick={onLinkContainerClick30}
                          >
                            <div className={styles.containerParent9}>
                              <div className={styles.container119}>
                                <div className={styles.background40}>
                                  <div className={styles.picture27}>
                                    <img
                                      className={
                                        styles.f4c1a27711641b6984c1cd6fa8Icon
                                      }
                                      alt=""
                                      src="/5f4c1a27711641b6984c1cd6fa814e6d1652432891608indibellerayonwinepurplefloralprintflareddress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay24}>
                                <div className={styles.container120}>
                                  <b className={styles.b22}>4.1</b>
                                </div>
                                <img
                                  className={styles.imageIcon29}
                                  loading="lazy"
                                  alt=""
                                  src="/image-17@2x.png"
                                />
                                <div className={styles.container121}>
                                  <div className={styles.margin25}>
                                    <div className={styles.container122}>
                                      <b className={styles.b23}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.k9}>4k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner10}>
                              <div className={styles.indibelleParent}>
                                <a
                                  className={styles.indibelle}
                                  href="https://www.myntra.com/dresses/indibelle/indibelle-burgundy--orange-floral-puff-sleeves-midi-dress/18135174/buy"
                                  target="_blank"
                                >
                                  Indibelle
                                </a>
                                <a
                                  className={styles.floralMidiDress}
                                  href="https://www.myntra.com/dresses/indibelle/indibelle-burgundy--orange-floral-puff-sleeves-midi-dress/18135174/buy"
                                  target="_blank"
                                >
                                  Floral Midi Dress
                                </a>
                                <div className={styles.rs623Group}>
                                  <a
                                    className={styles.rs6232}
                                    href="https://www.myntra.com/dresses/indibelle/indibelle-burgundy--orange-floral-puff-sleeves-midi-dress/18135174/buy"
                                    target="_blank"
                                  >
                                    Rs. 623
                                  </a>
                                  <a
                                    className={styles.rs25992}
                                    href="https://www.myntra.com/dresses/indibelle/indibelle-burgundy--orange-floral-puff-sleeves-midi-dress/18135174/buy"
                                    target="_blank"
                                  >
                                    Rs. 2599
                                  </a>
                                  <a
                                    className={styles.off23}
                                    href="https://www.myntra.com/dresses/indibelle/indibelle-burgundy--orange-floral-puff-sleeves-midi-dress/18135174/buy"
                                    target="_blank"
                                  >
                                    (76% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link31}
                          onClick={onLinkContainerClick31}
                        >
                          <div className={styles.container123}>
                            <div className={styles.background41}>
                              <div className={styles.picture28}>
                                <img
                                  className={
                                    styles.e805d063a9d41f8964d569b59dIcon
                                  }
                                  alt=""
                                  src="/9e805d063a9d41f8964d569b59dbd6d11701689419225trendyoldress1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.banner}>
                            <div className={styles.background42}>
                              <div className={styles.ad9}>AD</div>
                            </div>
                          </div>
                          <div className={styles.priceContainer1}>
                            <div className={styles.info}>
                              <div className={styles.overlay25}>
                                <div className={styles.container124}>
                                  <b className={styles.fourthProduct}>4.8</b>
                                </div>
                                <img
                                  className={styles.imageIcon30}
                                  loading="lazy"
                                  alt=""
                                  src="/image-39@2x.png"
                                />
                                <div className={styles.container125}>
                                  <div className={styles.margin26}>
                                    <div className={styles.container126}>
                                      <b className={styles.ninthProduct}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.tenthProduct}>10</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.background43}>
                              <div className={styles.twelfthProduct}>
                                <a
                                  className={styles.trendyol5}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-round-neck-front-slit-cut-outs-maxi-dress/26225154/buy"
                                  target="_blank"
                                >
                                  Trendyol
                                </a>
                                <a
                                  className={styles.roundNeckCutOuts}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-round-neck-front-slit-cut-outs-maxi-dress/26225154/buy"
                                  target="_blank"
                                >
                                  Round Neck Cut-Outs Maxi Dress
                                </a>
                                <div className={styles.fifteenthProduct}>
                                  <a
                                    className={styles.rs4679}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-round-neck-front-slit-cut-outs-maxi-dress/26225154/buy"
                                    target="_blank"
                                  >
                                    Rs. 4679
                                  </a>
                                  <a
                                    className={styles.rs5199}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-round-neck-front-slit-cut-outs-maxi-dress/26225154/buy"
                                    target="_blank"
                                  >
                                    Rs. 5199
                                  </a>
                                  <a
                                    className={styles.off24}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-round-neck-front-slit-cut-outs-maxi-dress/26225154/buy"
                                    target="_blank"
                                  >
                                    (10% OFF)
                                  </a>
                                </div>
                              </div>
                              <a
                                className={styles.onlyFewLeft3}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-round-neck-front-slit-cut-outs-maxi-dress/26225154/buy"
                                target="_blank"
                              >
                                Only Few Left!
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkWrapper2}>
                          <div
                            className={styles.link32}
                            onClick={onLinkContainerClick32}
                          >
                            <div className={styles.containerParent10}>
                              <div className={styles.container127}>
                                <div className={styles.background44}>
                                  <div className={styles.picture29}>
                                    <img
                                      className={
                                        styles.d5bd11a15f554edc934f799a24Icon
                                      }
                                      alt=""
                                      src="/d5bd11a15f554edc934f799a24f8f2d91694893351346dressberrynavyblueprintgeorgettemaxidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay26}>
                                <div className={styles.container128}>
                                  <b className={styles.twentyNinthProduct}>4</b>
                                </div>
                                <img
                                  className={styles.imageIcon31}
                                  loading="lazy"
                                  alt=""
                                  src="/image-371@2x.png"
                                />
                                <div className={styles.container129}>
                                  <div className={styles.margin27}>
                                    <div className={styles.container130}>
                                      <b className={styles.thirtyFourthProduct}>
                                        |
                                      </b>
                                    </div>
                                  </div>
                                  <b className={styles.thirtyFifthProduct}>
                                    209
                                  </b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner11}>
                              <div className={styles.dressberryContainer}>
                                <a
                                  className={styles.dressberry2}
                                  href="https://www.myntra.com/dresses/dressberry/dressberry-floral-printed-tiered-shoulder-strap-fit--flare-maxi-dress/25014536/buy"
                                  target="_blank"
                                >
                                  DressBerry
                                </a>
                                <a
                                  className={styles.fitFlare1}
                                  href="https://www.myntra.com/dresses/dressberry/dressberry-floral-printed-tiered-shoulder-strap-fit--flare-maxi-dress/25014536/buy"
                                  target="_blank"
                                >{`Fit & Flare Maxi Dress`}</a>
                                <div className={styles.fortiethProduct}>
                                  <a
                                    className={styles.rs1119}
                                    href="https://www.myntra.com/dresses/dressberry/dressberry-floral-printed-tiered-shoulder-strap-fit--flare-maxi-dress/25014536/buy"
                                    target="_blank"
                                  >
                                    Rs. 1119
                                  </a>
                                  <a
                                    className={styles.rs3998}
                                    href="https://www.myntra.com/dresses/dressberry/dressberry-floral-printed-tiered-shoulder-strap-fit--flare-maxi-dress/25014536/buy"
                                    target="_blank"
                                  >
                                    Rs. 3998
                                  </a>
                                  <a
                                    className={styles.off25}
                                    href="https://www.myntra.com/dresses/dressberry/dressberry-floral-printed-tiered-shoulder-strap-fit--flare-maxi-dress/25014536/buy"
                                    target="_blank"
                                  >
                                    (72% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link33}
                          onClick={onLinkContainerClick33}
                        >
                          <div className={styles.containerParent11}>
                            <div className={styles.container131}>
                              <div className={styles.background45}>
                                <div className={styles.picture30}>
                                  <img
                                    className={
                                      styles.e4f3010a95f1460dBbbfF07811Icon
                                    }
                                    alt=""
                                    src="/e4f3010a95f1460dbbbff07811a632bd1713415789149sheetalassociatesflaredsleevemaxidress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay27}>
                              <div className={styles.container132}>
                                <b className={styles.b24}>4.1</b>
                              </div>
                              <img
                                className={styles.imageIcon32}
                                loading="lazy"
                                alt=""
                                src="/image-381@2x.png"
                              />
                              <div className={styles.container133}>
                                <div className={styles.margin28}>
                                  <div className={styles.container134}>
                                    <b className={styles.b25}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b26}>135</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner12}>
                            <div className={styles.sheetalAssociatesParent}>
                              <a
                                className={styles.sheetalAssociates}
                                href="https://www.myntra.com/dresses/sheetal+associates/sheetal-associates-flared-sleeve-maxi-dress/29038836/buy"
                                target="_blank"
                              >
                                SHEETAL Associates
                              </a>
                              <a
                                className={styles.maxiFlaredSleeve}
                                href="https://www.myntra.com/dresses/sheetal+associates/sheetal-associates-flared-sleeve-maxi-dress/29038836/buy"
                                target="_blank"
                              >
                                Maxi Flared Sleeve Dress
                              </a>
                              <div className={styles.rs619Parent}>
                                <a
                                  className={styles.rs619}
                                  href="https://www.myntra.com/dresses/sheetal+associates/sheetal-associates-flared-sleeve-maxi-dress/29038836/buy"
                                  target="_blank"
                                >
                                  Rs. 619
                                </a>
                                <a
                                  className={styles.rs19992}
                                  href="https://www.myntra.com/dresses/sheetal+associates/sheetal-associates-flared-sleeve-maxi-dress/29038836/buy"
                                  target="_blank"
                                >
                                  Rs. 1999
                                </a>
                                <a
                                  className={styles.off26}
                                  href="https://www.myntra.com/dresses/sheetal+associates/sheetal-associates-flared-sleeve-maxi-dress/29038836/buy"
                                  target="_blank"
                                >
                                  (69% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkGroup}>
                        <div
                          className={styles.link34}
                          onClick={onLinkContainerClick34}
                        >
                          <div className={styles.containerWrapper2}>
                            <div className={styles.container135}>
                              <div className={styles.background46}>
                                <div className={styles.picture31}>
                                  <img
                                    className={
                                      styles.aa32318c5e8b4f55B426F110ddIcon
                                    }
                                    loading="lazy"
                                    alt=""
                                    src="/aa32318c5e8b4f55b426f110ddaf3d0f1683164494034trendyolbodycondress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                              <div className={styles.background47}>
                                <div className={styles.ad10}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.background48}>
                            <div className={styles.trendyolGroup}>
                              <a
                                className={styles.trendyol6}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-shoulder-strap-bodycon-midi-dress/23008458/buy"
                                target="_blank"
                              >
                                Trendyol
                              </a>
                              <a
                                className={styles.bodyconMidiDress}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-shoulder-strap-bodycon-midi-dress/23008458/buy"
                                target="_blank"
                              >
                                Bodycon Midi Dress
                              </a>
                              <div className={styles.rs2787Parent}>
                                <a
                                  className={styles.rs2787}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-shoulder-strap-bodycon-midi-dress/23008458/buy"
                                  target="_blank"
                                >
                                  Rs. 2787
                                </a>
                                <a
                                  className={styles.rs40991}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-shoulder-strap-bodycon-midi-dress/23008458/buy"
                                  target="_blank"
                                >
                                  Rs. 4099
                                </a>
                                <a
                                  className={styles.off27}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-shoulder-strap-bodycon-midi-dress/23008458/buy"
                                  target="_blank"
                                >
                                  (32% OFF)
                                </a>
                              </div>
                            </div>
                            <a
                              className={styles.onlyFewLeft4}
                              href="https://www.myntra.com/dresses/trendyol/trendyol-shoulder-strap-bodycon-midi-dress/23008458/buy"
                              target="_blank"
                            >
                              Only Few Left!
                            </a>
                          </div>
                        </div>
                        <div
                          className={styles.link35}
                          onClick={onLinkContainerClick35}
                        >
                          <div className={styles.containerParent12}>
                            <div className={styles.container136}>
                              <div className={styles.background49}>
                                <div className={styles.picture32}>
                                  <img
                                    className={
                                      styles.b4717fcDabb42b4Bb5171d5476Icon
                                    }
                                    alt=""
                                    src="/0b4717fcdabb42b4bb5171d54764ce801714558731835dresses1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay28}>
                              <div className={styles.container137}>
                                <b className={styles.b27}>3.9</b>
                              </div>
                              <img
                                className={styles.imageIcon33}
                                loading="lazy"
                                alt=""
                                src="/image-392@2x.png"
                              />
                              <div className={styles.container138}>
                                <div className={styles.margin29}>
                                  <div className={styles.container139}>
                                    <b className={styles.b28}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b29}>90</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner13}>
                            <div className={styles.zivaFashionParent}>
                              <a
                                className={styles.zivaFashion}
                                href="https://www.myntra.com/dresses/ziva+fashion/ziva-fashion-self-design-embellished-maxi-sheath-dress/29288016/buy"
                                target="_blank"
                              >
                                Ziva Fashion
                              </a>
                              <a
                                className={styles.embellishedMaxiSheath}
                                href="https://www.myntra.com/dresses/ziva+fashion/ziva-fashion-self-design-embellished-maxi-sheath-dress/29288016/buy"
                                target="_blank"
                              >
                                Embellished Maxi Sheath Dress
                              </a>
                              <div className={styles.rs689Parent}>
                                <a
                                  className={styles.rs689}
                                  href="https://www.myntra.com/dresses/ziva+fashion/ziva-fashion-self-design-embellished-maxi-sheath-dress/29288016/buy"
                                  target="_blank"
                                >
                                  Rs. 689
                                </a>
                                <a
                                  className={styles.rs2299}
                                  href="https://www.myntra.com/dresses/ziva+fashion/ziva-fashion-self-design-embellished-maxi-sheath-dress/29288016/buy"
                                  target="_blank"
                                >
                                  Rs. 2299
                                </a>
                                <a
                                  className={styles.off28}
                                  href="https://www.myntra.com/dresses/ziva+fashion/ziva-fashion-self-design-embellished-maxi-sheath-dress/29288016/buy"
                                  target="_blank"
                                >
                                  (70% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkWrapper3}>
                          <div
                            className={styles.link36}
                            onClick={onLinkContainerClick36}
                          >
                            <div className={styles.containerParent13}>
                              <div className={styles.container140}>
                                <div className={styles.background50}>
                                  <div className={styles.picture33}>
                                    <img
                                      className={
                                        styles.f8baA3364c338f996bdb608c63Icon
                                      }
                                      alt=""
                                      src="/0412f8baa3364c338f996bdb608c63801708770329437dressberrysheathdress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay29}>
                                <div className={styles.container141}>
                                  <b className={styles.b30}>4.2</b>
                                </div>
                                <img
                                  className={styles.imageIcon34}
                                  loading="lazy"
                                  alt=""
                                  src="/image-49@2x.png"
                                />
                                <div className={styles.container142}>
                                  <div className={styles.margin30}>
                                    <div className={styles.container143}>
                                      <b className={styles.b31}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.b32}>160</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner14}>
                              <div className={styles.dressberryParent1}>
                                <a
                                  className={styles.dressberry3}
                                  href="https://www.myntra.com/dresses/dressberry/dressberry-black-v-neck-sheath-dress/27850042/buy"
                                  target="_blank"
                                >
                                  DressBerry
                                </a>
                                <a
                                  className={styles.vNeckSheathDress}
                                  href="https://www.myntra.com/dresses/dressberry/dressberry-black-v-neck-sheath-dress/27850042/buy"
                                  target="_blank"
                                >
                                  V-Neck Sheath Dress
                                </a>
                                <div className={styles.rs809Parent}>
                                  <a
                                    className={styles.rs809}
                                    href="https://www.myntra.com/dresses/dressberry/dressberry-black-v-neck-sheath-dress/27850042/buy"
                                    target="_blank"
                                  >
                                    Rs. 809
                                  </a>
                                  <a
                                    className={styles.rs26991}
                                    href="https://www.myntra.com/dresses/dressberry/dressberry-black-v-neck-sheath-dress/27850042/buy"
                                    target="_blank"
                                  >
                                    Rs. 2699
                                  </a>
                                  <a
                                    className={styles.off29}
                                    href="https://www.myntra.com/dresses/dressberry/dressberry-black-v-neck-sheath-dress/27850042/buy"
                                    target="_blank"
                                  >
                                    (70% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link37}
                          onClick={onLinkContainerClick37}
                        >
                          <div className={styles.container144}>
                            <div className={styles.background51}>
                              <div className={styles.picture34}>
                                <img
                                  className={
                                    styles.af4a1838dab4c2b9510A4b1494Icon
                                  }
                                  alt=""
                                  src="/3af4a1838dab4c2b9510a4b1494894ab1715758209580mangoprintedpuffsleevealinemididress1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.background52}>
                            <div className={styles.ad11}>AD</div>
                          </div>
                          <div className={styles.overlayGroup}>
                            <div className={styles.overlay30}>
                              <div className={styles.container145}>
                                <b className={styles.b33}>4.5</b>
                              </div>
                              <img
                                className={styles.imageIcon35}
                                loading="lazy"
                                alt=""
                                src="/image-412@2x.png"
                              />
                              <div className={styles.container146}>
                                <div className={styles.margin31}>
                                  <div className={styles.container147}>
                                    <b className={styles.b34}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b35}>22</b>
                              </div>
                            </div>
                            <div className={styles.mangoParent1}>
                              <a
                                className={styles.mango4}
                                href="https://www.myntra.com/dresses/mango/mango-printed-puff-sleeve-a-line-midi-dress/28774548/buy"
                                target="_blank"
                              >
                                MANGO
                              </a>
                              <a
                                className={styles.printedALineMidi}
                                href="https://www.myntra.com/dresses/mango/mango-printed-puff-sleeve-a-line-midi-dress/28774548/buy"
                                target="_blank"
                              >
                                Printed A-Line Midi Dress
                              </a>
                              <div className={styles.rs2233Parent}>
                                <a
                                  className={styles.rs2233}
                                  href="https://www.myntra.com/dresses/mango/mango-printed-puff-sleeve-a-line-midi-dress/28774548/buy"
                                  target="_blank"
                                >
                                  Rs. 2233
                                </a>
                                <a
                                  className={styles.rs3190}
                                  href="https://www.myntra.com/dresses/mango/mango-printed-puff-sleeve-a-line-midi-dress/28774548/buy"
                                  target="_blank"
                                >
                                  Rs. 3190
                                </a>
                                <a
                                  className={styles.off30}
                                  href="https://www.myntra.com/dresses/mango/mango-printed-puff-sleeve-a-line-midi-dress/28774548/buy"
                                  target="_blank"
                                >
                                  (30% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link38}
                          onClick={onLinkContainerClick38}
                        >
                          <div className={styles.containerParent14}>
                            <div className={styles.container148}>
                              <div className={styles.background53}>
                                <div className={styles.picture35}>
                                  <img
                                    className={
                                      styles.c92b721c9d444fe2Ac856c64f8Icon
                                    }
                                    alt=""
                                    src="/c92b721c9d444fe2ac856c64f83312e01707473427417iugafloralprintsheathdress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay31}>
                              <div className={styles.container149}>
                                <b className={styles.b36}>4.3</b>
                              </div>
                              <img
                                className={styles.imageIcon36}
                                alt=""
                                src="/image-182@2x.png"
                              />
                              <div className={styles.container150}>
                                <div className={styles.margin32}>
                                  <div className={styles.container151}>
                                    <b className={styles.b37}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b38}>463</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner15}>
                            <div className={styles.iugaParent}>
                              <a
                                className={styles.iuga}
                                href="https://www.myntra.com/dresses/iuga/iuga-floral-printed-sheath-dress/27458436/buy"
                                target="_blank"
                              >
                                IUGA
                              </a>
                              <a
                                className={styles.floralPrintedSheath}
                                href="https://www.myntra.com/dresses/iuga/iuga-floral-printed-sheath-dress/27458436/buy"
                                target="_blank"
                              >
                                Floral Printed Sheath Dress
                              </a>
                              <div className={styles.rs599Parent}>
                                <a
                                  className={styles.rs599}
                                  href="https://www.myntra.com/dresses/iuga/iuga-floral-printed-sheath-dress/27458436/buy"
                                  target="_blank"
                                >
                                  Rs. 599
                                </a>
                                <a
                                  className={styles.rs19993}
                                  href="https://www.myntra.com/dresses/iuga/iuga-floral-printed-sheath-dress/27458436/buy"
                                  target="_blank"
                                >
                                  Rs. 1999
                                </a>
                                <a
                                  className={styles.off31}
                                  href="https://www.myntra.com/dresses/iuga/iuga-floral-printed-sheath-dress/27458436/buy"
                                  target="_blank"
                                >
                                  (70% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkWrapper4}>
                          <div
                            className={styles.link39}
                            onClick={onLinkContainerClick39}
                          >
                            <div className={styles.containerParent15}>
                              <div className={styles.container152}>
                                <div className={styles.background54}>
                                  <div className={styles.picture36}>
                                    <img
                                      className={
                                        styles.c3850ce992d14b21875c98e7a4Icon
                                      }
                                      alt=""
                                      src="/c3850ce992d14b21875c98e7a44258c31693480143830varangawomenbeigeshirtcollaralinedress84016934801431jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay32}>
                                <div className={styles.container153}>
                                  <b className={styles.b39}>3.8</b>
                                </div>
                                <img
                                  className={styles.imageIcon37}
                                  alt=""
                                  src="/image-30@2x.png"
                                />
                                <div className={styles.container154}>
                                  <div className={styles.margin33}>
                                    <div className={styles.container155}>
                                      <b className={styles.b40}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.k10}>1.2k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner16}>
                              <div className={styles.varangaParent}>
                                <a
                                  className={styles.varanga2}
                                  href="https://www.myntra.com/dresses/varanga/varanga-crepe-a-line-midi-dress/24591414/buy"
                                  target="_blank"
                                >
                                  Varanga
                                </a>
                                <a
                                  className={styles.crepeALineMidi}
                                  href="https://www.myntra.com/dresses/varanga/varanga-crepe-a-line-midi-dress/24591414/buy"
                                  target="_blank"
                                >
                                  Crepe A-Line Midi Dress
                                </a>
                                <div className={styles.rs689Group}>
                                  <a
                                    className={styles.rs6891}
                                    href="https://www.myntra.com/dresses/varanga/varanga-crepe-a-line-midi-dress/24591414/buy"
                                    target="_blank"
                                  >
                                    Rs. 689
                                  </a>
                                  <a
                                    className={styles.rs29991}
                                    href="https://www.myntra.com/dresses/varanga/varanga-crepe-a-line-midi-dress/24591414/buy"
                                    target="_blank"
                                  >
                                    Rs. 2999
                                  </a>
                                  <a
                                    className={styles.off32}
                                    href="https://www.myntra.com/dresses/varanga/varanga-crepe-a-line-midi-dress/24591414/buy"
                                    target="_blank"
                                  >
                                    (77% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkParent1}>
                          <div
                            className={styles.link40}
                            onClick={onLinkContainerClick40}
                          >
                            <div className={styles.container156}>
                              <div className={styles.background55}>
                                <div className={styles.picture37}>
                                  <img
                                    className={
                                      styles.d90462b6317349f6A92d920ed1Icon
                                    }
                                    alt=""
                                    src="/d90462b6317349f6a92d920ed15f472d1701688228148trendyoldress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.backgroundContainer}>
                              <div className={styles.background56}>
                                <div className={styles.ad12}>AD</div>
                              </div>
                            </div>
                            <div className={styles.frameParent}>
                              <div className={styles.overlayWrapper}>
                                <div className={styles.overlay33}>
                                  <div className={styles.container157}>
                                    <b className={styles.b41}>4.4</b>
                                  </div>
                                  <img
                                    className={styles.imageIcon38}
                                    loading="lazy"
                                    alt=""
                                    src="/image-39@2x.png"
                                  />
                                  <div className={styles.container158}>
                                    <div className={styles.margin34}>
                                      <div className={styles.container159}>
                                        <b className={styles.placeholder8}>|</b>
                                      </div>
                                    </div>
                                    <b className={styles.b42}>23</b>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.background57}>
                                <div className={styles.trendyolContainer}>
                                  <a
                                    className={styles.trendyol7}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-shoulder-straps-sheath-midi-dress/26225006/buy"
                                    target="_blank"
                                  >
                                    Trendyol
                                  </a>
                                  <a
                                    className={styles.printedSheathMidi}
                                    href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-shoulder-straps-sheath-midi-dress/26225006/buy"
                                    target="_blank"
                                  >
                                    Printed Sheath Midi Dress
                                  </a>
                                  <div className={styles.rs2149Parent}>
                                    <a
                                      className={styles.rs2149}
                                      href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-shoulder-straps-sheath-midi-dress/26225006/buy"
                                      target="_blank"
                                    >
                                      Rs. 2149
                                    </a>
                                    <a
                                      className={styles.rs24991}
                                      href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-shoulder-straps-sheath-midi-dress/26225006/buy"
                                      target="_blank"
                                    >
                                      Rs. 2499
                                    </a>
                                    <a
                                      className={styles.off33}
                                      href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-shoulder-straps-sheath-midi-dress/26225006/buy"
                                      target="_blank"
                                    >
                                      (14% OFF)
                                    </a>
                                  </div>
                                </div>
                                <a
                                  className={styles.onlyFewLeft5}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-floral-printed-shoulder-straps-sheath-midi-dress/26225006/buy"
                                  target="_blank"
                                >
                                  Only Few Left!
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className={styles.link41}
                            onClick={onLinkContainerClick41}
                          >
                            <div className={styles.containerParent16}>
                              <div className={styles.container160}>
                                <div className={styles.background58}>
                                  <div className={styles.picture38}>
                                    <img
                                      className={
                                        styles.e12940cCd7b4a8dB9550830c5bIcon
                                      }
                                      alt=""
                                      src="/7e12940ccd7b4a8db9550830c5b1d82d1702715459552aahwanblackpuffsleevefitflareminidress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay34}>
                                <div className={styles.container161}>
                                  <b className={styles.b43}>4</b>
                                </div>
                                <img
                                  className={styles.imageIcon39}
                                  loading="lazy"
                                  alt=""
                                  src="/image-161@2x.png"
                                />
                                <div className={styles.container162}>
                                  <div className={styles.margin35}>
                                    <div className={styles.container163}>
                                      <b className={styles.b44}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.b45}>398</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner17}>
                              <div className={styles.aahwanParent}>
                                <a
                                  className={styles.aahwan}
                                  href="https://www.myntra.com/dresses/aahwan/aahwan-puff-sleeves-sweetheart-neck-ruched-a-line-mini-dress/26461148/buy"
                                  target="_blank"
                                >
                                  AAHWAN
                                </a>
                                <a
                                  className={styles.ruchedALineMini}
                                  href="https://www.myntra.com/dresses/aahwan/aahwan-puff-sleeves-sweetheart-neck-ruched-a-line-mini-dress/26461148/buy"
                                  target="_blank"
                                >
                                  Ruched A-Line Mini Dress
                                </a>
                                <div className={styles.rs659Parent}>
                                  <a
                                    className={styles.rs659}
                                    href="https://www.myntra.com/dresses/aahwan/aahwan-puff-sleeves-sweetheart-neck-ruched-a-line-mini-dress/26461148/buy"
                                    target="_blank"
                                  >
                                    Rs. 659
                                  </a>
                                  <a
                                    className={styles.rs19994}
                                    href="https://www.myntra.com/dresses/aahwan/aahwan-puff-sleeves-sweetheart-neck-ruched-a-line-mini-dress/26461148/buy"
                                    target="_blank"
                                  >
                                    Rs. 1999
                                  </a>
                                  <a
                                    className={styles.off34}
                                    href="https://www.myntra.com/dresses/aahwan/aahwan-puff-sleeves-sweetheart-neck-ruched-a-line-mini-dress/26461148/buy"
                                    target="_blank"
                                  >
                                    (67% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link42}
                          onClick={onLinkContainerClick42}
                        >
                          <div className={styles.containerParent17}>
                            <div className={styles.container164}>
                              <div className={styles.background59}>
                                <div className={styles.picture39}>
                                  <img
                                    className={
                                      styles.a1a6816328ba42fcAa801a1f00Icon
                                    }
                                    alt=""
                                    src="/a1a6816328ba42fcaa801a1f00c3712a1695899320788serablackalinedress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay35}>
                              <div className={styles.container165}>
                                <b className={styles.b46}>4</b>
                              </div>
                              <img
                                className={styles.imageIcon40}
                                loading="lazy"
                                alt=""
                                src="/image-461@2x.png"
                              />
                              <div className={styles.container166}>
                                <div className={styles.margin36}>
                                  <div className={styles.container167}>
                                    <b className={styles.b47}>|</b>
                                  </div>
                                </div>
                                <b className={styles.k11}>1.9k</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner18}>
                            <div className={styles.seraGroup}>
                              <a
                                className={styles.sera1}
                                href="https://www.myntra.com/dresses/sera/sera-black-shirt-collar-wrap-mini-dress/25218684/buy"
                                target="_blank"
                              >
                                Sera
                              </a>
                              <a
                                className={styles.shirtCollarWrap1}
                                href="https://www.myntra.com/dresses/sera/sera-black-shirt-collar-wrap-mini-dress/25218684/buy"
                                target="_blank"
                              >
                                Shirt Collar Wrap Mini Dress
                              </a>
                              <div className={styles.rs491Parent}>
                                <a
                                  className={styles.rs4911}
                                  href="https://www.myntra.com/dresses/sera/sera-black-shirt-collar-wrap-mini-dress/25218684/buy"
                                  target="_blank"
                                >
                                  Rs. 491
                                </a>
                                <a
                                  className={styles.rs16941}
                                  href="https://www.myntra.com/dresses/sera/sera-black-shirt-collar-wrap-mini-dress/25218684/buy"
                                  target="_blank"
                                >
                                  Rs. 1694
                                </a>
                                <a
                                  className={styles.off35}
                                  href="https://www.myntra.com/dresses/sera/sera-black-shirt-collar-wrap-mini-dress/25218684/buy"
                                  target="_blank"
                                >
                                  (71% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameGroup}>
                        <div className={styles.linkWrapper5}>
                          <div
                            className={styles.link43}
                            onClick={onLinkContainerClick43}
                          >
                            <div className={styles.containerParent18}>
                              <div className={styles.container168}>
                                <div className={styles.background60}>
                                  <div className={styles.picture40}>
                                    <img
                                      className={
                                        styles.cf7bb1578484c944a1ec9d2f4dIcon
                                      }
                                      alt=""
                                      src="/520cf7bb1578484c944a1ec9d2f4d1991661282657161dresses1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay36}>
                                <div className={styles.container169}>
                                  <b className={styles.b48}>4.2</b>
                                </div>
                                <img
                                  className={styles.imageIcon41}
                                  alt=""
                                  src="/image-251@2x.png"
                                />
                                <div className={styles.container170}>
                                  <div className={styles.margin37}>
                                    <div className={styles.container171}>
                                      <b className={styles.b49}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.k12}>2.3k</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.linkInner19}>
                              <div className={styles.tulsattvaParent}>
                                <a
                                  className={styles.tulsattva}
                                  href="https://www.myntra.com/dresses/tulsattva/tulsattva-off-white-midi-dress/19628870/buy"
                                  target="_blank"
                                >
                                  Tulsattva
                                </a>
                                <a
                                  className={styles.midiDress}
                                  href="https://www.myntra.com/dresses/tulsattva/tulsattva-off-white-midi-dress/19628870/buy"
                                  target="_blank"
                                >
                                  Midi Dress
                                </a>
                                <div className={styles.rs976Parent}>
                                  <a
                                    className={styles.rs976}
                                    href="https://www.myntra.com/dresses/tulsattva/tulsattva-off-white-midi-dress/19628870/buy"
                                    target="_blank"
                                  >
                                    Rs. 976
                                  </a>
                                  <a
                                    className={styles.rs2790}
                                    href="https://www.myntra.com/dresses/tulsattva/tulsattva-off-white-midi-dress/19628870/buy"
                                    target="_blank"
                                  >
                                    Rs. 2790
                                  </a>
                                  <a
                                    className={styles.off36}
                                    href="https://www.myntra.com/dresses/tulsattva/tulsattva-off-white-midi-dress/19628870/buy"
                                    target="_blank"
                                  >
                                    (65% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link44}
                          onClick={onLinkContainerClick44}
                        >
                          <div className={styles.containerParent19}>
                            <div className={styles.container172}>
                              <div className={styles.background61}>
                                <div className={styles.picture41}>
                                  <img
                                    className={
                                      styles.d0badd9D8554d94B105F2eb87cIcon
                                    }
                                    alt=""
                                    src="/0d0badd9d8554d94b105f2eb87ca18281706093929833kassuallyfloralprintchiffonalinemididress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay37}>
                              <div className={styles.container173}>
                                <b className={styles.b50}>3.9</b>
                              </div>
                              <img
                                className={styles.imageIcon42}
                                loading="lazy"
                                alt=""
                                src="/image-47@2x.png"
                              />
                              <div className={styles.container174}>
                                <div className={styles.margin38}>
                                  <div className={styles.container175}>
                                    <b className={styles.b51}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b52}>51</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner20}>
                            <div className={styles.kassuallyParent}>
                              <a
                                className={styles.kassually}
                                href="https://www.myntra.com/dresses/kassually/kassually-black--red-floral-print-a-line-midi-dress/27164628/buy"
                                target="_blank"
                              >
                                KASSUALLY
                              </a>
                              <a
                                className={styles.floralPrintALine1}
                                href="https://www.myntra.com/dresses/kassually/kassually-black--red-floral-print-a-line-midi-dress/27164628/buy"
                                target="_blank"
                              >
                                Floral Print A-Line Midi Dress
                              </a>
                              <div className={styles.rs1087Parent}>
                                <a
                                  className={styles.rs1087}
                                  href="https://www.myntra.com/dresses/kassually/kassually-black--red-floral-print-a-line-midi-dress/27164628/buy"
                                  target="_blank"
                                >
                                  Rs. 1087
                                </a>
                                <a
                                  className={styles.rs3199}
                                  href="https://www.myntra.com/dresses/kassually/kassually-black--red-floral-print-a-line-midi-dress/27164628/buy"
                                  target="_blank"
                                >
                                  Rs. 3199
                                </a>
                                <a
                                  className={styles.off37}
                                  href="https://www.myntra.com/dresses/kassually/kassually-black--red-floral-print-a-line-midi-dress/27164628/buy"
                                  target="_blank"
                                >
                                  (66% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link45}
                          onClick={onLinkContainerClick45}
                        >
                          <div className={styles.container176}>
                            <div className={styles.background62}>
                              <div className={styles.picture42}>
                                <img
                                  className={
                                    styles.e2fc3ca20f9b40d583001a4051Icon
                                  }
                                  alt=""
                                  src="/e2fc3ca20f9b40d583001a40516a0cb31694595411195trendyolfloralmidiflaredsleevedress1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.backgroundFrame}>
                            <div className={styles.background63}>
                              <div className={styles.ad13}>AD</div>
                            </div>
                          </div>
                          <div className={styles.frameContainer}>
                            <div className={styles.overlayContainer}>
                              <div className={styles.overlay38}>
                                <div className={styles.container177}>
                                  <b className={styles.b53}>3.7</b>
                                </div>
                                <img
                                  className={styles.imageIcon43}
                                  alt=""
                                  src="/image-391@2x.png"
                                />
                                <div className={styles.container178}>
                                  <div className={styles.margin39}>
                                    <div className={styles.container179}>
                                      <b className={styles.b54}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.b55}>25</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.background64}>
                              <a
                                className={styles.trendyol8}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-floral-midi-flared-sleeve-dress/21597488/buy"
                                target="_blank"
                              >
                                Trendyol
                              </a>
                              <a
                                className={styles.floralMidiDress1}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-floral-midi-flared-sleeve-dress/21597488/buy"
                                target="_blank"
                              >
                                Floral Midi Dress
                              </a>
                              <div className={styles.priceDiscount}>
                                <a
                                  className={styles.rs2144}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-floral-midi-flared-sleeve-dress/21597488/buy"
                                  target="_blank"
                                >
                                  Rs. 2144
                                </a>
                                <a
                                  className={styles.rs3299}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-floral-midi-flared-sleeve-dress/21597488/buy"
                                  target="_blank"
                                >
                                  Rs. 3299
                                </a>
                                <a
                                  className={styles.off38}
                                  href="https://www.myntra.com/dresses/trendyol/trendyol-floral-midi-flared-sleeve-dress/21597488/buy"
                                  target="_blank"
                                >
                                  (35% OFF)
                                </a>
                              </div>
                              <a
                                className={styles.onlyFewLeft6}
                                href="https://www.myntra.com/dresses/trendyol/trendyol-floral-midi-flared-sleeve-dress/21597488/buy"
                                target="_blank"
                              >
                                Only Few Left!
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link46}
                          onClick={onLinkContainerClick46}
                        >
                          <div className={styles.containerParent20}>
                            <div className={styles.container180}>
                              <div className={styles.background65}>
                                <div className={styles.picture43}>
                                  <img
                                    className={
                                      styles.d6d1053Eddd4922A223919439fIcon
                                    }
                                    alt=""
                                    src="/7d6d1053eddd4922a223919439f6a9391675685366286aayuwhitegeorgettemaximididress1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay39}>
                              <div className={styles.container181}>
                                <b className={styles.b56}>4.3</b>
                              </div>
                              <img
                                className={styles.imageIcon44}
                                alt=""
                                src="/image-501@2x.png"
                              />
                              <div className={styles.container182}>
                                <div className={styles.margin40}>
                                  <div className={styles.container183}>
                                    <b className={styles.b57}>|</b>
                                  </div>
                                </div>
                                <b className={styles.k13}>10.5k</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner21}>
                            <div className={styles.aayuGroup}>
                              <a
                                className={styles.aayu2}
                                href="https://www.myntra.com/dresses/aayu/aayu-self-design-ruffles-detail-flounce-georgette-midi-fit--flare-dress/21850892/buy"
                                target="_blank"
                              >
                                aayu
                              </a>
                              <a
                                className={styles.midiFit}
                                href="https://www.myntra.com/dresses/aayu/aayu-self-design-ruffles-detail-flounce-georgette-midi-fit--flare-dress/21850892/buy"
                                target="_blank"
                              >{`Midi Fit & Flare Dress`}</a>
                              <div className={styles.rs727Parent}>
                                <a
                                  className={styles.rs727}
                                  href="https://www.myntra.com/dresses/aayu/aayu-self-design-ruffles-detail-flounce-georgette-midi-fit--flare-dress/21850892/buy"
                                  target="_blank"
                                >
                                  Rs. 727
                                </a>
                                <a
                                  className={styles.rs25993}
                                  href="https://www.myntra.com/dresses/aayu/aayu-self-design-ruffles-detail-flounce-georgette-midi-fit--flare-dress/21850892/buy"
                                  target="_blank"
                                >
                                  Rs. 2599
                                </a>
                                <a
                                  className={styles.off39}
                                  href="https://www.myntra.com/dresses/aayu/aayu-self-design-ruffles-detail-flounce-georgette-midi-fit--flare-dress/21850892/buy"
                                  target="_blank"
                                >
                                  (72% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link47}
                          onClick={onLinkContainerClick47}
                        >
                          <div className={styles.containerParent21}>
                            <div className={styles.container184}>
                              <div className={styles.background66}>
                                <div className={styles.picture44}>
                                  <img
                                    className={
                                      styles.cba9c9aa86bd46a48882859a55Icon
                                    }
                                    alt=""
                                    src="/cba9c9aa86bd46a48882859a5587c6161658131220271athenalavendervneckblingydress83116581312198371jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay40}>
                              <div className={styles.container185}>
                                <b className={styles.b58}>4.2</b>
                              </div>
                              <img
                                className={styles.imageIcon45}
                                alt=""
                                src="/image-511@2x.png"
                              />
                              <div className={styles.container186}>
                                <div className={styles.margin41}>
                                  <div className={styles.container187}>
                                    <b className={styles.b59}>|</b>
                                  </div>
                                </div>
                                <b className={styles.k14}>5k</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner22}>
                            <div className={styles.athenaParent}>
                              <a
                                className={styles.athena}
                                href="https://www.myntra.com/dresses/athena/athena-lavender-solid-accordion-pleats-wrap-dress/18962952/buy"
                                target="_blank"
                              >
                                Athena
                              </a>
                              <a
                                className={styles.accordionPleatsWrap}
                                href="https://www.myntra.com/dresses/athena/athena-lavender-solid-accordion-pleats-wrap-dress/18962952/buy"
                                target="_blank"
                              >
                                Accordion Pleats Wrap Dress
                              </a>
                              <div className={styles.rs1147Parent}>
                                <a
                                  className={styles.rs1147}
                                  href="https://www.myntra.com/dresses/athena/athena-lavender-solid-accordion-pleats-wrap-dress/18962952/buy"
                                  target="_blank"
                                >
                                  Rs. 1147
                                </a>
                                <a
                                  className={styles.rs27991}
                                  href="https://www.myntra.com/dresses/athena/athena-lavender-solid-accordion-pleats-wrap-dress/18962952/buy"
                                  target="_blank"
                                >
                                  Rs. 2799
                                </a>
                                <a
                                  className={styles.off40}
                                  href="https://www.myntra.com/dresses/athena/athena-lavender-solid-accordion-pleats-wrap-dress/18962952/buy"
                                  target="_blank"
                                >
                                  (59% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkWrapper6}>
                          <div
                            className={styles.link48}
                            onClick={onLinkContainerClick48}
                          >
                            <div className={styles.container188}>
                              <div className={styles.background67}>
                                <div className={styles.picture45}>
                                  <img
                                    className={
                                      styles.e38e1e384b04882873b38a5c2fIcon
                                    }
                                    alt=""
                                    src="/4e38e1e384b04882873b38a5c2ff86751712223345803mangostripedkeyholenecksheathminidress1561712223345441jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.background68}>
                              <div className={styles.ad14}>AD</div>
                            </div>
                            <div className={styles.overlayParent1}>
                              <div className={styles.overlay41}>
                                <div className={styles.container189}>
                                  <b className={styles.b60}>4.3</b>
                                </div>
                                <img
                                  className={styles.imageIcon46}
                                  alt=""
                                  src="/image-371@2x.png"
                                />
                                <div className={styles.container190}>
                                  <div className={styles.margin42}>
                                    <div className={styles.container191}>
                                      <b className={styles.b61}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.b62}>12</b>
                                </div>
                              </div>
                              <div className={styles.mangoParent2}>
                                <a
                                  className={styles.mango5}
                                  href="https://www.myntra.com/dresses/mango/mango-striped-keyhole-neck-sheath-mini-dress/28197750/buy"
                                  target="_blank"
                                >
                                  MANGO
                                </a>
                                <a
                                  className={styles.stripedSheathMini}
                                  href="https://www.myntra.com/dresses/mango/mango-striped-keyhole-neck-sheath-mini-dress/28197750/buy"
                                  target="_blank"
                                >
                                  Striped Sheath Mini Keyhole N…
                                </a>
                                <div className={styles.rs2653Parent}>
                                  <a
                                    className={styles.rs2653}
                                    href="https://www.myntra.com/dresses/mango/mango-striped-keyhole-neck-sheath-mini-dress/28197750/buy"
                                    target="_blank"
                                  >
                                    Rs. 2653
                                  </a>
                                  <a
                                    className={styles.rs3790}
                                    href="https://www.myntra.com/dresses/mango/mango-striped-keyhole-neck-sheath-mini-dress/28197750/buy"
                                    target="_blank"
                                  >
                                    Rs. 3790
                                  </a>
                                  <a
                                    className={styles.off41}
                                    href="https://www.myntra.com/dresses/mango/mango-striped-keyhole-neck-sheath-mini-dress/28197750/buy"
                                    target="_blank"
                                  >
                                    (30% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.stylumBohemian}>
                          <div
                            className={styles.link49}
                            onClick={onLinkContainerClick49}
                          >
                            <div className={styles.productImage}>
                              <div className={styles.container192}>
                                <div className={styles.background69}>
                                  <div className={styles.picture46}>
                                    <img
                                      className={
                                        styles.fd8d63472595e84d4b60beb71bIcon
                                      }
                                      alt=""
                                      src="/699921fd8d63472595e84d4b60beb71b1681387966739womensprintedrayonflareddress56316813879663911jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay42}>
                                <div className={styles.container193}>
                                  <b className={styles.b63}>3.9</b>
                                </div>
                                <img
                                  className={styles.imageIcon47}
                                  alt=""
                                  src="/image-44@2x.png"
                                />
                                <div className={styles.container194}>
                                  <div className={styles.margin43}>
                                    <div className={styles.container195}>
                                      <b className={styles.b64}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.b65}>800</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.background70}>
                              <div className={styles.detailsWrapper}>
                                <a
                                  className={styles.stylum}
                                  href="https://www.myntra.com/dresses/stylum/stylum-cream-coloured--black-bohemian-print-flared-sleeve-fit--flare-dress/22555284/buy"
                                  target="_blank"
                                >
                                  Stylum
                                </a>
                                <a
                                  className={styles.bohemianPrintFit}
                                  href="https://www.myntra.com/dresses/stylum/stylum-cream-coloured--black-bohemian-print-flared-sleeve-fit--flare-dress/22555284/buy"
                                  target="_blank"
                                >{`Bohemian Print Fit & Flare Fla…`}</a>
                                <div className={styles.productPricing}>
                                  <a
                                    className={styles.rs6991}
                                    href="https://www.myntra.com/dresses/stylum/stylum-cream-coloured--black-bohemian-print-flared-sleeve-fit--flare-dress/22555284/buy"
                                    target="_blank"
                                  >
                                    Rs. 699
                                  </a>
                                  <a
                                    className={styles.rs2199}
                                    href="https://www.myntra.com/dresses/stylum/stylum-cream-coloured--black-bohemian-print-flared-sleeve-fit--flare-dress/22555284/buy"
                                    target="_blank"
                                  >
                                    Rs. 2199
                                  </a>
                                  <a
                                    className={styles.rs1500Off}
                                    href="https://www.myntra.com/dresses/stylum/stylum-cream-coloured--black-bohemian-print-flared-sleeve-fit--flare-dress/22555284/buy"
                                    target="_blank"
                                  >
                                    (Rs. 1500 OFF)
                                  </a>
                                </div>
                              </div>
                              <a
                                className={styles.onlyFewLeft7}
                                href="https://www.myntra.com/dresses/stylum/stylum-cream-coloured--black-bohemian-print-flared-sleeve-fit--flare-dress/22555284/buy"
                                target="_blank"
                              >
                                Only Few Left!
                              </a>
                            </div>
                          </div>
                          <div
                            className={styles.link50}
                            onClick={onLinkContainerClick50}
                          >
                            <div className={styles.productImage1}>
                              <div className={styles.container196}>
                                <div className={styles.background71}>
                                  <div className={styles.picture47}>
                                    <img
                                      className={
                                        styles.f14d1163595641f0B355899729Icon
                                      }
                                      alt=""
                                      src="/f14d1163595641f0b355899729e658531710182536040dodomoacolourblockedscubasheathmididress1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.overlay43}>
                                <div className={styles.container197}>
                                  <b className={styles.b66}>3.5</b>
                                </div>
                                <img
                                  className={styles.imageIcon48}
                                  loading="lazy"
                                  alt=""
                                  src="/image-48@2x.png"
                                />
                                <div className={styles.container198}>
                                  <div className={styles.margin44}>
                                    <div className={styles.container199}>
                                      <b className={styles.b67}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.b68}>201</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.productDetails5}>
                              <div className={styles.detailsWrapper1}>
                                <a
                                  className={styles.dodoMoa1}
                                  href="https://www.myntra.com/dresses/dodo+%26+moa/dodo--moa-one-shoulder-colourblocked-sheath-midi-dress/28195650/buy"
                                  target="_blank"
                                >{`DODO & MOA`}</a>
                                <a
                                  className={styles.colourblockedSheathDress}
                                  href="https://www.myntra.com/dresses/dodo+%26+moa/dodo--moa-one-shoulder-colourblocked-sheath-midi-dress/28195650/buy"
                                  target="_blank"
                                >
                                  Colourblocked Sheath Dress
                                </a>
                                <div className={styles.productPricing1}>
                                  <a
                                    className={styles.rs867}
                                    href="https://www.myntra.com/dresses/dodo+%26+moa/dodo--moa-one-shoulder-colourblocked-sheath-midi-dress/28195650/buy"
                                    target="_blank"
                                  >
                                    Rs. 867
                                  </a>
                                  <a
                                    className={styles.rs2890}
                                    href="https://www.myntra.com/dresses/dodo+%26+moa/dodo--moa-one-shoulder-colourblocked-sheath-midi-dress/28195650/buy"
                                    target="_blank"
                                  >
                                    Rs. 2890
                                  </a>
                                  <a
                                    className={styles.off42}
                                    href="https://www.myntra.com/dresses/dodo+%26+moa/dodo--moa-one-shoulder-colourblocked-sheath-midi-dress/28195650/buy"
                                    target="_blank"
                                  >
                                    (70% OFF)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.link51}
                          onClick={onLinkContainerClick51}
                        >
                          <div className={styles.container200}>
                            <div className={styles.background72}>
                              <div className={styles.picture48}>
                                <img
                                  className={
                                    styles.cf4085996ef4843A5da1b35195Icon
                                  }
                                  alt=""
                                  src="/5cf4085996ef4843a5da1b351956a89a1718089542945mangofloralprintempiremididress62017180895422931jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.backgroundWrapper1}>
                            <div className={styles.background73}>
                              <div className={styles.ad15}>AD</div>
                            </div>
                          </div>
                          <div className={styles.frameParent1}>
                            <div className={styles.overlayFrame}>
                              <div className={styles.overlay44}>
                                <div className={styles.container201}>
                                  <b className={styles.b69}>4.9</b>
                                </div>
                                <img
                                  className={styles.imageIcon49}
                                  alt=""
                                  src="/image-55@2x.png"
                                />
                                <div className={styles.container202}>
                                  <div className={styles.margin45}>
                                    <div className={styles.container203}>
                                      <b className={styles.b70}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.b71}>7</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.background74}>
                              <div className={styles.mangoParent3}>
                                <a
                                  className={styles.mango6}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-print-empire-midi-dress/29037634/buy"
                                  target="_blank"
                                >
                                  MANGO
                                </a>
                                <a
                                  className={styles.floralPrintEmpire}
                                  href="https://www.myntra.com/dresses/mango/mango-floral-print-empire-midi-dress/29037634/buy"
                                  target="_blank"
                                >
                                  Floral Print Empire Midi Dress
                                </a>
                                <div className={styles.priceDiscount1}>
                                  <a
                                    className={styles.rs3681}
                                    href="https://www.myntra.com/dresses/mango/mango-floral-print-empire-midi-dress/29037634/buy"
                                    target="_blank"
                                  >
                                    Rs. 3681
                                  </a>
                                  <a
                                    className={styles.rs40901}
                                    href="https://www.myntra.com/dresses/mango/mango-floral-print-empire-midi-dress/29037634/buy"
                                    target="_blank"
                                  >
                                    Rs. 4090
                                  </a>
                                  <a
                                    className={styles.off43}
                                    href="https://www.myntra.com/dresses/mango/mango-floral-print-empire-midi-dress/29037634/buy"
                                    target="_blank"
                                  >
                                    (10% OFF)
                                  </a>
                                </div>
                              </div>
                              <a
                                className={styles.onlyFewLeft8}
                                href="https://www.myntra.com/dresses/mango/mango-floral-print-empire-midi-dress/29037634/buy"
                                target="_blank"
                              >
                                Only Few Left!
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.list2}>
                  <div className={styles.pageNumbers}>
                    <div className={styles.pageButtonWrapper}>
                      <div className={styles.item3}>
                        <div className={styles.currentPageContent}>
                          <div className={styles.currentPageHighlight}>
                            <div className={styles.border3} />
                            <div className={styles.border4} />
                          </div>
                        </div>
                        <b className={styles.page1}>Page 1</b>
                      </div>
                    </div>
                    <button className={styles.item4}>
                      <div className={styles.previousButtonContent}>
                        <div className={styles.border5} />
                      </div>
                      <b className={styles.previous}>Previous</b>
                    </button>
                  </div>
                  <div className={styles.pageNumberDisplay}>
                    <div className={styles.item5}>
                      <div className={styles.page1Of}>Page 1 of 2544</div>
                    </div>
                  </div>
                  <button className={styles.item6}>
                    <b className={styles.next}>Next</b>
                    <div className={styles.nextButtonContent}>
                      <div className={styles.border6} />
                    </div>
                  </button>
                  <div className={styles.container204}>
                    <div className={styles.container205}>
                      <div className={styles.backgroundshadow}>
                        <img
                          className={styles.svgIcon}
                          loading="lazy"
                          alt=""
                          src="/svg.svg"
                        />
                        <div className={styles.background75}>
                          <b className={styles.new}>New</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flatDiscount}>
                <div className={styles.background76}>
                  <div className={styles.border7} />
                  <b className={styles.flat200Off}>FLAT ₹200 OFF</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WomensWearDress;
