"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import useScreenSize from "@/utils/useScreen";

import ShoppingCartIconOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import "./style.scss";
import uzb from "@/assets/flagInUzb.png";
import Image from "next/image";

const Header = () => {
  const screenSize = useScreenSize();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (screenSize > 650) {
      setIsNavOpen(false);
    }
  }, [screenSize]);

  const controlNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const now = new Date();

  console.log(now);

  return (
    <header>
      <nav className="up-nav">
        <div className="container up-nav-container">
          <p>Maqsadimiz insonlar salomatligi</p>
          <p>Buyurtmangizni 1-3 kunda bepul yetkazib beramiz!</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <p>Buyurtmalarim</p>
            <p className="language">
              <Image src={uzb} alt="" />
              O`zbekcha
            </p>
          </div>
          {/* <p>{now}</p> */}
        </div>
      </nav>
      <nav className="nav">
        <div className="container nav__container">
          <div className="nav__logo">
            <Link href="/">Vodiy Parfum</Link>
          </div>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link className="nav__cart" href="/allproducts">
                <p>Mahsulotlar</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__cart" href="/about">
                <p>Biz haqimizda</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__cart" href="/contact">
                <p>Bog`lanish</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__cart"
                href="/favourite"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FavoriteBorderOutlinedIcon />
                <p>Saralanganlar</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__cart" href="/cart">
                <ShoppingBagOutlinedIcon />
                <p>Savat</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__login" href="/login">
                <PersonOutlineOutlinedIcon />
                Kirish
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link className="nav__register" href="/register">
                Register
              </Link>
            </li> */}
          </ul>
          {isNavOpen ? (
            <ul className="nav__res__menu">
              <li className="nav__item">
              <Link className="nav__cart" href="/allproducts">
                <p>Mahsulotlar</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__cart" href="/about">
                <p>Biz haqimizda</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__cart" href="/contact">
                <p>Bog`lanish</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__cart"
                href="/favourite"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p>Saralanganlar</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__cart" href="/cart">
                <p>Savat</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__login" href="/login">
                Kirish
              </Link>
            </li>
            </ul>
          ) : null}
        </div>
        <div className="hamburger">
          <button onClick={controlNav} className="nav__menu__btn">
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
