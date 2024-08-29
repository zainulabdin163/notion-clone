import { ReactNode } from "react";
import LiveBlocksProvider from "@/components/LiveBlocksProvider";

function PageLayout({ children }: { children: ReactNode }) {
  return <LiveBlocksProvider>{children}</LiveBlocksProvider>;
}

export default PageLayout;
