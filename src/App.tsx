import { Route, Routes } from "react-router-dom";
import Shop from "@/pages/Shop/Shop";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import Product from "@/pages/Product/Product";
import Landing from "@/pages/Landing/Landing";

import firebaseConfig from "@/firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
