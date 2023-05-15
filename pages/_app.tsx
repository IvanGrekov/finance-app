import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from 'components/header';
import NavigationSidebar from 'components/navigation-sidebar';
import MobileNavigationSidebar from 'components/navigation-sidebar/MobileNavigationSidebar';
import { NAVIGATION_SIDEBAR_WIDTH } from 'constants/layout';
import { MobileNavigationSidebarContextProvider } from 'models/contexts/MobileNavigationSidebar';
import appTheme from 'styles/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={appTheme}>
            <MobileNavigationSidebarContextProvider>
                <Box component="main">
                    <Head>
                        <title>Finance App</title>
                    </Head>

                    <CssBaseline />
                    <NavigationSidebar />
                    <MobileNavigationSidebar />
                    <Stack
                        sx={{
                            height: '100vh',
                            width: { xs: '100%', md: `calc(100% - ${NAVIGATION_SIDEBAR_WIDTH}px)` },
                            ml: { xs: 0, md: `${NAVIGATION_SIDEBAR_WIDTH}px` },
                        }}
                    >
                        <Header />
                        {/* TODO: add loader context provider */}
                        <Box overflow="auto" p={3}>
                            <Paper elevation={2}>
                                <Component {...pageProps} />
                            </Paper>
                        </Box>
                    </Stack>
                </Box>
            </MobileNavigationSidebarContextProvider>
        </ThemeProvider>
    );
}
