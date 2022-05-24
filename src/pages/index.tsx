import type {NextPage} from 'next';
import {Box, chakra, HStack, VStack} from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from '../blocks/layout/DefaultLayout';
import {motion, isValidMotionProp} from 'framer-motion';
import useSWR from 'swr';
import {Boradcast} from '../services/Broadcast';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home: NextPage = () => {
  const {data, error} = useSWR<Boradcast[]>('/api/broadcast/list', fetcher);

  return (
    <DefaultLayout>
      <VStack>
        {data &&
          data.map(broadcast => (
            <HStack w='full' key={broadcast.id} p='4' border='1px'>
              <iframe
                width='192'
                height='108'
                src={`https://www.youtube.com/embed/${broadcast.id}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
              <VStack w='full'>
                <Box w='full'>{broadcast.title}</Box>
                <Box w='full'>{broadcast.description}</Box>
              </VStack>
            </HStack>
          ))}
      </VStack>
    </DefaultLayout>
  );
};

export default Home;
