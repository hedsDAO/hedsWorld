import { Dispatch } from "@/store/store";
import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Redirecting = () => {
  const dispatch = useDispatch<Dispatch>();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state.redirect) {
      setTimeout(() => linkRef.current?.click(), 1000);
    }
    return () => {
      dispatch.cartModel.clearPaymentUrl();
    };
  }, []);
  return (
    <Stack gap={4} alignItems="center" justifyContent="center" minW="100vw" minH="100vh">
      <a ref={linkRef} href={location.state.redirect} />
      <Spinner size="sm" />
      <Text fontFamily={"Helvetica"} fontSize={{ base: "sm", lg: "base" }} color="black">
        Redirecting to Checkout...
      </Text>
    </Stack>
  );
};

export default Redirecting;
