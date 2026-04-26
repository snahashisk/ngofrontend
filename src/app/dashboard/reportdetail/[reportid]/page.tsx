"use client";
import { CalendarX2Icon, TriangleAlertIcon, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";

import ProductInsightsCard from "@/components/shadcn-studio/blocks/widget-product-insights";
import SalesMetricsCard from "@/components/shadcn-studio/blocks/chart-sales-metrics";
import StatisticsCard from "@/components/shadcn-studio/blocks/statistics-card-01";
import TotalEarningCard from "@/components/shadcn-studio/blocks/widget-total-earning";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset } from "@/components/ui/sidebar";
import { useState, useEffect, use } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user";
import Dialog13 from "@/components/shadcn-studio/dialog/dialog-13";

// Statistics card data
const StatisticsCardData = [
  {
    icon: <TruckIcon className="size-4" />,
    value: "42",
    title: "Shipped Orders",
    changePercentage: "+18.2%",
  },
  {
    icon: <TriangleAlertIcon className="size-4" />,
    value: "8",
    title: "Damaged Returns",
    changePercentage: "-8.7%",
  },
  {
    icon: <CalendarX2Icon className="size-4" />,
    value: "27",
    title: "Missed Delivery Slots",
    changePercentage: "+4.3%",
  },
];

// Earning data for Total Earning card
const earningData = [
  {
    img: "https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/zipcar.png",
    platform: "Zipcar",
    technologies: "Vuejs & HTML",
    earnings: "-$23,569.26",
    progressPercentage: 75,
  },
  {
    img: "https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/bitbank.png",
    platform: "Bitbank",
    technologies: "Figma & React",
    earnings: "-$12,650.31",
    progressPercentage: 25,
  },
];

const DashboardShell = () => {
  return (
    <div className="flex min-h-dvh w-full">
      <div className="flex flex-1 flex-col">
        <main className="mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Featured</Badge>
              </CardAction>
              <CardTitle>Design systems meetup</CardTitle>
              <CardDescription>A practical talk on component APIs, accessibility, and shipping faster.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">View Event</Button>
            </CardFooter>
          </Card>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            <div className="col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1">
              {StatisticsCardData.map((card, index) => (
                <StatisticsCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  value={card.value}
                  changePercentage={card.changePercentage}
                />
              ))}
            </div>

            <div className="grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2">
              <ProductInsightsCard className="justify-between gap-3 [&>[data-slot=card-content]]:space-y-5" />
              <TotalEarningCard
                title="Total Earning"
                earning={24650}
                trend="up"
                percentage={10}
                comparisonText="Compare to last year ($84,325)"
                earningData={earningData}
                className="justify-between gap-5 sm:min-w-0 [&>[data-slot=card-content]]:space-y-7"
              />
            </div>
            <SalesMetricsCard className="col-span-full xl:col-span-2 [&>[data-slot=card-content]]:space-y-6" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default function Page({ params }: { params: Promise<{ reportid: string }> }) {
  const userId = useUserStore((state) => state.user?._id);
  const resolvedParams = use(params);
  const { reportid } = resolvedParams;
  const router = useRouter();

  const [data, setData] = useState<any>(null);
  const [steps, setSteps] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/report/reports/${reportid}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
        setSteps(res.data.data.stepsToResolve.split(/\d+\.\s/).filter(Boolean));
      })
      .catch((err) => console.error(err));
  }, [reportid]);

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
              <div className="py-8 sm:py-16 lg:py-2">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <div className="mb-8 space-y-2">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      {data?.title}
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-4">{data?.description}</p>
                    <img src={data?.imageOfReport} alt="" className="my-6 rounded-lg " />
                    <Separator />
                    <div className="space-y-2 my-4">
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Steps to Resolve</h4>
                      <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                        {steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
                      <div className="flex flex-col gap-1">
                        <strong>Address</strong>
                        <p>{data?.address}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Landmark</strong>
                        <p>{data?.landmark}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Locality</strong>
                        <p>{data?.locality}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>City</strong>
                        <p>{data?.city}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
                      <div className="flex flex-col gap-1">
                        <strong>State</strong>
                        <p>{data?.state}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Pincode</strong>
                        <p>{data?.pinCode}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Country</strong>
                        <p>{data?.country}</p>
                      </div>
                    </div>

                    <Separator />
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
                      <div className="flex flex-col gap-1">
                        <strong>Category</strong>
                        <p>{data?.category}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>People Affected</strong>
                        <p>{data?.affectedPeople}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Urgency Level</strong>
                        <p>{data?.urgencyLevel}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Status</strong>
                        <p>{data?.status}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 my-6">
                      <div className="flex flex-col gap-1">
                        <strong>Reporter Name</strong>
                        <p>{data?.reporterName}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Reporter Email</strong>
                        <p>{data?.reporterEmail}</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col items-start gap-2">
                      <Label htmlFor="multi-step-personal-info-first-name">First Name</Label>
                      <Input id="multi-step-personal-info-first-name" placeholder="John" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <Label htmlFor="multi-step-personal-info-last-name">Last Name</Label>
                      <Input id="multi-step-personal-info-last-name" placeholder="Doe" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <Label htmlFor="multi-step-personal-info-mobile">Mobile</Label>
                      <Input id="multi-step-personal-info-mobile" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <Label htmlFor="multi-step-personal-info-pincode">Pincode</Label>
                      <Input id="multi-step-personal-info-pincode" placeholder="Postal Code" />
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:col-span-2">
                      <Label htmlFor="multi-step-personal-info-address">Address</Label>
                      <Input id="multi-step-personal-info-address" placeholder="123 Main St" />
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:col-span-2">
                      <Label htmlFor="multi-step-personal-info-landmark">Landmark</Label>
                      <Input id="multi-step-personal-info-landmark" placeholder="Near Central Park, New York" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <Label htmlFor="multi-step-personal-info-city">City</Label>
                      <Input id="multi-step-personal-info-city" placeholder="New York" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <Label htmlFor="multi-step-personal-info-state">State</Label>
                      <Input id="multi-step-personal-info-state" placeholder="NY" />
                    </div>
                  </div> */}
                  {/* Dialog 13 */}

                  <Separator />
                  <div className="mt-8 flex justify-end gap-3 ">
                    {data?.status === "InProgress" && data?.assignedMembers?.includes(userId) && (
                      <>
                        <Dialog13 data={data} />
                        <Button variant="secondary" className=" cursor-pointer">
                          Open Team Chat
                        </Button>
                      </>
                    )}
                    {data?.status === "InProgress" && data?.assignedMembers?.includes(userId) === false && (
                      <>
                        <Button variant="secondary" className=" cursor-pointer">
                          Join as Volunteer
                        </Button>
                      </>
                    )}
                    {data?.status === "Verified" && (
                      <>
                        <Button variant="default" className="cursor-pointer">
                          Join as Captain
                        </Button>
                        <Button variant="secondary" className=" cursor-pointer">
                          Join as Volunteer
                        </Button>
                      </>
                    )}
                    {data?.isVerified === false && (
                      <>
                        <Button variant="default" className="w-24 cursor-pointer">
                          Approve
                        </Button>
                        <Button variant="destructive" className="w-24 cursor-pointer">
                          Reject
                        </Button>
                      </>
                    )}

                    <Button variant="outline" className="w-20 cursor-pointer" onClick={() => router.back()}>
                      Go Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
