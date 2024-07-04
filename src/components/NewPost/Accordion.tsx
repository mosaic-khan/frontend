import { Accordion, AccordionProps } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props extends AccordionProps {
  children: ReactNode;
}

const AccordionComp = ({ children, ...rest }: Props) => {
  return (
    <Accordion
      defaultIndex={[1]}
      allowMultiple
      borderTopRadius="lg"
      width="100%"
      height="10%"
      bgColor="gray.50"
      // boxShadow="md"
      {...rest}
    >
      {children}
    </Accordion>
  );
};
export default AccordionComp;
