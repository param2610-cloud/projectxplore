import react from "react";
import { Button, buttonVariants } from "@/components/ui/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/ui/avatar";
import { Sheet, SheetTrigger, SheetContent } from "./ui/ui/sheet";
import { Input } from "./ui/ui/input";
import Navbar from "./navbar";
import Link from "next/link";
import {
  Home,
  Bot,
  Users,
  CircleUserRound,
  CodeXml,
  RefreshCcw,
  SquareCheckBig,
  Menu,
  Search
} from "lucide-react";
import SidebarCard from "./ui/ui/SidebarCard";

export default function Sidebar() {
  return (
    <>
      <div className="hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[50px] items-center border-b px-4 lg:h-[50px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <img src="projectxplore.png" alt="Logo" className="h-6 w-6" />
              <span className="">ProjectXplore</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <div className="fixed_route">
                <SidebarCard icon={<Bot className="h-4 w-4" />} link="/chatbot">
                  ChatBot
                </SidebarCard>
                <SidebarCard icon={<Home className="h-4 w-4" />} link="/home">
                  Home
                </SidebarCard>
                <SidebarCard
                  icon={<Users className="h-4 w-4" />}
                  link="/community"
                >
                  Community
                </SidebarCard>
                <SidebarCard
                  icon={<CircleUserRound className="h-4 w-4" />}
                  link="/your_profile"
                >
                  Your's Profile
                </SidebarCard>
                <SidebarCard
                  icon={<CodeXml className="h-4 w-4" />}
                  link="/devloper"
                >
                  For Developer
                </SidebarCard>
                <SidebarCard
                  icon={<RefreshCcw className="h-4 w-4" />}
                  link="/updates"
                >
                  Updates
                </SidebarCard>
                <SidebarCard
                  icon={<SquareCheckBig className="h-4 w-4" />}
                  link="/tasks"
                >
                  Tasks
                </SidebarCard>
              </div>
              <div className="chat_route border-t">
                <Link
                  href="/chat"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#DF5173]"
                >
                  Chat
                </Link>
                <SidebarCard
                  icon={
                    <Avatar>
                      {" "}
                      <AvatarImage src="my_image.jpg" />{" "}
                      <AvatarFallback>PG</AvatarFallback>
                    </Avatar>
                  }
                  link="/chat/user/parambrata"
                >
                  Parambrata Ghosh
                </SidebarCard>
                <SidebarCard
                  icon={
                    <Avatar>
                      {" "}
                      <AvatarImage src="next.svg" />{" "}
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                  }
                  link="/chat/group/tech_giants"
                >
                  Teach Giants
                </SidebarCard>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="  flex h-[50px] items-start gap-4 border-b px-4 lg:h-[50px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <img src="projectxplore.png" alt="Logo" className="h-6 w-6" />
                  <span className="">ProjectXplore</span>
                </Link>
                <div className="fixed_route">
                <SidebarCard icon={<Bot className="h-4 w-4" />} link="/chatbot">
                  ChatBot
                </SidebarCard>
                <SidebarCard icon={<Home className="h-4 w-4" />} link="/home">
                  Home
                </SidebarCard>
                <SidebarCard
                  icon={<Users className="h-4 w-4" />}
                  link="/community"
                >
                  Community
                </SidebarCard>
                <SidebarCard
                  icon={<CircleUserRound className="h-4 w-4" />}
                  link="/your_profile"
                >
                  Your's Profile
                </SidebarCard>
                <SidebarCard
                  icon={<CodeXml className="h-4 w-4" />}
                  link="/devloper"
                >
                  For Developer
                </SidebarCard>
                <SidebarCard
                  icon={<RefreshCcw className="h-4 w-4" />}
                  link="/updates"
                >
                  Updates
                </SidebarCard>
                <SidebarCard
                  icon={<SquareCheckBig className="h-4 w-4" />}
                  link="/tasks"
                >
                  Tasks
                </SidebarCard>
              </div>
              <div className="chat_route border-t">
                <Link
                  href="/chat"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#DF5173]"
                >
                  Chat
                </Link>
                <SidebarCard
                  icon={
                    <Avatar>
                      {" "}
                      <AvatarImage src="my_image.jpg" />{" "}
                      <AvatarFallback>PG</AvatarFallback>
                    </Avatar>
                  }
                  link="/chat/user/parambrata"
                >
                  Parambrata Ghosh
                </SidebarCard>
                <SidebarCard
                  icon={
                    <Avatar>
                      {" "}
                      <AvatarImage src="next.svg" />{" "}
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                  }
                  link="/chat/group/tech_giants"
                >
                  Teach Giants
                </SidebarCard>
              </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Navbar/>
        </header>

      </div>
    </>
  );
}
