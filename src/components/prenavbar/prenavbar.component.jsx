import React from "react";
import { PreNav, PrenavContainer } from "./prenavbar.styles";
import MainContainer from "../main-container/main-container.styles";
import { AiOutlineDown } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

const PreNavbar = () => {
  return (
    <PrenavContainer>
      <MainContainer>
        <PreNav>
          <div>
            <a href="https://www.mi.com/in/">MI INDIA</a>
            <span>|</span>
            <a href="https://in.event.mi.com/in/install-mi-store">
              GET MI STORE APP
            </a>
            <span>|</span>
            <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
              ONLINE HELP
            </a>
            <span>|</span>
            <a href="https://www.mi.com/in/service/authorized_stores/">
              RETAIL STORE <AiOutlineDown />
            </a>
          </div>
          <div>
            <a href="https://store.mi.com/in/site/login">SIGN IN</a>
            <span>|</span>
            <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
              SIGN UP
            </a>
            <span>|</span>
            <a href="https://store.mi.com/in/cart">
              <MdShoppingCart className="cart" /> CART(0)
            </a>
          </div>
        </PreNav>
      </MainContainer>
    </PrenavContainer>
  );
};

export default PreNavbar;
