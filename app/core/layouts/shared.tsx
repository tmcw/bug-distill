import { Head } from "blitz";
import { ReactNode } from "react";

export type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export function LayoutHead({
  title,
  children,
}: React.PropsWithChildren<Pick<LayoutProps, "title">>) {
  return (
    <Head>
      <title>{title || "Placemark"}</title>
      {children}
    </Head>
  );
}
