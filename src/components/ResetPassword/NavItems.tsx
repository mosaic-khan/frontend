import { InfoOutlineIcon } from "@chakra-ui/icons";
import HomeIcon from "../Icons/HomeIcon";
import { NavItem } from "../Navigation/BasicNavbar";

export const NAV_ITEMS: Array<NavItem> = [
    {
      ItemNumber: 1,
      icon: <HomeIcon />,
      href: "/",
    },
    {
      ItemNumber: 2,
      icon: <InfoOutlineIcon boxSize="20px" />,
      children: [
        {
          ItemNumber: 1,
          label: "درباره ما",
          icon: <InfoOutlineIcon color="brand.800" opacity="90%" />,
          href: "/aboutUs",
        },
      ],
    },
  ];