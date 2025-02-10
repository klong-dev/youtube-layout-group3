import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col bg-[#0f0f0f] min-h-svh">
      <Header />
      <div className="container pt-4">
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
