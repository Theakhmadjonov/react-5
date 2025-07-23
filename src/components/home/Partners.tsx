import { Link } from "react-router-dom";
import versace from "../../assets/icons/Vector(4).svg";
import zara from "../../assets/icons/Vector(5).svg";
import gucci from "../../assets/icons/Vector(6).svg";
import prada from "../../assets/icons/Vector(7).svg";
import calvinClein from "../../assets/icons/Vector(8).svg";

const Partners = () => {
  return (
    <section className="bg-black">
      <div className="my-container flex justify-between items-center py-11">
        <Link
          to={
            "https://www.versace.com/uz/en/?gclid=Cj0KCQjwkILEBhDeARIsAL--pjyflQpzQMYSEzLzevFR0q_v7-jwxzi35H4CxQuwgRK1yV8q_kgiamgaAsduEALw_wcB&gad_campaignid=6608619505&gad_source=1&s_kwcid=AL%216089%213%21Keyword%21EXACT%21%21g%21%21versace&utm_term=versace&utm_adgroup=Exact&utm_campaignname=01_Top_Brand_Exact_INT-WW&wt_mc=_I.SEM.Google.Text.01_Top_Brand_Exact_INT-WW.Exact&gclsrc=aw.ds"
          }
        >
          <img src={versace} alt="" />
        </Link>
        <Link to={"https://www.zara.com/"}>
          <img src={zara} alt="" />
        </Link>
        <Link
          to={
            "https://www.gucci.com/?srsltid=AfmBOor16WGjR13lkKrg9qZiIqI060mGKdLjR1ChN0bj4EF2N49iSGu8"
          }
        >
          <img src={gucci} alt="" />
        </Link>
        <Link to={"https://www.prada.com/us/en.html"}>
          <img src={prada} alt="" />
        </Link>
        <Link to={"https://www.calvinklein.us/en"}>
          <img src={calvinClein} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default Partners;
  