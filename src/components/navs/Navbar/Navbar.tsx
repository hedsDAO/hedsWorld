import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, store } from "@/store/store";
import { Flex } from "@chakra-ui/react";
import CheckoutButton from "@/components/navs/Navbar/components/CheckoutButton/CheckoutButton";
import NavLogo from "@/components/navs/Navbar/components/NavLogo/NavLogo";
import NavLinks from "@/components/navs/Navbar/components/NavLinks/NavLinks";
import * as styles from "@/components/navs/Navbar/styles";

/**
 * @name Navbar
 * @description Navbar component
 * @returns {JSX.Element} JSX.Element
 */

const Navbar = () => {
  const dispatch = useDispatch<Dispatch>();
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
    if (!checkout) dispatch.cartModel.createCheckout();
  }, []);

  return (
    <Flex {...styles.$flexStyles}>
      <NavLogo />
      <NavLinks />
      <CheckoutButton />
    </Flex>
  );
};

export default Navbar;
