import React from 'react'
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { COLOR_PLATINIUM, COLOR_RICH_BLACK } from '../utils/color'
import { makeStyles } from '@material-ui/core/styles'
import InvoiceButton from '../utils/invoiceButton'
import { dateToString } from '../utils/date'
import jsPDF from 'jspdf'

const useStyles = makeStyles(() => ({
    accordion: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_RICH_BLACK,
    },
}))

function printDocument() {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.output('dataurlnewwindow');
    doc.save("download.pdf");
}

export default function HistoryList({ history, index }) {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <Accordion
            expanded={expanded === index}
            onChange={handleChangeAccordion(index)}
            className={classes.accordion}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography sx={{ width: '50%' }}>
                    {dateToString(history.purchaseDate)}
                </Typography>
                <Typography sx={{ width: '33%' }}>
                    {history.games.length} jogo(s)
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {history.games.map((game, index) =>
                    <Typography key={index}>
                        Id do jogo:
                        <br />
                        {game.idGame}
                        <br />
                        ----------------------------------
                    </Typography>
                )}
            </AccordionDetails>
            <InvoiceButton
                name="Guardar fatura"
                onClick={e => printDocument()}
            />
        </Accordion>
    )
}