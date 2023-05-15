import TabPanel from '@mui/lab/TabPanel';

import { EAssetsTab } from 'models/types/assetsTabs';

export default function TabPanels(): JSX.Element {
    return (
        <>
            <TabPanel value={EAssetsTab.CASH}>Cash Info</TabPanel>
            <TabPanel value={EAssetsTab.CRYPTO}>Crypto Info</TabPanel>
        </>
    );
}
