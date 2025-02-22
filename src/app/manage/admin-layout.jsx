"use client";

import * as React from "react";
import Link from "next/link";
import { FilePlus, LayoutDashboard, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const navItems = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/manage",
        icon: <LayoutDashboard className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Blog",
    items: [
      {
        title: "All Articles",
        href: "/manage/article",
        icon: <FilePlus className="w-4 h-4" />,
      },
      {
        title: "Add Article",
        href: "/manage/article/add",
        icon: <FilePlus className="w-4 h-4" />,
      },
    ],
  },
];

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  const handleLogOut = () => {
    // Remove the authToken cookie
    Cookies.remove("authToken");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="flex max-h-screen bg-white">
      <aside className="hidden lg:flex w-64 flex-col border-r">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Admin Panel</h2>
        </div>
        <div className="flex-1">
          <nav className="p-4 space-y-6">
            {navItems.map((section, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground px-2">
                  {section.title}
                </h3>
                {section.items.map((item, j) => (
                  <Link
                    key={j}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-64 p-0 bg-white">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Admin Panel</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-5rem)]">
            <nav className="p-4 space-y-6">
              {navItems.map((section, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground px-2">
                    {section.title}
                  </h3>
                  {section.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="flex h-14 items-center gap-4 border-b px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <div className="flex-1" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>Admin</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Button
                  onClick={handleLogOut}
                  className="bg-red-500 hover:bg-red-700 w-full"
                >
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
