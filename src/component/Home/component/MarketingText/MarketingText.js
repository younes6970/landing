import PropTypes from "prop-types";
const MarketingText = (props) => {
  const { number, color, heading, paragraph, center } = props;
  return (
    <div className={`${center ? "centerColumn" : "startColumn"} w100`}>
      <span className={`font64 ${color}`}>{number}.</span>
      <h5 className={`font24 weight800 mbt10 textBlack`}>{heading}</h5>
      <p className={`font16 weight400 mNone textBlackLight`}>{paragraph}</p>
    </div>
  );
};
export default MarketingText;
MarketingText.propTypes = {
  number: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  center: PropTypes.bool,
};
