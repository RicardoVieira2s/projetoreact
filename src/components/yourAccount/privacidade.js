import React from 'react'
import './yourAccount.css'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_3 } from '../utils/border'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

export default function privacidade() {
    
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
            <Card>
                <CardHeader
                    title="Privacidade"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Password"
                                name="Password"
                                required
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <FormControlLabel
                                style={{ padding: '12px' }}
                                control={<Switch defaultChecked />}
                                label="Subscrição newsletter"
                                labelPlacement="start"
                            />
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