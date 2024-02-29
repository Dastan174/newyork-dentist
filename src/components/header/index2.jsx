import React from "react";

import header2Logo from "../../images/header1-logo.png";
import header2Class from "../../images/header-class.svg";
import header2Insta from "../../images/header-insta.svg";
import header2Facebook from "../../images/header-fasebook.svg";
import header2Vk from "../../images/header-vk.svg";
import header2You from "../../images/header-you.svg";
import headerMedal from "../../images/medal.svg";
import headerReview from "../../images/review.svg";
import headerPansle from "../../images/pansle.svg";


function Index2() {
  return (
    <div className="header2">
      <div className="container">
        <div className="header2__content">
          <div className="header__logo">
            <div className="header__logo-img">
              <img src={header2Logo} alt="" />
            </div>
          </div>
            <div className="header__end-social">
              <img src={header2Class} alt="" />
              <img src={header2Insta} alt="" />
              <img src={header2Vk} alt="" />
              <img src={header2Facebook} alt="" />
              <img src={header2You} alt="" />
            </div>
          <div className="header__end">
            <div className="header__end-btns">
              <button>
                <img src={headerMedal} alt="" />
                Награды <br /> и сертификаты
              </button>
              <button>
                <img src={headerReview} alt="" />
                Оставить отзыв <br />
                или написать директору
              </button>
              <button>
                <img src={headerPansle} alt="" />
                Записаться на приём
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index2;
