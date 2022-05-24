import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  SlideDirection,
  useMediaQuery,
  Box,
  IconButton,
  Center,
  HStack,
} from '@chakra-ui/react';
import type {FocusableElement} from '@chakra-ui/utils';
import {HamburgerMenuIcon} from '@radix-ui/react-icons';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: React.RefObject<FocusableElement>;
  placement: SlideDirection;
  children?: React.ReactNode | undefined;
}

const SideNav: React.FC<DrawerProps> = ({isOpen, finalFocusRef, placement, onClose, children}) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  if (isLargerThan1280) {
    return (
      <Box w='full' maxW='320px' h='full'>
        {children}
      </Box>
    );
  } else {
    return (
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose} finalFocusRef={finalFocusRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader py='0'>
            <HStack h='16' spacing='2' fontSize='medium' fontWeight='normal'>
              <Center w='72px' h='full' flex='none'>
                <IconButton
                  onClick={onClose}
                  variant='ghost'
                  borderRadius='full'
                  aria-label='Menu'
                  icon={<HamburgerMenuIcon width='20' height='20' />}
                />
              </Center>
              <Center flex='none'>댓글고양이</Center>
            </HStack>
          </DrawerHeader>

          <DrawerBody p='0'>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }
};

export default SideNav;
