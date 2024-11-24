import AllData from "../AllData/AllData";
import AllDataShowNav from "../AllDataShowNav/AllDataShowNav";

const ShowCategorySection = () => {
  return (
    <div className="text-center pt-20">
      <h2 className="font-bold text-4xl pb-16">Explore Cutting-Edge Gadgets</h2>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <AllDataShowNav></AllDataShowNav>
        </div>
        <div className="col-span-3">
            <AllData></AllData>
        </div>
      </div>
    </div>
  );
};

export default ShowCategorySection;
