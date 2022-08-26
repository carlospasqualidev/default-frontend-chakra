import { ModalProps as ChakrasModalProps } from "@chakra-ui/react";

export interface ModalProps extends ChakrasModalProps {
  title: string;
  children: any;
}
