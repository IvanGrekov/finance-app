import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { END_POINTS } from 'models/API/crypto/constants';
import API from 'models/API/crypto/index';
import { getCryptoListQueryKey } from 'models/API/crypto/utils/queryKeys.utils';
import { TCryptoList } from 'models/types/cryptoList';
import { formatCryptoList } from 'utils/cryptoList.utils';

export const getCryptoList = async (): Promise<TCryptoList> => {
    const { data } = await API.get(END_POINTS.getCryptoList, {
        params: {
            limit: 100,
        },
    });

    return formatCryptoList(data.Data);
};

const useCryptoList = (enabled?: boolean): UseQueryResult<TCryptoList> => {
    return useQuery({
        queryKey: [getCryptoListQueryKey()],
        queryFn: getCryptoList,
        enabled,
    });
};

export default useCryptoList;
