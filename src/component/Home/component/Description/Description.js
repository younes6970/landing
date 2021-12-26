import Image from "next/image";
import underLine from "../../../../assets/icon/underLine.svg";
import underLineTwo from "../../../../assets/icon/underLineTwo.svg";
import vectorVideoIcon from "../../../../assets/icon/VectorVideo.svg";
import videoIcon from "../../../../assets/icon/VideoUploadCuate.svg";
import vectorSoundIcon from "../../../../assets/icon/VectorSound.svg";
import marketingIcon from "../../../../assets/icon/MobileMarketingRafiki.svg";
import SendLink from "../SendLink/SendLink";
import Link from "next/link";
const Description = () => {
  return (
    <section className={`boxSection bgWhite relative mb100`}>
      <div className={`w100 betweenCenter`}>
        <div className={`flex2 startColumn`}>
          <h2 className={`textHeadingBig textOrange mNone`}>
            ویدیو ببین،{" "}
            <span className={`textHeadingBig relative`}>
              <div className={`underLine`}>
                <Image src={underLine} alt={"kobin"} />
              </div>
              جایزه
            </span>{" "}
            بگیر
          </h2>
          <p className={`textParagraphHome textBlackDark textJustify mbt20 w90`}>
            اپلیکیشن کوبین رو از لینک زیر دانلود کنید و یدیوهای تبلیغاتی
            اطرافتون رو تماشا کنید، کوبین به ازای هر ویدیویی که می بینید به شما
            سکه میده و با سکه هاتون از بانک جوایز کویین رایگان خرید کنید!
          </p>
          <SendLink />
        </div>
        <div className={`flex1`}>
          <div className={`vectorVideoIcon`}>
            <Image src={vectorVideoIcon} alt={"kobin"} />
          </div>
          <div className={`videoIcon`}>
            <Image src={videoIcon} alt={"kobin"} />
          </div>
        </div>
      </div>
      <div className={`w100 betweenCenter mt100`}>
        <div className={`flex1`}>
          <div className={`vectorSound`}>
            <Image src={vectorSoundIcon} alt={"kobin"} />
          </div>
          <div className={`marketingIcon`}>
            <Image src={marketingIcon} alt={"kobin"} />
          </div>
        </div>
        <div className={`flex2 startColumn mr50`}>
          <h2 className={`textHeadingBig mNone w100 textRight`}>
            با کوبین هوشمند تبلیغ
            <br />
            کن،{" "}
            <span className={`textHeadingBig relative`}>
              بیشتر بفروش...
              <div className={`underLine`}>
                <Image src={underLineTwo} alt={"kobin"} />
              </div>
            </span>
          </h2>
          <p className={`textParagraphHome textBlackDark textJustify mbt20 w90`}>
            اگر صاحب کسب و کاری هستید، تبلیغات خود را به کوبین بسپارید تا با
            استفاده از بروزترین روش ها و به شکل هوشمند تبلیغات شما را به کاربران
            نمایش دهیم.
          </p>
          <Link href={"/business/register"}>
          <a className={`btn textWhite index1000 bgPrimary shadowBtn radius20 p15`}>
            ثبت نام کسب و کار در پلترم
          </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Description;
