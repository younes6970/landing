import PropTypes from "prop-types";
import Link from "next/link";
const ListMenu = (props) => {
  const { title, id, link } = props;
  return (
    <li key={id} className={`mr25`}>
      <Link href={link}>
        <a className={`textWhite font20 weight400`}>{title}</a>
      </Link>
    </li>
  );
};
export default ListMenu;
ListMenu.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
