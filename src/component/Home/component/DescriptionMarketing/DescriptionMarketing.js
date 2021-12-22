import groupIcon from "../../../../assets/icon/group.svg";

import Image from "next/image";
import MarketingText from "../MarketingText/MarketingText";
const DescriptionMarketing = () => {
  return (
    <section
      className={`w100 hidden mt100 relative center mb100`}
      style={{ height: "900px" }}
    >
      <div className={`wTextMarketing textOne`}>
        <MarketingText
          number={"1"}
          color={`textOrange`}
          heading={"با یک نیزر تبلیغاتی حرفه ای معرفی می شود:"}
          paragraph={
            "کسب و کار شما با یک ویدیوی صوتی تصویری که حاوی تمام نقاط قوت و مزیت های رقابتی شماست نمایش داده میشه، به همین دلیل بیشترین تاثیرگذاری را روی مخاطب خواهید داشت."
          }
        />
      </div>
      <div className={`wTextMarketingCEnter textTwo`}>
        <MarketingText
          number={"2"}
          color={"textPrimary"}
          heading={"آسان و مقرون به صرفه تبلیغات می کنید"}
          paragraph={
            "با پلتفرم کوبین در تمام ساعات روز و سال بدون نگرانی از فیلترینگ تبلیغ میکنید و از طرفی زحمتهای امور تبلیغاتی از دوش شما برداشته میشه و می تونید با خیالی آسوده به کسب و کار خودتون بپردازید"
          }
          center
        />
      </div>
      <div className={`wTextMarketing textThree`}>
        <MarketingText
          number={"3"}
          color={"textGreen"}
          heading={"مخاطب شما را فراموش نمی کند"}
          paragraph={
            "کوبین به هر بیننده ای که تبلیغ شما رو تماشا میکنه جایزه میده و همین باعث میشه افراد در اون لحظه به تبلیغ شما به چشم مزاحم نگاه نکنن و در عوض با حس رضایتی که دارن تاثیر تبلیغ شما در ناخودآگاهشان دوچندان میشه و به ابن ترتیب همه بیننده ها مشتربان بالقوه شما خواهند بود."
          }
        />
      </div>
      <div className={`wTextMarketingCEnter textFour`}>
        <MarketingText
          number={"4"}
          color={"textBlack"}
          heading={"تبلیغات هوشمند و مکان محور خواهید داشت"}
          paragraph={
            "شما این امکان رو دارید تا مخاطب ها رو بر اساس سن، جنسیت و موقعیت مکانی فیلتر کنید در نتیجه با یک تبلیغات هدفمند، بهره وری تبلیغاتتان را بالا میبرید."
          }
          center
        />
      </div>
      <h2 className={`mNone font40 textBlack index1000 textCenter`}>
        دیجیتال
        <br />
        مارکتینگ
      </h2>
      <div className={`absoluteCenter w100`}>
        <Image src={groupIcon} alt={"kobin"} />
      </div>
    </section>
  );
};
export default DescriptionMarketing;
