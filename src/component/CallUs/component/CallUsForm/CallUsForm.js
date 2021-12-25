import { Formik, Form } from "formik";
import Input from "../../../../container/Input/Input";
import TextAera from "../../../../container/TextArea/TextAera";
const CallUsForm = () => {
  return (
    <Formik
      initialValues={{ name: "", subject: "", text: "" }}
      onSubmit={(values) => {
        console.log();
      }}
    >
      {(formik) => {
        const { values, setValues } = formik;
        const handleChange = (e, type) => {
          const {
            target: { value },
          } = e;
          setValues((prevState) => ({
            ...prevState,
            [type]: value,
          }));
        };
        return (
          <Form className={`wh100 startColumn`}>
            <Input
              label={"نام"}
              placeholder={" "}
              onChange={(e) => handleChange(e, "name")}
              value={values.name}
              name={"name"}
              type={"text"}
            />
            <Input
              label={"موضوع پیام"}
              placeholder={" "}
              onChange={(e) => handleChange(e, "subject")}
              value={values.subject}
              name={"subject"}
              type={"text"}
            />
            <TextAera
              label={"متن پیام"}
              placeholder={" "}
              onChange={(e) => handleChange(e, "text")}
              value={values.text}
              name={"text"}
            />
            <button
              type={"submit"}
              className={`wh100 font20 weight400 lineNone mt5  pb15 pt15 radius20 bgPrimary textWhite center`}
            >
              ارسال پیام
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default CallUsForm;
