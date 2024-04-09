import { Dispatch, store } from "@/store/store";
import { Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as styles from "@/components/navs/Navbar/components/NavLogo/styles";
import * as constants from "@/components/navs/Navbar/components/NavLogo/constants";
import IMAGES from "@/images";

/**
 * @name NavLogo
 * @description NavLogo component
 * @returns {JSX.Element} JSX.Element
 */

const NavLogo = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  return <Image onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(constants.LOGO_LINK)])} src={IMAGES.logo} {...styles.$imageStyles} />;
};
export default NavLogo;
