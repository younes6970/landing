import website from "../../../../assets/icon/Website.svg";
const Support = () => {
  return (
    <section className={`boxSection w100 bgWhite mt20 mb20 relative`}>
      <div className={`betweenStart w100`}>
        <div className={`flex2 startColumn`}>
          <h2 className={`textHeadingBig textBlack mt0 mb0`}>
            کارشناسان کوبین همواره در تمام
            <br />
            مراحل همراه شما هستند
          </h2>
          <p className={`textParagraphHome weight400 textBlackDark mt10 mb20`}>
            متخصصان و مشاوران تبلیغاتی کوبین از ابتدا تا انتهای ساخت و انتشار
            کمپین در کنار شما هستند تا شما بتوانید نتیجه مطلوبتان را کسب نمایید
            و تجربه خوبی از اجرای تبلیغات دیجیتال در کوبین داشته باشید.
          </p>
          <div className={`w100 startColumn mt10`}>
            <p className={`textBlack font20 mt0 mb5 textJustify`}>
              برای کسب اطلاعات بیشتر به پنل کوبین وارد شوید یا با شماره زیر تماس
              بگیرید!
            </p>
            <span className={`weight700 font40 textPrimary`}>۰۲۱-۸۸۷۴۲۹۲۲</span>
          </div>
        </div>
        <div className={`flex1`}>
          <div className={`website`}>
            <img src={website} alt={"kobin"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
