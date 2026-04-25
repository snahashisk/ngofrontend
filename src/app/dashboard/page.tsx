"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DataTableWithColumnFilterDemo from "@/components/shadcn-studio/data-table/data-table-04";
import { useState, useEffect } from "react";
import axios from "axios";

import data from "./data.json";

export default function Page() {
  //fetch all reports
  const [reports, setReports] = useState([]);
  const [pendingReports, setPendingReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get("http://localhost:8000/api/v1/report/reports", {
        withCredentials: true,
      });
      setReports(response.data.data);
      const pendingReports = response.data.data.filter((report: any) => report.isVerified === false);
      setPendingReports(pendingReports);
    };
    fetchReports();
  }, []);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div className="px-4 lg:px-6">
                <DataTableWithColumnFilterDemo data={pendingReports} status="pending" />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
