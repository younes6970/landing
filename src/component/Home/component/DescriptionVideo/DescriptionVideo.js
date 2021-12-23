import playIcon from "../../../../assets/icon/play.png";
import Image from "next/image";
import PropTypes from "prop-types";
const DescriptionVideo = (props) => {
    const {isAbout} = props
    return (
        <section className={`w100 radius42 p45 hidden relative ${isAbout ? "mt0" : "mt100"}`}>
            <video className={`wh100 radius42`} controls>
                {/*<source src={"../../../../../public/video/androidTV.mp4"} type="video/mp4" />*/}
            </video>
            <div className={`centerColumn backgroundVideo bgBlack m45 radius42`}>
                <Image src={playIcon} alt={"kobin"}/>
                <h3 className={`font64 textWhite mNone`}>داستان کوبین چیه؟</h3>
            </div>
        </section>
    );
}
export default DescriptionVideo
DescriptionVideo.propTypes = {
    isAbout : PropTypes.bool
}
