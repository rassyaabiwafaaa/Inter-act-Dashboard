import { SummaryCard } from "./Component";
import Header from "./Component/Header";
import SideBar from "./Component/Sidebar";
import TitlePage from "./Component/TitlePage";

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
          <div className="w-full h-full mt-[32px] bg-green-700">
            {/* Summary */}
            <div className="h-[100px] bg-gray-200 flex flex-row justify-between  gap-[25px]">
              <SummaryCard />
              <SummaryCard />
              <SummaryCard />
              <SummaryCard />
              <SummaryCard />
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
          <div className="bg-white h-[20px] mt-[36px]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
