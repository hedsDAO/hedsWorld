import { Dispatch, store } from "@/store/store";
import { Stack, Spinner, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Redirecting = () => {
  const dispatch = useDispatch<Dispatch>();
  const paymentUrl = useSelector(store.select.cartModel.selectPaymentUrl);

  useEffect(() => {
    if (paymentUrl?.length && window)
      setTimeout(() => {
        window?.location?.replace(paymentUrl);
      }, 1000);
    return () => {
      dispatch.cartModel.setPaymentUrl("");
      dispatch.cartModel.setIsRedirecting(false);
    };
  }, [paymentUrl]);

  return (
    <Stack zIndex={2000} bg="black" position={"absolute"} alignItems={"center"} minH={"100vh"} minW="100vw">
      <Stack alignItems={"center"} gap={6} my={"auto"}>
        <Text color="white" fontSize="sm" fontWeight={"medium"}>
          Redirecting to Checkout
        </Text>
        <Spinner color="white" />
      </Stack>
    </Stack>
  );
};

export default Redirecting;
