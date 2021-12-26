const LoginDashboard = () => {
  return (
    <div className={`wBase startCenterColumn mt10`}>
      <h2 className={`textHeadingBig textWhite mt5 mb15`}>
        ورود به پنل مدیریت
      </h2>
      <div className={`bgWhite wLogin mt20 p45 radius42 shadow`}>
        <input
          placeholder={"نام کاربری"}
          className={`inputBox`}
          type={"text"}
        />
        <input
          placeholder={"کلمه عبور"}
          className={`inputBox mb20`}
          type={"password"}
        />
        <button
          className={`bgPrimary btn w100 textWhite radius20 center font20 pt15 pb15 mt10`}
        >
          ورود
        </button>
        <div className={`w100 betweenCenter mt20`}>
          <button className={`font30 btn weight400 textBlack bgNone`}>
            فراموشی رمز عبور
          </button>
          <button className={`font30 btn weight400 textBlack bgNone`}>
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginDashboard;
