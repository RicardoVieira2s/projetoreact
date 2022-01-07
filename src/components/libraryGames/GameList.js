import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
import LibraryGame from './libraryGames'
import games from '../__mocks__/games'
import { CardHeader, Grid } from '@mui/material'
import './libraryGames.css'
import DividerPages from '../utils/dividerPages'

export default function GameList(props) {

    return (
        <div class="libraryContentor">
            <CardHeader
                title="Biblioteca"
                titleTypographyProps={{
                    variant: 'h4',
                }}
                sx={{ marginLeft: '16px', paddingTop: '40px' }}
            />
            <DividerPages />
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
            >
                {games.map((game) =>
                    <LibraryGame key={game.id} game={game} />
                )}
            </Grid>
        </div>
    )
}
