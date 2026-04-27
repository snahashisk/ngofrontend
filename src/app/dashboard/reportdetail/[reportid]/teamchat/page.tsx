"use client";
import { useUserStore } from "@/store/user";
import { use } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import DashboardFooter from "@/components/ui/dashboardFooter";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { IoIosSend } from "react-icons/io";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page({ params }: { params: Promise<{ reportid: string }> }) {
  const resolvedParams = use(params);
  const { reportid } = resolvedParams;
  const userId = useUserStore((state) => state.user?._id);
  const fullName = useUserStore((state) => state.user?.fullName);
  const userEmail = useUserStore((state) => state.user?.email);
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
        <div className="flex flex-1 flex-col min-h-0">
          <div className="@container/main flex flex-1 flex-col gap-2 min-h-0">
            <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6 min-h-0">
              <div className="flex flex-1 flex-col py-8 sm:py-16 lg:py-2 min-h-0">
                <div className="flex flex-1 flex-col w-full mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 min-h-0">
                  <Card className="flex flex-col w-full flex-1 min-h-0 overflow-hidden">
                    <CardHeader>
                      <CardTitle>Team Chat</CardTitle>
                      <CardDescription>Chat with your team members</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto">
                      <div className="flex gap-2 flex-col">
                        {" "}
                        {[1, 2].map((_, i) => {
                          const isMe = i % 2 === 0; // demo (replace with real condition)

                          return (
                            <div key={i} className={`flex gap-2 items-end ${isMe ? "justify-end" : "justify-start"}`}>
                              {/* Avatar (only left for received, right for sent optional) */}
                              {!isMe && (
                                <Avatar>
                                  <AvatarFallback>
                                    {fullName
                                      ? fullName.split(" ")[0].charAt(0).toUpperCase() +
                                        (fullName.split(" ")[1]?.charAt(0).toUpperCase() || "")
                                      : ""}
                                  </AvatarFallback>
                                </Avatar>
                              )}

                              {/* Message Bubble */}
                              <div
                                className={`p-3 rounded-lg max-w-2xl ${
                                  isMe ? "bg-primary text-white rounded-br-none" : "bg-muted rounded-bl-none"
                                }`}
                              >
                                <p className="font-semibold text-sm mb-1">{isMe ? "You" : fullName}</p>
                                <p>
                                  Your Email is : {userEmail}
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Ducimus accusantium sit fugiat in corporis ex modi natus
                                  error ullam nulla.
                                </p>
                              </div>

                              {/* Avatar on right for sent (optional) */}
                              {isMe && (
                                <Avatar>
                                  <AvatarFallback>
                                    {fullName
                                      ? fullName.split(" ")[0].charAt(0).toUpperCase() +
                                        (fullName.split(" ")[1]?.charAt(0).toUpperCase() || "")
                                      : ""}
                                  </AvatarFallback>
                                </Avatar>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Field orientation="horizontal">
                        <Input type="search" placeholder="Type your message..." className="bg-white" />
                        <Button className="cursor-pointer">
                          Send <IoIosSend />
                        </Button>
                      </Field>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
