import ReactModal from "react-modal";
import PropTypes from "prop-types";
import closeIcon from "../../assets/icon/close.svg";
import Image from "next/image";
import { DATA_TERMS } from "../../container/Footer/data";
const TermsAndConditions = (props) => {
  const { isOpen, onClose } = props;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`ModalTerms wBase`}
      overlayClassName="OverlayTerms"
    >
      <div className={`w100 betweenCenter mb30`}>
        <h2 className={`weight700 textPrimary font30 mt0 mb0`}>
          قوانین و مقررات
        </h2>
        <button className={`btn bgNone`} onClick={onClose}>
          <Image src={closeIcon} alt={"kobin"} />
        </button>
      </div>
      <div className={`w100 startColumn scrollY`}>
        {DATA_TERMS.map((terms, index) => (
          <p key={index} className={`weight400 font16 mb5 mt0 textStart`}>
            {terms}
          </p>
        ))}
      </div>
    </ReactModal>
  );
};
export default TermsAndConditions;
TermsAndConditions.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
