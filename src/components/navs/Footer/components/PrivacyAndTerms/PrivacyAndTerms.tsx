import { useRef } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import * as constants from "@/components/navs/Footer/components/PrivacyAndTerms/constants";
import * as styles from "@/components/navs/Footer/components/PrivacyAndTerms/styles";

/**
 * @name PrivacyAndTerms
 * @description Privacy and terms component
 * @returns {JSX.Element} Privacy and terms component
 */

const PrivacyAndTerms = () => {
  const termsRef = useRef<HTMLAnchorElement>(null);
  const privacyRef = useRef<HTMLAnchorElement>(null);
  return (
    <Stack {...styles.$stackStyles}>
      <Text {...styles.$copyrightStyles}>{constants.COPYRIGHT}</Text>
      <Flex gap={1}>
        <Text {...styles.$termStyles} onClick={() => termsRef.current?.click()}>
          {constants.TERMS}
        </Text>
        <Text {...styles.$dashStyles}>{constants.DASH_STYLES}</Text>
        <Text {...styles.$privacyStyles} onClick={() => privacyRef.current?.click()}>
          {constants.PRIVACY}
        </Text>
        <a ref={termsRef} href={constants.TERMS_OF_SERVICE} target={constants.TARGET} style={styles.LINK_STYLE} />
        <a ref={privacyRef} href={constants.PRIVACY_POLICY} target={constants.TARGET} style={styles.LINK_STYLE} />
      </Flex>
    </Stack>
  );
};

export default PrivacyAndTerms;
