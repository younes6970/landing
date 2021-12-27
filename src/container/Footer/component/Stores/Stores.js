
import PropTypes from "prop-types";
const Stores = (props) => {
  const { link, id, icon } = props;
  return (
    <a href={link} target={"_blank"} key={id} className={`mr10`}>
      <img src={icon} alt={"kobin"} />
    </a>
  );
};
export default Stores;
Stores.propTypes = {
  link: PropTypes.string,
  id: PropTypes.number,
  icon: PropTypes.string,
};
