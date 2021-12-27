import logoFooter from "../../assets/icon/logoFooter.svg";
import { Fragment, useState } from "react";
import Stores from "./component/Stores/Stores";
import { DATA_CREDIT, DATA_MENU_FOOTER, DATA_STORES } from "./data";
import { DATA_SOCIAL_NETWORK } from "../Header/data";
import ListMenu from "../Header/component/ListMenu/ListMenu";
import addressIcon from "../../assets/icon/addres.svg";
import phoneIcon from "../../assets/icon/Phone.svg";
import emailIcon from "../../assets/icon/Email.svg";
import ListSocialNetwork from "../Header/component/ListSocialNetwork/ListSocialNetwork";
import TermsAndConditions from "../../component/TermsAndConditions/TermsAndConditions";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className={`w100 center bgBlack pbt40`}>
        <div className={`wBase startColumn`}>
          <div className={`w100 betweenCenter mb30`}>
            <img src={logoFooter} alt={"kobin"} />
            <div className={`endCenter`}>
              {DATA_STORES.map((store) => (
                <Fragment key={store.id}>
                  <Stores {...store} />
                </Fragment>
              ))}
            </div>
          </div>
          <div className={`w100 betweenCenter mt20 mb20`}>
            <div className={`startColumn`}>
              <span className={`textWhite font24 weight400`}>
                ما را دنبال کنید...
              </span>
              <ul className={`startCenter pNone styleNone`}>
                {DATA_SOCIAL_NETWORK.map((social) => (
                  <Fragment key={social.id}>
                    <ListSocialNetwork {...social} />
                  </Fragment>
                ))}
              </ul>
              <div className={`startCenter`}>
                <img src={addressIcon} alt={"kobin"} />
                <span className={`textWhite font20 weight600 mr10`}>
                  تهران خیابان مطهری بعد از مفتح پلاک ۱۶۱
                </span>
              </div>
              <div className={`startCenter mt20`}>
                <div className={`startCenter`}>
                  <img src={phoneIcon} alt={"kobin"} />
                  <span className={`textWhite font20 weight600 mr10`}>
                    ۰۲۱۸۸۷۴۲۹۲۲
                  </span>
                </div>
                <div className={`startCenter mr25`}>
                  <img src={emailIcon} alt={"kobin"} />
                  <span className={`textWhite font20 weight600 mr10`}>
                    info@kobin.ir
                  </span>
                </div>
              </div>
            </div>
            <ul className={`startColumn pNone styleNone`}>
              {DATA_MENU_FOOTER.map((menu) => (
                <Fragment key={menu.id}>
                  <ListMenu {...menu} footer onOpen={handleModal} />
                </Fragment>
              ))}
            </ul>
            <div className={`endCenter`}>
              {DATA_CREDIT.map((creit) => (
                <Fragment key={creit.id}>
                  <Stores {...creit} />
                </Fragment>
              ))}
            </div>
          </div>
          <p className={`mt20 mb0 textWhite weight400 font20`}>
            کپی رایت تمامی حقوق مادی و معنوی این سرویس (وب سایت و اپلیکیشن های
            موبایل) متعلق به فناوران هوشمند کوبین است.
          </p>
        </div>
      </div>
      <TermsAndConditions onClose={handleModal} isOpen={isOpen} />
    </>
  );
};
export default Footer;
