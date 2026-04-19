import LogoSvg from "@/assets/svg/logo";

// Util Imports
import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* <LogoSvg className="size-8.5" /> */}
      <Image src="/logo-1.png" alt="Logo" width={80} height={80} />
      <span className="text-lg leading-5 font-semibold">GoodDeed Foundation</span>
    </div>
  );
};

export default Logo;
