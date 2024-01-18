import { Route, Routes } from "react-router-dom";
import Shop from "@/pages/Shop/Shop";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import Product from "@/pages/Product/Product";
import Landing from "@/pages/Landing/Landing";

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
