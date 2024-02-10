import { Dispatch, store } from "@/store/store";
import { Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import RedirectText from "@/pages/Redirecting/components/RedirectText/RedirectText";
import SpinnerAnimation from "@/pages/Redirecting/components/SpinnerAnimation/SpinnerAnimation";
import * as styles from "./styles";

const Redirecting = () => {
  const dispatch = useDispatch<Dispatch>();
  const paymentUrl = useSelector(store.select.cartModel.selectPaymentUrl);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (paymentUrl) {
      setTimeout(() => {
        dispatch.cartModel.clearPaymentUrl();
        linkRef.current?.click();
      }, 1000);
    }
  }, [paymentUrl]);
  return (
    <Stack {...styles.$stackStyle0}>
      <a ref={linkRef} href={paymentUrl || ""} />
      <SpinnerAnimation />
      <RedirectText />
    </Stack>
  );
};
export default Redirecting;
