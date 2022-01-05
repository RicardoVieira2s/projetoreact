import React from 'react'
import './yourStore.css'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_3 } from '../utils/border'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Historico() {
    
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

    //user infos
    const user = {
        id: '',

        accordionInfo: {
            title: 'title',
            caption: 'caption',
            info: 'info',
        }
    }

    const [expanded, setExpanded] = React.useState(false)

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <form
            autoComplete="off"
            noValidate
        >
            <Card>
                <CardHeader
                    title="Histórico de compras"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <Accordion
                                expanded={expanded === 'panel1'}
                                onChange={handleChangeAccordion('panel1')}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {user.accordionInfo.title}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {user.accordionInfo.caption}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {user.accordionInfo.info}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'}
                                onChange={handleChangeAccordion('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {user.accordionInfo.title}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {user.accordionInfo.caption}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {user.accordionInfo.info}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'}
                                onChange={handleChangeAccordion('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {user.accordionInfo.title}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {user.accordionInfo.caption}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {user.accordionInfo.info}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'}
                                onChange={handleChangeAccordion('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {user.accordionInfo.title}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {user.accordionInfo.caption}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {user.accordionInfo.info}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
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