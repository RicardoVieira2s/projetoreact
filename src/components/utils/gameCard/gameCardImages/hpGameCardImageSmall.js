import CardMedia from '@mui/material/CardMedia'

export default function GameImage({ cover_image }) {

    return (
        <CardMedia
            component="img"
            image={cover_image}
            alt=""
            sx={{
                height: "135px",
                '&:hover, &:focus': {
                    transform: 'scale(1.1)',
                    transition: 'all .2s ease-in-out',
                    cursor: 'pointer',
                },
            }}
        />
    )
}