import React from 'react'
import './yourAccount.css'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
import { Box, Button, Card, CardContent, Divider, Grid } from '@mui/material'
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

    const button = {
        backgroundColor: COLOR_BDAZZLED_BLUE,
        color: COLOR_PLATINIUM,
        ':hover': {
            backgroundColor: COLOR_BDAZZLED_BLUE,
            color: COLOR_PLATINIUM,
        },
        borderRadius: BORDER_RADIUS_3,
        fontFamily: 'Viga',
    }

    return (
        <form
            autoComplete="off"
            noValidate
        >
            <Card className={classes.container}>
                <Title
                    name={'Histórico de Compras'}
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
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        style={button}
                        sx={{ height: '40px' }}
                    >
                        Save details
                    </Button>
                </Box>
            </Card>
        </form>
    )
}