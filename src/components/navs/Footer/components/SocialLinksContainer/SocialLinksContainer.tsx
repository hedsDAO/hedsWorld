import { Flex, Text } from "@chakra-ui/react";
import * as constants from "@/components/navs/Footer/components/SocialLinksContainer/constants";
import * as styles from "@/components/navs/Footer/components/SocialLinksContainer/styles";

/**
 * @name SocialLinksContainer
 * @description Social links container
 * @returns {JSX.Element} Social links container
 */

const SocialLinksContainer = () => {
  return (
    <Flex gap={{ base: 1.5, lg: 3 }}>
      <a href={constants.DISCORD} target={constants.TARGET}>
        <Text as={constants.ICON_ELEMENT} {...styles.$discordStyle} />
      </a>
      <a href={constants.TWITTER} target={constants.TARGET}>
        <Text as={constants.ICON_ELEMENT} {...styles.$twitterStyle} />
      </a>
      <a href={constants.INSTAGRAM} target={constants.TARGET}>
        <Text as={constants.ICON_ELEMENT} {...styles.$instagramStyle} />
      </a>
      <Text {...styles.$textStyle} />
    </Flex>
  );
};

export default SocialLinksContainer;
