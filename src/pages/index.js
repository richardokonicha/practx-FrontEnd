import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Dashboard from "./dashboard/dashboard";
import UsersList from "./dashboard/userslist";
import LogIn from "./auth/login";

export default function Home() {
  return (


        <LogIn />

  )
}
