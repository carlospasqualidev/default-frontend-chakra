//LIBS
import { Children, useState } from "react";

//UI
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

//TYPES
import { ModalProps } from "./ModalProps";

export const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  ...rest
}: ModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent paddingBottom={2}>
        <ModalHeader>
          <Text fontSize="2xl">{title}</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
