import { useSelector } from "react-redux";
import { store } from "@/store/store";
import { Flex, Image, SlideFade } from "@chakra-ui/react";
import PrivacyAndTerms from "@/components/navs/Footer/components/PrivacyAndTerms/PrivacyAndTerms";
import * as styles from "@/components/navs/Footer/styles";
import IMAGES from "@/images";

/**
 * @name Footer
 * @description Footer component
 * @returns {JSX.Element} Footer component
 */

const Footer = () => {
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  return (
    <SlideFade transition={styles.$fadeStyles} in={true && !isUnloading}>
      <Flex {...styles.$flexStyles}>
        <Flex {...styles.$flexStyles2}>
          <Image src={IMAGES.hedline_w_i} {...styles.$imageStyles} />
          <PrivacyAndTerms />
        </Flex>
      </Flex>
    </SlideFade>
  );
};

export default Footer;
