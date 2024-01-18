import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Navbar from "../navs/Navbar/Navbar";
import { useLocation } from "react-router-dom";

const LayoutWrapper = () => {
  const { pathname } = useLocation();
  return (
    <Container bg="#F7F5F3" px={0} minH="100vh" minW="100vw" maxW="100vw">
      {pathname === "/" ? <></> : <Navbar />}
      <Outlet />
    </Container>
  );
};

export default LayoutWrapper;
