import { LayoutProps, LayoutHead } from "./shared";

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <LayoutHead title={title} />
      {children}
    </>
  );
};

export default Layout;
