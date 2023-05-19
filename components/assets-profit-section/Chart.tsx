import ApexChart from 'react-apexcharts';

const options = {
    chart: {
        id: 'basic-bar',
    },
    xaxis: {
        categories: ['13 May', '14 May', '15 May', '16 May', '17 May', '18 May', '19 May'],
    },
};

const series = [
    {
        name: 'series-1',
        data: [950, 1120, 1340, 850, 769, 1760, 2430, 2750],
    },
];

export default function Chart(): JSX.Element {
    return <ApexChart options={options} series={series} type="bar" />;
}
