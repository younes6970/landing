import Register from "./component/Register/Register";
import SendCode from "./component/SendCode/SendCode";
import FormRegister from "./component/FormRegister/FormRegister";

const RegisterBusiness = () => {
  return (
    <div className={`wBase startCenter`}>
      <div className={`w100 startCenterColumn mt10`}>
        <h2 className={`textHeadingSmall textWhite mt5 mb15`}>
          ثبت نام صاحب کسب و کار
        </h2>
        <Register />
        {/*<SendCode className={`coinIcon`} />*/}
        {/*<FormRegister />*/}
      </div>
    </div>
  );
};
export default RegisterBusiness;
