import DescriptionVideo from "../Home/component/DescriptionVideo/DescriptionVideo";
import { DATA_ABOUT_US } from "./data";
import { Fragment } from "react";
import ListAbout from "./component/ListAbout/ListAbout";

const AboutUs = () => {
  return (
    <div className={`wBase startCenterColumn mt20 mt100`}>
      <section className={`boxSection relative bgWhite w100 mt100`}>
        <div className={`w90 absolute index1000 top-220`}>
          <DescriptionVideo isAbout />
        </div>
        <p
          className={`font20 weight600 textBlack mt320 mb0 lineH40 textJustify`}
        >
          کوبین یک پلتفرم تبلیغات دیجیتال بر پایه تبلیغات ویدیویی است که مبتنی
          بر فناوری اطلاعات روز طراحی شده و هدف آن معرفی کالا یا خدمات کسب و
          کارها به مصرف کنندگان می باشد، به نحوی که تبلیغات به شکل تیزر حدودا یک
          دقیقه ای بر اساس موقعیت بیننده و فاصله مشخص از کسب و کار نمایش داده
          شده و به ازای تماشای هر تیزر عواید نصیب ببینده خواهد شد.
        </p>
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
      <section className={`boxSection relative bgWhite w100 mb100 mt20`}>
        <div className={`betweenStart w100`}>
          <div className={`startColumn flex1 pl15`}>
            <h2 className={`textHeadingBig textBlack mNone`}>
              استفاده از کوبین چه
              <br />
              مزایایی داره ؟
            </h2>
            <p
              className={`font20 lineH40 weight400 textBlackLight textJustify mbt20`}
            >
              متخصصان و مشاوران تبلیغاتی کوبین از ابتدا تا انتهای ساخت و انتشار
              کمپین در کنار شما هستند تا شما بتوانید نتیجه مطلوبتان را کسب
              نمایید و تجربه خوبی از اجرای تبلیغات دیجیتال در کوبین داشته باشید.
            </p>
            <button className={`btn p15 radius20 textWhite mt20 bgPrimary font24`}>
              ثبت نام کسب وکار در پلتفرم
            </button>
          </div>
          <div className={`flex1`}>
            <ul className={`styleNone mNone pl15`}>
              {DATA_ABOUT_US.map((about) => (
                <Fragment key={about.id}>
                  <ListAbout {...about} />
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
