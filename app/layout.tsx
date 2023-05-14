'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import Head from 'next/head';

import theme from 'styles/theme';

import './global.css';

export default function RootLayout({ children }: PropsWithChildren): JSX.Element {
    return (
        <html lang="en">
            <Head>
                <title>App</title>
            </Head>

            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
