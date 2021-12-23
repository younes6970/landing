import DescriptionVideo from "../Home/component/DescriptionVideo/DescriptionVideo";

const AboutUs = () =>{
    return(
        <div className={`wBase startCenterColumn mt20`}>
            <section className={`boxSection relative bgWhite w100`}>
                <div className={`w90 absolute index1000 top-220`}>
                    <DescriptionVideo isAbout />
                </div>
            </section>
        </div>
    )
}
export default AboutUs