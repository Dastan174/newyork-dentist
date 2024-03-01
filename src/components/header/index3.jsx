import React from "react";

function Index3() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="header3">
      <div className="container">
        <div className="header3__content">
          <nav className="header3-select">
            <li>Услуги</li>
            <select>
              <option value="a">Цены</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
              <option value="a">Примеры работ</option>
            </select>
            <select name="" id="">
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
        </div>
      </div>
    </div>
  );
}

export default Index3;
