import { Accordion, AccordionProps } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props extends AccordionProps {
  children: ReactNode;
}

const AccordionComponent = ({ children, ...rest }: Props) => {
  return (
    <Accordion
      defaultIndex={[1]}
      allowMultiple
      borderRadius="lg"
      width="800px"
      bgColor="gray.50"
      marginBottom="20px"
      boxShadow="2xl"
      {...rest}
    >
      {children}
    </Accordion>
  );
};
export default AccordionComponent;
