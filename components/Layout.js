import React from 'react';
import Head from 'next/head';
import style from './styles.module.css';

const Layout = ({ children }) => {
    return (
        <div>

            <Head>
                <title>Pokedex</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <div className = { style.container }>
                { children }
            </div>
        </div>
    );
}
 
export default Layout;