import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { PiMessengerLogoLight } from "react-icons/pi";
import ok from "../../images/header-class.svg";
import instagram from "../../images/header-insta.svg";
import vk from "../../images/vkkk.svg";
import facebook from "../../images/header-fasebook.svg";
import youtube from "../../images/header-you.svg";
import { NavLink } from "react-router-dom";
import "./footer.css";
import "./footerADAP4.css";

const Footer4 = () => {
  return (
    <div className="container">
      <div className="zz flex items-start justify-between my-11">
        <div className="m-5 w-[284px]">
          <h1>Москва</h1>
          <h3 className="text-xs">ул. Терешковой, 15Б</h3>
          <p className="df text-xs text-[#253F41] my-11">
            © 2008—2021 Название клиники <br />
            Все права защищены
          </p>
          <div className="fd mt-5">
          <div className="flex items-start gap-3">
            <span className="mt-1">
              <MdOutlinePhoneInTalk />
            </span>
            <div className="">
              <h1 className="text-[#2CB2BB] font-bold">8 (800) 200-45-65</h1>
              <h4 className="text-xs">Горячая линия</h4>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-3">
            <span className="mt-1">
              <MdOutlinePhoneInTalk />
            </span>
            <div className="">
              <h1 className="text-[#2CB2BB] font-bold">8 (800) 200-45-65</h1>
              <h4 className="text-xs">Горячая линия</h4>
            </div>
          </div>

          <h3 className="text-[#2CB2BB] text-xs font-medium ml-[27px] my-3">
            Заказать звонок
          </h3>
          <div className="">
            <div className=" flex items-center gap-3">
              <span>
                <CiClock2 />
              </span>
              <h3 className="text-xs">В будни с 9:00 до 18:00</h3>
            </div>
            <div className=" flex items-center gap-3 my-3">
              <span>
                <MdEmail />
              </span>
              <h3 className="text-xs text-[#2CB2BB]">consult@clinic.ru</h3>
            </div>
          </div>
        </div>
        </div>
        <div className="df m-5 w-[284px]">
          <div className="flex items-start gap-3">
            <span className="mt-1">
              <MdOutlinePhoneInTalk />
            </span>
            <div className="">
              <h1 className="text-[#2CB2BB] font-bold">8 (800) 200-45-65</h1>
              <h4 className="text-xs">Горячая линия</h4>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-3">
            <span className="mt-1">
              <MdOutlinePhoneInTalk />
            </span>
            <div className="">
              <h1 className="text-[#2CB2BB] font-bold">8 (800) 200-45-65</h1>
              <h4 className="text-xs">Горячая линия</h4>
            </div>
          </div>

          <h3 className="text-[#2CB2BB] text-xs font-medium ml-[27px] my-3">
            Заказать звонок
          </h3>
          <div className="">
            <div className=" flex items-center gap-3">
              <span>
                <CiClock2 />
              </span>
              <h3 className="text-xs">В будни с 9:00 до 18:00</h3>
            </div>
            <div className=" flex items-center gap-3 my-3">
              <span>
                <MdEmail />
              </span>
              <h3 className="text-xs text-[#2CB2BB]">consult@clinic.ru</h3>
            </div>
          </div>
        </div>
        <div className="m-5 w-[284px]">
          <div className="flex items-center flex-col gap-4 mr-11">
            <button class="how cursor-pointer  p-[2px] bg-black rounded-[5px] bg-gradient-to-t from-[#2CB2BB] to-[#2CB2BB] active:scale-95">
              <span class="w-[240px] h-full text-sm font-medium flex items-center gap-2 px-4 py-3 bg-[#2CB2BB] text-[white] rounded-[5px] from-[#2CB2BB] to-[#2CB2BB]">
                <span className="mr-2">
                  <GoPencil />
                </span>
                Записаться на приём
              </span>
            </button>
            <button class="how cursor-pointer flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[5px] bg-gradient-to-t from-[#F2FAFB] to-[#F2FAFB] active:scale-95">
              <span class="w-[240px] h-full text-xs text-start  font-medium flex gap-2 px-2 py-3 bg-[#F2FAFB] text-[#2CB2BB] rounded-[5px] from-[#2CB2BB] to-[#2CB2BB]">
                <span className="text-2xl mr-2">
                  {" "}
                  <PiMessengerLogoLight />
                </span>
                Оставить отзыв <br /> или написать директору{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="m-5 w-[284px]">
          <h3 className="text-sm font-bold text-[#253F41]">
            Подписывайте на нас в соцсетях, чтобы быть в курсе всех собтиый
          </h3>
          <div className="flex items-center gap-2 my-2">
            <div class="parent">
              <div class="child child-1">
                <button class="button btn-1">
                  <img src={ok} alt="img" />
                </button>
              </div>
              <div class="child child-2">
                <button className="button btn-2" />
                <img src={instagram} alt="img" />
              </div>
              <div class="child child-3">
                <button className="button btn-3" />
                <img src={vk} alt="img" />
              </div>
              <div class="child child-4">
                <button className="button btn-4" />
                <img src={facebook} alt="img" />
              </div>
              <div class="child child-4">
                <button className="button btn-4" />
                <img src={youtube} alt="img" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <NavLink className="text-[#2CB2BB] text-sm ">
              Политика конфиденциальности
            </NavLink>
            <NavLink className="text-[#2CB2BB] text-sm">Карта сайта</NavLink>
          </div>
      <div className="ds w-[284] ml-3">
        <p className="text-xs text-[#253F41] my-11">
            © 2008—2021 Название клиники <br />
            Все права защищены
          </p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
