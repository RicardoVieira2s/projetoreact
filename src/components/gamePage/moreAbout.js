import Image from "./image"
import { Card, Grid } from '@mui/material'
import { BORDER_RADIUS_5PX } from '../utils/border'

export default function MoreAbout({ cover_image }) {

    return (
        <Grid
            container
            style={{
                padding: "20px",
            }}
        >
            <Grid item xs={12} md={4}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <Card
                    sx={{
                        width: '400px',
                        borderRadius: BORDER_RADIUS_5PX,
                        margin: "15px",
                    }}
                >
                    <Image
                        cover_image={"https://wallpapercave.com/wp/wp1810702.png"}
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={4}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <Card
                    sx={{
                        borderRadius: BORDER_RADIUS_5PX,
                        margin: "15px",
                        width: '400px',
                    }}
                >
                    <Image
                        cover_image={"https://images3.alphacoders.com/120/thumb-1920-1202248.jpg"}
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={4}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <Card
                    sx={{
                        borderRadius: BORDER_RADIUS_5PX,
                        margin: "15px",
                        width: '400px',
                    }}
                >
                    <Image
                        cover_image={"https://wallpaperaccess.com/full/2002262.jpg"}
                    />
                </Card>
            </Grid>
        </Grid >
    )
}