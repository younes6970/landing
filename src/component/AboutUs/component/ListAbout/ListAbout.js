
import PropTypes from "prop-types";

const ListAbout = (props) => {
  const { text, icon, id } = props;
  return (
    <li key={id} className={`startCenter mt20`}>
      <img src={icon} alt={"kobin"} />
      <p className={`font20 textBlackDark mr10 mb0 mt0`}>{text}</p>
    </li>
  );
};
export default ListAbout
ListAbout.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.number,
};
