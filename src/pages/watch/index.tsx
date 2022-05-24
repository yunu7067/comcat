import {NextPage} from 'next';
import {useRouter} from 'next/router';
import DefaultLayout from '@blocks/layout/DefaultLayout';

const SettingPage: NextPage = () => {
  const router = useRouter();

  return <DefaultLayout>detail</DefaultLayout>;
};

export async function getServerSideProps({}) {
  return {
    props: {},
  };
}

export default SettingPage;
