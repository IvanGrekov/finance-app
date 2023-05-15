import Grid from '@mui/material/Grid';

import AssetsBalanceSection from 'components/assets-balance-section';
import AssetsHistorySection from 'components/assets-history-section';
import AssetsProfitSection from 'components/assets-profit-section';
import SectionWrapper from 'components/section-wrapper';
import { DEFAULT_PADDING_XS } from 'constants/layout';

export default function AssetsPageContent(): JSX.Element {
    return (
        <Grid container={true} spacing={2} sx={{ p: DEFAULT_PADDING_XS }}>
            <Grid item={true} xs={12} lg={6}>
                <SectionWrapper>
                    <AssetsBalanceSection />
                </SectionWrapper>
            </Grid>

            <Grid item={true} xs={12} lg={6}>
                <SectionWrapper>
                    <AssetsProfitSection />
                </SectionWrapper>
            </Grid>

            <Grid item={true} xs={12}>
                <SectionWrapper>
                    <AssetsHistorySection />
                </SectionWrapper>
            </Grid>
        </Grid>
    );
}
