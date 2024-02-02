import { store } from "@/store/store";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, Stack, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  return (
    <Accordion allowToggle>
      <AccordionItem py={2.5} borderColor="blackAlpha.600" mt={1}>
        <AccordionButton px={0} bg={"transparent"} _hover={{ bg: "white", color: "black" }} _active={{ bg: "white", color: "black" }} _focus={{ bg: "white", color: "black" }} color={"black"}>
          <Text px={1.5} fontSize="xs" fontFamily={"Helvetica"} as="span" flex="1" textAlign="left">
            Product Details
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel px={2} pb={4}>
          <Stack gap={3.5}>
            {product?.itemData?.variations?.map((variation) => {
              const allMeasurements = Object.values(variation?.customAttributeValues || {});
              if (variation?.id === selectedVariant)
                return allMeasurements?.map((measurement) => (
                  <Flex gap={2}>
                    <Text minW="12ch" fontFamily={"inter"} fontWeight={"medium"} fontSize="xs" color="blackAlpha.900">
                      {measurement?.name}
                    </Text>
                    <Text fontFamily={"inter"} fontSize="xs" color="blackAlpha.700">{`${Number(measurement?.numberValue)}"`}</Text>
                  </Flex>
                ));
            })}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem py={2.5} borderColor="blackAlpha.600" mt={1}>
        <AccordionButton px={0} bg={"transparent"} _hover={{ bg: "white", color: "black" }} _active={{ bg: "white", color: "black" }} _focus={{ bg: "white", color: "black" }} color={"black"}>
          <Text px={1.5} fontSize="xs" fontFamily={"Helvetica"} as="span" flex="1" textAlign="left">
            Fabric and Care
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel px={2} pb={4}>
          <Stack gap={3.5}>
            {product?.customAttributeValues &&
              Object.values(product?.customAttributeValues)?.map((attribute) => {
                if (attribute.name === "care" || attribute?.name === "fabric")
                  return (
                    <Flex gap={2}>
                      <Text minW="12ch" fontFamily={"inter"} fontWeight={"medium"} fontSize="xs" color="blackAlpha.900">
                        {attribute?.name}
                      </Text>
                      <Text minW="12ch" fontSize="xs" color="blackAlpha.700" fontFamily={"inter"}>
                        {attribute?.stringValue}
                      </Text>
                    </Flex>
                  );
              })}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem py={2.5} borderColor="blackAlpha.600" mt={1}>
        <AccordionButton px={0} bg={"transparent"} _hover={{ bg: "white", color: "black" }} _active={{ bg: "white", color: "black" }} _focus={{ bg: "white", color: "black" }} color={"black"}>
          <Text px={1.5} fontSize="xs" fontFamily={"Helvetica"} as="span" flex="1" textAlign="left">
            Shipping and Returns
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel px={2} pb={4}>
          <Stack gap={2}>
            {product?.customAttributeValues &&
              Object.values(product?.customAttributeValues)?.map((attribute) => {
                if (attribute.name === "shipping" || attribute.name === "returns")
                  return (
                    <Flex gap={2}>
                      <Text minW="12ch" fontFamily={"inter"} fontWeight={"medium"} fontSize="xs" color="blackAlpha.900">
                        {attribute?.name}
                      </Text>
                      <Text minW="5ch" fontSize="xs" color="blackAlpha.700" fontFamily={"inter"}>
                        {attribute?.stringValue}
                      </Text>
                    </Flex>
                  );
              })}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDetails;
