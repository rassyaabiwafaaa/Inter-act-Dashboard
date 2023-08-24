import { SummaryCard } from "./Component";
import Header from "./Component/Header";
import SideBar from "./Component/Sidebar";
import TitlePage from "./Component/TitlePage";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="bg-red-500 w-full">
        {/* Header */}
        <Header />
        {/* Dashboard Content */}
        <div className="mt-[45px] pl-[32px] pr-[32px]">
          {/* Title page */}
          <TitlePage />

          {/* Content */}
          <div className="w-full h-[78.6vh] mt-[32px] bg-green-700">
            {/* Summary */}
            <div className="h-[100px] bg-gray-200 flex flex-row justify-between  gap-[25px]">
              <SummaryCard />
              <SummaryCard />
              <SummaryCard />
              <SummaryCard />
              <SummaryCard />
            </div>

            {/* charts */}
            <div>
              {/* Left Content */}
              {/* Right Content */}
            </div>
          </div>

          {/* Footer */}
        </div>
      </div>
    </div>
  );
}

export default App;
