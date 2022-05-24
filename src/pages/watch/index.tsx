import {NextPage} from 'next';
import {useRouter} from 'next/router';
import DefaultLayout from '@blocks/layout/DefaultLayout';
import {useEffect} from 'react';
import useSWR from 'swr';
import {BoradcastRoom} from '@services/Broadcast';
import {Box, VStack} from '@chakra-ui/react';

const fetcher = (url: string, video: string) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(video),
  }).then(res => res.json());

const SettingPage: NextPage = () => {
  const router = useRouter();
  const {data, error} = useSWR<BoradcastRoom | undefined>(
    ['/api/broadcast/room/find', {video: router.query.video}],
    fetcher,
  );

  useEffect(() => {
    if (router.isReady) {
      console.log({query: router.query});
    }
  }, [router.query]);

  return (
    <DefaultLayout>
      <>
        {data ? (
          <VStack>
            <iframe
              width='800'
              height='450'
              src={`https://www.youtube.com/embed/${data.video.id}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
            <Box>
              {data.video.title}
              {data.video.description}
            </Box>
            <Box>
              생중계
              {data.broadcasts.map(broadcast => (
                <VStack key={broadcast.id} background='teal.100'>
                  <Box>{broadcast.time}</Box>
                  <Box>{broadcast.description}</Box>
                </VStack>
              ))}
            </Box>
          </VStack>
        ) : (
          'not found'
        )}
      </>
    </DefaultLayout>
  );
};

export async function getServerSideProps({}) {
  return {
    props: {},
  };
}

export default SettingPage;
