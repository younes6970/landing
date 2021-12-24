import Campaign from "./component/Campaign/Campaign";
import ContentProduction from "./component/ContentProduction/ContentProduction";

const ServiceTariff = () => {
  return (
    <div className={`w100 startCenterColumn`}>
      <h2 className={`textWhite font64 w100 textCenter mt20 mb20`}>
        تعرفه خدمات
      </h2>
        <Campaign />
        <ContentProduction />
    </div>
  );
};
export default ServiceTariff;
