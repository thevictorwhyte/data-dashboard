import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useSession } from 'next-auth/react';

import styles from '@/styles/Home.module.css';
import Dashboard from './dashboard';
import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu/SideMenu';
import Login from '@/components/Login/Login';

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta
          name="description"
          content="Data Dashboard built with MUI and NextJs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
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
}
