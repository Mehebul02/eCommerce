
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Main = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* TopHeader */}
      <TopHeader />
      <div>
        {/* Middle Header */}
        <MiddleHeader />
        {/* BottomHeader */}
        <BottomHeader/>
      </div>
    </header>
  );
};

export default headerIcons;
