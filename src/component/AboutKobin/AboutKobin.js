import Image from "next/image";
import kobinIcon from "../../assets/icon/kobin3d.svg";
import DescriptionVideo from "../Home/component/DescriptionVideo/DescriptionVideo";
const AboutKobin = () => {
  return (
    <div className={`wBase startCenterColumn mt20`}>
      <h2 className={`font64 textWhite mt0 mb30`}>داستان کوبین...</h2>
      <section className={`boxSection relative w100 bgWhite mt20`}>
        <div className={`w100 betweenCenter`}>
          <div className={`flex2 startColumn`}>
            <h3 className={`font40 weight400 textBlack mNone`}>
              کوبین از کجا اومده؟
            </h3>
            <p
              className={`font20 weight600 textBlack mt20 mb0 lineH40 textJustify`}
            >
              کوبین یک پلتفرم تبلیغات دیجیتال بر پایه تبلیغات ویدیویی است که
              مبتنی بر فناوری اطلاعات روز طراحی شده و هدف آن معرفی کالا یا خدمات
              کسب و کارها به مصرف کنندگان می باشد، به نحوی که تبلیغات به شکل
              تیزر حدودا یک دقیقه ای بر اساس موقعیت بیننده و فاصله مشخص از کسب و
              کار نمایش داده شده و به ازای تماشای هر تیزر عواید نصیب ببینده
              خواهد شد.
            </p>
          </div>
          <div className={`flex1`}>
            <div className={`aboutIcoKobin`}>
              <Image src={kobinIcon} alt={"kobin"} />
            </div>
          </div>
        </div>
        <div className={`w90`}>
          <DescriptionVideo isAbout />
        </div>
        <div className={`w100 betweenCenter relative mb20`}>
          <div className={`flex1`}>
            <div className={`radiusLeft42  bgBase h180 ml20  mr-45`} />
          </div>
          <p
            className={`font20 flex2 weight600 textBlack mt20 mb0 mr25 lineH40 textJustify`}
          >
            کوبین یک پلتفرم تبلیغات دیجیتال بر پایه تبلیغات ویدیویی است که مبتنی
            بر فناوری اطلاعات روز طراحی شده و هدف آن معرفی کالا یا خدمات کسب و
            کارها به مصرف کنندگان می باشد، به نحوی که تبلیغات به شکل تیزر حدودا
            یک دقیقه ای بر اساس موقعیت بیننده و فاصله مشخص از کسب و کار نمایش
            داده شده و به ازای تماشای هر تیزر عواید نصیب ببینده خواهد شد.
          </p>
        </div>
        <p
          className={`font20 weight600 textBlack mt20 mb0 lineH40 textJustify`}
        >
          کوبین یک پلتفرم تبلیغات دیجیتال بر پایه تبلیغات ویدیویی است که مبتنی
          بر فناوری اطلاعات روز طراحی شده و هدف آن معرفی کالا یا خدمات کسب و
          کارها به مصرف کنندگان می باشد، به نحوی که تبلیغات به شکل تیزر حدودا یک
          دقیقه ای بر اساس موقعیت بیننده و فاصله مشخص از کسب و کار نمایش داده
          شده و به ازای تماشای هر تیزر عواید نصیب ببینده خواهد شد.
        </p>
      </section>
    </div>
  );
};
export default AboutKobin;
