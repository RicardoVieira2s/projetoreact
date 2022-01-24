import DownloadIcon from '@mui/icons-material/Download'
import { IconButton, Typography } from '@mui/material'
import { COLOR_BDAZZLED_BLUE } from '../utils/color'
import { makeStyles } from '@material-ui/core/styles'
import { dateToString } from './date'

const useStyles = makeStyles(() => ({
    iconButton: {
        right: 0,
        position: 'absolute',
        marginRight: '13px',
        color: COLOR_BDAZZLED_BLUE,
    },
    typography: {
        paddingRight: "13px",
        color: COLOR_BDAZZLED_BLUE,
        right: 0,
        position: 'absolute',
    },
}))

export default function RenderDownloadButton(state, url, releaseDate) {
    const classes = useStyles()

    if (state === "active") {
        return <IconButton
            className={classes.iconButton}
            onClick={() => window.open(url, "_blank")}
        >
            <DownloadIcon />
        </IconButton>
    }
    else {
        return <Typography
            className={classes.typography}
            variant="p"
        >
            {dateToString(releaseDate)}
        </Typography>
    }
}