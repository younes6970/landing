
import Link from "next/link";
import LogoKobin from "../../assets/logo/logoKobin.svg";
import { DATA_MENU, DATA_SOCIAL_NETWORK } from "./data";
import { Fragment, useState } from "react";
import ListMenu from "./component/ListMenu/ListMenu";
import styles from "./header.module.scss";
import ListSocialNetwork from "./component/ListSocialNetwork/ListSocialNetwork";
import imgUser from "../../assets/icon/user.svg";
const Header = () => {
  return (
    <>
      <header className={`pbt40 ${styles.boxHeader}`}>
        <div className={`wBase betweenCenter`}>
          <nav className={`startCenter`}>
            <ul className={`startCenter ${styles.boxMenu}`}>
              <li>
                <Link href={"/"}>
                  <a className={`textWhite`}>
                    <img src={LogoKobin} alt={"kobin | کوبین"} />
                  </a>
                </Link>
              </li>
              {DATA_MENU.map((menu) => (
                <Fragment key={menu.id}>
                  <ListMenu {...menu} />
                </Fragment>
              ))}
            </ul>
          </nav>
          <div className={`endCenter`}>
            <ul className={`startCenter ${styles.boxMenu}`}>
              {DATA_SOCIAL_NETWORK.map((social) => (
                <Fragment key={social.id}>
                  <ListSocialNetwork {...social} />
                </Fragment>
              ))}
            </ul>
            <button
              className={`betweenCenter bgPrimary p15 radius20 borderNone shadowBtn`}
            >
              <img src={imgUser} alt={"kobin"} />
              <Link href={"/dashboard/login"}>
                <a className={`textWhite weight600 font24 mr25`}>
                  ورود به پنل کاربری
                </a>
              </Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
