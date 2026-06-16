"use client";
import Blog from "@/components/shadcn-studio/blocks/blog-component-15/blog-component-15";
import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";

const Events = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/v1/report/sixMostRecentReports",
        );

        setReports(response.data.data);
      } catch (error: any) {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";

        toast.error(message);
      }
    };

    fetchReports();
  }, []);

  return (
    <section id="events" className="scroll-mt-16">
      <Blog report={reports} />
    </section>
  );
};

export default Events;
