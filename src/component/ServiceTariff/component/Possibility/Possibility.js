import logo from "../../../../assets/icon/Subtract.svg";
import icons from "../../../../assets/icon/icons.svg"

const Possibility = () => {
  return (
    <section className={`boxSection relative w100 bgWhite mt20 mb100`}>
      <div className={`centerColumn w100 mt100 mb100`}>
        <img src={logo} alt={"kobin"} />
        <h2 className={`font30 textBlack textCenter mt10 mb0`}>
          برخی از امکانات متنوع
          <br />
          پلتفرم کوبین
        </h2>
        <button
          className={`btn shadowBtn font24 weight600 textWhite bgPrimary radius20 pbt20 prl45 mt10`}
        >
          ثبت نام کسب وکار در پلتفرم
        </button>
        <div className={`iocns`}>
        <img src={icons} alt={"kobin"} />
        </div>
      </div>
    </section>
  );
};
export default Possibility;
