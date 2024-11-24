import Banner from "../Banner/Banner";
import ShowCategorySection from "../ShowCategorySection/ShowCategorySection";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[#9538E2]">
        <Banner></Banner>
      </div>
      <div className="mt-80">
        <ShowCategorySection></ShowCategorySection>
      </div>
    </div>
  );
};

export default HomePage;
