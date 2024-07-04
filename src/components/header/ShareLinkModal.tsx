import React from 'react';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useClipboard,
} from '@chakra-ui/react';

interface ShareLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  link: string;
}

const ShareLinkModal: React.FC<ShareLinkModalProps> = ({ isOpen, onClose, link }) => {
  const { hasCopied, onCopy } = useClipboard(link);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader dir='rtl' marginRight={10}>لینک زیر را با دوستان خود به اشتراک بگذارید!</ModalHeader>
        <ModalBody>
          <Input value={link} isReadOnly placeholder="یک کد رندوم" />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onCopy} mr={3}>
            {hasCopied ? 'کپی شد' : 'کپی کردن'}
          </Button>
          <Button variant="ghost" onClick={onClose}>بستن</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShareLinkModal;
