import React, { Component } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { statisticsApi } from '../../api'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,

    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Jogos mais vendidos',
            color: '#778DA9',
            padding: {
                bottom: 20
            },
            font: {
                size: 30,
                family: "'Viga', sans-serif",
            }
        },
    },
    scales: {
        y: {
            title: {
                display: true,
                text: 'Número de Vendas',
                color: '#778DA9',
                align: 'center',

                font: {
                    size: 20,
                }
            },
        },
        x: {
            title: {
                display: true,
                text: 'Jogos',
                color: '#778DA9',
                align: 'center',
                font: {
                    size: 20,
                },
            },
        },
    },
    layout: {
        padding: {
            left: 150,
            right: 150,
            bottom: 150,
            top: 50
        },
    }

};

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bestSellers: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        statisticsApi.bestSellersGet((error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                bestSellers: data,
            })
        });
    }



    render() {

        var { isLoaded, bestSellers } = this.state;

        if (!isLoaded){
            return <div>Loading...</div>
        }

        const labelsBestSellers = bestSellers.slice(0,10).map(bestSeller => bestSeller.game.name);

        const dataBestSellers = {
            labels: labelsBestSellers,
            datasets: [
                {
                    data: bestSellers.map(bestSeller => bestSeller.sales),
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#36a2eb', '#36a2eb', '#36a2eb'],
                    color: '#778DA9'
                }
            ],
            color: '#778DA9'
        }

        return (
            <div>

                <Bar color='#778DA9' options={options} data={dataBestSellers} />

            </div>
        )
    }

}

export default Charts;