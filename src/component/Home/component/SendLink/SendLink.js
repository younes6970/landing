const SendLink = () => {
  return (
    <div className={`h63 radius20 hidden index1000`}>
      <input
        className={`h100 inputNumber prl20`}
        type={"text"}
        placeholder={"شماره موبایل"}
      />
      <button className={`btn h100 prl20 shadowBtn`}>ارسال لینک دانلود</button>
    </div>
  );
};
export default SendLink;
