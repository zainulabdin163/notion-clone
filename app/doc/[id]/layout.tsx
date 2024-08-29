import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import RoomProvider from "@/components/RoomProvider";

function DocumentLayout({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: string };
}) {
  auth().protect();

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocumentLayout;
