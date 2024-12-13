import React from 'react';
import { Pie } from 'react-chartjs-2';

function StatusChart({ applications }) {
    const statusCount = applications.reduce((acc, app) => {
        acc[app.status] = (acc[app.status] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: ['applied', 'interview', 'offer', 'rejected'],
        datasets: [
            {
                label: 'Applications by Status',
                data: [
                    statusCount['applied'] || 0,
                    statusCount['interview'] || 0,
                    statusCount['offer'] || 0,
                    statusCount['rejected'] || 0
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div style={{ width: '300px', height: '300px', margin: '20px auto' }}>
            <Pie data={data} options={options} />
        </div>
    );
}

export default StatusChart;