import type {NextPage} from 'next';
import {Box, chakra, HStack, Link, LinkBox, LinkOverlay, VStack} from '@chakra-ui/react';
import React from 'react';
import {motion, isValidMotionProp} from 'framer-motion';
import useSWR from 'swr';
import {BoradcastRoom} from '@services/Broadcast';
import DefaultLayout from '@blocks/layout/DefaultLayout';
import NextLink from 'next/link';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home: NextPage = () => {
  const {data, error} = useSWR<BoradcastRoom[]>('/api/broadcast/room/list', fetcher);

  return (
    <DefaultLayout>
      <VStack p='4'>
        {data &&
          data.map(broadcast => (
            <LinkBox as='article' w='full' p='5' borderWidth='1px' rounded='md' key={broadcast.id}>
              <NextLink href={`/watch?video=${broadcast.id}`} passHref>
                <LinkOverlay href='#'>
                  <HStack w='full' p='4'>
                    <iframe
                      width='192'
                      height='108'
                      src={`https://www.youtube.com/embed/${broadcast.video.id}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    ></iframe>
                    <VStack w='full'>
                      <Box w='full'>{broadcast.video.title}</Box>
                      <Box w='full'>{broadcast.video.description}</Box>
                    </VStack>
                  </HStack>
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          ))}
      </VStack>
    </DefaultLayout>
  );
};

export default Home;
