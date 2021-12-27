import kobin3dIcon from "../../../../assets/icon/kobin3d.svg";
const DescriptionNetwork = () => {
  return (
    <section className={`boxSection bgWhite relative mt100`}>
      <div className={`networkIcon`}>
        <img src={kobin3dIcon} alt={"kobin"} />
      </div>
      <div className={`w100 startCenterColumn mt100`}>
        <h2 className={`textHeadingBig textPrimary mNone`}>
          شبکه بازاریابی دیجیتال کوبین
        </h2>
        <p className={`textParagraphHome textCenter mt20 mb0 w100 weight600`}>
          کوبین یک پلتفرم تبلیغات دیجیتال بر پایه تبلیغات ویدیویی است که مبتنی
          بر فناوری اطلاعات روز طراحی شده و هدف آن معرفی کالا یا خدمات کسب و
          کارها به مصرف کنندگان می باشد، به نحوی که تبلیغات به شکل تیزر حدودا یک
          دقیقه ای بر اساس موقعیت ببینده و فاصله مشخص از کسب و کار نمایش داده
          شده و به ازای تماشای هر تیزر عواید نصیب ببینده خواهد شد.
        </p>
      </div>
    </section>
  );
};
export default DescriptionNetwork;
