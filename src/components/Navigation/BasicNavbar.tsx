import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, HStack, Popover, PopoverTrigger, PopoverContent, Stack, Icon, Box, Text, Link } from "@chakra-ui/react";
import { ReactElement } from "react";


export interface NavItem {
    ItemNumber:number;
    label?: string;
    icon?:ReactElement | undefined;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }


export const BasicNavbar = ({Nav_Items}:{ Nav_Items: NavItem[] }) => {
    const linkColor = 'gray.600';
    const linkHoverColor = 'brand.800';
  
    return (
      <HStack spacing={4}>
        {Nav_Items.map((navItem) => (
          <Box key={navItem.ItemNumber}>
            <Popover trigger='hover' placement="bottom" >
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  color={linkColor}
                  _hover={{
                    color: linkHoverColor,
                  }}>
                  {navItem.label||navItem.icon}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent dir="rtl"
                  boxShadow={'xl'}
                  bg="white"
                  p={2}
                  rounded={'xl'}
                  minW="5px">
                  <Stack >
                    {navItem.children.map((child) => (
                      <BasicSubNav key={child.ItemNumber} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </HStack>
    );
  };
  
export const BasicSubNav = ({ label, icon, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role='group'
        p={4}
        rounded={'md'}
        _hover={{ bg: "gray.50" }}>
        <HStack>
          {icon ? icon:""}
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'brand.900' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            flex={1}>
            <Icon color={'brand.900'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </HStack>
      </Link>
    );
  };
  
  