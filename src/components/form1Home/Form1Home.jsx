import React from "react";
import "./Form.css";
import form1photo from "../../images/from1photo.svg";
function Form1Home() {
  return (
    <section className="from1__home">
      <div className="container">
        <div className="from1__content">
          <div className="from1__images">
            <img src={form1photo} alt="" />
          </div>
          <div className="from1__from">
            <div className="from__child">
              <h2>Остались вопросы? Мы ответим!</h2>
              <div className="from__input">
                <input type="text" placeholder="Kubanychbekov Aziret" />
                <input type="text" placeholder="+7 000 000-00-00" />
              </div>
              <p>Перезвоним через 15 минут</p>
              <div className="from__btn">
                <button>Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form1Home;
