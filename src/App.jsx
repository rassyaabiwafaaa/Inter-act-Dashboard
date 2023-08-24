import Header from "./Component/Header";
import SideBar from "./Component/Sidebar";
import TitlePage from "./Component/TitlePage";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="bg-red-500 w-full">
        <Header />
        <div className="mt-[45px]">
          <TitlePage />
        </div>
      </div>
    </div>
  );
}

export default App;
