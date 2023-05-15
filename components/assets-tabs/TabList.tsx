import { default as MuiTabList } from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsTabs';
import { useGetUpdateSearchParams } from 'hooks/searchParams.hooks';
import { EAssetsTab } from 'models/types/assetsTabs';

export default function TabList(): JSX.Element {
    const updateSearchParams = useGetUpdateSearchParams();

    const handleChange = (_: React.SyntheticEvent, newValue: string): void => {
        updateSearchParams(ASSETS_TYPE_SEARCH_PARAM_NAME, newValue);
    };

    return (
        <MuiTabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Cash" value={EAssetsTab.CASH} />
            <Tab label="Crypto" value={EAssetsTab.CRYPTO} />
        </MuiTabList>
    );
}
