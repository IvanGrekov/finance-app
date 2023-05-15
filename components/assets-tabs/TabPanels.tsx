import TabPanel from '@mui/lab/TabPanel';

import { TAB_PANES_SX } from 'components/assets-tabs/constants';
import CashAssetsInfo from 'components/cash-assets-info';
import CryptoAssetsInfo from 'components/crypto-assets-info';
import { EAssetsTab } from 'models/types/assetsTabs';

export default function TabPanels(): JSX.Element {
    return (
        <>
            <TabPanel value={EAssetsTab.CASH} sx={TAB_PANES_SX}>
                <CashAssetsInfo />
            </TabPanel>
            <TabPanel value={EAssetsTab.CRYPTO} sx={TAB_PANES_SX}>
                <CryptoAssetsInfo />
            </TabPanel>
        </>
    );
}
