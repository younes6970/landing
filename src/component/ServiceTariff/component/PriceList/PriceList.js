
import PropTypes from "prop-types";
const PriceList = (props) => {
  const { icon, title, oldPrice, newPrice, titleDown, lists, backGround } =
    props;
  return (
    <div className={`startColumn radius42 bgWhite hidden wPrice shadow`}>
      <div className={`startColumn ${backGround} p20 w100`}>
        <img src={icon} alt={"kobin"} />
        <h3 className={`weight600 font40 textWhite mt5 mb0`}>{title}</h3>
        <h3 className={`weight600 font40 textWhite mt0 mb0`}>{titleDown}</h3>
      </div>
      <div className={`startColumn p20`}>
        <ul className={`styleNone mNone pNone`}>
          {lists.map((list, index) => (
            <li key={index} className={`mb15`}>
              <div>
                <span className={`circle`} />
                <span className={`weight400 font24 textBlackDark mr10 `}>
                  {list}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className={`startColumn mt15`}>
          <span className={`textBlack font20 textBlack`}>هزینه ساخت تیزر:</span>
          <div className={`startCenter`}>
            <span className={`oldPrice`}>{oldPrice}</span>
            <span className={`mr10 textPrimary font30 weight700`}>
              {newPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceList;
PriceList.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  titleDown: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  backGround: PropTypes.string.isRequired,
};
