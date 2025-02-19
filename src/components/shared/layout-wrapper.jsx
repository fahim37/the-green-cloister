"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/shared/header";
import Newsletter from "@/components/shared/newsletter";
import Footer from "@/components/shared/footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && (
        <>
          <Newsletter />
          <Footer />
        </>
      )}
    </>
  );
}
