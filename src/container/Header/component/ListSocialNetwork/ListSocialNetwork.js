
import PropTypes from "prop-types";
const ListSocialNetwork = (props) => {
  const { icon, id, link } = props;
  return (
    <li key={id} className={`ml20`}>
        <a href={link} target={"_blank"}>
          <img src={icon} alt={"kobin"} />
        </a>
    </li>
  );
};
export default ListSocialNetwork;

ListSocialNetwork.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
