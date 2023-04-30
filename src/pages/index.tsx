import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useSession } from 'next-auth/react';

import Dashboard from './dashboard';
import SideMenu from '../components/SideMenu/SideMenu';
import Login from '@/components/Login/Login';
import scss from './Home.module.scss';

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>DataSoft Dashboard</title>
        <meta
          name="description"
          content="Data Dashboard built with MUI and NextJs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.main}>
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}

        <Login />
      </main>
    </>
  );
};

export default Home;
