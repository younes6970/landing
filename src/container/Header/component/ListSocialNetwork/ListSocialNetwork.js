import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
const ListSocialNetwork = (props) => {
  const { icon, id, link } = props;
  return (
    <li key={id} className={`ml20`}>
        <a href={link} target={"_blank"}>
          <Image src={icon} alt={"kobin"} />
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
