import React from 'react'
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { COLOR_PLATINIUM, COLOR_RICH_BLACK } from '../utils/color'
import { makeStyles } from '@material-ui/core/styles'
import InvoiceButton from '../utils/invoiceButton'
import { dateToString } from '../utils/date'

const useStyles = makeStyles(() => ({
    accordion: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_RICH_BLACK,
    },
}))

export default function HistoryList({ history }) {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <Accordion
            expanded={expanded === history.id}
            onChange={handleChangeAccordion(history.id)}
            className={classes.accordion}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {dateToString(history.purchaseDate)}
                </Typography>
                <Typography>
                    {history.games.length} jogo(s)
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {history.games.map((game) =>
                    <Typography>
                        Id do jogo: {game.idGame}
                    </Typography>
                )}
            </AccordionDetails>
            <InvoiceButton
                name="Guardar fatura"
            />
        </Accordion>
    )
}
