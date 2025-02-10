import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col bg-[#0f0f0f] min-h-svh">
      <Header />
      <div className="container pt-4">
        <div className="">
          <Sidebar />
          <div className="ml-[220px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
