import React, { useEffect, useState } from "react";
import {
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Menu,
  Icon,
} from "@chakra-ui/react";
import {
  EditIcon,
  HamburgerIcon,
  StarIcon,
  QuestionOutlineIcon,
  ViewOffIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  IoEllipsisHorizontal,
  IoPerson,
  IoPaperPlaneOutline,
  IoHeart,
} from "react-icons/io5";

import { BsHeart, BsHeartFill, BsStar } from "react-icons/bs";

const PreviewMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IoEllipsisHorizontal />}
        color="black"
        _hover={{ bg: "none" }}
        size="40px"
        border="none"
        variant="outline"
        marginLeft="36px"
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
