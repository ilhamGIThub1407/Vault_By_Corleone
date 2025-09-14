"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { checkUserBudgetsAction } from "@/app/actions/checkUserBudgets";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    async function check() {
      if (user) {
        const result = await checkUserBudgetsAction(
          user?.primaryEmailAddress?.emailAddress
        );
        if (result?.length === 0) {
          router.replace("/dashboard/budgets");
        }
      }
    }
    check();
  }, [user]);

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNav />
      </div>
      <div className="md:ml-64 ">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
