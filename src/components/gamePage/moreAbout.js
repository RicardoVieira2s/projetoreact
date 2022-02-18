import { Grid } from '@mui/material'
import RenderIfEmpty from '../utils/messageError'
import GameCardMedium from "../utils/gameCard/gameCardMedium"

export default function MoreAbout({ publisherGames, gameId }) {

    return (
        <Grid
            container
            alignItems={'center'}
            justifyContent={'center'}
        >

            {RenderIfEmpty(publisherGames.length, "Sem jogos na a apresentar")}
            {publisherGames.map((game, index) => {
                if (index >= 3) {
                    return null
                }
                if (game.id === gameId) {
                    return null
                }

                if (game.state !== "inactive") {
                    return <GameCardMedium key={index} game={game} />
                }
                return null
            }
            )}
        </Grid>
    )
}