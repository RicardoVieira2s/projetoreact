import React from 'react'
import './yourAccount.css'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_2 } from '../utils/border'
import { Card, CardContent, Grid } from '@mui/material'
import Title from '../utils/Title'
import { makeStyles } from '@material-ui/core/styles'
import mocksHistory from '../__mocks__/history'
import HistoryList from './historyList'
import RenderIfEmpty from '../utils/messageError'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_BDAZZLED_BLUE,
        borderRadius: BORDER_RADIUS_2,
        paddingRight: '15px',
        paddingLeft: '15px',
    },
}))

export default function Historico(props) {
    const classes = useStyles()

    return (

            <Card className={classes.container}>
                <Title
                    name='Histórico de Compras'
                    color={COLOR_BDAZZLED_BLUE}
                />
                <CardContent>
                    <Grid
                        item
                        md={12}
                        xs={12}
                    >
                        {RenderIfEmpty(mocksHistory.length, "Sem Histórico")}
                        {mocksHistory.map((history) =>
                            <HistoryList
                                key={history.id}
                                history={history}
                            />
                        )}
                    </Grid>
                </CardContent>
            </Card>
    )
}