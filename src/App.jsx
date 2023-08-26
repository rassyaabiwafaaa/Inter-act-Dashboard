import { ActivityOverview, EarningsCard, Footer, OrdersCard, ProfitCard, SummaryCard, TotalProfit } from "./Component";
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
            <div className="h-[100px] flex gap-6">
              {summaryItem.map((item, index) =>
                item.text === "Total Cost" ? <SummaryCard key={index} icons={item.icons} text={item.text} value={item.value} items={"Total Cost"} /> : <SummaryCard key={index} icons={item.icons} text={item.text} value={item.value} />
              )}
            </div>

            {/* charts */}
            <div className="mt-[25px] flex gap-6">
              {/* Left Content */}
              <div className="w-[663px] h-full ">
                {/* Top left Chart */}
                <div className="h-[220px] w-full flex justify-between">
                  <EarningsCard />
                  <OrdersCard />
                  <ProfitCard />
                </div>
                {/* Bottom Right Chart */}
                <div className="h-[362px] w-full mt-[18px]">
                  <TotalProfit />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-[436px] h-[602]">
                <ActivityOverview />
              </div>
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
