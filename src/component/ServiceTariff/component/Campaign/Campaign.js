import onlineIcon from "../../../../assets/icon/Online.svg";

const Campaign = () => {
  return (
    <section className={`w100 boxSection bgPrimary mt20 relative`}>
      <div className={`w100 betweenStart`}>
        <div className={`flex1 startColumn`}>
          <h2 className={`font40 textWhite weight700 mNone`}>
            با کوبین تبلیغات هوشمند
            <br />
            دیجیتال را تجربه کنید
          </h2>
          <p className={`font30 weight400 textWhite mt20 mb20`}>
            هزینه انتشار هر آگهی ۱۸۰ تومان
          </p>
          <button
            className={`radius20 bgWhite textPrimary pt15 pb15 prl45 mt20 btn`}
          >
            ایجاد کمپین تبلیغاتی
          </button>
        </div>
        <div className={`flex1`}>
          <div className={`onlineIcon index1000`}>
            <img src={onlineIcon} alt={"kobin"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Campaign;
