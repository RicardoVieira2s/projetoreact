import CardMedia from '@mui/material/CardMedia'

export default function Image({ cover_image }) {

    return (
        <CardMedia
            component="img"
            height= "230px"
            image={cover_image}
            alt=""
        />
    )
}