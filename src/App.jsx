import { Footer, SummaryCard } from "./Component";
import Header from "./Component/Header";
import SideBar from "./Component/Sidebar";
import TitlePage from "./Component/TitlePage";
import { summaryItem } from "./const";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="bg-26 w-full ml-[250px]">
        {/* Header */}
        <Header />
        {/* Dashboard Content */}
        <div className="mt-[45px]  pl-[32px] pr-[32px] pb-3">
          {/* Title page */}
          <TitlePage />

          {/* Content */}
          <div className="w-full h-full mt-[32px]">
            {/* Summary */}
            <div className="h-[100px] flex flex-row justify-between  gap-[25px]">
              {summaryItem.map((item) => (
                <SummaryCard icons={item.icons} text={item.text} value={item.value} />
              ))}
            </div>

            {/* charts */}
            <div className="mt-[25px] flex justify-between">
              {/* Left Content */}
              <div className="w-[663px] h-full bg-gray-600">
                {/* Top left Chart */}
                <div className="h-[324px] w-full bg-orange-300">top left chart</div>
                {/* Bottom Right Chart */}
                <div className="h-[362px] w-full bg-orange-400 mt-[18px]">bottom left chart</div>
              </div>

              {/* Right Content */}
              <div className="w-[436px] h-[602] bg-gray-600"></div>
            </div>
          </div>

          {/* Footer */}
          <div className="h-[20px] mt-[36px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
