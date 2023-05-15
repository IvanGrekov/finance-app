import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CryptoAssetsInfo(): JSX.Element {
    return (
        <Grid container={true} spacing={2} p={2}>
            <Grid item={true} xs={6}>
                <Item>xs=6</Item>
            </Grid>

            <Grid item={true} xs={6}>
                <Item>xs=6</Item>
            </Grid>

            <Grid item={true} xs={12}>
                <Item>xs=12</Item>
            </Grid>
        </Grid>
    );
}
