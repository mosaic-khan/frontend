import {
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import {
  QuestionOutlineIcon,
  ViewOffIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import { IoEllipsisHorizontal, IoPerson } from "react-icons/io5";

import { BsStar } from "react-icons/bs";

const PreviewMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IoEllipsisHorizontal />}
        color="white"
        _hover={{ bg: "none" }}
        size="40px"
        border="none"
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<BsStar />}>اضافه کردن به علاقه مندیها</MenuItem>
        <MenuItem icon={<QuestionOutlineIcon />}>
          چرا این پست برایت نمایش داده شد؟
        </MenuItem>
        <MenuItem icon={<ViewOffIcon />}>پنهان کردن</MenuItem>
        <MenuItem icon={<IoPerson />}>درباره این کاربر</MenuItem>
        <MenuItem icon={<WarningIcon />}>گزارش محتوای مخرب</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PreviewMenu;
