import Input from "../../../../container/Input/Input";
import { useState } from "react";
import TermsAndConditions from "../../../TermsAndConditions/TermsAndConditions";

const FormRegister = () => {
  const [state, setState] = useState({
    name: "",
    family: "",
    code: "",
    date: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleChange = (e, type) => {
    const {
      target: { value },
    } = e;
    setState((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };
  return (
    <div
      className={`bgWhite wBase mr100 ml100 p45 radius42 shadow mt20 startColumn`}
    >
      <div className={`w100 startCenter`}>
        <div className={`flex1`}>
          <Input
            label={"نام"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "name")}
            value={state.name}
            name={"name"}
            type={"text"}
          />
        </div>
        <div className={`flex1 mrl5`}>
          <Input
            label={"نام خانوادگی"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "family")}
            value={state.family}
            name={"family"}
            type={"text"}
          />
        </div>
        <div className={`flex1`}>
          <Input
            label={"نام"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "code")}
            value={state.code}
            name={"code"}
            type={"tel"}
          />
        </div>
      </div>
      <div className={`w100 startCenter`}>
        <div className={`flex1`}>
          <Input
            label={"تاریخ"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "date")}
            value={state.date}
            name={"date"}
            type={"text"}
          />
        </div>
        <div className={`flex1 mrl5`}>
          <Input
            label={"پست الکترونیک"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "email")}
            value={state.email}
            name={"email"}
            type={"text"}
          />
        </div>
        <div className={`flex1`}>
          <Input
            label={"شماره موبایل"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "phone")}
            value={state.phone}
            name={"phone"}
            type={"tel"}
          />
        </div>
      </div>
      <div className={`w100 startCenter`}>
        <div className={`flex1 ml5`}>
          <Input
            label={"رمز عبور"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "password")}
            value={state.password}
            name={"password"}
            type={"password"}
          />
        </div>
        <div className={`flex1 mr5`}>
          <Input
            label={"تکرار رمز عبور"}
            placeholder={" "}
            onChange={(e) => handleChange(e, "repeatPassword")}
            value={state.repeatPassword}
            name={"repeatPassword"}
            type={"password"}
          />
        </div>
      </div>
      <div className={`w100 startCenter mt20`}>
        <div className={`w100 start`}>
          <input type={"checkbox"} />
          <div className={`start mr5`}>
            <button
              className={`btn textPrimary bgNone font16 pNone`}
              onClick={handleModal}
            >
              قوانین و مقررات
            </button>
            <span className={`textBlackDark font16`}>
              کوبین را تایید میکنم.
            </span>
          </div>
        </div>
        <button
          className={`btn bgPrimary shadowBtn font20 textWhite radius20 wTextMarketing pbt20`}
        >
          ثبت نام
        </button>
      </div>
      <TermsAndConditions onClose={handleModal} isOpen={isOpen} />
    </div>
  );
};
export default FormRegister;
