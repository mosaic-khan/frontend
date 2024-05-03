import { AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { ReactNode } from "react";
import ChangePassButton from "./ChangePassButton";
import AccordionComponent from "../../components/Accordion/Accordion";

interface Props {
  children: ReactNode;
}

const ChangePassAccordion = ({ children }: Props) => {
  return (
    <AccordionComponent>
      <AccordionItem border="none">
        <ChangePassButton />
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </AccordionComponent>
  );
};
export default ChangePassAccordion;
