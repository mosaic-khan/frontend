import { AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { ReactNode } from "react";
import AccordionComponent from "../../components/Accordion/Accordion";
import DeletePassButton from "./DeletPassButton";

interface Props {
  children: ReactNode;
}

const DeletePassAccordion = ({ children }: Props) => {
  return (
    <AccordionComponent>
      <AccordionItem border="none">
        <DeletePassButton />
        <AccordionPanel pb={3}>{children}</AccordionPanel>
      </AccordionItem>
    </AccordionComponent>
  );
};
export default DeletePassAccordion;
