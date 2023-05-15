import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BalanceActions(): JSX.Element {
    return (
        <Box sx={{ display: 'flex', gap: 2, alignSelf: 'stretch' }}>
            <Button
                variant="contained"
                color="success"
                startIcon={<AddIcon />}
                sx={{ flexGrow: 1 }}
            >
                Income
            </Button>

            <Button
                variant="contained"
                color="error"
                startIcon={<RemoveIcon />}
                sx={{ flexGrow: 1 }}
            >
                Expense
            </Button>
        </Box>
    );
}
