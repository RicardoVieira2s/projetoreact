import Image from "./image"
import { Card, Grid } from '@mui/material'
import { BORDER_RADIUS_5PX } from '../utils/border'

export default function MoreAbout({ publisherGames }) {

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
                        '&:hover, &:focus': {
                            transform: 'scale(1.1)',
                            transition: 'all .2s ease-in-out',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Image
                        cover_image={publisherGames[0].coverImage}
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
                        '&:hover, &:focus': {
                            transform: 'scale(1.1)',
                            transition: 'all .2s ease-in-out',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Image
                        cover_image={publisherGames[1].coverImage}
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
                        '&:hover, &:focus': {
                            transform: 'scale(1.1)',
                            transition: 'all .2s ease-in-out',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Image
                        cover_image={publisherGames[2].coverImage}
                    />
                </Card>
            </Grid>
        </Grid >
    )
}