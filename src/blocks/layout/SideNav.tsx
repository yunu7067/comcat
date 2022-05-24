import React, {useState} from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  SlideDirection,
  useMediaQuery,
  VStack,
  HStack,
  Box,
} from '@chakra-ui/react';
import type {FocusableElement} from '@chakra-ui/utils';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: React.RefObject<FocusableElement>;
  placement: SlideDirection;
  children?: React.ReactNode | undefined;
}

const SideNav: React.FC<DrawerProps> = ({isOpen, finalFocusRef, placement, onClose, children}) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [extend, setExtend] = useState(true); // 확장 상태인지 축소 상태인지(데스크톱)
  const [open, setOpen] = useState(false); // 열린상태인지 닫힌 상태인지 (모바일)

  if (isLargerThan1280) {
    return <Box w='72'>yessssssss</Box>;
  } else {
    return (
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose} finalFocusRef={finalFocusRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {children}
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
};

export default SideNav;
