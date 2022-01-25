import React, { Component, useEffect, useState } from 'react'
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
            text: 'Jogos mais jogados nas últimas 2 semanas',
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
                text: 'Média de horas jogadas',
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
            games: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        console.log("12312313131")
        fetch('https://api.punkapi.com/v2/beers?food=taco')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    games: json,
                    isLoaded: true
                });
            })
            .catch((error) => console.error(error))
    }



    render() {

        const { isLoaded, games } = this.state;

        console.log("games", games)

        const labelsMostPlayedGames = games.map(game => game.name);

        const dataMostPlayedGames = {
            labels: labelsMostPlayedGames,
            datasets: [
                {
                    data: games.map(game => game.average_2weeks),
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#36a2eb', '#36a2eb', '#36a2eb'],
                    color: '#778DA9'
                }
            ],
            color: '#778DA9'
        };

        return (
            <div>
                <Bar options={options} data={dataMostPlayedGames} />
            </div>
        )
    }

}


export default Charts;
