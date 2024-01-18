import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Redirecting from "@/components/animations/Redirecting/Redirecting";
import { CartItem } from "@/models/cart";
import { Dispatch, store } from "@/store/store";
import { Flex, SlideFade, Text } from "@chakra-ui/react";

import CartDrawer from "@/components/navs/Navbar/components/CartDrawer/CartDrawer";

const Navbar = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isDrawerOpen = useSelector(store.select.cartModel.selectIsDrawerOpen);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  const isRedirecting = useSelector(store.select.cartModel.selectIsRedirecting);
  const cart = useSelector(store.select.cartModel.selectCart);

  const getTotalQuantity = () => {
    const allQuantities = cart?.map((item: CartItem) => +item?.quantity);
    if (allQuantities?.length === 0) return 0;
    else return allQuantities?.reduce((a, b) => a + b, 0);
  };

  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
  }, []);

  return (
    <>
      {isRedirecting ? <Redirecting /> : <></>}
      <Flex mx="auto" alignItems={"center"} minW="100vw" maxW="100vw" minH="6vh">
        <Flex px={1} w="100%" justifyContent={"space-between"} alignItems={"center"}>
          <SlideFade transition={{ exit: { duration: 3 } }} unmountOnExit in={!isFirstLanding}>
            <Flex alignItems="center" gap={2} px={4}>
              <Text role="button" onClick={() => navigate("/")} mr={3} fontWeight={"medium"} fontSize={"md"} fontFamily={"inter"}>
                heds.world
              </Text>
            </Flex>
          </SlideFade>
          <SlideFade transition={{ exit: { duration: 3 } }} unmountOnExit in={!isFirstLanding}>
            <Flex onClick={() => dispatch.cartModel.setIsDrawerOpen(!isDrawerOpen)} mr={3} alignItems={"baseline"}>
              <Text color={getTotalQuantity() === 0 ? "blackAlpha.700" : "black"} fontWeight={"semibold"} mr={2} fontSize="xs">
                {getTotalQuantity()}
              </Text>
              <Text as="i" className="fa-sharp fa-solid fa-bag-shopping" color="black" />
            </Flex>
            <CartDrawer />
          </SlideFade>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
