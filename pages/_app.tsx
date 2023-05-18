import { useState } from 'react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from 'components/header';
import NavigationSidebar from 'components/navigation-sidebar';
import MobileNavigationSidebar from 'components/navigation-sidebar/MobileNavigationSidebar';
import {
    NAVIGATION_SIDEBAR_WIDTH,
    DEFAULT_PADDING_XS,
    DEFAULT_PADDING_MD,
    DEFAULT_BORDER_RADIUS,
} from 'constants/layout';
import { MobileNavigationSidebarProvider } from 'models/contexts/MobileNavigationSidebar';
import { PageLoadingProvider } from 'models/contexts/PageLoading';
import { IAppProps } from 'models/types/appProps';
import appTheme from 'styles/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function MyApp({ Component, pageProps }: AppProps<IAppProps>): JSX.Element {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ThemeProvider theme={appTheme}>
                    <MobileNavigationSidebarProvider>
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
                                    width: {
                                        xs: '100%',
                                        md: `calc(100% - ${NAVIGATION_SIDEBAR_WIDTH}px)`,
                                    },
                                    ml: { xs: 0, md: `${NAVIGATION_SIDEBAR_WIDTH}px` },
                                }}
                            >
                                <PageLoadingProvider>
                                    <Header />
                                    <Box
                                        sx={{
                                            overflow: 'auto',
                                            p: { xs: DEFAULT_PADDING_XS, md: DEFAULT_PADDING_MD },
                                        }}
                                    >
                                        <Paper
                                            elevation={2}
                                            sx={{ borderRadius: DEFAULT_BORDER_RADIUS }}
                                        >
                                            <Component {...pageProps} />
                                        </Paper>
                                    </Box>
                                </PageLoadingProvider>
                            </Stack>
                        </Box>
                    </MobileNavigationSidebarProvider>
                </ThemeProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}
