'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Head from 'next/head';

import Header from 'components/header';
import NavigationSidebar from 'components/navigation-sidebar';
import { NAVIGATION_SIDEBAR_WIDTH } from 'constants/layout';
import theme from 'styles/theme';

export default function RootLayout({ children }: PropsWithChildren): JSX.Element {
    return (
        <html lang="en">
            <Head>
                <title>Finance App</title>
            </Head>

            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavigationSidebar />
                    <Stack
                        height="200vh"
                        width={`calc(100% - ${NAVIGATION_SIDEBAR_WIDTH}px)`}
                        ml={`${NAVIGATION_SIDEBAR_WIDTH}px`}
                    >
                        <Header />
                        {/* TODO: add loader context provider */}
                        <Box>{children}</Box>
                    </Stack>
                </ThemeProvider>
            </body>
        </html>
    );
}
