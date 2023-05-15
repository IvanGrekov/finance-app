'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
                        height="100vh"
                        width={`calc(100% - ${NAVIGATION_SIDEBAR_WIDTH}px)`}
                        ml={`${NAVIGATION_SIDEBAR_WIDTH}px`}
                    >
                        <Header />
                        {/* TODO: add loader context provider */}
                        <Box component="main" overflow="auto" p={2}>
                            <Paper elevation={2}>{children}</Paper>
                        </Box>
                    </Stack>
                </ThemeProvider>
            </body>
        </html>
    );
}
