import PropTypes from "prop-types";
import Link from "next/link";
const ListMenu = (props) => {
  const { title, id, link, footer, onOpen, isModal } = props;
  return (
    <li key={id} className={`mr25 ${footer && "mb20"}`}>
      {isModal ? (
        <button
          className={`btn textWhite weight400 bgNone ${footer ? "font24" : "font20"}`}
          onClick={onOpen}
        >
          {title}
        </button>
      ) : (
        <Link href={link}>
          <a className={`textWhite weight400 ${footer ? "font24" : "font20"}`}>
            {title}
          </a>
        </Link>
      )}
    </li>
  );
};
export default ListMenu;
ListMenu.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  footer: PropTypes.bool,
};
