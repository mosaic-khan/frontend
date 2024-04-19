import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right={["16px", "8px"]}
          zIndex={3}
        >
          <IconButton
            aria-label="Code Icon"
            borderRadius="1000%"
            icon={<ArrowUpIcon />}
            colorScheme="brand"
            variant="solid"
            //icon={<FiCode />}
            size="lg"
            isRound={false}
            //onClick={handleButtonClick}
            mr={4}
          />
        </Box>
      )}
    </>
  );
}
