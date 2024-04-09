import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch, store } from "@/store/store";
import { Fade, Text } from "@chakra-ui/react";
import * as constants from "@/components/navs/Navbar/components/NavLinks/constants";
import * as styles from "@/components/navs/Navbar/components/NavLinks/styles";

/**
 * @name NavLinks
 * @description NavLinks component
 * @returns {JSX.Element} JSX.Element
 */

const NavLinks = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const { pathname } = useLocation();
  return (
    <>
      {constants.NavLinks?.map((navLink: constants.NavLink, index: number) => {
        const active = pathname === navLink.path;
        if (navLink.external)
          return (
            <Fade key={navLink.id} {...styles.$fadeStyle} in={true && !isUnloading} transition={styles.$fadeTransition(index)}>
              <Text as={constants.LINK_ELEMENT} href={navLink.path} target={constants.TARGET} {...styles.$navLinkStyles(active)}>
                {navLink.name}
              </Text>
            </Fade>
          );
        else
          return (
            <Fade key={navLink.id} {...styles.$fadeStyle} in={true && !isUnloading} transition={styles.$fadeTransition(index)}>
              <Text onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(navLink.path)])} {...styles.$navLinkStyles(active)}>
                {navLink.name}
              </Text>
            </Fade>
          );
      })}
    </>
  );
};

export default NavLinks;
