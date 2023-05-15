import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function ProfitInfo(): JSX.Element {
    const theme = useTheme();

    return (
        <Typography>
            Profit:{' '}
            <Typography component="span" color={theme.palette.error.main}>
                -5$
            </Typography>
        </Typography>
    );
}
