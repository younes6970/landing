import sellIcon from "../../../../assets/icon/sell.svg";
import Link from "next/link";
const DescriptionSell = () => {
  return (
    <section className={`boxSection bgPrimary relative mt100`}>
      <div className={`w100 betweenCenter`}>
        <div className={`flex2 startColumn`}>
          <h2 className={`textHeadingBig textWhite mNone`}>
            با کوبین هوشمند تبلیغ کن،
            <br />
            بیشتر بفروش!
          </h2>
          <p className={`textParagraphHome textWhite textRight m0 weight400`}>
            در کمتر از ۱۰دقیقه ثبت نام کنید و
            <br />
            باقی ماجرا رو به تیم کوبین بسپارید...
          </p>
          <Link href={"/business/register"}>
            <a className={`btn bgWhite textPrimary radius20 p15 mt10`}>
              ثبت نام کسب و کار
            </a>
          </Link>
        </div>
        <div className={`flex1`}>
          <div className={`sellIcon`}>
            <img src={sellIcon} alt={"kobin"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DescriptionSell;
