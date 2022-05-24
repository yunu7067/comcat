import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {NextPage} from 'next';
import DefaultLayout from '@blocks/layout/DefaultLayout';

const SettingPage: NextPage = () => {
  return (
    <DefaultLayout>
      <Tabs variant='solid-rounded' colorScheme='blackAlpha' p='4'>
        <TabList>
          <Tab>Setting 1</Tab>
          <Tab>Setting 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DefaultLayout>
  );
};

export async function getServerSideProps({}) {
  return {
    props: {},
  };
}

export default SettingPage;
