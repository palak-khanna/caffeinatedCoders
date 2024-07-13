import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductInfoContainer from "../components/ProductInfoContainer";
import ProductCard from "../components/ProductCard";
import List from "../components/List";
import styles from "./MensSuitWear.module.css";

const MensSuitWear: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/myntra-studio-edit");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/v-mart/v-mart-men-grey-solid-suits/18826248/buy"
    );
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/-blackberrys-men-rust-solid-suits/20237088/buy"
    );
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-black--solid-single-breasted-slim-fit-two-piece-suit/20751930/buy"
    );
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/arrow/arrow-men-self-design-single-breasted-slim-fit-2-piece-formal-suits/22180128/buy"
    );
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/hangup/hangup-men-black-solid-single-breasted-two-piece-casual-suit/19887498/buy"
    );
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/hangup/hangup-mens-black-regular-fit-single-breasted-formal-suit/2413012/buy"
    );
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/hangup+plus/hangup-plus-men-black-solid-tuxedo-two-piece-suit/14576312/buy"
    );
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-navy-blue-solid-single-breasted-slim-fit-formal-suits-/19758928/buy"
    );
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/invictus/invictus-men-slim-fit-single-breasted-2-piece-casual-suit/23358646/buy"
    );
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-single-breasted-three-piece-formal-suits/22256526/buy"
    );
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-purple-2-piece-formal-suit/18026910/buy"
    );
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/klotthe/klotthe-men-maroon-self-design-slim-fit-single-breasted-three-piece-formal-suit/19126678/buy"
    );
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open(
      "https://www.myntra.com/blazers/sven+suits/-sven-suits-men-single-breasted-blazer/27940040/buy"
    );
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-self-design-slim-fit-single-breasted-three-piece-formal-suits/29709374/buy"
    );
  }, []);

  const onLinkContainerClick14 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-single-breasted-formal-2-piece-suit/24752694/buy"
    );
  }, []);

  const onLinkContainerClick15 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-2-pieces-formal-suits/23448866/buy"
    );
  }, []);

  const onLinkContainerClick16 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/arrow/arrow-men-navy-blue-checked-single-breasted-2-piece-suit/20358652/buy"
    );
  }, []);

  const onLinkContainerClick17 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/canary+london/canary-london-men-3-piece-slim-fit-single-breasted-suits-set/28170352/buy"
    );
  }, []);

  const onLinkContainerClick18 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-maroon-solid-slim-fit-single-breasted-2-piece-suits/20751922/buy"
    );
  }, []);

  const onLinkContainerClick19 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/arrow/arrow-single-breasted-2-peice-suits/23461002/buy"
    );
  }, []);

  const onLinkContainerClick20 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/allen+solly/allen-solly-men-maroon--blue-solid-slim-fit-single-breasted-two-piece-party-suit/19287326/buy"
    );
  }, []);

  const onLinkContainerClick21 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/arrow/arrow-men-single-breasted-three-piece-formal-suit/21112560/buy"
    );
  }, []);

  const onLinkContainerClick22 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-double-breasted-formal-suit/12554406/buy"
    );
  }, []);

  const onLinkContainerClick23 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/tahvo/tahvo-men-single-breasted-slim-fit-two-piece-suit/21548958/buy"
    );
  }, []);

  const onLinkContainerClick24 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-pink-self-design-slim-fit-single-breasted-3-piece-formal-suit/18026986/buy"
    );
  }, []);

  const onLinkContainerClick25 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/allen+solly/allen-solly-men-navy-blue-suits/19358994/buy"
    );
  }, []);

  const onLinkContainerClick26 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/arrow/arrow-men-2-piece-self-design-single-breasted-suit/21643916/buy"
    );
  }, []);

  const onLinkContainerClick27 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/arrow/arrow-men-patterned-single-breasted-three-piece-formal-suit/21792240/buy"
    );
  }, []);

  const onLinkContainerClick28 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-burgundy--taupe-printed-bandhgala-slim-fit-2-piece-formal-suit/20276766/buy"
    );
  }, []);

  const onLinkContainerClick29 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/hangup/hangup-men-grey-solid-suit/8086609/buy"
    );
  }, []);

  const onLinkContainerClick30 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/-blackberrys-men-red-solid-slim-fit-single-breasted-formal-suit-/20237110/buy"
    );
  }, []);

  const onLinkContainerClick31 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/klotthe/klotthe-men-maroon-solid-slim-fit-single-breasted-formal-suit--pant/14634160/buy"
    );
  }, []);

  const onLinkContainerClick32 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/hangup/hangup-men-black-solid-bandhgala-formal-suit/13559432/buy"
    );
  }, []);

  const onLinkContainerClick33 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-2-piece-slim-fit-dual-toned-party-suit/20237098/buy"
    );
  }, []);

  const onLinkContainerClick34 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-purple-solid-slim-fit-single-breasted-2-piece-formal-suit/20276778/buy"
    );
  }, []);

  const onLinkContainerClick35 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-three-piece-self-designed-tailored-fit-single-breasted-formal-suit/21386548/buy"
    );
  }, []);

  const onLinkContainerClick36 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-navy-blue-suits/19448444/buy"
    );
  }, []);

  const onLinkContainerClick37 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-blue-suits/18534306/buy"
    );
  }, []);

  const onLinkContainerClick38 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-techpro-men-checks-slim-fit-single-breasted-2-piece-suits/20184068/buy"
    );
  }, []);

  const onLinkContainerClick39 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/10777826/buy"
    );
  }, []);

  const onLinkContainerClick40 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/kisah/kisah-men-2-piece-ethnic-motif-printed-jodhpuri-bandhgala-suits/25769362/buy"
    );
  }, []);

  const onLinkContainerClick41 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/-blackberrys-men-red--blue-self-design-single-breasted-slim-fit-three-piece-formal-suit/20237114/buy"
    );
  }, []);

  const onLinkContainerClick42 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-checked-slim-fit-2-piece-formal-suit/23619168/buy"
    );
  }, []);

  const onLinkContainerClick43 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/hangup/hangup-men-brown--beige-floral-printed-bandhgala-party-2-piece-suit/19887512/buy"
    );
  }, []);

  const onLinkContainerClick44 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-slim-fit-single-breasted-two-piece-formal-suit/21382814/buy"
    );
  }, []);

  const onLinkContainerClick45 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/12554490/buy"
    );
  }, []);

  const onLinkContainerClick46 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-maroon--beige--solid-single-breasted-2-piece-formal-suit/19596264/buy"
    );
  }, []);

  const onLinkContainerClick47 = useCallback(() => {
    window.open(
      "https://www.myntra.com/suits/blackberrys/blackberrys-men-brown-solid-formal-slim-fit-4-piece-suit/18026968/buy"
    );
  }, []);

  const onLinkImageClick = useCallback(() => {
    window.open("https://www.myntra.com/");
  }, []);

  const onLinkContainerClick48 = useCallback(() => {
    window.open("https://www.myntra.com/wishlist");
  }, []);

  const onLinkContainerClick49 = useCallback(() => {
    window.open("https://www.myntra.com/checkout/cart");
  }, []);

  const onLinkContainerClick50 = useCallback(() => {
    window.open("https://www.myntra.com/clothing");
  }, []);

  return (
    <div className={styles.mensSuitWear}>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.section}>
            <div className={styles.horizontalborder}>
              <a className={styles.filters}>FILTERS</a>
            </div>
            <div className={styles.borderParent}>
              <div className={styles.border}>
                <a className={styles.categories}>Categories</a>
                <div className={styles.categoryLabels}>
                  <div className={styles.label}>
                    <input
                      className={styles.backgroundborder}
                      type="checkbox"
                    />
                    <div className={styles.kurtaSetsParent}>
                      <a className={styles.kurtaSets}>Kurta Sets</a>
                      <div className={styles.div}>(36401)</div>
                    </div>
                  </div>
                  <div className={styles.label1}>
                    <input
                      className={styles.backgroundborder1}
                      type="checkbox"
                    />
                    <div className={styles.kurtasParent}>
                      <div className={styles.kurtas}>Kurtas</div>
                      <div className={styles.wrapper}>
                        <div className={styles.div1}>(31255)</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.label2}>
                    <input
                      className={styles.backgroundborder2}
                      type="checkbox"
                    />
                    <div className={styles.blazersParent}>
                      <div className={styles.blazers}>Blazers</div>
                      <div className={styles.div2}>(5824)</div>
                    </div>
                  </div>
                  <div className={styles.label3}>
                    <input
                      className={styles.backgroundborder3}
                      type="checkbox"
                    />
                    <div className={styles.suitsParent}>
                      <a className={styles.suits}>Suits</a>
                      <div className={styles.div3}>(2378)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.border1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.brandWrapper}>
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
                  <div className={styles.brandLabels}>
                    <div className={styles.label4}>
                      <input
                        className={styles.backgroundborder4}
                        type="checkbox"
                      />
                      <div className={styles.sojanyaParent}>
                        <div className={styles.sojanya}>SOJANYA</div>
                        <div className={styles.div4}>(6274)</div>
                      </div>
                    </div>
                    <div className={styles.label5}>
                      <input
                        className={styles.backgroundborder5}
                        type="checkbox"
                      />
                      <div className={styles.kisahParent}>
                        <div className={styles.kisah}>KISAH</div>
                        <div className={styles.div5}>(4188)</div>
                      </div>
                    </div>
                    <div className={styles.label6}>
                      <input
                        className={styles.backgroundborder6}
                        type="checkbox"
                      />
                      <div className={styles.deyannParent}>
                        <div className={styles.deyann}>DEYANN</div>
                        <div className={styles.div6}>(3810)</div>
                      </div>
                    </div>
                    <div className={styles.label7}>
                      <input
                        className={styles.backgroundborder7}
                        type="checkbox"
                      />
                      <div className={styles.devoilerParent}>
                        <a className={styles.devoiler}>DEVOILER</a>
                        <div className={styles.div7}>(3703)</div>
                      </div>
                    </div>
                    <div className={styles.label8}>
                      <input
                        className={styles.backgroundborder8}
                        type="checkbox"
                      />
                      <div className={styles.jompersParent}>
                        <div className={styles.jompers}>Jompers</div>
                        <div className={styles.div8}>(3389)</div>
                      </div>
                    </div>
                    <div className={styles.label9}>
                      <input
                        className={styles.backgroundborder9}
                        type="checkbox"
                      />
                      <div className={styles.anoukParent}>
                        <div className={styles.anouk}>Anouk</div>
                        <div className={styles.frame}>
                          <div className={styles.div9}>(3216)</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label10}>
                      <input
                        className={styles.backgroundborder10}
                        type="checkbox"
                      />
                      <div className={styles.vastramayParent}>
                        <div className={styles.vastramay}>VASTRAMAY</div>
                        <div className={styles.div10}>(2845)</div>
                      </div>
                    </div>
                    <div className={styles.label11}>
                      <input
                        className={styles.backgroundborder11}
                        type="checkbox"
                      />
                      <div className={styles.hangupParent}>
                        <div className={styles.hangup}>Hangup</div>
                        <div className={styles.div11}>(2500)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.moreWrapper}>
                  <div className={styles.more}>+ 426 more</div>
                </div>
              </div>
            </div>
            <div className={styles.border2}>
              <b className={styles.price}>Price</b>
              <div className={styles.priceRangeLabels}>
                <div className={styles.label12}>
                  <input
                    className={styles.backgroundborder12}
                    type="checkbox"
                  />
                  <div className={styles.rs199ToRs37649Parent}>
                    <div className={styles.rs199To}>Rs. 199 to Rs. 37649</div>
                    <div className={styles.div12}>(75794)</div>
                  </div>
                </div>
                <div className={styles.label13}>
                  <input
                    className={styles.backgroundborder13}
                    type="checkbox"
                  />
                  <div className={styles.rs37649ToRs75099Parent}>
                    <div className={styles.rs37649To}>
                      Rs. 37649 to Rs. 75099
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.div13}>(61)</div>
                    </div>
                  </div>
                </div>
                <div className={styles.label14}>
                  <input
                    className={styles.backgroundborder14}
                    type="checkbox"
                  />
                  <div className={styles.rs75099ToRs112549Parent}>
                    <div className={styles.rs75099To}>
                      Rs. 75099 to Rs. 112549
                    </div>
                    <div className={styles.wrapper1}>
                      <div className={styles.div14}>(2)</div>
                    </div>
                  </div>
                </div>
                <div className={styles.label15}>
                  <input
                    className={styles.backgroundborder15}
                    type="checkbox"
                  />
                  <div className={styles.rs112549ToRs149999Parent}>
                    <div className={styles.rs112549To}>
                      Rs. 112549 to Rs. 149999
                    </div>
                    <div className={styles.wrapper2}>
                      <div className={styles.div15}>(1)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.border3}>
              <div className={styles.borderInner}>
                <div className={styles.frameContainer}>
                  <div className={styles.colorWrapper}>
                    <b className={styles.color}>Color</b>
                  </div>
                  <div className={styles.colorChipListParent}>
                    <div className={styles.colorChipList}>
                      <div className={styles.colorSelection}>
                        <div className={styles.backgroundborder16}>
                          <div className={styles.border4} />
                        </div>
                      </div>
                      <div className={styles.colorIndicator}>
                        <div className={styles.background1} />
                      </div>
                      <div className={styles.blue}>{`Blue `}</div>
                      <div className={styles.colorPlaceholder}>
                        <div className={styles.div16}>(8954)</div>
                      </div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.backgroundborderWrapper}>
                        <div className={styles.backgroundborder17}>
                          <div className={styles.border5} />
                        </div>
                      </div>
                      <div className={styles.backgroundWrapper}>
                        <div className={styles.background2} />
                      </div>
                      <div className={styles.green}>{`Green `}</div>
                      <div className={styles.wrapper3}>
                        <div className={styles.div17}>(6680)</div>
                      </div>
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.backgroundborderContainer}>
                        <div className={styles.backgroundborder18}>
                          <div className={styles.border6} />
                        </div>
                      </div>
                      <div className={styles.backgroundContainer}>
                        <div className={styles.background3} />
                      </div>
                      <div className={styles.black}>{`Black `}</div>
                      <div className={styles.wrapper4}>
                        <div className={styles.div18}>(6628)</div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.backgroundborderFrame}>
                        <div className={styles.backgroundborder19}>
                          <div className={styles.border7} />
                        </div>
                      </div>
                      <div className={styles.backgroundborderWrapper1}>
                        <div className={styles.backgroundborder20} />
                      </div>
                      <div className={styles.white}>{`White `}</div>
                      <div className={styles.wrapper5}>
                        <div className={styles.div19}>(5760)</div>
                      </div>
                    </div>
                    <div className={styles.colorChipList1}>
                      <div className={styles.backgroundborderWrapper2}>
                        <div className={styles.backgroundborder21}>
                          <div className={styles.border8} />
                        </div>
                      </div>
                      <div className={styles.backgroundFrame}>
                        <div className={styles.background4} />
                      </div>
                      <div className={styles.navyBlue}>{`Navy Blue `}</div>
                      <div className={styles.wrapper6}>
                        <div className={styles.div20}>(4802)</div>
                      </div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.backgroundborderWrapper3}>
                        <div className={styles.backgroundborder22}>
                          <div className={styles.border9} />
                        </div>
                      </div>
                      <div className={styles.backgroundWrapper1}>
                        <div className={styles.background5} />
                      </div>
                      <div className={styles.yellow}>{`Yellow `}</div>
                      <div className={styles.wrapper7}>
                        <div className={styles.div21}>(4580)</div>
                      </div>
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.backgroundborderWrapper4}>
                        <div className={styles.backgroundborder23}>
                          <div className={styles.border10} />
                        </div>
                      </div>
                      <div className={styles.backgroundWrapper2}>
                        <div className={styles.background6} />
                      </div>
                      <div className={styles.maroon}>{`Maroon `}</div>
                      <div className={styles.wrapper8}>
                        <div className={styles.div22}>(4247)</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.moreContainer}>
                    <div className={styles.more1}>+ 38 more</div>
                  </div>
                </div>
              </div>
              <div className={styles.background7}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image-42@2x.png"
                />
              </div>
            </div>
            <div className={styles.verticalborder}>
              <div className={styles.discountRangeWrapper}>
                <b className={styles.discountRange}>Discount Range</b>
              </div>
              <div className={styles.discountRangeLabels}>
                <div className={styles.label16}>
                  <div className={styles.container1}>
                    <div className={styles.border11} />
                  </div>
                  <div className={styles.andAbove}>10% and above</div>
                </div>
                <div className={styles.label17}>
                  <div className={styles.container2}>
                    <div className={styles.border12} />
                  </div>
                  <div className={styles.andAbove1}>20% and above</div>
                </div>
                <div className={styles.label18}>
                  <div className={styles.container3}>
                    <div className={styles.border13} />
                  </div>
                  <div className={styles.andAbove2}>30% and above</div>
                </div>
                <div className={styles.label19}>
                  <div className={styles.container4}>
                    <div className={styles.border14} />
                  </div>
                  <div className={styles.andAbove3}>40% and above</div>
                </div>
                <div className={styles.label20}>
                  <div className={styles.container5}>
                    <div className={styles.border15} />
                  </div>
                  <div className={styles.andAbove4}>50% and above</div>
                </div>
                <div className={styles.label21}>
                  <div className={styles.container6}>
                    <div className={styles.border16} />
                  </div>
                  <div className={styles.andAbove5}>60% and above</div>
                </div>
                <div className={styles.label22}>
                  <div className={styles.container7}>
                    <div className={styles.border17} />
                  </div>
                  <div className={styles.andAbove6}>70% and above</div>
                </div>
                <div className={styles.label23}>
                  <div className={styles.container8}>
                    <div className={styles.border18} />
                  </div>
                  <div className={styles.andAbove7}>80% and above</div>
                </div>
                <div className={styles.label24}>
                  <div className={styles.container9}>
                    <div className={styles.border19} />
                  </div>
                  <div className={styles.andAbove8}>90% and above</div>
                </div>
              </div>
              <div
                className={styles.backWrapper}
                onClick={onFrameContainerClick}
              >
                <div className={styles.back}>{`BACK `}</div>
              </div>
            </div>
          </div>
          <div className={styles.container10}>
            <div className={styles.container11}>
              <div className={styles.section1}>
                <div className={styles.listWrapper}>
                  <div className={styles.list}>
                    <div className={styles.itemmargin}>
                      <a className={styles.heading4}>Bundles</a>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                    <div className={styles.itemmargin1}>
                      <a className={styles.heading41}>Country of Origin</a>
                      <img
                        className={styles.imageIcon3}
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                    <div className={styles.itemmargin2}>
                      <a className={styles.heading42}>Size</a>
                      <img
                        className={styles.imageIcon4}
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.backgroundborder24}>
                  <a className={styles.sortByContainer}>
                    <span>{`Sort by : `}</span>
                    <b className={styles.recommended}>Recommended</b>
                  </a>
                  <div className={styles.imageWrapper}>
                    <img
                      className={styles.imageIcon5}
                      alt=""
                      src="/image-51@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container12}>
              <div className={styles.section2}>
                <div className={styles.productItemWrapper}>
                  <div className={styles.productItem}>
                    <div className={styles.productContainer}>
                      <div
                        className={styles.link}
                        onClick={onLinkContainerClick}
                      >
                        <ProductInfoContainer
                          fd0176406fe44c4e851c9ba83="/fd0176406fe44c4e851c9ba83af139e51655900698106vmartmengreysolidsuits1jpg@2x.png"
                          firstBrandInfo="3.2"
                          image="/image-20@2x.png"
                          secondEmptyOverlayContain="6"
                        />
                        <div className={styles.background8}>
                          <a
                            className={styles.vMart}
                            href="https://www.myntra.com/suits/v-mart/v-mart-men-grey-solid-suits/18826248/buy"
                            target="_blank"
                          >
                            V-Mart
                          </a>
                          <div className={styles.menSolidSuitsWrapper}>
                            <a
                              className={styles.menSolidSuits}
                              href="https://www.myntra.com/suits/v-mart/v-mart-men-grey-solid-suits/18826248/buy"
                              target="_blank"
                            >
                              Men Solid Suits
                            </a>
                          </div>
                          <a
                            className={styles.rs3300}
                            href="https://www.myntra.com/suits/v-mart/v-mart-men-grey-solid-suits/18826248/buy"
                            target="_blank"
                          >
                            Rs. 3300
                          </a>
                          <a
                            className={styles.onlyFewLeft}
                            href="https://www.myntra.com/suits/v-mart/v-mart-men-grey-solid-suits/18826248/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div
                        className={styles.link1}
                        onClick={onLinkContainerClick1}
                      >
                        <div className={styles.container13}>
                          <div className={styles.background9}>
                            <div className={styles.container14}>
                              <div className={styles.picture}>
                                <img
                                  className={
                                    styles.dc3c413Bbb346f18444176a305Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/2dc3c413bbb346f18444176a305557a11664539101350suits1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background10}>
                          <div className={styles.blackberrysParent}>
                            <a
                              className={styles.blackberrys}
                              href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-rust-solid-suits/20237088/buy"
                              target="_blank"
                            >
                              Blackberrys
                            </a>
                            <a
                              className={styles.menSolidSuits1}
                              href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-rust-solid-suits/20237088/buy"
                              target="_blank"
                            >
                              Men Solid Suits
                            </a>
                            <div className={styles.rs9096Parent}>
                              <a
                                className={styles.rs9096}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-rust-solid-suits/20237088/buy"
                                target="_blank"
                              >
                                Rs. 9096
                              </a>
                              <a
                                className={styles.rs12995}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-rust-solid-suits/20237088/buy"
                                target="_blank"
                              >
                                Rs. 12995
                              </a>
                              <a
                                className={styles.off}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-rust-solid-suits/20237088/buy"
                                target="_blank"
                              >
                                (30% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft1}
                            href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-rust-solid-suits/20237088/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div
                        className={styles.link2}
                        onClick={onLinkContainerClick2}
                      >
                        <div className={styles.container15}>
                          <div className={styles.background11}>
                            <div className={styles.container16}>
                              <div className={styles.picture1}>
                                <img
                                  className={
                                    styles.e225614342894c529bb46ff59bIcon
                                  }
                                  alt=""
                                  src="/849537e225614342894c529bb46ff59b1668491550819suits1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background12}>
                          <div className={styles.ad}>AD</div>
                        </div>
                        <div className={styles.itemDetails}>
                          <div className={styles.productAvailability}>
                            <div className={styles.overlay}>
                              <div className={styles.container17}>
                                <b className={styles.b}>3.9</b>
                              </div>
                              <img
                                className={styles.imageIcon6}
                                alt=""
                                src="/image-71@2x.png"
                              />
                              <div className={styles.container18}>
                                <div className={styles.margin}>
                                  <div className={styles.container19}>
                                    <b className={styles.b1}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b2}>19</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productName}>
                            <a
                              className={styles.blackberrys1}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-black--solid-single-breasted-slim-fit-two-piece-suit/20751930/buy"
                              target="_blank"
                            >
                              Blackberrys
                            </a>
                            <a
                              className={styles.menSolidSingleBreasted}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-black--solid-single-breasted-slim-fit-two-piece-suit/20751930/buy"
                              target="_blank"
                            >
                              Men Solid Single-Breasted Sli…
                            </a>
                          </div>
                          <a
                            className={styles.rs8995}
                            href="https://www.myntra.com/suits/blackberrys/blackberrys-men-black--solid-single-breasted-slim-fit-two-piece-suit/20751930/buy"
                            target="_blank"
                          >
                            Rs. 8995
                          </a>
                        </div>
                      </div>
                      <div className={styles.productInformation}>
                        <div
                          className={styles.link3}
                          onClick={onLinkContainerClick3}
                        >
                          <div className={styles.productElements}>
                            <div className={styles.container20}>
                              <div className={styles.background13}>
                                <div className={styles.picture2}>
                                  <img
                                    className={
                                      styles.ac4c5B6eb407aB33d29ec66e98Icon
                                    }
                                    alt=""
                                    src="/493ac4c5b6eb407ab33d29ec66e98b0e1677668020702arrowpatternedweaveslimfittwopiecesuit1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay1}>
                              <div className={styles.container21}>
                                <b className={styles.b3}>3.9</b>
                              </div>
                              <img
                                className={styles.imageIcon7}
                                loading="lazy"
                                alt=""
                                src="/image-81@2x.png"
                              />
                              <div className={styles.container22}>
                                <div className={styles.margin1}>
                                  <div className={styles.container23}>
                                    <b className={styles.b4}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b5}>11</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productDetails}>
                            <div className={styles.advertiserDetails}>
                              <a
                                className={styles.arrow}
                                href="https://www.myntra.com/suits/arrow/arrow-men-self-design-single-breasted-slim-fit-2-piece-formal-suits/22180128/buy"
                                target="_blank"
                              >
                                Arrow
                              </a>
                              <a
                                className={styles.men2PieceFormal}
                                href="https://www.myntra.com/suits/arrow/arrow-men-self-design-single-breasted-slim-fit-2-piece-formal-suits/22180128/buy"
                                target="_blank"
                              >
                                Men 2-Piece Formal Suits
                              </a>
                              <div className={styles.rs7799Parent}>
                                <a
                                  className={styles.rs7799}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-self-design-single-breasted-slim-fit-2-piece-formal-suits/22180128/buy"
                                  target="_blank"
                                >
                                  Rs. 7799
                                </a>
                                <a
                                  className={styles.rs11999}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-self-design-single-breasted-slim-fit-2-piece-formal-suits/22180128/buy"
                                  target="_blank"
                                >
                                  Rs. 11999
                                </a>
                                <a
                                  className={styles.off1}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-self-design-single-breasted-slim-fit-2-piece-formal-suits/22180128/buy"
                                  target="_blank"
                                >
                                  (35% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.productTile}>
                        <div
                          className={styles.link4}
                          onClick={onLinkContainerClick4}
                        >
                          <div className={styles.contentWrapper}>
                            <div className={styles.container24}>
                              <div className={styles.background14}>
                                <div className={styles.picture3}>
                                  <img
                                    className={
                                      styles.b8b98227b048ff80afF6a5bf49Icon
                                    }
                                    alt=""
                                    src="/04b8b98227b048ff80aff6a5bf4987b41662813369300hangupmenscasualcoatsuitblack1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay2}>
                              <div className={styles.container25}>
                                <b className={styles.b6}>3.5</b>
                              </div>
                              <img
                                className={styles.imageIcon8}
                                loading="lazy"
                                alt=""
                                src="/image-9@2x.png"
                              />
                              <div className={styles.container26}>
                                <div className={styles.margin2}>
                                  <div className={styles.container27}>
                                    <b className={styles.b7}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b8}>31</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productDetails1}>
                            <div className={styles.hangupGroup}>
                              <a
                                className={styles.hangup1}
                                href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-single-breasted-two-piece-casual-suit/19887498/buy"
                                target="_blank"
                              >
                                Hangup
                              </a>
                              <a
                                className={styles.menSolidSingleBreasted1}
                                href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-single-breasted-two-piece-casual-suit/19887498/buy"
                                target="_blank"
                              >
                                Men Solid Single-Breasted Tw…
                              </a>
                              <div className={styles.priceRange}>
                                <a
                                  className={styles.rs2939}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-single-breasted-two-piece-casual-suit/19887498/buy"
                                  target="_blank"
                                >
                                  Rs. 2939
                                </a>
                                <a
                                  className={styles.rs6999}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-single-breasted-two-piece-casual-suit/19887498/buy"
                                  target="_blank"
                                >
                                  Rs. 6999
                                </a>
                                <a
                                  className={styles.off2}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-single-breasted-two-piece-casual-suit/19887498/buy"
                                  target="_blank"
                                >
                                  (58% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ProductCard
                        d97d96df4ed586d5B10baa05f="/1363d97d96df4ed586d5b10baa05fa711668496913125blackberrysmenbluesolidsinglebreastedsuits1jpg@2x.png"
                        emptyPlaceholder="2.7"
                        image="/image-102@2x.png"
                        emptyIconMargin="9"
                        blackberrysHref="https://www.myntra.com/suits/blackberrys/blackberrys-men-blue-solid-2-piece-single-breasted-suits/20751888/buy"
                        pieceSingleBreastedSuits="2-Piece Single-Breasted Suits"
                        pieceSingleBreasteHref="https://www.myntra.com/suits/blackberrys/blackberrys-men-blue-solid-2-piece-single-breasted-suits/20751888/buy"
                        rs8995="Rs. 8995"
                        rs8995Href="https://www.myntra.com/suits/blackberrys/blackberrys-men-blue-solid-2-piece-single-breasted-suits/20751888/buy"
                      />
                      <div className={styles.productCard}>
                        <div
                          className={styles.link5}
                          onClick={onLinkContainerClick5}
                        >
                          <div className={styles.containerParent}>
                            <div className={styles.container28}>
                              <div className={styles.background15}>
                                <div className={styles.picture4}>
                                  <img
                                    className={
                                      styles.bb8fC69f4edb965f448099c883Icon
                                    }
                                    alt=""
                                    src="/9138bb8fc69f4edb965f448099c883c81649328821165hangupmensblackregularfitsinglebreastedformalsuit1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay3}>
                              <div className={styles.container29}>
                                <b className={styles.placeholder}>3</b>
                              </div>
                              <img
                                className={styles.imageIcon9}
                                loading="lazy"
                                alt=""
                                src="/image-112@2x.png"
                              />
                              <div className={styles.container30}>
                                <div className={styles.margin3}>
                                  <div className={styles.container31}>
                                    <b className={styles.paddingPlaceholder}>
                                      |
                                    </b>
                                  </div>
                                </div>
                                <b className={styles.emptyPadding}>39</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productData}>
                            <div className={styles.offerInfoContainer}>
                              <a
                                className={styles.hangup2}
                                href="https://www.myntra.com/suits/hangup/hangup-mens-black-regular-fit-single-breasted-formal-suit/2413012/buy"
                                target="_blank"
                              >
                                Hangup
                              </a>
                              <a
                                className={styles.regularFitFormal}
                                href="https://www.myntra.com/suits/hangup/hangup-mens-black-regular-fit-single-breasted-formal-suit/2413012/buy"
                                target="_blank"
                              >
                                Regular Fit Formal Suit
                              </a>
                              <div className={styles.rs2589Parent}>
                                <a
                                  className={styles.rs2589}
                                  href="https://www.myntra.com/suits/hangup/hangup-mens-black-regular-fit-single-breasted-formal-suit/2413012/buy"
                                  target="_blank"
                                >
                                  Rs. 2589
                                </a>
                                <a
                                  className={styles.rs69991}
                                  href="https://www.myntra.com/suits/hangup/hangup-mens-black-regular-fit-single-breasted-formal-suit/2413012/buy"
                                  target="_blank"
                                >
                                  Rs. 6999
                                </a>
                                <a
                                  className={styles.off3}
                                  href="https://www.myntra.com/suits/hangup/hangup-mens-black-regular-fit-single-breasted-formal-suit/2413012/buy"
                                  target="_blank"
                                >
                                  (63% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.productContainer1}>
                        <div
                          className={styles.link6}
                          onClick={onLinkContainerClick6}
                        >
                          <div className={styles.linkComponents}>
                            <div className={styles.container32}>
                              <div className={styles.background16}>
                                <div className={styles.picture5}>
                                  <img
                                    className={
                                      styles.c01df0A6b3487c9c0474376acfIcon
                                    }
                                    alt=""
                                    src="/87c01df0a6b3487c9c0474376acf3e3a16241924040391jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay4}>
                              <div className={styles.container33}>
                                <b className={styles.null}>3.7</b>
                              </div>
                              <img
                                className={styles.imageIcon10}
                                loading="lazy"
                                alt=""
                                src="/image-9@2x.png"
                              />
                              <div className={styles.container34}>
                                <div className={styles.margin4}>
                                  <div className={styles.container35}>
                                    <b className={styles.null1}>|</b>
                                  </div>
                                </div>
                                <b className={styles.null2}>19</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productDetails2}>
                            <div className={styles.detailsContainer}>
                              <a
                                className={styles.hangupPlus}
                                href="https://www.myntra.com/suits/hangup+plus/hangup-plus-men-black-solid-tuxedo-two-piece-suit/14576312/buy"
                                target="_blank"
                              >
                                hangup plus
                              </a>
                              <a
                                className={styles.menSolidTuxedo}
                                href="https://www.myntra.com/suits/hangup+plus/hangup-plus-men-black-solid-tuxedo-two-piece-suit/14576312/buy"
                                target="_blank"
                              >
                                Men Solid Tuxedo 2-Piece Suit
                              </a>
                              <div className={styles.discountPrices}>
                                <a
                                  className={styles.rs2899}
                                  href="https://www.myntra.com/suits/hangup+plus/hangup-plus-men-black-solid-tuxedo-two-piece-suit/14576312/buy"
                                  target="_blank"
                                >
                                  Rs. 2899
                                </a>
                                <a
                                  className={styles.rs9999}
                                  href="https://www.myntra.com/suits/hangup+plus/hangup-plus-men-black-solid-tuxedo-two-piece-suit/14576312/buy"
                                  target="_blank"
                                >
                                  Rs. 9999
                                </a>
                                <a
                                  className={styles.off4}
                                  href="https://www.myntra.com/suits/hangup+plus/hangup-plus-men-black-solid-tuxedo-two-piece-suit/14576312/buy"
                                  target="_blank"
                                >
                                  (71% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper}>
                        <div
                          className={styles.link7}
                          onClick={onLinkContainerClick7}
                        >
                          <div className={styles.secondLinkComponents}>
                            <div className={styles.container36}>
                              <div className={styles.background17}>
                                <div className={styles.picture6}>
                                  <img
                                    className={
                                      styles.fce2e3b6D0df415f908f206810Icon
                                    }
                                    loading="lazy"
                                    alt=""
                                    src="/fce2e3b6d0df415f908f2068101ee74b1662125562577suits1jpg@2x.png"
                                  />
                                </div>
                              </div>
                              <div className={styles.background18}>
                                <div className={styles.ad1}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.secondDetailsContainerWrapper}>
                            <div className={styles.secondDetailsContainer}>
                              <a
                                className={styles.blackberrys2}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-navy-blue-solid-single-breasted-slim-fit-formal-suits-/19758928/buy"
                                target="_blank"
                              >
                                Blackberrys
                              </a>
                              <a
                                className={styles.menSlimFitFormal}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-navy-blue-solid-single-breasted-slim-fit-formal-suits-/19758928/buy"
                                target="_blank"
                              >
                                Men Slim-Fit Formal Suits
                              </a>
                            </div>
                          </div>
                          <div className={styles.rs12095Wrapper}>
                            <a
                              className={styles.rs12095}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-navy-blue-solid-single-breasted-slim-fit-formal-suits-/19758928/buy"
                              target="_blank"
                            >
                              Rs. 12095
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.productTile1}>
                        <div
                          className={styles.link8}
                          onClick={onLinkContainerClick8}
                        >
                          <div className={styles.productInfo}>
                            <div className={styles.container37}>
                              <div className={styles.background19}>
                                <div className={styles.picture7}>
                                  <img
                                    className={
                                      styles.b2326879a3510c021692163827168Icon
                                    }
                                    alt=""
                                    src="/0160849783954911b2326879a3510c021692163827168invictusmensuits77416921638263541jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay5}>
                              <div className={styles.container38}>
                                <b className={styles.emptyContainer}>3.6</b>
                              </div>
                              <img
                                className={styles.imageIcon11}
                                loading="lazy"
                                alt=""
                                src="/image-18@2x.png"
                              />
                              <div className={styles.container39}>
                                <div className={styles.margin5}>
                                  <div className={styles.container40}>
                                    <b className={styles.emptySpace}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b9}>33</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.productDetails3}>
                            <div className={styles.productName1}>
                              <a
                                className={styles.invictus}
                                href="https://www.myntra.com/suits/invictus/invictus-men-slim-fit-single-breasted-2-piece-casual-suit/23358646/buy"
                                target="_blank"
                              >
                                INVICTUS
                              </a>
                              <a
                                className={styles.menSlimFit}
                                href="https://www.myntra.com/suits/invictus/invictus-men-slim-fit-single-breasted-2-piece-casual-suit/23358646/buy"
                                target="_blank"
                              >
                                Men Slim Fit 2-Piece Suit
                              </a>
                              <div className={styles.priceDetails}>
                                <a
                                  className={styles.rs3869}
                                  href="https://www.myntra.com/suits/invictus/invictus-men-slim-fit-single-breasted-2-piece-casual-suit/23358646/buy"
                                  target="_blank"
                                >
                                  Rs. 3869
                                </a>
                                <a
                                  className={styles.rs8998}
                                  href="https://www.myntra.com/suits/invictus/invictus-men-slim-fit-single-breasted-2-piece-casual-suit/23358646/buy"
                                  target="_blank"
                                >
                                  Rs. 8998
                                </a>
                                <a
                                  className={styles.off5}
                                  href="https://www.myntra.com/suits/invictus/invictus-men-slim-fit-single-breasted-2-piece-casual-suit/23358646/buy"
                                  target="_blank"
                                >
                                  (57% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.link9}
                        onClick={onLinkContainerClick9}
                      >
                        <div className={styles.container41}>
                          <div className={styles.background20}>
                            <div className={styles.picture8}>
                              <img
                                className={
                                  styles.b19ba4A4524344Bd63C7cafb85Icon
                                }
                                loading="lazy"
                                alt=""
                                src="/25b19ba4a4524344bd63c7cafb8521b81678267390451adbyarvindmensinglebreastedthreepieceformalsuits1jpg@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.background21}>
                          <div className={styles.contentArea}>
                            <a
                              className={styles.adByArvind}
                              href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-single-breasted-three-piece-formal-suits/22256526/buy"
                              target="_blank"
                            >
                              AD By Arvind
                            </a>
                            <a
                              className={styles.menSingleBreasted}
                              href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-single-breasted-three-piece-formal-suits/22256526/buy"
                              target="_blank"
                            >
                              Men Single Breasted Three Pie…
                            </a>
                            <div className={styles.costBreakdown}>
                              <a
                                className={styles.rs6749}
                                href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-single-breasted-three-piece-formal-suits/22256526/buy"
                                target="_blank"
                              >
                                Rs. 6749
                              </a>
                              <a
                                className={styles.rs14999}
                                href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-single-breasted-three-piece-formal-suits/22256526/buy"
                                target="_blank"
                              >
                                Rs. 14999
                              </a>
                              <a
                                className={styles.off6}
                                href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-single-breasted-three-piece-formal-suits/22256526/buy"
                                target="_blank"
                              >
                                (55% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft2}
                            href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-single-breasted-three-piece-formal-suits/22256526/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div
                        className={styles.link10}
                        onClick={onLinkContainerClick10}
                      >
                        <div className={styles.container42}>
                          <div className={styles.background22}>
                            <div className={styles.picture9}>
                              <img
                                className={
                                  styles.d437f747174f4f7f90e73c384aIcon
                                }
                                alt=""
                                src="/d437f747174f4f7f90e73c384ad5ba4c1650883909359suits1jpg@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.productBackgroundAd}>
                          <div className={styles.background23}>
                            <div className={styles.ad2}>AD</div>
                          </div>
                        </div>
                        <div className={styles.productTile2}>
                          <div className={styles.overlayContent}>
                            <div className={styles.overlay6}>
                              <div className={styles.container43}>
                                <b className={styles.b10}>4.1</b>
                              </div>
                              <img
                                className={styles.imageIcon12}
                                loading="lazy"
                                alt=""
                                src="/image-141@2x.png"
                              />
                              <div className={styles.container44}>
                                <div className={styles.margin6}>
                                  <div className={styles.container45}>
                                    <b className={styles.emptyElement}>|</b>
                                  </div>
                                </div>
                                <b className={styles.lowerContainer}>10</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.background24}>
                            <div className={styles.productDetails4}>
                              <a
                                className={styles.blackberrys3}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-purple-2-piece-formal-suit/18026910/buy"
                                target="_blank"
                              >
                                Blackberrys
                              </a>
                              <a
                                className={styles.men2Piece}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-purple-2-piece-formal-suit/18026910/buy"
                                target="_blank"
                              >
                                Men 2 Piece Formal Suit
                              </a>
                              <div className={styles.priceContainer}>
                                <a
                                  className={styles.rs7797}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-purple-2-piece-formal-suit/18026910/buy"
                                  target="_blank"
                                >
                                  Rs. 7797
                                </a>
                                <a
                                  className={styles.rs129951}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-purple-2-piece-formal-suit/18026910/buy"
                                  target="_blank"
                                >
                                  Rs. 12995
                                </a>
                                <a
                                  className={styles.off7}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-purple-2-piece-formal-suit/18026910/buy"
                                  target="_blank"
                                >
                                  (40% OFF)
                                </a>
                              </div>
                            </div>
                            <a
                              className={styles.onlyFewLeft3}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-purple-2-piece-formal-suit/18026910/buy"
                              target="_blank"
                            >
                              Only Few Left!
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.link11}
                        onClick={onLinkContainerClick11}
                      >
                        <div className={styles.productContainer2}>
                          <div className={styles.container46}>
                            <div className={styles.background25}>
                              <div className={styles.picture10}>
                                <img
                                  className={
                                    styles.d4b5160D12f4bc78433C90c401Icon
                                  }
                                  alt=""
                                  src="/5d4b5160d12f4bc78433c90c4012c0c11657899672300klotthemenmaroonselfdesignslimfitsinglebreastedthreepiec1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay7}>
                            <div className={styles.container47}>
                              <b className={styles.b11}>3.3</b>
                            </div>
                            <img
                              className={styles.imageIcon13}
                              loading="lazy"
                              alt=""
                              src="/image-18@2x.png"
                            />
                            <div className={styles.container48}>
                              <div className={styles.margin7}>
                                <div className={styles.container49}>
                                  <b className={styles.emptyElement1}>|</b>
                                </div>
                              </div>
                              <b className={styles.imageParent}>60</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detailsOverlayCard}>
                          <div className={styles.productNameContainer}>
                            <a
                              className={styles.klotthe}
                              href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-self-design-slim-fit-single-breasted-three-piece-formal-suit/19126678/buy"
                              target="_blank"
                            >
                              KLOTTHE
                            </a>
                            <a
                              className={styles.menSelfDesignSlimFit}
                              href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-self-design-slim-fit-single-breasted-three-piece-formal-suit/19126678/buy"
                              target="_blank"
                            >
                              Men Self-Design Slim-Fit Singl…
                            </a>
                            <div className={styles.priceContainer1}>
                              <a
                                className={styles.rs4497}
                                href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-self-design-slim-fit-single-breasted-three-piece-formal-suit/19126678/buy"
                                target="_blank"
                              >
                                Rs. 4497
                              </a>
                              <a
                                className={styles.rs16659}
                                href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-self-design-slim-fit-single-breasted-three-piece-formal-suit/19126678/buy"
                                target="_blank"
                              >
                                Rs. 16659
                              </a>
                              <a
                                className={styles.off8}
                                href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-self-design-slim-fit-single-breasted-three-piece-formal-suit/19126678/buy"
                                target="_blank"
                              >
                                (73% OFF)
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productContainer3}>
                      <div className={styles.linkContainer}>
                        <div
                          className={styles.link12}
                          onClick={onLinkContainerClick12}
                        >
                          <div className={styles.container50}>
                            <div className={styles.background26}>
                              <div className={styles.container51}>
                                <div className={styles.picture11}>
                                  <img
                                    className={
                                      styles.d1762fF5ee4d2187d5Aa39d5c3Icon
                                    }
                                    loading="lazy"
                                    alt=""
                                    src="/48d1762ff5ee4d2187d5aa39d5c3fc5f1709207463948blazers1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner}>
                            <div className={styles.svenSuitsParent}>
                              <a
                                className={styles.svenSuits}
                                href="https://www.myntra.com/blazers/sven+suits/-sven-suits-men-single-breasted-blazer/27940040/buy"
                                target="_blank"
                              >
                                sven suits
                              </a>
                              <a
                                className={styles.menSingleBreasted1}
                                href="https://www.myntra.com/blazers/sven+suits/-sven-suits-men-single-breasted-blazer/27940040/buy"
                                target="_blank"
                              >
                                Men Single Breasted Blazer
                              </a>
                            </div>
                          </div>
                          <div className={styles.rs27500Wrapper}>
                            <a
                              className={styles.rs27500}
                              href="https://www.myntra.com/blazers/sven+suits/-sven-suits-men-single-breasted-blazer/27940040/buy"
                              target="_blank"
                            >
                              Rs. 27500
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkFrame}>
                        <div
                          className={styles.link13}
                          onClick={onLinkContainerClick13}
                        >
                          <div className={styles.containerWrapper}>
                            <div className={styles.container52}>
                              <div className={styles.background27}>
                                <div className={styles.container53}>
                                  <div className={styles.picture12}>
                                    <img
                                      className={
                                        styles.afb6d9bbDfcc497f9b052c74f5Icon
                                      }
                                      loading="lazy"
                                      alt=""
                                      src="/afb6d9bbdfcc497f9b052c74f5a7480017164497682603pieceslimfityarddyeddobbysuits1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.background28}>
                                <div className={styles.ad3}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkChild}>
                            <div className={styles.blackberrysGroup}>
                              <a
                                className={styles.blackberrys4}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-self-design-slim-fit-single-breasted-three-piece-formal-suits/29709374/buy"
                                target="_blank"
                              >
                                Blackberrys
                              </a>
                              <a
                                className={styles.threePieceFormalSuits}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-self-design-slim-fit-single-breasted-three-piece-formal-suits/29709374/buy"
                                target="_blank"
                              >
                                Three-Piece Formal Suits
                              </a>
                            </div>
                          </div>
                          <div className={styles.rs15995Wrapper}>
                            <a
                              className={styles.rs15995}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-self-design-slim-fit-single-breasted-three-piece-formal-suits/29709374/buy"
                              target="_blank"
                            >
                              Rs. 15995
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.link14}
                        onClick={onLinkContainerClick14}
                      >
                        <div className={styles.containerGroup}>
                          <div className={styles.container54}>
                            <div className={styles.background29}>
                              <div className={styles.container55}>
                                <div className={styles.picture13}>
                                  <img
                                    className={
                                      styles.cc5ce90590e24c609366Fa1141Icon
                                    }
                                    alt=""
                                    src="/cc5ce90590e24c609366fa1141f7deb81706080263204menssuitsets36717060802627661jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay8}>
                            <div className={styles.container56}>
                              <b className={styles.ninthEmptyContainer}>4.3</b>
                            </div>
                            <img
                              className={styles.imageIcon14}
                              alt=""
                              src="/image-161@2x.png"
                            />
                            <div className={styles.container57}>
                              <div className={styles.margin8}>
                                <div className={styles.container58}>
                                  <b className={styles.b12}>|</b>
                                </div>
                              </div>
                              <b className={styles.b13}>37</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkInner1}>
                          <div className={styles.peterEnglandEliteParent}>
                            <a
                              className={styles.peterEnglandElite}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-single-breasted-formal-2-piece-suit/24752694/buy"
                              target="_blank"
                            >
                              Peter England Elite
                            </a>
                            <a
                              className={styles.singleBreasted2Piece}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-single-breasted-formal-2-piece-suit/24752694/buy"
                              target="_blank"
                            >
                              Single-Breasted 2 Piece Suit
                            </a>
                            <div className={styles.priceInfo}>
                              <a
                                className={styles.rs5599}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-single-breasted-formal-2-piece-suit/24752694/buy"
                                target="_blank"
                              >
                                Rs. 5599
                              </a>
                              <a
                                className={styles.rs7999}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-single-breasted-formal-2-piece-suit/24752694/buy"
                                target="_blank"
                              >
                                Rs. 7999
                              </a>
                              <a
                                className={styles.off9}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-single-breasted-formal-2-piece-suit/24752694/buy"
                                target="_blank"
                              >
                                (30% OFF)
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.link15}
                        onClick={onLinkContainerClick15}
                      >
                        <div className={styles.containerContainer}>
                          <div className={styles.container59}>
                            <div className={styles.background30}>
                              <div className={styles.picture14}>
                                <img
                                  className={
                                    styles.d4a014f580f40faB970F871fbcIcon
                                  }
                                  alt=""
                                  src="/7d4a014f580f40fab970f871fbccf1801685336824199menblacksolidslimfitformaltwopiecesuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay9}>
                            <div className={styles.container60}>
                              <b className={styles.b14}>4</b>
                            </div>
                            <img
                              className={styles.imageIcon15}
                              loading="lazy"
                              alt=""
                              src="/image-171@2x.png"
                            />
                            <div className={styles.container61}>
                              <div className={styles.margin9}>
                                <div className={styles.container62}>
                                  <b className={styles.b15}>|</b>
                                </div>
                              </div>
                              <b className={styles.b16}>26</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background31}>
                          <div className={styles.productInfo1}>
                            <a
                              className={styles.peterEnglandElite1}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-2-pieces-formal-suits/23448866/buy"
                              target="_blank"
                            >
                              Peter England Elite
                            </a>
                            <a
                              className={styles.men2Pieces}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-2-pieces-formal-suits/23448866/buy"
                              target="_blank"
                            >
                              Men 2 Pieces Formal Suits
                            </a>
                            <div className={styles.priceRange1}>
                              <a
                                className={styles.rs6299}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-2-pieces-formal-suits/23448866/buy"
                                target="_blank"
                              >
                                Rs. 6299
                              </a>
                              <a
                                className={styles.rs8999}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-2-pieces-formal-suits/23448866/buy"
                                target="_blank"
                              >
                                Rs. 8999
                              </a>
                              <a
                                className={styles.off10}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-2-pieces-formal-suits/23448866/buy"
                                target="_blank"
                              >
                                (30% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft4}
                            href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-2-pieces-formal-suits/23448866/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <ProductCard
                        d97d96df4ed586d5B10baa05f="/8a3eb1cf32ce4748b767e7debd91ba5e1627479677534suits1jpg@2x.png"
                        emptyPlaceholder="3.8"
                        image="/image-181@2x.png"
                        emptyIconMargin="23"
                        blackberrysHref="https://www.myntra.com/suits/blackberrys/blackberrys-men-maroon-slim-fit-single-breasted-formal-3-piece-suit/14965660/buy"
                        pieceSingleBreastedSuits="Slim Fit Formal 3-Piece Suit"
                        pieceSingleBreasteHref="https://www.myntra.com/suits/blackberrys/blackberrys-men-maroon-slim-fit-single-breasted-formal-3-piece-suit/14965660/buy"
                        rs8995="Rs. 10995"
                        rs8995Href="https://www.myntra.com/suits/blackberrys/blackberrys-men-maroon-slim-fit-single-breasted-formal-3-piece-suit/14965660/buy"
                      />
                      <div className={styles.linkWrapper1}>
                        <div
                          className={styles.link16}
                          onClick={onLinkContainerClick16}
                        >
                          <div className={styles.container63}>
                            <div className={styles.background32}>
                              <div className={styles.picture15}>
                                <img
                                  className={
                                    styles.bd696d584b2693f8D970e184a5Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/5239bd696d584b2693f8d970e184a5d51665483618326arrowmennavytailoredregularfitwindowpanechecktwopiecesuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner2}>
                            <div className={styles.arrowParent}>
                              <a
                                className={styles.arrow1}
                                href="https://www.myntra.com/suits/arrow/arrow-men-navy-blue-checked-single-breasted-2-piece-suit/20358652/buy"
                                target="_blank"
                              >
                                Arrow
                              </a>
                              <a
                                className={styles.menCheckedSingleBreasted}
                                href="https://www.myntra.com/suits/arrow/arrow-men-navy-blue-checked-single-breasted-2-piece-suit/20358652/buy"
                                target="_blank"
                              >
                                Men Checked Single-Breasted …
                              </a>
                              <div className={styles.productPriceDetails}>
                                <a
                                  className={styles.rs6599}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-navy-blue-checked-single-breasted-2-piece-suit/20358652/buy"
                                  target="_blank"
                                >
                                  Rs. 6599
                                </a>
                                <a
                                  className={styles.rs119991}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-navy-blue-checked-single-breasted-2-piece-suit/20358652/buy"
                                  target="_blank"
                                >
                                  Rs. 11999
                                </a>
                                <a
                                  className={styles.off11}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-navy-blue-checked-single-breasted-2-piece-suit/20358652/buy"
                                  target="_blank"
                                >
                                  (45% OFF)
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
                        <div className={styles.containerParent1}>
                          <div className={styles.container64}>
                            <div className={styles.background33}>
                              <div className={styles.picture16}>
                                <img
                                  className={
                                    styles.e4e38427386036f986ae5c9121Icon
                                  }
                                  alt=""
                                  src="/6823958e4e38427386036f986ae5c9121710137836743canarylondonblackdobbyslimfit3pieceformalsuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay10}>
                            <div className={styles.container65}>
                              <b className={styles.b17}>1.8</b>
                            </div>
                            <img
                              className={styles.imageIcon16}
                              loading="lazy"
                              alt=""
                              src="/image-191@2x.png"
                            />
                            <div className={styles.container66}>
                              <div className={styles.margin10}>
                                <div className={styles.container67}>
                                  <b className={styles.null3}>|</b>
                                </div>
                              </div>
                              <b className={styles.null4}>5</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background34}>
                          <div className={styles.productInfo2}>
                            <a
                              className={styles.canaryLondon}
                              href="https://www.myntra.com/suits/canary+london/canary-london-men-3-piece-slim-fit-single-breasted-suits-set/28170352/buy"
                              target="_blank"
                            >
                              Canary London
                            </a>
                            <a
                              className={styles.pieceSlimFitSuits}
                              href="https://www.myntra.com/suits/canary+london/canary-london-men-3-piece-slim-fit-single-breasted-suits-set/28170352/buy"
                              target="_blank"
                            >
                              3-Piece Slim-Fit Suits Set
                            </a>
                            <div className={styles.priceDetails1}>
                              <a
                                className={styles.rs4499}
                                href="https://www.myntra.com/suits/canary+london/canary-london-men-3-piece-slim-fit-single-breasted-suits-set/28170352/buy"
                                target="_blank"
                              >
                                Rs. 4499
                              </a>
                              <a
                                className={styles.rs99991}
                                href="https://www.myntra.com/suits/canary+london/canary-london-men-3-piece-slim-fit-single-breasted-suits-set/28170352/buy"
                                target="_blank"
                              >
                                Rs. 9999
                              </a>
                              <a
                                className={styles.off12}
                                href="https://www.myntra.com/suits/canary+london/canary-london-men-3-piece-slim-fit-single-breasted-suits-set/28170352/buy"
                                target="_blank"
                              >
                                (55% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft5}
                            href="https://www.myntra.com/suits/canary+london/canary-london-men-3-piece-slim-fit-single-breasted-suits-set/28170352/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div className={styles.linkWrapper2}>
                        <div
                          className={styles.link18}
                          onClick={onLinkContainerClick18}
                        >
                          <div className={styles.containerFrame}>
                            <div className={styles.container68}>
                              <div className={styles.background35}>
                                <div className={styles.picture17}>
                                  <img
                                    className={
                                      styles.bf6743Fc6a46229d0699990528Icon
                                    }
                                    loading="lazy"
                                    alt=""
                                    src="/44bf6743fc6a46229d0699990528396c1668492916291suits1jpg@2x.png"
                                  />
                                </div>
                              </div>
                              <div className={styles.background36}>
                                <div className={styles.ad4}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner3}>
                            <div className={styles.blackberrysContainer}>
                              <a
                                className={styles.blackberrys5}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-maroon-solid-slim-fit-single-breasted-2-piece-suits/20751922/buy"
                                target="_blank"
                              >
                                Blackberrys
                              </a>
                              <a
                                className={styles.menSolidSlimFit}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-maroon-solid-slim-fit-single-breasted-2-piece-suits/20751922/buy"
                                target="_blank"
                              >
                                Men Solid Slim-Fit Single Brea…
                              </a>
                            </div>
                          </div>
                          <div className={styles.rs10995Wrapper}>
                            <a
                              className={styles.rs10995}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-maroon-solid-slim-fit-single-breasted-2-piece-suits/20751922/buy"
                              target="_blank"
                            >
                              Rs. 10995
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.link19}
                        onClick={onLinkContainerClick19}
                      >
                        <div className={styles.containerParent2}>
                          <div className={styles.container69}>
                            <div className={styles.background37}>
                              <div className={styles.picture18}>
                                <img
                                  className={
                                    styles.b9f2d8d4cf14b688d9dAa796abIcon
                                  }
                                  alt=""
                                  src="/4b9f2d8d4cf14b688d9daa796ab958fc1685352642339arrowtailoredregularfitheatheredtwopiecesuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay11}>
                            <div className={styles.container70}>
                              <b className={styles.b18}>3.9</b>
                            </div>
                            <img
                              className={styles.imageIcon17}
                              loading="lazy"
                              alt=""
                              src="/image-181@2x.png"
                            />
                            <div className={styles.container71}>
                              <div className={styles.margin11}>
                                <div className={styles.container72}>
                                  <b className={styles.null5}>|</b>
                                </div>
                              </div>
                              <b className={styles.null6}>29</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background38}>
                          <div className={styles.thirdProductInformation}>
                            <a
                              className={styles.arrow2}
                              href="https://www.myntra.com/suits/arrow/arrow-single-breasted-2-peice-suits/23461002/buy"
                              target="_blank"
                            >
                              Arrow
                            </a>
                            <a
                              className={styles.singleBreasted2Peice}
                              href="https://www.myntra.com/suits/arrow/arrow-single-breasted-2-peice-suits/23461002/buy"
                              target="_blank"
                            >
                              Single Breasted 2-Peice Suits
                            </a>
                            <div className={styles.fourthDiscountPrices}>
                              <a
                                className={styles.rs77991}
                                href="https://www.myntra.com/suits/arrow/arrow-single-breasted-2-peice-suits/23461002/buy"
                                target="_blank"
                              >
                                Rs. 7799
                              </a>
                              <a
                                className={styles.rs119992}
                                href="https://www.myntra.com/suits/arrow/arrow-single-breasted-2-peice-suits/23461002/buy"
                                target="_blank"
                              >
                                Rs. 11999
                              </a>
                              <a
                                className={styles.off13}
                                href="https://www.myntra.com/suits/arrow/arrow-single-breasted-2-peice-suits/23461002/buy"
                                target="_blank"
                              >
                                (35% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft6}
                            href="https://www.myntra.com/suits/arrow/arrow-single-breasted-2-peice-suits/23461002/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div className={styles.linkWrapper3}>
                        <div
                          className={styles.link20}
                          onClick={onLinkContainerClick20}
                        >
                          <div className={styles.containerParent3}>
                            <div className={styles.container73}>
                              <div className={styles.background39}>
                                <div className={styles.picture19}>
                                  <img
                                    className={
                                      styles.f978e39dA6064df4Bc13B31f5aIcon
                                    }
                                    alt=""
                                    src="/f978e39da6064df4bc13b31f5a37a0811659009505012allensollymaroontwopiecesuit1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay12}>
                              <div className={styles.container74}>
                                <b className={styles.b19}>4.1</b>
                              </div>
                              <img
                                className={styles.imageIcon18}
                                loading="lazy"
                                alt=""
                                src="/image-212@2x.png"
                              />
                              <div className={styles.container75}>
                                <div className={styles.margin12}>
                                  <div className={styles.container76}>
                                    <b className={styles.b20}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b21}>9</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner4}>
                            <div className={styles.allenSollyParent}>
                              <a
                                className={styles.allenSolly}
                                href="https://www.myntra.com/suits/allen+solly/allen-solly-men-maroon--blue-solid-slim-fit-single-breasted-two-piece-party-suit/19287326/buy"
                                target="_blank"
                              >
                                Allen Solly
                              </a>
                              <a
                                className={styles.menSolidTwo}
                                href="https://www.myntra.com/suits/allen+solly/allen-solly-men-maroon--blue-solid-slim-fit-single-breasted-two-piece-party-suit/19287326/buy"
                                target="_blank"
                              >
                                Men Solid Two Piece Party Suit
                              </a>
                              <div className={styles.rs5499Parent}>
                                <a
                                  className={styles.rs5499}
                                  href="https://www.myntra.com/suits/allen+solly/allen-solly-men-maroon--blue-solid-slim-fit-single-breasted-two-piece-party-suit/19287326/buy"
                                  target="_blank"
                                >
                                  Rs. 5499
                                </a>
                                <a
                                  className={styles.rs99992}
                                  href="https://www.myntra.com/suits/allen+solly/allen-solly-men-maroon--blue-solid-slim-fit-single-breasted-two-piece-party-suit/19287326/buy"
                                  target="_blank"
                                >
                                  Rs. 9999
                                </a>
                                <a
                                  className={styles.off14}
                                  href="https://www.myntra.com/suits/allen+solly/allen-solly-men-maroon--blue-solid-slim-fit-single-breasted-two-piece-party-suit/19287326/buy"
                                  target="_blank"
                                >
                                  (45% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper4}>
                        <div
                          className={styles.link21}
                          onClick={onLinkContainerClick21}
                        >
                          <div className={styles.container77}>
                            <div className={styles.background40}>
                              <div className={styles.picture20}>
                                <img
                                  className={
                                    styles.d117ea3B82f4ff7BffeB371b46Icon
                                  }
                                  alt=""
                                  src="/6d117ea3b82f4ff7bffeb371b469a96b1681888328377arrowmensinglebreastedthreepieceformalsuit62916818881jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.background41}>
                            <div className={styles.ad5}>AD</div>
                          </div>
                          <div className={styles.productOverlay}>
                            <div className={styles.overlay13}>
                              <div className={styles.container78}>
                                <b className={styles.emptyPlaceholder}>3.6</b>
                              </div>
                              <img
                                className={styles.imageIcon19}
                                loading="lazy"
                                alt=""
                                src="/image-35@2x.png"
                              />
                              <div className={styles.container79}>
                                <div className={styles.margin13}>
                                  <div className={styles.container80}>
                                    <b className={styles.invisibleElement}>|</b>
                                  </div>
                                </div>
                                <b className={styles.separatorElement}>16</b>
                              </div>
                            </div>
                            <div className={styles.productCallToAction}>
                              <a
                                className={styles.arrow3}
                                href="https://www.myntra.com/suits/arrow/arrow-men-single-breasted-three-piece-formal-suit/21112560/buy"
                                target="_blank"
                              >
                                Arrow
                              </a>
                              <a
                                className={styles.menThreePiece}
                                href="https://www.myntra.com/suits/arrow/arrow-men-single-breasted-three-piece-formal-suit/21112560/buy"
                                target="_blank"
                              >
                                Men Three Piece Formal Suit
                              </a>
                              <div className={styles.priceInfo1}>
                                <a
                                  className={styles.rs7699}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-single-breasted-three-piece-formal-suit/21112560/buy"
                                  target="_blank"
                                >
                                  Rs. 7699
                                </a>
                                <a
                                  className={styles.rs13999}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-single-breasted-three-piece-formal-suit/21112560/buy"
                                  target="_blank"
                                >
                                  Rs. 13999
                                </a>
                                <a
                                  className={styles.off15}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-single-breasted-three-piece-formal-suit/21112560/buy"
                                  target="_blank"
                                >
                                  (45% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper5}>
                        <div
                          className={styles.link22}
                          onClick={onLinkContainerClick22}
                        >
                          <div className={styles.containerParent4}>
                            <div className={styles.container81}>
                              <div className={styles.background42}>
                                <div className={styles.picture21}>
                                  <img
                                    className={
                                      styles.c154c96254fd0Bb438fb5b84eaIcon
                                    }
                                    alt=""
                                    src="/124c154c96254fd0bb438fb5b84ea2dc1603103413056manqmensuits18816031034107051jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay14}>
                              <div className={styles.container82}>
                                <b className={styles.b22}>4</b>
                              </div>
                              <img
                                className={styles.imageIcon20}
                                loading="lazy"
                                alt=""
                                src="/image-231@2x.png"
                              />
                              <div className={styles.container83}>
                                <div className={styles.margin14}>
                                  <div className={styles.container84}>
                                    <b className={styles.emptyElement2}>|</b>
                                  </div>
                                </div>
                                <b className={styles.imageParent1}>70</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.detailsOverlay}>
                            <div className={styles.brandContainer}>
                              <a
                                className={styles.manq}
                                href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-double-breasted-formal-suit/12554406/buy"
                                target="_blank"
                              >
                                MANQ
                              </a>
                              <a
                                className={styles.menSlimFit1}
                                href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-double-breasted-formal-suit/12554406/buy"
                                target="_blank"
                              >
                                Men Slim Fit Formal Suit
                              </a>
                              <div className={styles.priceContainer2}>
                                <a
                                  className={styles.rs3899}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-double-breasted-formal-suit/12554406/buy"
                                  target="_blank"
                                >
                                  Rs. 3899
                                </a>
                                <a
                                  className={styles.rs7499}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-double-breasted-formal-suit/12554406/buy"
                                  target="_blank"
                                >
                                  Rs. 7499
                                </a>
                                <a
                                  className={styles.off16}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-double-breasted-formal-suit/12554406/buy"
                                  target="_blank"
                                >
                                  (48% OFF)
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
                        <div className={styles.containerParent5}>
                          <div className={styles.container85}>
                            <div className={styles.background43}>
                              <div className={styles.picture22}>
                                <img
                                  className={
                                    styles.b297e5078041b18fd2C627f7beIcon
                                  }
                                  alt=""
                                  src="/76b297e5078041b18fd2c627f7bec1011673676127983suits1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay15}>
                            <div className={styles.container86}>
                              <b className={styles.b23}>3.5</b>
                            </div>
                            <img
                              className={styles.imageIcon21}
                              loading="lazy"
                              alt=""
                              src="/image-35@2x.png"
                            />
                            <div className={styles.container87}>
                              <div className={styles.margin15}>
                                <div className={styles.container88}>
                                  <b className={styles.b24}>|</b>
                                </div>
                              </div>
                              <b className={styles.b25}>41</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkInner5}>
                          <div className={styles.tahvoParent}>
                            <a
                              className={styles.tahvo}
                              href="https://www.myntra.com/suits/tahvo/tahvo-men-single-breasted-slim-fit-two-piece-suit/21548958/buy"
                              target="_blank"
                            >
                              TAHVO
                            </a>
                            <a
                              className={styles.menSlimFitTwoPiece}
                              href="https://www.myntra.com/suits/tahvo/tahvo-men-single-breasted-slim-fit-two-piece-suit/21548958/buy"
                              target="_blank"
                            >
                              Men Slim-Fit Two-Piece Suit
                            </a>
                            <div className={styles.rs3115Parent}>
                              <a
                                className={styles.rs3115}
                                href="https://www.myntra.com/suits/tahvo/tahvo-men-single-breasted-slim-fit-two-piece-suit/21548958/buy"
                                target="_blank"
                              >
                                Rs. 3115
                              </a>
                              <a
                                className={styles.rs7599}
                                href="https://www.myntra.com/suits/tahvo/tahvo-men-single-breasted-slim-fit-two-piece-suit/21548958/buy"
                                target="_blank"
                              >
                                Rs. 7599
                              </a>
                              <a
                                className={styles.off17}
                                href="https://www.myntra.com/suits/tahvo/tahvo-men-single-breasted-slim-fit-two-piece-suit/21548958/buy"
                                target="_blank"
                              >
                                (59% OFF)
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productContainer4}>
                      <div
                        className={styles.link24}
                        onClick={onLinkContainerClick24}
                      >
                        <div className={styles.container89}>
                          <div className={styles.background44}>
                            <div className={styles.container90}>
                              <div className={styles.picture23}>
                                <img
                                  className={
                                    styles.ec43133F4be4c468dba3561ab5Icon
                                  }
                                  alt=""
                                  src="/3ec43133f4be4c468dba3561ab546feb1650887836792suits1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.backgroundWrapper3}>
                          <div className={styles.background45}>
                            <a className={styles.ad6}>AD</a>
                          </div>
                        </div>
                        <div className={styles.frameParent6}>
                          <div className={styles.overlayWrapper}>
                            <div className={styles.overlay16}>
                              <div className={styles.container91}>
                                <b className={styles.fourthEmptyContainer}>
                                  4.5
                                </b>
                              </div>
                              <img
                                className={styles.imageIcon22}
                                alt=""
                                src="/image-251@2x.png"
                              />
                              <div className={styles.container92}>
                                <div className={styles.margin16}>
                                  <div className={styles.container93}>
                                    <b className={styles.emptyContainer1}>|</b>
                                  </div>
                                </div>
                                <b className={styles.fourthEmptyOverlay}>18</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.background46}>
                            <div className={styles.blackberrysParent1}>
                              <a
                                className={styles.blackberrys6}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-pink-self-design-slim-fit-single-breasted-3-piece-formal-suit/18026986/buy"
                                target="_blank"
                              >
                                Blackberrys
                              </a>
                              <a
                                className={styles.men3PieceSlim}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-pink-self-design-slim-fit-single-breasted-3-piece-formal-suit/18026986/buy"
                                target="_blank"
                              >
                                Men 3-Piece Slim Fit Suit
                              </a>
                              <div className={styles.rs8397Parent}>
                                <a
                                  className={styles.rs8397}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-pink-self-design-slim-fit-single-breasted-3-piece-formal-suit/18026986/buy"
                                  target="_blank"
                                >
                                  Rs. 8397
                                </a>
                                <a
                                  className={styles.rs13995}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-pink-self-design-slim-fit-single-breasted-3-piece-formal-suit/18026986/buy"
                                  target="_blank"
                                >
                                  Rs. 13995
                                </a>
                                <a
                                  className={styles.off18}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-pink-self-design-slim-fit-single-breasted-3-piece-formal-suit/18026986/buy"
                                  target="_blank"
                                >
                                  (40% OFF)
                                </a>
                              </div>
                            </div>
                            <a
                              className={styles.onlyFewLeft7}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-pink-self-design-slim-fit-single-breasted-3-piece-formal-suit/18026986/buy"
                              target="_blank"
                            >
                              Only Few Left!
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.link25}
                        onClick={onLinkContainerClick25}
                      >
                        <ProductInfoContainer
                          fd0176406fe44c4e851c9ba83="/f661b55dfbc94144bb740203e0f3d8001659449120291allensollynavytwopiecesuit1jpg@2x.png"
                          firstBrandInfo="4"
                          image="/image-39@2x.png"
                          secondEmptyOverlayContain="5"
                        />
                        <div className={styles.background47}>
                          <a
                            className={styles.allenSolly1}
                            href="https://www.myntra.com/suits/allen+solly/allen-solly-men-navy-blue-suits/19358994/buy"
                            target="_blank"
                          >
                            Allen Solly
                          </a>
                          <a
                            className={styles.menSuits}
                            href="https://www.myntra.com/suits/allen+solly/allen-solly-men-navy-blue-suits/19358994/buy"
                            target="_blank"
                          >
                            Men Suits
                          </a>
                          <div className={styles.rs7799Group}>
                            <a
                              className={styles.rs77992}
                              href="https://www.myntra.com/suits/allen+solly/allen-solly-men-navy-blue-suits/19358994/buy"
                              target="_blank"
                            >
                              Rs. 7799
                            </a>
                            <a
                              className={styles.rs12999}
                              href="https://www.myntra.com/suits/allen+solly/allen-solly-men-navy-blue-suits/19358994/buy"
                              target="_blank"
                            >
                              Rs. 12999
                            </a>
                            <a
                              className={styles.off19}
                              href="https://www.myntra.com/suits/allen+solly/allen-solly-men-navy-blue-suits/19358994/buy"
                              target="_blank"
                            >
                              (40% OFF)
                            </a>
                          </div>
                          <a
                            className={styles.onlyFewLeft8}
                            href="https://www.myntra.com/suits/allen+solly/allen-solly-men-navy-blue-suits/19358994/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div
                        className={styles.link26}
                        onClick={onLinkContainerClick26}
                      >
                        <div className={styles.container94}>
                          <div className={styles.background48}>
                            <div className={styles.container95}>
                              <div className={styles.picture24}>
                                <img
                                  className={
                                    styles.fdba293dDd8040ab827a90e580Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/fdba293ddd8040ab827a90e58095324d1674222171330arrowselfdesigndobbytwopiecesuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkInner6}>
                          <div className={styles.arrowGroup}>
                            <a
                              className={styles.arrow4}
                              href="https://www.myntra.com/suits/arrow/arrow-men-2-piece-self-design-single-breasted-suit/21643916/buy"
                              target="_blank"
                            >
                              Arrow
                            </a>
                            <a
                              className={styles.men2PieceSelf}
                              href="https://www.myntra.com/suits/arrow/arrow-men-2-piece-self-design-single-breasted-suit/21643916/buy"
                              target="_blank"
                            >
                              Men 2-Piece Self Design Single…
                            </a>
                            <div className={styles.rs7149Parent}>
                              <a
                                className={styles.rs7149}
                                href="https://www.myntra.com/suits/arrow/arrow-men-2-piece-self-design-single-breasted-suit/21643916/buy"
                                target="_blank"
                              >
                                Rs. 7149
                              </a>
                              <a
                                className={styles.rs10999}
                                href="https://www.myntra.com/suits/arrow/arrow-men-2-piece-self-design-single-breasted-suit/21643916/buy"
                                target="_blank"
                              >
                                Rs. 10999
                              </a>
                              <a
                                className={styles.off20}
                                href="https://www.myntra.com/suits/arrow/arrow-men-2-piece-self-design-single-breasted-suit/21643916/buy"
                                target="_blank"
                              >
                                (35% OFF)
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper6}>
                        <div
                          className={styles.link27}
                          onClick={onLinkContainerClick27}
                        >
                          <div className={styles.container96}>
                            <div className={styles.background49}>
                              <div className={styles.picture25}>
                                <img
                                  className={
                                    styles.ef8380b81ece4648A5c1A74243Icon
                                  }
                                  alt=""
                                  src="/ef8380b81ece4648a5c1a742433103341675236532947arrowreversiblewaistcoatpatternedthreepiecesuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.background50}>
                            <div className={styles.ad7}>AD</div>
                          </div>
                          <div className={styles.productCard1}>
                            <div className={styles.overlay17}>
                              <div className={styles.container97}>
                                <b className={styles.b26}>2.8</b>
                              </div>
                              <img
                                className={styles.imageIcon23}
                                alt=""
                                src="/image-2711@2x.png"
                              />
                              <div className={styles.container98}>
                                <div className={styles.margin17}>
                                  <div className={styles.container99}>
                                    <b className={styles.b27}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b28}>10</b>
                              </div>
                            </div>
                            <div className={styles.productName2}>
                              <a
                                className={styles.arrow5}
                                href="https://www.myntra.com/suits/arrow/arrow-men-patterned-single-breasted-three-piece-formal-suit/21792240/buy"
                                target="_blank"
                              >
                                Arrow
                              </a>
                              <a
                                className={styles.menThreePieceFormal}
                                href="https://www.myntra.com/suits/arrow/arrow-men-patterned-single-breasted-three-piece-formal-suit/21792240/buy"
                                target="_blank"
                              >
                                Men Three-Piece Formal Suit
                              </a>
                              <div className={styles.priceDetails2}>
                                <a
                                  className={styles.rs79991}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-patterned-single-breasted-three-piece-formal-suit/21792240/buy"
                                  target="_blank"
                                >
                                  Rs. 7999
                                </a>
                                <a
                                  className={styles.rs15999}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-patterned-single-breasted-three-piece-formal-suit/21792240/buy"
                                  target="_blank"
                                >
                                  Rs. 15999
                                </a>
                                <a
                                  className={styles.off21}
                                  href="https://www.myntra.com/suits/arrow/arrow-men-patterned-single-breasted-three-piece-formal-suit/21792240/buy"
                                  target="_blank"
                                >
                                  (50% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper7}>
                        <div
                          className={styles.link28}
                          onClick={onLinkContainerClick28}
                        >
                          <div className={styles.containerParent6}>
                            <div className={styles.container100}>
                              <div className={styles.background51}>
                                <div className={styles.picture26}>
                                  <img
                                    className={
                                      styles.d173ce88Ff9b470c9fb93a320eIcon
                                    }
                                    alt=""
                                    src="/d173ce88ff9b470c9fb93a320e1f20a91665035936390menpurpletwopiecesuit1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay18}>
                              <div className={styles.container101}>
                                <b className={styles.b29}>3.1</b>
                              </div>
                              <img
                                className={styles.imageIcon24}
                                alt=""
                                src="/image-181@2x.png"
                              />
                              <div className={styles.container102}>
                                <div className={styles.margin18}>
                                  <div className={styles.container103}>
                                    <b className={styles.b30}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b31}>43</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner7}>
                            <div className={styles.peterEnglandEliteGroup}>
                              <a
                                className={styles.peterEnglandElite2}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-burgundy--taupe-printed-bandhgala-slim-fit-2-piece-formal-suit/20276766/buy"
                                target="_blank"
                              >
                                Peter England Elite
                              </a>
                              <a
                                className={styles.menPrintedBandhgala}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-burgundy--taupe-printed-bandhgala-slim-fit-2-piece-formal-suit/20276766/buy"
                                target="_blank"
                              >
                                Men Printed Bandhgala Slim-F…
                              </a>
                              <div className={styles.rs6299Parent}>
                                <a
                                  className={styles.rs62991}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-burgundy--taupe-printed-bandhgala-slim-fit-2-piece-formal-suit/20276766/buy"
                                  target="_blank"
                                >
                                  Rs. 6299
                                </a>
                                <a
                                  className={styles.rs89991}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-burgundy--taupe-printed-bandhgala-slim-fit-2-piece-formal-suit/20276766/buy"
                                  target="_blank"
                                >
                                  Rs. 8999
                                </a>
                                <a
                                  className={styles.off22}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-burgundy--taupe-printed-bandhgala-slim-fit-2-piece-formal-suit/20276766/buy"
                                  target="_blank"
                                >
                                  (30% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper8}>
                        <div
                          className={styles.link29}
                          onClick={onLinkContainerClick29}
                        >
                          <div className={styles.containerParent7}>
                            <div className={styles.container104}>
                              <div className={styles.background52}>
                                <div className={styles.picture27}>
                                  <img
                                    className={
                                      styles.fb238af3fb14765Abe8B170749Icon
                                    }
                                    alt=""
                                    src="/9fb238af3fb14765abe8b17074915e6e15439563756491jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay19}>
                              <div className={styles.container105}>
                                <b className={styles.adPlaceholder}>3.6</b>
                              </div>
                              <img
                                className={styles.imageIcon25}
                                alt=""
                                src="/image-35@2x.png"
                              />
                              <div className={styles.container106}>
                                <div className={styles.margin19}>
                                  <div className={styles.container107}>
                                    <b className={styles.emptyPadding1}>|</b>
                                  </div>
                                </div>
                                <b className={styles.emptyMargin}>58</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner8}>
                            <div className={styles.hangupContainer}>
                              <a
                                className={styles.hangup3}
                                href="https://www.myntra.com/suits/hangup/hangup-men-grey-solid-suit/8086609/buy"
                                target="_blank"
                              >
                                Hangup
                              </a>
                              <a
                                className={styles.menSolidSuit}
                                href="https://www.myntra.com/suits/hangup/hangup-men-grey-solid-suit/8086609/buy"
                                target="_blank"
                              >
                                Men Solid Suit
                              </a>
                              <div className={styles.rs2939Parent}>
                                <a
                                  className={styles.rs29391}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-grey-solid-suit/8086609/buy"
                                  target="_blank"
                                >
                                  Rs. 2939
                                </a>
                                <a
                                  className={styles.rs69992}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-grey-solid-suit/8086609/buy"
                                  target="_blank"
                                >
                                  Rs. 6999
                                </a>
                                <a
                                  className={styles.off23}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-grey-solid-suit/8086609/buy"
                                  target="_blank"
                                >
                                  (58% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper9}>
                        <div
                          className={styles.link30}
                          onClick={onLinkContainerClick30}
                        >
                          <div className={styles.containerWrapper1}>
                            <div className={styles.container108}>
                              <div className={styles.background53}>
                                <div className={styles.picture28}>
                                  <img
                                    className={
                                      styles.d3ce08e931224b4e99ff12ac43Icon
                                    }
                                    loading="lazy"
                                    alt=""
                                    src="/d3ce08e931224b4e99ff12ac4389b4731664538921647suits1jpg@2x.png"
                                  />
                                </div>
                              </div>
                              <div className={styles.background54}>
                                <div className={styles.ad8}>AD</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner9}>
                            <div className={styles.blackberrysParent2}>
                              <a
                                className={styles.blackberrys7}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red-solid-slim-fit-single-breasted-formal-suit-/20237110/buy"
                                target="_blank"
                              >
                                Blackberrys
                              </a>
                              <a
                                className={styles.menSolidSlimFit1}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red-solid-slim-fit-single-breasted-formal-suit-/20237110/buy"
                                target="_blank"
                              >
                                Men Solid Slim-Fit Single-Brea…
                              </a>
                              <div className={styles.rs9597Parent}>
                                <a
                                  className={styles.rs9597}
                                  href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red-solid-slim-fit-single-breasted-formal-suit-/20237110/buy"
                                  target="_blank"
                                >
                                  Rs. 9597
                                </a>
                                <a
                                  className={styles.rs159951}
                                  href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red-solid-slim-fit-single-breasted-formal-suit-/20237110/buy"
                                  target="_blank"
                                >
                                  Rs. 15995
                                </a>
                                <a
                                  className={styles.off24}
                                  href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red-solid-slim-fit-single-breasted-formal-suit-/20237110/buy"
                                  target="_blank"
                                >
                                  (40% OFF)
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
                        <div className={styles.containerParent8}>
                          <div className={styles.container109}>
                            <div className={styles.background55}>
                              <div className={styles.picture29}>
                                <img
                                  className={
                                    styles.af63b2e69734fc1A71b715c336Icon
                                  }
                                  alt=""
                                  src="/8af63b2e69734fc1a71b715c336f1f0e16245130047971jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay20}>
                            <div className={styles.container110}>
                              <b className={styles.b32}>3.6</b>
                            </div>
                            <img
                              className={styles.imageIcon26}
                              loading="lazy"
                              alt=""
                              src="/image-35@2x.png"
                            />
                            <div className={styles.container111}>
                              <div className={styles.margin20}>
                                <div className={styles.container112}>
                                  <b className={styles.null7}>|</b>
                                </div>
                              </div>
                              <b className={styles.null8}>82</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background56}>
                          <div className={styles.productInformation1}>
                            <a
                              className={styles.klotthe1}
                              href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-solid-slim-fit-single-breasted-formal-suit--pant/14634160/buy"
                              target="_blank"
                            >
                              KLOTTHE
                            </a>
                            <a
                              className={styles.menFormalSuit}
                              href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-solid-slim-fit-single-breasted-formal-suit--pant/14634160/buy"
                              target="_blank"
                            >{`Men Formal Suit & Pant`}</a>
                            <div className={styles.secondPriceDetails}>
                              <a
                                className={styles.rs3839}
                                href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-solid-slim-fit-single-breasted-formal-suit--pant/14634160/buy"
                                target="_blank"
                              >
                                Rs. 3839
                              </a>
                              <a
                                className={styles.rs159991}
                                href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-solid-slim-fit-single-breasted-formal-suit--pant/14634160/buy"
                                target="_blank"
                              >
                                Rs. 15999
                              </a>
                              <a
                                className={styles.off25}
                                href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-solid-slim-fit-single-breasted-formal-suit--pant/14634160/buy"
                                target="_blank"
                              >
                                (76% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft9}
                            href="https://www.myntra.com/suits/klotthe/klotthe-men-maroon-solid-slim-fit-single-breasted-formal-suit--pant/14634160/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div className={styles.linkWrapper10}>
                        <div
                          className={styles.link32}
                          onClick={onLinkContainerClick32}
                        >
                          <div className={styles.containerParent9}>
                            <div className={styles.container113}>
                              <div className={styles.background57}>
                                <div className={styles.picture30}>
                                  <img
                                    className={
                                      styles.a3576db4Bbd148849e30379728Icon
                                    }
                                    alt=""
                                    src="/a3576db4bbd148849e30379728e87bf716119337168201jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay21}>
                              <div className={styles.container114}>
                                <b className={styles.empty}>2.8</b>
                              </div>
                              <img
                                className={styles.imageIcon27}
                                alt=""
                                src="/image-311@2x.png"
                              />
                              <div className={styles.container115}>
                                <div className={styles.margin21}>
                                  <div className={styles.container116}>
                                    <b className={styles.null9}>|</b>
                                  </div>
                                </div>
                                <b className={styles.null10}>269</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner10}>
                            <div className={styles.hangupParent1}>
                              <a
                                className={styles.hangup4}
                                href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-bandhgala-formal-suit/13559432/buy"
                                target="_blank"
                              >
                                Hangup
                              </a>
                              <a
                                className={styles.menSolidBandhgala}
                                href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-bandhgala-formal-suit/13559432/buy"
                                target="_blank"
                              >
                                Men Solid Bandhgala Formal …
                              </a>
                              <div className={styles.thirdDiscountPrices}>
                                <a
                                  className={styles.rs29392}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-bandhgala-formal-suit/13559432/buy"
                                  target="_blank"
                                >
                                  Rs. 2939
                                </a>
                                <a
                                  className={styles.rs69993}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-bandhgala-formal-suit/13559432/buy"
                                  target="_blank"
                                >
                                  Rs. 6999
                                </a>
                                <a
                                  className={styles.off26}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-black-solid-bandhgala-formal-suit/13559432/buy"
                                  target="_blank"
                                >
                                  (58% OFF)
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
                        <div className={styles.containerWrapper2}>
                          <div className={styles.container117}>
                            <div className={styles.background58}>
                              <div className={styles.picture31}>
                                <img
                                  className={
                                    styles.b68bce7dFd214cbaA8f5004f61Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/b68bce7dfd214cbaa8f5004f61a888341716184299652blackberrysmen2piecesinglebreastednotchedlapelformal1jpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.background59}>
                              <div className={styles.ad9}>AD</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background60}>
                          <div className={styles.stockInfo}>
                            <a
                              className={styles.blackberrys8}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-2-piece-slim-fit-dual-toned-party-suit/20237098/buy"
                              target="_blank"
                            >
                              Blackberrys
                            </a>
                            <a
                              className={styles.slimFitDualToned}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-2-piece-slim-fit-dual-toned-party-suit/20237098/buy"
                              target="_blank"
                            >
                              Slim Fit Dual-Toned Party Suit
                            </a>
                            <div className={styles.rs7197Parent}>
                              <a
                                className={styles.rs7197}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-2-piece-slim-fit-dual-toned-party-suit/20237098/buy"
                                target="_blank"
                              >
                                Rs. 7197
                              </a>
                              <a
                                className={styles.rs11995}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-2-piece-slim-fit-dual-toned-party-suit/20237098/buy"
                                target="_blank"
                              >
                                Rs. 11995
                              </a>
                              <a
                                className={styles.off27}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-2-piece-slim-fit-dual-toned-party-suit/20237098/buy"
                                target="_blank"
                              >
                                (40% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft10}
                            href="https://www.myntra.com/suits/blackberrys/blackberrys-men-2-piece-slim-fit-dual-toned-party-suit/20237098/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div
                        className={styles.link34}
                        onClick={onLinkContainerClick34}
                      >
                        <div className={styles.containerParent10}>
                          <div className={styles.container118}>
                            <div className={styles.background61}>
                              <div className={styles.picture32}>
                                <img
                                  className={
                                    styles.de2594ed5d5d435eA510Bd6a5fIcon
                                  }
                                  alt=""
                                  src="/de2594ed5d5d435ea510bd6a5f27c5de1665039303052menpurpletwopiecesuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay22}>
                            <div className={styles.container119}>
                              <b className={styles.brandPlaceholder}>3.9</b>
                            </div>
                            <img
                              className={styles.imageIcon28}
                              loading="lazy"
                              alt=""
                              src="/image-322@2x.png"
                            />
                            <div className={styles.container120}>
                              <div className={styles.margin22}>
                                <div className={styles.container121}>
                                  <b className={styles.blankSpace}>|</b>
                                </div>
                              </div>
                              <b className={styles.extraSpace}>91</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background62}>
                          <div className={styles.peterEnglandEliteContainer}>
                            <a
                              className={styles.peterEnglandElite3}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-purple-solid-slim-fit-single-breasted-2-piece-formal-suit/20276778/buy"
                              target="_blank"
                            >
                              Peter England Elite
                            </a>
                            <a
                              className={styles.menSolidSlimFit2}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-purple-solid-slim-fit-single-breasted-2-piece-formal-suit/20276778/buy"
                              target="_blank"
                            >
                              Men Solid Slim-Fit Single-Brea…
                            </a>
                            <div className={styles.rs6299Group}>
                              <a
                                className={styles.rs62992}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-purple-solid-slim-fit-single-breasted-2-piece-formal-suit/20276778/buy"
                                target="_blank"
                              >
                                Rs. 6299
                              </a>
                              <a
                                className={styles.rs89992}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-purple-solid-slim-fit-single-breasted-2-piece-formal-suit/20276778/buy"
                                target="_blank"
                              >
                                Rs. 8999
                              </a>
                              <a
                                className={styles.off28}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-purple-solid-slim-fit-single-breasted-2-piece-formal-suit/20276778/buy"
                                target="_blank"
                              >
                                (30% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft11}
                            href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-purple-solid-slim-fit-single-breasted-2-piece-formal-suit/20276778/buy"
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
                        <div className={styles.container122}>
                          <div className={styles.background63}>
                            <div className={styles.picture33}>
                              <img
                                className={
                                  styles.a7383d065b4d6197dbA76dea1cIcon
                                }
                                loading="lazy"
                                alt=""
                                src="/90a7383d065b4d6197dba76dea1c9e731672652752966suits1jpg@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.background64}>
                          <div className={styles.adByArvindParent}>
                            <a
                              className={styles.adByArvind1}
                              href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-three-piece-self-designed-tailored-fit-single-breasted-formal-suit/21386548/buy"
                              target="_blank"
                            >
                              AD By Arvind
                            </a>
                            <a
                              className={styles.menSelfDesigned}
                              href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-three-piece-self-designed-tailored-fit-single-breasted-formal-suit/21386548/buy"
                              target="_blank"
                            >
                              Men Self Designed Tailored-Fit…
                            </a>
                            <div className={styles.priceContainer3}>
                              <a
                                className={styles.rs5849}
                                href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-three-piece-self-designed-tailored-fit-single-breasted-formal-suit/21386548/buy"
                                target="_blank"
                              >
                                Rs. 5849
                              </a>
                              <a
                                className={styles.rs129991}
                                href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-three-piece-self-designed-tailored-fit-single-breasted-formal-suit/21386548/buy"
                                target="_blank"
                              >
                                Rs. 12999
                              </a>
                              <a
                                className={styles.off29}
                                href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-three-piece-self-designed-tailored-fit-single-breasted-formal-suit/21386548/buy"
                                target="_blank"
                              >
                                (55% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft12}
                            href="https://www.myntra.com/suits/ad+by+arvind/ad-by-arvind-men-three-piece-self-designed-tailored-fit-single-breasted-formal-suit/21386548/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productContainer5}>
                      <div className={styles.linkWrapper11}>
                        <div
                          className={styles.link36}
                          onClick={onLinkContainerClick36}
                        >
                          <div className={styles.containerParent11}>
                            <div className={styles.container123}>
                              <div className={styles.background65}>
                                <div className={styles.container124}>
                                  <div className={styles.picture34}>
                                    <img
                                      className={
                                        styles.a09ce31D7134f338789Cc16eb6Icon
                                      }
                                      alt=""
                                      src="/7a09ce31d7134f338789cc16eb6bf4a61660040123576peterenglandnavytwopiecesuit1jpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay23}>
                              <div className={styles.container125}>
                                <b className={styles.emptyContainer2}>4.1</b>
                              </div>
                              <img
                                className={styles.imageIcon29}
                                alt=""
                                src="/image-39@2x.png"
                              />
                              <div className={styles.container126}>
                                <div className={styles.margin23}>
                                  <div className={styles.container127}>
                                    <b className={styles.emptyContainer3}>|</b>
                                  </div>
                                </div>
                                <b className={styles.emptyOverlayContainer}>
                                  20
                                </b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner11}>
                            <div className={styles.peterEnglandEliteParent1}>
                              <a
                                className={styles.peterEnglandElite4}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-navy-blue-suits/19448444/buy"
                                target="_blank"
                              >
                                Peter England Elite
                              </a>
                              <a
                                className={styles.menSuits1}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-navy-blue-suits/19448444/buy"
                                target="_blank"
                              >
                                Men Suits
                              </a>
                              <div className={styles.rs8399Parent}>
                                <a
                                  className={styles.rs8399}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-navy-blue-suits/19448444/buy"
                                  target="_blank"
                                >
                                  Rs. 8399
                                </a>
                                <a
                                  className={styles.rs119993}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-navy-blue-suits/19448444/buy"
                                  target="_blank"
                                >
                                  Rs. 11999
                                </a>
                                <a
                                  className={styles.off30}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-navy-blue-suits/19448444/buy"
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
                        className={styles.link37}
                        onClick={onLinkContainerClick37}
                      >
                        <div className={styles.containerParent12}>
                          <div className={styles.container128}>
                            <div className={styles.background66}>
                              <div className={styles.container129}>
                                <div className={styles.picture35}>
                                  <img
                                    className={
                                      styles.ea3aa5c4f483087bcB786fe35eIcon
                                    }
                                    alt=""
                                    src="/539ea3aa5c4f483087bcb786fe35e6d91654065174665peterenglandelitemenbluesuits1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.overlay24}>
                            <div className={styles.container130}>
                              <b className={styles.b33}>4.1</b>
                            </div>
                            <img
                              className={styles.imageIcon30}
                              alt=""
                              src="/image-39@2x.png"
                            />
                            <div className={styles.container131}>
                              <div className={styles.margin24}>
                                <div className={styles.container132}>
                                  <b className={styles.b34}>|</b>
                                </div>
                              </div>
                              <b className={styles.b35}>23</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background67}>
                          <div className={styles.peterEnglandEliteParent2}>
                            <a
                              className={styles.peterEnglandElite5}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-blue-suits/18534306/buy"
                              target="_blank"
                            >
                              Peter England Elite
                            </a>
                            <a
                              className={styles.menSuits2}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-blue-suits/18534306/buy"
                              target="_blank"
                            >
                              Men Suits
                            </a>
                            <div className={styles.rs6299Container}>
                              <a
                                className={styles.rs62993}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-blue-suits/18534306/buy"
                                target="_blank"
                              >
                                Rs. 6299
                              </a>
                              <a
                                className={styles.rs89993}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-blue-suits/18534306/buy"
                                target="_blank"
                              >
                                Rs. 8999
                              </a>
                              <a
                                className={styles.off31}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-blue-suits/18534306/buy"
                                target="_blank"
                              >
                                (30% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft13}
                            href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-blue-suits/18534306/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div
                        className={styles.link38}
                        onClick={onLinkContainerClick38}
                      >
                        <div className={styles.containerWrapper3}>
                          <div className={styles.container133}>
                            <div className={styles.background68}>
                              <div className={styles.picture36}>
                                <img
                                  className={
                                    styles.b82a6fc3c3c4eafA42bAd0c9baIcon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/1b82a6fc3c3c4eafa42bad0c9babee831664273092099blackberrysmenchecksslimfitsinglebreasted2piecesuits1jpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.background69}>
                              <div className={styles.ad10}>AD</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.linkInner12}>
                          <div className={styles.blackberrysParent3}>
                            <a
                              className={styles.blackberrys9}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-techpro-men-checks-slim-fit-single-breasted-2-piece-suits/20184068/buy"
                              target="_blank"
                            >
                              Blackberrys
                            </a>
                            <a
                              className={styles.techproMenSlimFit}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-techpro-men-checks-slim-fit-single-breasted-2-piece-suits/20184068/buy"
                              target="_blank"
                            >
                              TechPro Men Slim-Fit Suits
                            </a>
                            <div className={styles.rs7696Parent}>
                              <a
                                className={styles.rs7696}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-techpro-men-checks-slim-fit-single-breasted-2-piece-suits/20184068/buy"
                                target="_blank"
                              >
                                Rs. 7696
                              </a>
                              <a
                                className={styles.rs109951}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-techpro-men-checks-slim-fit-single-breasted-2-piece-suits/20184068/buy"
                                target="_blank"
                              >
                                Rs. 10995
                              </a>
                              <a
                                className={styles.off32}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-techpro-men-checks-slim-fit-single-breasted-2-piece-suits/20184068/buy"
                                target="_blank"
                              >
                                (30% OFF)
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper12}>
                        <div
                          className={styles.link39}
                          onClick={onLinkContainerClick39}
                        >
                          <div className={styles.containerParent13}>
                            <div className={styles.container134}>
                              <div className={styles.background70}>
                                <div className={styles.picture37}>
                                  <img
                                    className={
                                      styles.f512e00Ab274f43A6d5155eda2Icon
                                    }
                                    alt=""
                                    src="/7f512e00ab274f43a6d5155eda281a3f1578040453219manqmenblacksolidslimfittuxedosuit70815780404516651jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay25}>
                              <div className={styles.container135}>
                                <b className={styles.b36}>3.9</b>
                              </div>
                              <img
                                className={styles.imageIcon31}
                                alt=""
                                src="/image-351@2x.png"
                              />
                              <div className={styles.container136}>
                                <div className={styles.margin25}>
                                  <div className={styles.container137}>
                                    <b className={styles.b37}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b38}>367</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner13}>
                            <div className={styles.manqParent}>
                              <a
                                className={styles.manq1}
                                href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/10777826/buy"
                                target="_blank"
                              >
                                MANQ
                              </a>
                              <a
                                className={styles.menSlimFit2}
                                href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/10777826/buy"
                                target="_blank"
                              >
                                Men Slim Fit Tuxedo Suit
                              </a>
                              <div className={styles.rs3899Parent}>
                                <a
                                  className={styles.rs38991}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/10777826/buy"
                                  target="_blank"
                                >
                                  Rs. 3899
                                </a>
                                <a
                                  className={styles.rs74991}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/10777826/buy"
                                  target="_blank"
                                >
                                  Rs. 7499
                                </a>
                                <a
                                  className={styles.off33}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/10777826/buy"
                                  target="_blank"
                                >
                                  (48% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.link40}
                        onClick={onLinkContainerClick40}
                      >
                        <div className={styles.container138}>
                          <div className={styles.background71}>
                            <div className={styles.picture38}>
                              <img
                                className={
                                  styles.f635a06f11ab42a59d627424f0Icon
                                }
                                loading="lazy"
                                alt=""
                                src="/f635a06f11ab42a59d627424f0adec861699102196802kisahmensmaroonbandhgalatrouserset1jpg@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.background72}>
                          <div className={styles.productOfferDetails}>
                            <a
                              className={styles.kisah1}
                              href="https://www.myntra.com/suits/kisah/kisah-men-2-piece-ethnic-motif-printed-jodhpuri-bandhgala-suits/25769362/buy"
                              target="_blank"
                            >
                              KISAH
                            </a>
                            <a
                              className={styles.jacquardBandhgalaSet}
                              href="https://www.myntra.com/suits/kisah/kisah-men-2-piece-ethnic-motif-printed-jodhpuri-bandhgala-suits/25769362/buy"
                              target="_blank"
                            >
                              Jacquard Bandhgala Set
                            </a>
                            <div className={styles.offerPriceDetails}>
                              <a
                                className={styles.rs5404}
                                href="https://www.myntra.com/suits/kisah/kisah-men-2-piece-ethnic-motif-printed-jodhpuri-bandhgala-suits/25769362/buy"
                                target="_blank"
                              >
                                Rs. 5404
                              </a>
                              <a
                                className={styles.rs11499}
                                href="https://www.myntra.com/suits/kisah/kisah-men-2-piece-ethnic-motif-printed-jodhpuri-bandhgala-suits/25769362/buy"
                                target="_blank"
                              >
                                Rs. 11499
                              </a>
                              <a
                                className={styles.off34}
                                href="https://www.myntra.com/suits/kisah/kisah-men-2-piece-ethnic-motif-printed-jodhpuri-bandhgala-suits/25769362/buy"
                                target="_blank"
                              >
                                (53% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft14}
                            href="https://www.myntra.com/suits/kisah/kisah-men-2-piece-ethnic-motif-printed-jodhpuri-bandhgala-suits/25769362/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div
                        className={styles.link41}
                        onClick={onLinkContainerClick41}
                      >
                        <div className={styles.containerWrapper4}>
                          <div className={styles.container139}>
                            <div className={styles.background73}>
                              <div className={styles.picture39}>
                                <img
                                  className={
                                    styles.fdc0cd67d1743548cd5Fa92f72Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/7fdc0cd67d1743548cd5fa92f72429f21664538912505suits1jpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.background74}>
                              <div className={styles.ad11}>AD</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background75}>
                          <div className={styles.productOffer}>
                            <a
                              className={styles.blackberrys10}
                              href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red--blue-self-design-single-breasted-slim-fit-three-piece-formal-suit/20237114/buy"
                              target="_blank"
                            >
                              Blackberrys
                            </a>
                            <a
                              className={styles.menSelfDesign}
                              href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red--blue-self-design-single-breasted-slim-fit-three-piece-formal-suit/20237114/buy"
                              target="_blank"
                            >
                              Men Self Design Single-Breast…
                            </a>
                            <div className={styles.priceContainer4}>
                              <a
                                className={styles.rs95971}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red--blue-self-design-single-breasted-slim-fit-three-piece-formal-suit/20237114/buy"
                                target="_blank"
                              >
                                Rs. 9597
                              </a>
                              <a
                                className={styles.rs159952}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red--blue-self-design-single-breasted-slim-fit-three-piece-formal-suit/20237114/buy"
                                target="_blank"
                              >
                                Rs. 15995
                              </a>
                              <a
                                className={styles.off35}
                                href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red--blue-self-design-single-breasted-slim-fit-three-piece-formal-suit/20237114/buy"
                                target="_blank"
                              >
                                (40% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft15}
                            href="https://www.myntra.com/suits/blackberrys/-blackberrys-men-red--blue-self-design-single-breasted-slim-fit-three-piece-formal-suit/20237114/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div className={styles.linkWrapper13}>
                        <div
                          className={styles.link42}
                          onClick={onLinkContainerClick42}
                        >
                          <div className={styles.containerParent14}>
                            <div className={styles.container140}>
                              <div className={styles.background76}>
                                <div className={styles.picture40}>
                                  <img
                                    className={
                                      styles.b5ad9804E19540d095268f2168Icon
                                    }
                                    alt=""
                                    src="/b5ad9804e19540d095268f2168e82faa1686658293171mengreycheckslimfitformaltwopiecesuit1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay26}>
                              <div className={styles.container141}>
                                <b className={styles.b39}>5</b>
                              </div>
                              <img
                                className={styles.imageIcon32}
                                alt=""
                                src="/image-36@2x.png"
                              />
                              <div className={styles.container142}>
                                <div className={styles.margin26}>
                                  <div className={styles.container143}>
                                    <b className={styles.b40}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b41}>6</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner14}>
                            <div className={styles.peterEnglandEliteParent3}>
                              <a
                                className={styles.peterEnglandElite6}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-checked-slim-fit-2-piece-formal-suit/23619168/buy"
                                target="_blank"
                              >
                                Peter England Elite
                              </a>
                              <a
                                className={styles.menSlimFit3}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-checked-slim-fit-2-piece-formal-suit/23619168/buy"
                                target="_blank"
                              >
                                Men Slim Fit 2 Pcs Formal Suit
                              </a>
                              <div className={styles.rs6299Parent1}>
                                <a
                                  className={styles.rs62994}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-checked-slim-fit-2-piece-formal-suit/23619168/buy"
                                  target="_blank"
                                >
                                  Rs. 6299
                                </a>
                                <a
                                  className={styles.rs89994}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-checked-slim-fit-2-piece-formal-suit/23619168/buy"
                                  target="_blank"
                                >
                                  Rs. 8999
                                </a>
                                <a
                                  className={styles.off36}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-checked-slim-fit-2-piece-formal-suit/23619168/buy"
                                  target="_blank"
                                >
                                  (30% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkWrapper14}>
                        <div
                          className={styles.link43}
                          onClick={onLinkContainerClick43}
                        >
                          <div className={styles.containerParent15}>
                            <div className={styles.container144}>
                              <div className={styles.background77}>
                                <div className={styles.picture41}>
                                  <img
                                    className={
                                      styles.a9bfffc6137a4e9e92ec8bef79Icon
                                    }
                                    alt=""
                                    src="/a9bfffc6137a4e9e92ec8bef7902725b1662880354788hangupmenspartysuitbrown1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay27}>
                              <div className={styles.container145}>
                                <b className={styles.b42}>4.3</b>
                              </div>
                              <img
                                className={styles.imageIcon33}
                                alt=""
                                src="/image-37@2x.png"
                              />
                              <div className={styles.container146}>
                                <div className={styles.margin27}>
                                  <div className={styles.container147}>
                                    <b className={styles.b43}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b44}>8</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner15}>
                            <div className={styles.hangupParent2}>
                              <a
                                className={styles.hangup5}
                                href="https://www.myntra.com/suits/hangup/hangup-men-brown--beige-floral-printed-bandhgala-party-2-piece-suit/19887512/buy"
                                target="_blank"
                              >
                                Hangup
                              </a>
                              <a
                                className={styles.menFloralPrinted}
                                href="https://www.myntra.com/suits/hangup/hangup-men-brown--beige-floral-printed-bandhgala-party-2-piece-suit/19887512/buy"
                                target="_blank"
                              >
                                Men Floral Printed Bandhgala …
                              </a>
                              <div className={styles.rs2939Group}>
                                <a
                                  className={styles.rs29393}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-brown--beige-floral-printed-bandhgala-party-2-piece-suit/19887512/buy"
                                  target="_blank"
                                >
                                  Rs. 2939
                                </a>
                                <a
                                  className={styles.rs69994}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-brown--beige-floral-printed-bandhgala-party-2-piece-suit/19887512/buy"
                                  target="_blank"
                                >
                                  Rs. 6999
                                </a>
                                <a
                                  className={styles.off37}
                                  href="https://www.myntra.com/suits/hangup/hangup-men-brown--beige-floral-printed-bandhgala-party-2-piece-suit/19887512/buy"
                                  target="_blank"
                                >
                                  (58% OFF)
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
                        <div className={styles.containerWrapper5}>
                          <div className={styles.container148}>
                            <div className={styles.background78}>
                              <div className={styles.picture42}>
                                <img
                                  className={
                                    styles.cd08f47Fb034ed4887d0ccd875Icon
                                  }
                                  loading="lazy"
                                  alt=""
                                  src="/4cd08f47fb034ed4887d0ccd875310b81672645078780blackberrysmenslimfitsinglebreastedtwopieceformalsuit1jpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.background79}>
                              <div className={styles.ad12}>AD</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.background80}>
                          <div className={styles.blackberrysParent4}>
                            <a
                              className={styles.blackberrys11}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-slim-fit-single-breasted-two-piece-formal-suit/21382814/buy"
                              target="_blank"
                            >
                              Blackberrys
                            </a>
                            <a
                              className={styles.menSlimFitSingleBreasted}
                              href="https://www.myntra.com/suits/blackberrys/blackberrys-men-slim-fit-single-breasted-two-piece-formal-suit/21382814/buy"
                              target="_blank"
                            >
                              Men Slim-Fit Single-Breasted …
                            </a>
                            <div className={styles.rs8397Group}>
                              <a
                                className={styles.rs83971}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-slim-fit-single-breasted-two-piece-formal-suit/21382814/buy"
                                target="_blank"
                              >
                                Rs. 8397
                              </a>
                              <a
                                className={styles.rs139951}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-slim-fit-single-breasted-two-piece-formal-suit/21382814/buy"
                                target="_blank"
                              >
                                Rs. 13995
                              </a>
                              <a
                                className={styles.off38}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-slim-fit-single-breasted-two-piece-formal-suit/21382814/buy"
                                target="_blank"
                              >
                                (40% OFF)
                              </a>
                            </div>
                          </div>
                          <a
                            className={styles.onlyFewLeft16}
                            href="https://www.myntra.com/suits/blackberrys/blackberrys-men-slim-fit-single-breasted-two-piece-formal-suit/21382814/buy"
                            target="_blank"
                          >
                            Only Few Left!
                          </a>
                        </div>
                      </div>
                      <div className={styles.linkWrapper15}>
                        <div
                          className={styles.link45}
                          onClick={onLinkContainerClick45}
                        >
                          <div className={styles.containerParent16}>
                            <div className={styles.container149}>
                              <div className={styles.background81}>
                                <div className={styles.picture43}>
                                  <img
                                    className={
                                      styles.c63ef86bf748158465E6c3e23bIcon
                                    }
                                    alt=""
                                    src="/11c63ef86bf748158465e6c3e23bfe0e1602840086588manqmensuits78816028400847301jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay28}>
                              <div className={styles.container150}>
                                <b className={styles.b45}>3.8</b>
                              </div>
                              <img
                                className={styles.imageIcon34}
                                alt=""
                                src="/image-351@2x.png"
                              />
                              <div className={styles.container151}>
                                <div className={styles.margin28}>
                                  <div className={styles.container152}>
                                    <b className={styles.b46}>|</b>
                                  </div>
                                </div>
                                <b className={styles.b47}>353</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.linkInner16}>
                            <div className={styles.manqGroup}>
                              <a
                                className={styles.manq2}
                                href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/12554490/buy"
                                target="_blank"
                              >
                                MANQ
                              </a>
                              <a
                                className={styles.menSolidSlim}
                                href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/12554490/buy"
                                target="_blank"
                              >
                                Men Solid Slim Fit Tuxedo Suit
                              </a>
                              <div className={styles.rs4159Parent}>
                                <a
                                  className={styles.rs4159}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/12554490/buy"
                                  target="_blank"
                                >
                                  Rs. 4159
                                </a>
                                <a
                                  className={styles.rs79992}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/12554490/buy"
                                  target="_blank"
                                >
                                  Rs. 7999
                                </a>
                                <a
                                  className={styles.off39}
                                  href="https://www.myntra.com/suits/manq/manq-men-black-solid-slim-fit-tuxedo-suit/12554490/buy"
                                  target="_blank"
                                >
                                  (48% OFF)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkParent}>
                        <div
                          className={styles.link46}
                          onClick={onLinkContainerClick46}
                        >
                          <div className={styles.containerParent17}>
                            <div className={styles.container153}>
                              <div className={styles.background82}>
                                <div className={styles.picture44}>
                                  <img
                                    className={
                                      styles.feb84c62d440b2B31d7b523795Icon
                                    }
                                    alt=""
                                    src="/57feb84c62d440b2b31d7b5237956be91661159801045menmaroontwopiecesuit1jpg@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.overlay29}>
                              <div className={styles.container154}>
                                <b className={styles.emptyElement3}>3.7</b>
                              </div>
                              <img
                                className={styles.imageIcon35}
                                loading="lazy"
                                alt=""
                                src="/image-391@2x.png"
                              />
                              <div className={styles.container155}>
                                <div className={styles.margin29}>
                                  <div className={styles.container156}>
                                    <b className={styles.blank}>|</b>
                                  </div>
                                </div>
                                <b className={styles.spacer}>52</b>
                              </div>
                            </div>
                          </div>
                          <div className={styles.background83}>
                            <div className={styles.peterEnglandEliteParent4}>
                              <a
                                className={styles.peterEnglandElite7}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-maroon--beige--solid-single-breasted-2-piece-formal-suit/19596264/buy"
                                target="_blank"
                              >
                                Peter England Elite
                              </a>
                              <a
                                className={styles.menSolidSingleBreasted2}
                                href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-maroon--beige--solid-single-breasted-2-piece-formal-suit/19596264/buy"
                                target="_blank"
                              >
                                Men Solid Single-Breasted 2-P…
                              </a>
                              <div className={styles.pricing}>
                                <a
                                  className={styles.rs62995}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-maroon--beige--solid-single-breasted-2-piece-formal-suit/19596264/buy"
                                  target="_blank"
                                >
                                  Rs. 6299
                                </a>
                                <a
                                  className={styles.rs89995}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-maroon--beige--solid-single-breasted-2-piece-formal-suit/19596264/buy"
                                  target="_blank"
                                >
                                  Rs. 8999
                                </a>
                                <a
                                  className={styles.off40}
                                  href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-maroon--beige--solid-single-breasted-2-piece-formal-suit/19596264/buy"
                                  target="_blank"
                                >
                                  (30% OFF)
                                </a>
                              </div>
                            </div>
                            <a
                              className={styles.onlyFewLeft17}
                              href="https://www.myntra.com/suits/peter+england+elite/peter-england-elite-men-maroon--beige--solid-single-breasted-2-piece-formal-suit/19596264/buy"
                              target="_blank"
                            >
                              Only Few Left!
                            </a>
                          </div>
                        </div>
                        <div
                          className={styles.link47}
                          onClick={onLinkContainerClick47}
                        >
                          <div className={styles.container157}>
                            <div className={styles.background84}>
                              <div className={styles.picture45}>
                                <img
                                  className={
                                    styles.d7b9598c0dfb4cb0B5277c9eb3Icon
                                  }
                                  alt=""
                                  src="/d7b9598c0dfb4cb0b5277c9eb31343d91650888536261suits1jpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.backgroundWrapper4}>
                            <div className={styles.background85}>
                              <div className={styles.ad13}>AD</div>
                            </div>
                          </div>
                          <div className={styles.productInteraction}>
                            <div className={styles.cardContainer}>
                              <div className={styles.overlay30}>
                                <div className={styles.container158}>
                                  <b className={styles.invisibleSpace}>3.2</b>
                                </div>
                                <img
                                  className={styles.imageIcon36}
                                  loading="lazy"
                                  alt=""
                                  src="/image-401@2x.png"
                                />
                                <div className={styles.container159}>
                                  <div className={styles.margin30}>
                                    <div className={styles.container160}>
                                      <b className={styles.b48}>|</b>
                                    </div>
                                  </div>
                                  <b className={styles.imageParent2}>6</b>
                                </div>
                              </div>
                            </div>
                            <div className={styles.background86}>
                              <a
                                className={styles.blackberrys12}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-brown-solid-formal-slim-fit-4-piece-suit/18026968/buy"
                                target="_blank"
                              >
                                Blackberrys
                              </a>
                              <a
                                className={styles.menSlimFit4}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-brown-solid-formal-slim-fit-4-piece-suit/18026968/buy"
                                target="_blank"
                              >
                                Men Slim Fit Suit
                              </a>
                              <div className={styles.priceContainer5}>
                                <a
                                  className={styles.rs10797}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-brown-solid-formal-slim-fit-4-piece-suit/18026968/buy"
                                  target="_blank"
                                >
                                  Rs. 10797
                                </a>
                                <a
                                  className={styles.rs17995}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-brown-solid-formal-slim-fit-4-piece-suit/18026968/buy"
                                  target="_blank"
                                >
                                  Rs. 17995
                                </a>
                                <a
                                  className={styles.off41}
                                  href="https://www.myntra.com/suits/blackberrys/blackberrys-men-brown-solid-formal-slim-fit-4-piece-suit/18026968/buy"
                                  target="_blank"
                                >
                                  (40% OFF)
                                </a>
                              </div>
                              <a
                                className={styles.onlyFewLeft18}
                                href="https://www.myntra.com/suits/blackberrys/blackberrys-men-brown-solid-formal-slim-fit-4-piece-suit/18026968/buy"
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
                <List
                  page1Of8607="Page 1 of 1518"
                  propMinHeight="unset"
                  propHeight="126.7px"
                  propOverflowX="auto"
                />
              </div>
            </div>
          </div>
          <header className={styles.header}>
            <div className={styles.container161}>
              <div className={styles.container162}>
                <img
                  className={styles.linkIcon}
                  loading="lazy"
                  alt=""
                  src="/link@2x.png"
                  onClick={onLinkImageClick}
                />
              </div>
              <div className={styles.navbar}>
                <div className={styles.container163}>
                  <div className={styles.container164}>
                    <div className={styles.link48}>
                      <a
                        className={styles.men}
                        href="https://www.myntra.com/shop/men"
                        target="_blank"
                      >
                        Men
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.container165}>
                  <div className={styles.container166}>
                    <div className={styles.link49}>
                      <a className={styles.women}>Women</a>
                    </div>
                  </div>
                </div>
                <div className={styles.container167}>
                  <div className={styles.container168}>
                    <div className={styles.link50}>
                      <a className={styles.kids}>Kids</a>
                    </div>
                  </div>
                </div>
                <div className={styles.container169}>
                  <div className={styles.container170}>
                    <div className={styles.link51}>
                      <a className={styles.homeLiving}>{`Home & Living`}</a>
                    </div>
                  </div>
                </div>
                <div className={styles.container171}>
                  <div className={styles.container172}>
                    <div className={styles.link52}>
                      <a className={styles.beauty}>Beauty</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className={styles.studio}>Studio</a>
              <a className={styles.superscriptNew}>new</a>
              <img
                className={styles.imageIcon37}
                loading="lazy"
                alt=""
                src="/image1@2x.png"
              />
              <a className={styles.profile}>Profile</a>
              <div className={styles.searchBar}>
                <div className={styles.container173}>
                  <div className={styles.input}>
                    <input
                      className={styles.container174}
                      placeholder="Search for products, brands and more"
                      type="text"
                    />
                  </div>
                  <div className={styles.link53}>
                    <img
                      className={styles.imageIcon38}
                      alt=""
                      src="/image-15@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.wishlistCart}>
                <div className={styles.wishlistBagLinks}>
                  <div
                    className={styles.link54}
                    onClick={onLinkContainerClick48}
                  >
                    <img
                      className={styles.imageIcon39}
                      loading="lazy"
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <a className={styles.wishlist}>Wishlist</a>
                  </div>
                  <div
                    className={styles.link55}
                    onClick={onLinkContainerClick49}
                  >
                    <img
                      className={styles.imageIcon40}
                      loading="lazy"
                      alt=""
                      src="/image-34@2x.png"
                    />
                    <a className={styles.bag}>Bag</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
        <div className={styles.container175}>
          <div className={styles.container176}>
            <div className={styles.list1}>
              <div className={styles.item}>
                <div className={styles.link56} onClick={onLinkImageClick}>
                  <div className={styles.home}>Home</div>
                </div>
                <div className={styles.breadcrumbSeparator}>/</div>
              </div>
              <div className={styles.item1}>
                <div className={styles.link57} onClick={onLinkContainerClick50}>
                  <a
                    className={styles.clothing}
                    href="https://www.myntra.com/clothing"
                    target="_blank"
                  >
                    Clothing
                  </a>
                </div>
                <div className={styles.div23}>/</div>
              </div>
              <div className={styles.item2}>
                <b className={styles.menSuits3}>Men Suits</b>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.container177}>
          <div className={styles.margin31}>
            <div className={styles.container178}>
              <div className={styles.heading1}>
                <b className={styles.menSuits4}>Men Suits</b>
              </div>
              <div className={styles.container179}>
                <div className={styles.items}>- 75858 items</div>
              </div>
            </div>
          </div>
        </footer>
        <div className={styles.background87}>
          <div className={styles.border20} />
          <b className={styles.flat200Off}>FLAT ₹200 OFF</b>
        </div>
        <div className={styles.container180}>
          <div className={styles.container181}>
            <div className={styles.backgroundshadow}>
              <img
                className={styles.svgIcon}
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
              <div className={styles.background88}>
                <b className={styles.new}>New</b>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.horizontalDivider}>
        <div className={styles.container182} />
      </div>
    </div>
  );
};

export default MensSuitWear;
