import Description from "./component/Description/Description";
import DescriptionNetwork from "./component/DescriptionNetwork/DescriptionNetwork";
import DescriptionKobin from "./component/DescriptionKobin/DescriptionKobin";
import DescriptionSell from "./component/DescriptionSell/DescriptionSell";
import DescriptionVideo from "./component/DescriptionVideo/DescriptionVideo";

const Home = () => {
  return (
    <div className={`wh100 startCenterColumn `}>
      <Description />
      <DescriptionNetwork />
      <DescriptionKobin />
      <DescriptionSell />
      <DescriptionVideo />
    </div>
  );
};
export default Home;
