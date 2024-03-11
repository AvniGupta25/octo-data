import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function About(){
    return(
        <Layout>
            <Head>
                <title>About</title>
                < meta name="Description" content="This is about page" />
            </Head>
        <div>
            <hi className='red-text'>About</hi>
            <p>This is the about page</p>
            <p>This is practice document</p>
        </div>
        </Layout>
    );
}