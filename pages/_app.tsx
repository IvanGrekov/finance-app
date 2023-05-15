import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from 'components/header';
import NavigationSidebar from 'components/navigation-sidebar';
import { NAVIGATION_SIDEBAR_WIDTH } from 'constants/layout';
import theme from 'styles/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import 'styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Finance App</title>
            </Head>

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
                    <Box component="main" overflow="auto" p={3}>
                        <Paper elevation={2}>
                            <Component {...pageProps} />
                        </Paper>
                    </Box>
                </Stack>
            </ThemeProvider>
        </>
    );
}
