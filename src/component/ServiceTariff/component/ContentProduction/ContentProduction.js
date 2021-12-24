import lightIcon from "../../../../assets/icon/light.svg";
import Image from "next/image";
const ContentProduction = () => {
  return (
    <section className={`boxSection w100 bgWhite mt20 relative`}>
      <div className={`center w100`}>
        <div className={`flex1 wh100`}>
          <div className={`lightRight`}>
            <Image src={lightIcon} alt={"kobin"} />
          </div>
        </div>
        <div className={`flex2 centerColumn`}>
          <h2 className={`textPrimary font40 mb0 weight700 mt100`}>
            تولید محتوا
          </h2>
          <p className={`textBlack font24 mt20 weight400 textJustify mb0`}>
            تیم مارکتینگ کوبین کسب و کار شما رو آنالیز میکنه و یک سناریوی
            تبلیغاتی با توجه به مزیت های رقابتی شما تهیه میشه و در ادامه تیم
            تولید محتوای کوبین تیزر تبلیغاتی شما رو میسازه و از اونجاییکه کسب و
            کار شما با یک ویدیوی تبلیغاتی اثر گذار نمایش داده میشه، میتونه تاثیر
            بسزای روی ذهن مخاطب داشته باشه تا در زمان نیاز شما رو انتخاب کنن...
          </p>
        </div>
        <div className={`flex1`}>
          <div className={`lightLeft`}>
            <Image src={lightIcon} alt={"kobin"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContentProduction;
