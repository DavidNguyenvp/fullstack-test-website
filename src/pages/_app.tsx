import type { AppProps } from "next/app";
import { NextPage } from "next";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { store } from "@/store";
import ThemeComponent from "@/@core/theme/ThemeComponent";

type ExtendedAppProps = AppProps & {
  Component: NextPage;
};

const App = ({ Component }: ExtendedAppProps) => {
  // TODO: theme mode should be loaded from store
  const mode = "light"; // The website doesn't have the change theme mode function yet.


   return (
     <ErrorBoundary fallback={<code>{"Have error in app"}</code>}>
       <Head>
         <title>Any Store</title>
         <meta name="description" content="any_store" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
       <Provider store={store}>
         <ThemeComponent mode={mode}>
           <MainLayout>
             <Component />
           </MainLayout>
         </ThemeComponent>
       </Provider>
     </ErrorBoundary>
   );
};


export default App;