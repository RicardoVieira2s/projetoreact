import React, { Component } from 'react'
import Rating from '@mui/material/Rating';
import { COLOR_BDAZZLED_BLUE } from './color'
import { reviewApi } from '../../api';

class StarsReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameId: this.props.gameId,
            rate: null
        };
    }

    componentDidMount() {
        let gameId = this.state.gameId
        let sum = 0
        let length = 0

        reviewApi.gameReviewsGet(gameId , (error, data) => {
            if (error) {
                console.error(error)
            }
            
            for( var i = 0; i < data.length; i++ ){
                if (data[i].stars === null ){
                    continue
                }

                sum += data[i].stars
                length ++
            }

        
            let gameAvg = length === 0 ? 0 : sum/length

            this.setState({
                rate: gameAvg
            })
        });
    }

    render() {

        return (
            <Rating
                name="simple-controlled"
                value={this.state.rate}
                precision={0.5}
                readOnly={true}
                sx={{
                    color: COLOR_BDAZZLED_BLUE,
                    borderColor: COLOR_BDAZZLED_BLUE,
                }}
            />

        )
    }
}
export default StarsReview