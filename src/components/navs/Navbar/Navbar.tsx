import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "@/models/cart";
import { Dispatch, store } from "@/store/store";
import { Fade, Flex, Image, Text, useBoolean } from "@chakra-ui/react";
import * as constants from "./constants";
import IMAGES from "@/images";
import CartDrawer from "./components/CartDrawer/CartDrawer";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const isDrawerOpen = useSelector(store.select.cartModel.selectIsDrawerOpen);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  const isRedirecting = useSelector(store.select.cartModel.selectIsRedirecting);
  const cart = useSelector(store.select.cartModel.selectCart);

  const getTotalQuantity = () => {
    if (!cart) return 0;
    const allQuantities = cart?.map((item: CartItem) => +item?.quantity);
    if (allQuantities?.length === 0) return 0;
    else return allQuantities?.reduce((a, b) => a + b, 0);
  };

  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
  }, []);

  return (
    <Flex gap={{ base: 4, lg: 6 }} alignItems={"center"} minW="100vw" py={"7.5px"} pl={4}>
      <Image
        pointerEvents={"auto"}
        cursor={"pointer"}
        // onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate("/")])}
        objectFit={"contain"}
        boxSize={{ base: "1.75rem", lg: "1.9rem" }}
        src={"public/images/hedline_w_i.png"}
      />
      <Image
        pointerEvents={"auto"}
        cursor={"pointer"}
        onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate("/")])}
        objectFit={"contain"}
        boxSize={{ base: "1.75rem", lg: "1.9rem" }}
        src={IMAGES.logo}
      />
      {constants.NavLinks?.map((navLink: constants.NavLink, index: number) => {
        const active = pathname === navLink.path;
        if (navLink.external)
          return (
            <Fade key={navLink.id} style={{ display: "flex" }} in={true && !isUnloading} transition={{ enter: { delay: (index + 1) / 10 }, exit: { delay: (index + 1) / 10 } }}>
              <Text
                _hover={{ color: "blackAlpha.900" }}
                transition={"0.25s all ease-in-out"}
                as={"a"}
                href={navLink.path}
                target={"_blank"}
                fontWeight={"semibold"}
                fontSize={{ base: "xs", lg: "sm" }}
                fontFamily={"karla"}
                color={active ? "blackAlpha.900" : "blackAlpha.600"}
              >
                {navLink.name}
              </Text>
            </Fade>
          );
        else
          return (
            <Fade key={navLink.id} style={{ display: "flex" }} in={true && !isUnloading} transition={{ enter: { delay: (index + 1) / 10 }, exit: { delay: (index + 1) / 10 } }}>
              <Text
                _hover={{ color: "blackAlpha.900" }}
                transition={"0.25s all ease-in-out"}
                cursor={"pointer"}
                pointerEvents={"auto"}
                onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(navLink.path)])}
                fontWeight={"semibold"}
                fontSize={{ base: "sm", lg: "sm" }}
                fontFamily={"karla"}
                color={active ? "blackAlpha.900" : "blackAlpha.600"}
              >
                {navLink.name}
              </Text>
            </Fade>
          );
      })}
      <Flex onClick={() => dispatch.cartModel.setIsDrawerOpen(!isDrawerOpen)} alignItems="baseline" gap={2.5} pr={5} ml={"auto"}>
        <Text fontWeight={"semibold"} fontFamily={"karla"} fontSize={{ base: "sm", lg: "sm" }}>
          {getTotalQuantity()}
        </Text>
        <Text as={"i"} className="fa-sharp fa-solid fa-bag-shopping" fontSize={{ base: "sm", lg: "sm" }} color="blackAlpha.900" />
        <CartDrawer />
      </Flex>
    </Flex>
  );
};

export default Navbar;
