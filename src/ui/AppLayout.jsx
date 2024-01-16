import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom/dist";

import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader></Loader>}
      <Header></Header>

      {/* wrap main into div, so margin auto and max-width can apply at the same time. 
      Otherwise, width would only be the width of main content  */}
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet></Outlet>
        </main>
      </div>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
