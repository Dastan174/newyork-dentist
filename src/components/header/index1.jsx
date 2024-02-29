import React from "react";
import headerCursor from "../../images/header-logo-cursor.svg";
import headerPhone from "../../images/header-phone.svg";
import headerClock from "../../images/header-clock.svg";
import headerEmail from "../../images/header-email.svg";

import "./header.css";
function Index1() {
  return (
    <div className="header1">
      <div className="container">
        <div className="haeder__content">
          <div className="header__cursor">
            <img src={headerCursor} alt="" />
            <p className="header__start-moscov"> Москва</p>
          </div>
          <div className="header__nav">
            <li>
              <img src={headerPhone} alt="" />8 (800) 200-45-65
            </li>
            <li>
            Заказать звонок
            </li>
            <li> <img src={headerClock} alt="" />В будни с 9:00 до 18:00</li>
            <li><img src={headerEmail} alt="" />Consult@clinic.ru</li>
          </div>
          <div className="haeder__glass">
            <p>Версия для слабовидящих</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index1;
