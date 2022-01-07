import CardMedia from '@mui/material/CardMedia'

export default function GameImage({ cover_image }) {

    return (
        <CardMedia
            component="img"
            height="300"
            image={cover_image}
            alt=""
            sx={{
                '&:hover, &:focus': {
                    transform: 'scale(1.05)',
                    transition: 'all .2s ease-in-out',
                },
            }}
        />
    )
}