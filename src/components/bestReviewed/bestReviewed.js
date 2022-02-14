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
import { COLOR_SHADOW_BLUE } from '../utils/color'
import Titles from '../utils/Title'
import SubTitles from '../utils/subTitle'
import { topReviewedGames } from '../../api'

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
            text: 'Jogos com melhor média de avaliações',
            color: '#778DA9',
            padding:{
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
                text: 'Média de Estrelas',
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
            topReviews: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        topReviewedGames.topReviewsGet((error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                topReviews: data,
            })
        });
    }



    render() {

        var { isLoaded, topReviews } = this.state;


        const labelsMostReviewedGames = topReviews.slice(0,10).map(review => review.game.name);

        console.log("teste", labelsMostReviewedGames);

        const dataMostReviewedGames = {
            labels: labelsMostReviewedGames,
            datasets: [
                {
                    data: topReviews.map(review => review.average),
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#36a2eb', '#36a2eb', '#36a2eb'],
                    color: '#778DA9'
                }
            ],
            color: '#778DA9'
        };

        const labelsMostPlayedGames = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        const dataMostPlayedGames = {
            labels: labelsMostPlayedGames,
            datasets: [
                {
                    data: labelsMostPlayedGames.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#36a2eb', '#36a2eb', '#36a2eb'],
                    color: '#778DA9'
                }
            ],
            color: '#778DA9'
        };

        const labelsMostOwnedGames = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        const dataMostOwnedGames = {
            labels: labelsMostOwnedGames,
            datasets: [
                {
                    data: labelsMostOwnedGames.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#36a2eb', '#36a2eb', '#36a2eb'],
                    color: '#778DA9'
                }
            ],
            color: '#778DA9'
        };

        return (
            <div>
                <Bar options={options} data={dataMostPlayedGames} />

                <SubTitles
                    name={'Jogos com melhor média de avaliações'}
                    color={COLOR_SHADOW_BLUE}
                />
                <Bar options={options} data={dataMostOwnedGames} />
            </div>
        )
    }

}


export default Charts;
