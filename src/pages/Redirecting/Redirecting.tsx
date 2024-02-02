import { Dispatch, store } from "@/store/store";
import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Redirecting = () => {
  const dispatch = useDispatch<Dispatch>();
  const paymentUrl = useSelector(store.select.cartModel.selectPaymentUrl);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (paymentUrl) {
      setTimeout(() => {
        dispatch.cartModel.clearPaymentUrl();
        linkRef.current?.click();
      }, 1000);
    }
  }, [paymentUrl]);

  return (
    <Stack gap={4} alignItems="center" justifyContent="center" minW="100vw" minH="100vh">
      <a ref={linkRef} href={paymentUrl || ""} />
      <Spinner size="sm" />
      <Text fontFamily={"Helvetica"} fontSize={{ base: "sm", lg: "base" }} color="black">
        Redirecting to Checkout...
      </Text>
    </Stack>
  );
};

export default Redirecting;
