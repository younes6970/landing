import underLineNovinIcon from "../../../../assets/icon/underLineNovin.svg";
import tomanIcon from "../../../../assets/icon/underLineToman.svg";
import homePageIcon from "../../../../assets/icon/HomePage.svg"
import coinIcon from "../../../../assets/icon/coin.svg"

const DescriptionKobin = () => {
  return (
    <section className={`boxSection bgWhite relative mt100`}>
      <div className={`w100 betweenCenter`}>
        <div className={`flex2 startColumn`}>
          <h2 className={`textHeadingBig textBlack mNone`}>
            پلتفرم کوبین ، ابزاری
            <br />
            هوشمند و{" "}
            <span className={`relative`}>
              راهکاری نوین
              <div className={`underLine`}>
                <img src={underLineNovinIcon} alt={"kobin"} />
              </div>
            </span>{" "}
            برای
            <br />
            دیده شدن کسب و کار شما
          </h2>
          <p className={`textParagraphHome textBlackDark textRight m0 weight400`}>
            کوبیناولین پلتفرمحوره دیجیتال مارکتینگ است که ابزار و امکانات
            تبلیغاتی در اختیار صاحبان کسب وکارقرارمیدهد که پیش ازاین در دسترس
            نبوده است.اطلاعات بیشتر...
          </p>
          <span className={`textParagraphHome textBlackDark m0 weight400`}>
            هزینه انتشار آگهی:
          </span>
          <span className={`weight400 font30 textBlackDark m0`}>
            از{" "}
            <span className={`weight400 font30 textBlackDark relative`}>
              180
              <span className={`underLineToman`}>
                <img src={tomanIcon} alt={"kobin"} />
              </span>
            </span>
            تومان به ازای هر نمایش
          </span>
        </div>
        <div className={`flex1`}>
          <div className={`homePage`}>
            <img src={homePageIcon} alt={"kobin"} />
          </div>
        </div>
      </div>
      <div className={`coinIcon`}>
        <img src={coinIcon} alt={"kobin"} />
      </div>
    </section>
  );
};
export default DescriptionKobin;
