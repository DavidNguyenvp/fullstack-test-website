
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Layout } from "./MainLayout.styles";
import NavBar from "./conponents/NavBar/NavBar";
import ErrorBoundaryFallback from "./conponents/ErrorBoundaryFallback";

export enum RoutingTransition {
  Left = "ToTheLeft",
  Right = "ToTheRight",
}

export interface MainLayoutProps {
  children: React.ReactNode;
}


const MainLayout: FC<MainLayoutProps> = ({
  children

}: MainLayoutProps) => {
  
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";



  return (
    <Layout>
      <NavBar />
     
        <ErrorBoundary
          FallbackComponent={(props) => <ErrorBoundaryFallback {...props} />}
          key={pathname}
        >
          {children}
        </ErrorBoundary>
    </Layout>
  );
};

export default MainLayout;
