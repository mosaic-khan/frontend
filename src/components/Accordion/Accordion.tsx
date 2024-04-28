import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  bgColor: string;
}
const AccordionComponent = ({ children, bgColor }: Props) => {
  return (
    <Accordion
      defaultIndex={[1]}
      allowMultiple
      bg="white"
      width="800px"
      borderRadius="md"
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="right"></Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionComponent;
