import React, { Component } from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import { Grid, Box } from '@mui/material'
import RenderIfEmpty from '../utils/messageError'
import WishlistGames from './wishlistGames'
import CustomButton from '../utils/customButton'
import { wishlistApi } from '../../api'
import Cookies from 'universal-cookie'

class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        
        const cookies = new Cookies().get('clientID');
        
        wishlistApi.wishlistGet({ id: cookies }, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                games: data,
            })
        });
    }

    render() {
        var { games, isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div style={{
                paddingBottom: "40px",
            }}>
                <Title
                    name={'Lista de desejos'}
                    color={COLOR_SHADOW_BLUE}
                />
                <Box style={{
                    paddingTop: '15px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: "90%",
                }}>
                    <CustomButton
                        name={"Remover todos"}
                    />
                </Box>
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                >
                    {RenderIfEmpty(games.length, "Sem jogos na wishlist")}
                    {games.map((game, i) =>
                        <WishlistGames key={game.id} game={game} index={i + 1} />
                    )}
                </Grid>
            </div>
        )
    }
}

export default WishList