const SendCode = () => {
  return (
    <div className={`bgWhite wLogin mt20 p45 radius42 shadow`}>
      <h2 className={`textHeadingSmall textBlack textCenter mb5`}>
        لطفا کد شش رقمی ارسال شده را
        <br />
        در کادر زیر وارد کنید...
      </h2>
      <div className={`w100 betweenCenter mt15 mb20`}>
        <span className={`textBlackLight font20 weight400`}>شماره موبایل</span>
        <button
          className={`textBlackLight bgNone font20 weight400 borderNone borderBottom`}
        >
          ویرایش موبایل
        </button>
      </div>
      <div className={`w100 betweenCenter mt5 mb20`}>
        <input
          className={`codeInput`}
          placeholder={" "}
          maxLength={1}
          minLength={1}
        />
        <input
          className={`codeInput`}
          placeholder={" "}
          maxLength={1}
          minLength={1}
        />
        <input
          className={`codeInput`}
          placeholder={" "}
          maxLength={1}
          minLength={1}
        />
        <input
          className={`codeInput`}
          placeholder={" "}
          maxLength={1}
          minLength={1}
        />
        <input
          className={`codeInput`}
          placeholder={" "}
          maxLength={1}
          minLength={1}
        />
        <input
          className={`codeInput`}
          placeholder={" "}
          maxLength={1}
          minLength={1}
        />
      </div>
      <button
        className={`bgPrimary btn w100 textWhite radius20 center font20 pt15 pb15 mt10`}
      >
        ارسال دوباره کد
      </button>
    </div>
  );
};
export default SendCode;
