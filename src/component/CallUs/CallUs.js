import pin from "../../assets/icon/pin.png";

import CallUsForm from "./component/CallUsForm/CallUsForm";
const CallUs = () => {
  return (
    <div className={`w100 startCenterColumn mb100 mr100 ml100`}>
      <h2 className={`font40 textWhite mt0 mb20`}>با ما در ارتباط باشید</h2>
      <section
        className={`mt20 wh100 radius42 shadow startCenter relative`}
      >
        <img src={pin} alt={"kobin"} className={`wh100`} />

        <div className={`callUs start`}>
          <div className={`callUs57`} />
          <div className={`callUs43 startColumn pr45`}>
            <span className={`weight700 font24 textBlack inlineBlock`}>
              با ما تماس بگیرید
            </span>
            <span className={`weight700 font30 textGreen inlineBlock mt5`}>
              ۰۲۱-۲۳۴۷۹۲۳۴
            </span>
            <span
              className={`textBlack weight700 font24 textBlack inlineBlock mb30 mt10 `}
            >
              یا، برامون پیام بگذارید...
            </span>
            <CallUsForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default CallUs;
