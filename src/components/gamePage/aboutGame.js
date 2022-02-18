import React, { Component } from 'react'
import { CardContent, CardActions, Typography, Card, CardHeader, CardMedia, Grid } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import WishlistButton from '../utils/wishlistButton'
import CartButton from '../utils/cartButton'
import { dateToString } from '../utils/date'

class AboutGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {

        this.setState({
            isLoaded: true,
        })

    }

    render() {

        let { isLoaded } = this.state

        if (!isLoaded) {
            return <div>Loading....</div>
        }
        let gamePrice = this.props.game.price - (this.props.game.price * this.props.game.discount)
        let tags = this.props.tags.map(tag => tag.name).join(", ")
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"

            >
                <Card sx={{
                    maxWidth: 500,
                    backgroundColor: COLOR_PLATINIUM,
                    cursor: "pointer",
                }}
                    style={{ background: COLOR_PLATINIUM }}
                >
                    <CardHeader
                        subheader={tags}
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={this.props.game.coverImage}
                        alt=""
                    />
                    <CardContent>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Preço: €{this.props.game.price}
                        </Typography>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Desconto: {this.props.game.discount * 100}%
                        </Typography>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Final: €{gamePrice.toFixed(2)}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Data de lancamento: {dateToString(this.props.game.releaseDate)}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Publicadora: {this.props.publisher.name}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <WishlistButton gameId={this.props.game.id} />
                        <CartButton gameId={this.props.game.id} />
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}
export default AboutGame