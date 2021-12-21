import Description from "./component/Description/Description";
import DescriptionNetwork from "./component/DescriptionNetwork/DescriptionNetwork";
import DescriptionKobin from "./component/DescriptionKobin/DescriptionKobin";

const Home = () => {
  return (
    <div className={`wh100 startCenterColumn `}>
      <Description />
      <DescriptionNetwork />
        <DescriptionKobin />
    </div>
  );
};
export default Home;
