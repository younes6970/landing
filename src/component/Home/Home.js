import Description from "./component/Description/Description";
import DescriptionNetwork from "./component/DescriptionNetwork/DescriptionNetwork";
import DescriptionKobin from "./component/DescriptionKobin/DescriptionKobin";
import DescriptionSell from "./component/DescriptionSell/DescriptionSell";
import DescriptionVideo from "./component/DescriptionVideo/DescriptionVideo";
import DescriptionMarketing from "./component/DescriptionMarketing/DescriptionMarketing";


const Home = () => {
  return (
    <div className={`wh100 startCenterColumn `}>
      <Description />
      <DescriptionNetwork />
      <DescriptionKobin />
      <DescriptionSell />
      <DescriptionVideo />
      <DescriptionMarketing />
    </div>
  );
};
export default Home;
