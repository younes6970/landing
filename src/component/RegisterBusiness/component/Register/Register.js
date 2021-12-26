const Register = () => {
  return (
    <div className={`bgWhite wLogin mt20 p45 radius42 shadow`}>
      <h2 className={`textHeadingSmall textBlack textCenter mb5`}>
        برای شروع، لطفا شماره موبایل
        <br />
        خود را وارد کنید
      </h2>
      <input
        placeholder={"شماره موبایل"}
        type={"tel"}
        className={`inputBox mt10 mb5`}
      />
      <button
        className={`bgPrimary btn w100 textWhite radius20 center font20 pt15 pb15 mt10`}
      >
        ارسال کد
      </button>
    </div>
  );
};
export default Register;
