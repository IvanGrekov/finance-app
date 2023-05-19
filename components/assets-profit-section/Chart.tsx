import ApexChart from 'react-apexcharts';

import Box from '@mui/material/Box';

export default function Chart(): JSX.Element {
    return (
        <Box>
            <ApexChart
                options={{
                    chart: {
                        id: 'basic-bar',
                    },
                    xaxis: {
                        categories: [
                            '13 May',
                            '14 May',
                            '15 May',
                            '16 May',
                            '17 May',
                            '18 May',
                            '19 May',
                        ],
                    },
                    theme: {
                        mode: 'dark',
                    },
                }}
                series={[
                    {
                        name: 'series-1',
                        data: [950, 1120, 1340, 850, 1760, 2430, 2750],
                    },
                ]}
                type="bar"
            />
        </Box>
    );
}
