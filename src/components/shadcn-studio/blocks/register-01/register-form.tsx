"use client";

import { MailIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const RegisterForm = () => {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Username */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="username">
          You Name
        </Label>
        <div className="relative">
          <Input type="text" id="username" placeholder="Enter your name here..." className="h-10 pr-10" />
          <UserIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="userEmail">
          Your Email Address
        </Label>
        <div className="relative">
          <Input type="email" id="userEmail" placeholder="Enter your email here..." className="h-10 pr-10" />
          <MailIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="message">
          Your Message
        </Label>
        <Textarea id="message" placeholder="Enter your message here..." className="h-25" />
      </div>

      <Button className="w-full h-10 text-base" type="submit" size="icon-lg">
        Send Message
      </Button>
    </form>
  );
};

export default RegisterForm;
