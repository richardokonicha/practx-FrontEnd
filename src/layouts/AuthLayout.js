import Head from 'next/head'
import styles from './authlayout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'


export default function AuthLayout({ children }) {
    return (
        <>
            <Head>

                <meta charSet="utf-8" />

                <title>
                    PractX Web Application
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta content="PractX Web Platform" name="description" />
                <meta content="ReverSoftwares" name="author" />

            </Head>

            <main>
                
                {children}
                
            </main>

        </>
    )
}
