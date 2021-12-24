import PriceList from "../PriceList/PriceList";
import tesir from "../../../../assets/icon/tiser.svg";
import tesirTwo from "../../../../assets/icon/tiserTwo.svg";
import tesirThree from "../../../../assets/icon/tiserThree.svg";
const listOne = [
  "تدوین ویدیو تا ۶۰ ثانیه",
  "صداگذاری(موسیقی)",
  "زیرنویس تبلیغاتی",
];
const listTwo = [
  "ساخت موشن گرافی با کیفیت عالی تا ۶۰ ثانیه",
  "نریشین و صداگذاری گوینده",
  "صداگذاری(موسیقی)",
  "لوگو موشن",
];
const listThree = [
  "ساخت موشن گرافی با کیفیت عالی تا ۶۰ ثانیه",
  "تصویربرداری با دوربین4k",
  "نریشن و صداگذاری گوینده",
  "صداگذاری(موسیقی)",
  "لوگو موشن",
];
const Price = () => {
  return (
    <div className={`w100 betweenStart mt20 mb20`}>
      <PriceList
        icon={tesir}
        title={"تیزر تبلیغاتی"}
        titleDown={"اقتصادی"}
        oldPrice={"1,000,000"}
        newPrice={"790,000 تومان"}
        lists={listOne}
        backGround={`bgPrimary`}
      />
      <PriceList
        icon={tesirTwo}
        title={"تیزر تبلیغاتی"}
        oldPrice={"1,500,000"}
        newPrice={"790,000 تومان"}
        titleDown={"موشن گرافی"}
        lists={listTwo}
        backGround={"bgBlackDark"}
      />
      <PriceList
        icon={tesirThree}
        title={"تیزر تبلیغاتی"}
        oldPrice={"3,000,000"}
        newPrice={"1,490,000"}
        titleDown={"حرفه ای"}
        lists={listThree}
        backGround={"bgOrange"}
      />
    </div>
  );
};
export default Price;
