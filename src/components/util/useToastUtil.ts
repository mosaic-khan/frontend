import { ToastPosition, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface ToastUtilProps {
  active: boolean;
  title: string;
  description: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
}

const defaultToastInfo: ToastUtilProps = {
  active: false,
  title: "",
  description: "",
  status: undefined,
};

interface Props {
  position: ToastPosition;
}

const useToastUtil = ({ position }: Props) => {
  const [toastInfo, setToastInfo] = useState<ToastUtilProps>(defaultToastInfo);
  const toast = useToast();

  useEffect(() => {
    if (toastInfo.active) {
      toast({
        title: toastInfo.title,
        description: toastInfo.description,
        status: toastInfo.status,
        duration: 3000,
        isClosable: true,
        position: position,
      });
      setToastInfo(defaultToastInfo);
    }
  }, [toastInfo]);

  return setToastInfo;
};

export default useToastUtil;
