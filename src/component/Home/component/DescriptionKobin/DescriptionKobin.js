import underLineNovinIcon from "../../../../assets/icon/underLineNovin.svg";
import tomanIcon from "../../../../assets/icon/underLineToman.svg";
import Image from "next/image";
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
                <Image src={underLineNovinIcon} alt={"kobin"} />
              </div>
            </span>{" "}
            برای
            <br />
            دیده شدن کسب و کار شما
          </h2>
          <p className={`textParagraphHome textRight mt20 mb0 weight400`}>
            کوبیناولین پلتفرمحوره دیجیتال مارکتینگ است که ابزار و امکانات
            تبلیغاتی در اختیار صاحبان کسب وکارقرارمیدهد که پیش ازاین در دسترس
            نبوده است.اطلاعات بیشتر...
          </p>
          <span className={`textParagraphHome mt10 weight400`}>
            هزینه انتشار آگهی:
          </span>
          <span className={`weight400 font30 textBlackDark mt5`}>
            از{" "}
            <span className={`weight400 font30 textBlackDark mt5 relative`}>
              180
              <span className={`underLineToman`}>
                <Image src={tomanIcon} alt={"kobin"} />
              </span>
            </span>
            تومان به ازای هر نمایش
          </span>
        </div>
        <div className={`flex1`}></div>
      </div>
    </section>
  );
};
export default DescriptionKobin;
