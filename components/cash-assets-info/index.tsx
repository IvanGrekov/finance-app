import Grid from '@mui/material/Grid';

import SectionWrapper from 'components/section-wrapper';

export default function CashAssetsInfo(): JSX.Element {
    return (
        <Grid container={true} spacing={2} p={2}>
            <Grid item={true} xs={6}>
                <SectionWrapper>xs=6</SectionWrapper>
            </Grid>

            <Grid item={true} xs={6}>
                <SectionWrapper>xs=6</SectionWrapper>
            </Grid>

            <Grid item={true} xs={12}>
                <SectionWrapper>xs=12</SectionWrapper>
            </Grid>
        </Grid>
    );
}
