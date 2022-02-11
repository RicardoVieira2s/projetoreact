import React from 'react'
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { COLOR_PLATINIUM, COLOR_RICH_BLACK } from '../utils/color'
import { makeStyles } from '@material-ui/core/styles'
import InvoiceButton from '../utils/invoiceButton'
import jsPDF from 'jspdf'

const useStyles = makeStyles(() => ({
    accordion: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_RICH_BLACK,
    },
}))

export default function HistoryList({ history, index }) {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)
    let total = 0

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    function printDocument() {
        let totalOfGames = 0
        const positionX = 25
        const doc = new jsPDF()
        let lastGamePositionY = 0

        doc.text("GOOFR STORE", 10, 10);
        doc.text("Data de compra: " + history.purchaseDate, positionX, 30)
        doc.text("Nif: " + history.vatId, positionX, 40)
        doc.text("Número de jogos: " + history.games.length, positionX, 50)

        history.games.forEach((game, index) => {
            totalOfGames += game.price * (1 - game.discount)
            const spacing = 30
            const positionY = 60 + ((index + 1) * spacing)

            doc.text("Jogo: " + game.name, positionX, positionY)
            doc.text("Preço : €" + game.price.toFixed(2), positionX, positionY + 10)
            doc.text("Desconto : " + game.discount * 100 + "%", positionX, positionY + 20)
            if (history.games.length - 1 === index)
                lastGamePositionY = positionY + 20
        })
        doc.text("Total : €" + totalOfGames.toFixed(2), positionX, lastGamePositionY + 10)
        doc.output('dataurlnewwindow')
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
                    {history.purchaseDate}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    NIF: {history.vatId}
                    <br />
                    <br />
                </Typography>
                <Typography>
                    Número de jogos comprados: {history.games.length} jogo(s)
                    <br />
                    <br />
                </Typography>
                {history.games.map((game, index) => {
                    total += game.price * (1 - game.discount)
                    return <Typography key={index} >
                        Jogo: {game.name}
                        <br />
                        Preço: €{game.price.toFixed(2)}
                        <br />
                        Desconto: {game.discount * 100} %
                    </Typography>
                }
                )}
                <Typography>
                    <br />
                    Total: €{total.toFixed(2)}
                </Typography>
            </AccordionDetails>
            <InvoiceButton
                name="Guardar fatura"
                onClick={e => printDocument()}
            />
        </Accordion >
    )
}