import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LoadingButton from '@mui/lab/LoadingButton';

import { CHANGE_CACHE_BALANCE_FORM_ID } from 'components/change-cache-balance-form/constants/';
import { DEFAULT_PADDING_MD } from 'constants/layout';

interface ISubmitButtonProps {
    isDeposit: boolean;
    loading?: boolean;
}

export default function SubmitButton({ isDeposit, loading }: ISubmitButtonProps): JSX.Element {
    const buttonColor = isDeposit ? 'success' : 'error';
    const ButtonEndIcon = isDeposit ? <AddIcon /> : <RemoveIcon />;
    const buttonText = isDeposit ? 'Deposit' : 'Withdraw';

    return (
        <LoadingButton
            type="submit"
            form={CHANGE_CACHE_BALANCE_FORM_ID}
            size="large"
            variant="contained"
            color={buttonColor}
            endIcon={ButtonEndIcon}
            loading={loading}
            sx={{
                mt: DEFAULT_PADDING_MD,
            }}
        >
            {buttonText}
        </LoadingButton>
    );
}
