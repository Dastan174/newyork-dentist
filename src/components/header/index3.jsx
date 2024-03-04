import React, { useState } from "react";
import headerLogoWhite from "../../images/header-logo-white.svg";
function Index3() {
  const [ThisActive, setThisActive] = useState("");
  const [ThisActiveImg, setThisActiveImg] = useState("");

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="header3">
      <div className="container">
        <div className={"header3__content"}>
          <nav className="header3-select ">
            <li>Услуги</li>
            <select className="">
              <option value="a">Цены</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
            </select>
            <select name="" id="">
              <option value="a">Цены</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
            </select>
            <select name="" id="">
              <option value="a">О клинике</option>
              <option value="a">О клинике</option>
              <option value="a">О клинике</option>
              <option value="a">О клинике</option>
              <option value="a">О клинике</option>
            </select>
            <li>Контакты</li>
            <li>
              <select>
                <option value="a">Контакты</option>
                <option value="a">Контакты</option>
                <option value="a">Контакты</option>
                <option value="a">Контакты</option>
                <option value="a">Контакты</option>
              </select>
            </li>
          </nav>
          <label for="burger" class="burger">
            <input className="chex"
              onClick={() => (
                setThisActive(ThisActive == "" ? "active" : ""),
                setThisActiveImg(ThisActiveImg == "" ? "active" : "")
              )}
              id="burger"
              type="checkbox"
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
          <img
            className={`header-white-none-${ThisActiveImg}`}
            src={headerLogoWhite}
            alt=""
          />
          <div className="w-full block">
            <nav className={`nav-adaptiv-none-${ThisActive}`}>
              <li className="w-full">Услуги</li>
              <li className="w-full">
                <select className="w-full h-11">
                  <option className="py-11" value="a">
                    Цены
                  </option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                </select>
              </li>
              <li>
                <select className="w-full" name="" id="">
                  <option value="a">Цены</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                </select>
              </li>
              <li>Услуги</li>
              <li>
                <select className="w-full" name="" id="">
                  <option value="a">Цены</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                  <option value="a">Примеры работ</option>
                </select>
              </li>
              <li className="w-full">Контакты</li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index3;
