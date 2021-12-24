import Campaign from "./component/Campaign/Campaign";
import ContentProduction from "./component/ContentProduction/ContentProduction";
import Price from "./component/Price/Price";
import Support from "./component/Support/Support";
import Possibility from "./component/Possibility/Possibility";

const ServiceTariff = () => {
  return (
    <div className={`w100 startCenterColumn`}>
      <h2 className={`textWhite font64 w100 textCenter mt20 mb20`}>
        تعرفه خدمات
      </h2>
      <Campaign />
      <ContentProduction />
      <Price />
      <Support />
      <Possibility />
    </div>
  );
};
export default ServiceTariff;
