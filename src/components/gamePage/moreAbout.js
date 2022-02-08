import Image from "./image"
import { Card, Grid } from '@mui/material'
import { BORDER_RADIUS_5PX } from '../utils/border'

export default function MoreAbout({ cover_image }) {

    return (
        <Grid
            container
        >
            <Grid xs={12} md={4}>
                <Card
                    sx={{
                        borderRadius: BORDER_RADIUS_5PX,
                        margin: "15px",
                    }}
                >
                    <Image
                        cover_image={"https://wallpapercave.com/wp/wp1810702.png"}
                    />
                </Card>
            </Grid>
            <Grid xs={12} md={4}>
                <Card
                    sx={{
                        borderRadius: BORDER_RADIUS_5PX,
                        margin: "15px",
                    }}
                >
                    <Image
                        cover_image={"https://images3.alphacoders.com/120/thumb-1920-1202248.jpg"}
                    />
                </Card>
            </Grid>
            <Grid xs={12} md={4}>
                <Card
                    sx={{
                        borderRadius: BORDER_RADIUS_5PX,
                        margin: "15px",
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