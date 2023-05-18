import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LoadingButton from '@mui/lab/LoadingButton';

interface ISubmitButtonProps {
    formId: string;
    isDeposit: boolean;
    isLoading?: boolean;
}

export default function SubmitButton({
    formId,
    isDeposit,
    isLoading,
}: ISubmitButtonProps): JSX.Element {
    const buttonColor = isDeposit ? 'success' : 'error';
    const ButtonEndIcon = isDeposit ? <AddIcon /> : <RemoveIcon />;
    const buttonText = isDeposit ? 'Deposit' : 'Withdraw';

    return (
        <LoadingButton
            type="submit"
            form={formId}
            size="large"
            variant="contained"
            color={buttonColor}
            endIcon={ButtonEndIcon}
            loading={isLoading}
        >
            {buttonText}
        </LoadingButton>
    );
}
