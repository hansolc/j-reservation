import AdminSideBar from "@/components/admin/SideBar";
import React from "react";

const AdminBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="flex flex-1">
        <AdminSideBar />
        <section className="flex-1 p-5 max-w-[1280px] ">{children}</section>
      </div>
    </div>
  );
};

export default AdminBoardLayout;
