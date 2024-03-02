import React, { useState } from "react";
import "./Form.css";
import form1photo from "../../images/from1photo.svg";
import { useMyContext } from "../../context/MyContext";
import axios from "axios";
function Form1Home() {
  const [objDataNum, setObjDataNum] = useState("");
  const [objDataName, setObjDataName] = useState("");
  const TELEGRAM_CHAT_ID = "@messageAziret";
  const TELEGRAM_BOT_TOKEN = "7078287615:AAFDWtz-p3HpL28ItVtLyo-1_2l2MAQQPf8";
  const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  async function sendMessageBot() {
    let res = {
      name: objDataName,
      number: objDataNum,
    };
    let resMessage = `привет мененджер \n имя : '${res.name} \n нрмер: "${res.number}" \n напиши ему 🤗🤗🤗`;
    axios.post(API, {
      chat_id: TELEGRAM_CHAT_ID,
      parse_mode: "html",
      text: resMessage,
    });
  }
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
                <input
                  onChange={(e) => setObjDataName(e.target.value)}
                  type="text"
                  placeholder="Kubanychbekov Aziret"
                />
                <input
                  onChange={(e) => setObjDataNum(e.target.value)}
                  type="text"
                  placeholder="+7 000 000-00-00"
                />
              </div>
              <p>Перезвоним через 15 минут</p>
              <div className="from__btn">
                <button onClick={() => sendMessageBot()}>Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form1Home;
