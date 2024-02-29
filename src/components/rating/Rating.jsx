import React, { useEffect } from "react";
import "./Rating.css";
import rating1 from "../../images/rating1.svg";
import rating2 from "../../images/rating2.svg";
import rating3 from "../../images/rating3.svg";
import rating4 from "../../images/rating4.svg";
import rating5 from "../../images/rating5.svg";
import rating6 from "../../images/rating6.svg";
import rating7 from "../../images/rating7.svg";
import rating8 from "../../images/rating8.svg";
import sectionPhone from "../../images/section-phone.svg";

function Rating() {
  const data = [
    { title: "Продокторов", rating: 4.7, img: rating1 },
    { title: "Yell.ru", rating: 8.9, img: rating2 },
    { title: "ЛайкДоктор", rating: 6.8, img: rating3 },
    { title: "Google", rating: 4.7, img: rating4 },
    { title: "Стоматология.су", rating: 4.9, img: rating5 },
    { title: "Zoon", rating: 5.0, img: rating6 },
    { title: "Yandex", rating: 3.3, img: rating7 },
    { title: "Flamp.ru", rating: 4.1, img: rating8 },
  ];
  return (
    <section className="rating">
      <div className="container">
        <div className="rating__content">
          <div className="rating__block__left">
            <h2>Независимые рейтинги</h2>
            <div className="rating__block__left-blocks">
              {data.map((el, ind) => (
                <div key={ind} className="rating__block">
                  <div className="rating__block-img">
                    <div className="rating__block-img-child">
                      <img src={el.img} alt="" />
                    </div>
                  </div>
                  <div className="rating__block-info">
                    <h4>{el.title}</h4>
                    <p>{el.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rating__block__right">
            <div className="rating__block-img-right">
              <img src={sectionPhone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rating;
