import * as React from 'react'
import './topbar.css'
import { COLOR_RICH_BLACK, COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM, COLOR_SHADOW_BLUE, } from '../utils/color'
import { FONT_SECUNDARY_SIZE } from '../utils/font'
import { BORDER_RADIUS_10PX, BORDER_RADIUS_20PX, BORDER_RADIUS_5PX } from '../utils/border'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { IconButton, Toolbar, Paper, Button, Divider, Menu, MenuItem, Badge, InputBase, Box, AppBar, Grid, CardMedia, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'
import ImageLogo from './imageLogo'
import Cookies from 'universal-cookie'
import { useState } from 'react'
import { searchApi } from '../../api'
import CartButton from '../utils/cartButton'
import WishlistButton from '../utils/wishlistButton'

const DESKTOP_ITEM_HEIGHT = '27px'
const MOBILE_ITEM_HEIGHT = '50px'
const TYPOGRAPHY_MARGIN_LEFT = '10px'
const MOBILE_ICON_BUTTON_STYLE = {
    marginLeft: '-10px',
    backgroundColor: 'transparent',
}
const MOBILE_ICON_BUTTON_COLOR = "inherit"

const Search = styled('div')(({ theme }) => ({
    height: '40px',
    position: 'relative',
    borderRadius: BORDER_RADIUS_20PX,
    background: COLOR_PLATINIUM,
    color: COLOR_RICH_BLACK,
    //marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '360px',
    [theme.breakpoints.up('lg')]: {
        width: '520px',
    },
    [theme.breakpoints.down('md')]: {
        width: '350px',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#415A77",
    height: '40px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '295px',
        [theme.breakpoints.up('md')]: {
            width: '455px',
        },
        [theme.breakpoints.down('md')]: {
            width: '285px',
        },
        marginLeft: '-5px',
    },
}))

export default function PrimarySearchAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event) => {

        if (props.user) {
            setAnchorEl(event.currentTarget)
        } else {
            document.location.href = "/login"
        }

    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleLogout = () => {

        const cookie = new Cookies();
        cookie.remove("clientEmail");
        cookie.remove("clientID",);

        setAnchorEl(null)
        handleMobileMenuClose()
        document.location.href = "/";
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }


    function renderMenuFunc(client) {
        if (client !== undefined && client !== null) {
            return (
                <div>
                    {renderMobileMenu}
                    {renderMenu}
                </div>
            )
        } else {
            return (
                <div>
                    {renderMobileMenu}
                </div>
            )
        }
    }

    function renderNameFunc(client) {

        if (client !== undefined && client !== null) {
            return client[0].name
        } else {
            return "Login"
        }
    }


    function renderArrowFunc(client) {

        if (client !== undefined && client !== null) {
            return <KeyboardArrowDownIcon />
        } else {
            return <KeyboardArrowRightIcon />
        }
    }

    let cartCounter
    if (props.userCart === null) {
        cartCounter = null
    } else {
        cartCounter = props.userCart.length
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',

            }}
            open={isMenuOpen}
            onClose={handleMenuClose}

            PaperProps={{
                style: {
                    backgroundColor: COLOR_PLATINIUM,
                    color: COLOR_BDAZZLED_BLUE,
                    borderRadius: BORDER_RADIUS_20PX,
                    marginTop: '10px',
                },
            }}
        >
            <Link to="/account">
                <MenuItem
                    onClick={handleMenuClose}
                    style={{
                        height: DESKTOP_ITEM_HEIGHT,
                        fontSize: FONT_SECUNDARY_SIZE
                    }}
                    disableRipple
                >
                    <p>Detalhes da conta</p>
                </MenuItem>
            </Link>
            <Link to="/library">
                <MenuItem
                    onClick={handleMenuClose}
                    style={{
                        height: DESKTOP_ITEM_HEIGHT,
                        fontSize: FONT_SECUNDARY_SIZE
                    }}
                    disableRipple
                >
                    <p>Biblioteca</p>
                </MenuItem>
            </Link>
            <MenuItem
                onClick={handleMenuClose}
                style={{
                    height: DESKTOP_ITEM_HEIGHT,
                    fontSize: FONT_SECUNDARY_SIZE
                }}
                disableRipple
            >
                {props.wallet && <p>Saldo: {props.wallet.coin}{props.wallet.balance.toFixed(2)}</p>}
            </MenuItem>
            <Divider
                variant="middle"
                sx={{ marginTop: 1.3 }}
            />
            <MenuItem
                onClick={handleLogout}
                style={{
                    height: DESKTOP_ITEM_HEIGHT,
                    fontSize: FONT_SECUNDARY_SIZE
                }}
                disableRipple
            >
                <p>Logout</p>
            </MenuItem>
        </Menu>
    )

    function renderMobileMenuFunc(client) {
        if (client !== undefined && client !== null) {
            return (
                <div>
                    <Link to="/">
                        <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                            <IconButton
                                color={MOBILE_ICON_BUTTON_COLOR}
                                style={MOBILE_ICON_BUTTON_STYLE}
                                disableRipple
                            >
                                <HomeIcon fontSize="small" />
                            </IconButton>
                            <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                                Página Principal
                            </p>
                        </MenuItem>
                    </Link>
                    <Link to="/account">
                        <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                            <IconButton
                                color={MOBILE_ICON_BUTTON_COLOR}
                                style={MOBILE_ICON_BUTTON_STYLE}
                                disableRipple
                            >
                                <PersonIcon fontSize="small" />
                            </IconButton>
                            <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                                Perfil
                            </p>
                        </MenuItem>
                    </Link>
                    <Link to="/wishlist">
                        <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                            <IconButton
                                color={MOBILE_ICON_BUTTON_COLOR}
                                style={MOBILE_ICON_BUTTON_STYLE}
                                disableRipple
                            >
                                <Badge
                                    color="error"
                                >
                                    <FavoriteIcon fontSize="small" />
                                </Badge>
                            </IconButton>
                            <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                                Lista de Desejos
                            </p>
                        </MenuItem>
                    </Link>
                    {
                        props.userCart &&
                        <Link to="/cart">
                            <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                                <IconButton
                                    color={MOBILE_ICON_BUTTON_COLOR}
                                    style={MOBILE_ICON_BUTTON_STYLE}
                                    disableRipple
                                >
                                    <Badge
                                        variant="dot" invisible={props.userCart.length <= 0}
                                        color="error"
                                    >
                                        <ShoppingCartIcon fontSize="small" />
                                    </Badge>
                                </IconButton>
                                <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                                    Carrinho
                                </p>
                            </MenuItem>
                        </Link>
                    }
                    <Link to="/library">
                        <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                            <IconButton
                                color={MOBILE_ICON_BUTTON_COLOR}
                                style={MOBILE_ICON_BUTTON_STYLE}
                                disableRipple
                            >
                                <LibraryBooksIcon fontSize="small" />
                            </IconButton>
                            <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                                Biblioteca
                            </p>
                        </MenuItem>
                    </Link>
                    <Divider
                        variant="middle"
                        sx={{ marginTop: 1.5 }}
                    />
                    <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}
                        onClick={handleLogout}
                    >
                        <IconButton
                            color={MOBILE_ICON_BUTTON_COLOR}
                            style={MOBILE_ICON_BUTTON_STYLE}
                            disableRipple
                        >
                            <LogoutIcon fontSize="small" />
                        </IconButton>
                        <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                            Logout
                        </p>
                    </MenuItem>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/">
                        <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                            <IconButton
                                color={MOBILE_ICON_BUTTON_COLOR}
                                style={MOBILE_ICON_BUTTON_STYLE}
                                disableRipple
                            >
                                <HomeIcon fontSize="small" />
                            </IconButton>
                            <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                                Página Principal
                            </p>
                        </MenuItem>
                    </Link>
                    <Divider
                        variant="middle"
                        sx={{ marginTop: 1.5 }}
                    />
                    <Link to="/login">
                        <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                            <IconButton
                                color={MOBILE_ICON_BUTTON_COLOR}
                                style={MOBILE_ICON_BUTTON_STYLE}
                                disableRipple
                            >
                                <LoginIcon fontSize="small" />
                            </IconButton>
                            <p style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                                Login
                            </p>
                        </MenuItem>
                    </Link>
                </div>
            )
        }
    }

    function renderDivider(suggestions, i) {
        if (i !== suggestions.length - 1) {
            return (
                <Divider
                    variant="middle"
                    style={{ height: "1px", backgroundColor: COLOR_SHADOW_BLUE }}
                />
            )
        } else {
            return null
        }
    }

    function renderPrice(suggestion) {
        let gamePrice
        if (suggestion.price === 0) {
            return (
                <Grid item xs={12} style={{ fontSize: "20px" }}>
                    <Typography
                        sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            maxWidth: '290px',
                            color: COLOR_BDAZZLED_BLUE,
                            fontSize: '20px',
                        }}
                        variant="p"
                    >
                        Gratuito
                    </Typography>

                </Grid>
            )
        } else if (suggestion.discount === 0) {
            gamePrice = suggestion.price
            return (
                <Typography>
                    €{gamePrice}
                </Typography>
            )
        } else {
            gamePrice = suggestion.price - (suggestion.price * suggestion.discount)
            return (
                <Box>
                    <Grid item xs={12} style={{ fontSize: "20px" }}>
                        <Typography
                            sx={{
                                fontSize: '15px !important',
                                textDecoration: 'line-through'
                            }}
                        >
                            €{suggestion.price.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ fontSize: "20px" }}>
                        <Typography>
                            €{gamePrice.toFixed(2)}
                        </Typography>
                    </Grid>
                </Box>
            )
        }
    }

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }
            }
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}

            PaperProps={{
                style: {
                    height: 'auto',
                    width: '22ch',
                    backgroundColor: COLOR_PLATINIUM,
                    color: COLOR_BDAZZLED_BLUE,
                    borderRadius: BORDER_RADIUS_20PX,
                    marginTop: '60px'
                },
            }}
        >
            {renderMobileMenuFunc(props.user)}
        </Menu >

    )

    const [text, setText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const onChangeHandler = (text) => {

        setText(text)
        let matches = []

        searchApi.searchGameGet(text, (error, data) => {

            if (error) {
                console.error(error);
            }

            if (text.length >= 4) {
                matches = data.filter(game => {
                    const regex = new RegExp(`${text}`, "gi")
                    return game.name.match(regex)
                })
            }
            setSuggestions(matches.slice(0,10))
        })
    }

    let userId = new Cookies().get("clientID")

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                style={{
                    background: COLOR_RICH_BLACK,
                    color: COLOR_PLATINIUM,
                    height: "75px",
                }}
            >
                <Toolbar sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                        <ImageLogo />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon style={{ marginLeft: '-5px' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Pesquisar jogo..."
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={e => onChangeHandler(e.target.value)}
                            value={text}
                        />
                        {suggestions &&
                            <Box
                                style={{
                                    width: '100%',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    top: '55px',
                                    zIndex: '1',
                                    overflow: 'visible',
                                    borderRadius: BORDER_RADIUS_10PX,
                                    backgroundColor: COLOR_PLATINIUM,
                                    color: COLOR_BDAZZLED_BLUE
                                }}
                            >
                                {suggestions.map((suggestion, i) =>
                                    <Grid>
                                        <Grid
                                            key={i}
                                            //onClick={e => alert(suggestion.name)}
                                            container
                                            direction="row"
                                            justify="center"
                                            style={{
                                                padding: '10px',
                                                alignItems: 'center',
                                            }}>
                                            <Grid item xs={12} style={{ maxWidth: "30%" }}>
                                                <Grid>
                                                    <CardMedia
                                                        component="img"
                                                        image={suggestion.coverImage}
                                                        style={{
                                                            borderRadius: BORDER_RADIUS_5PX
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} style={{ maxWidth: "70%", paddingLeft: "5px", color: COLOR_BDAZZLED_BLUE }}>
                                                <Grid container >
                                                    <Grid item xs={12} style={{ fontSize: "20px" }}>
                                                        {suggestion.name}
                                                        {/* <CartButton gameId={suggestion.id}/> */}
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        {renderPrice(suggestion)}
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        {userId &&
                                                            <Grid>
                                                                <CartButton size="small" gameId={suggestion.id} />
                                                                <WishlistButton size="small" gameId={suggestion.id} />
                                                            </Grid>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                        {renderDivider(suggestions, i)}
                                    </Grid>
                                )}

                            </Box>
                        }
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                        {
                            props.user &&
                            <Link to="/wishlist">
                                <IconButton color="inherit">
                                    <FavoriteIcon
                                        sx={{
                                            color: COLOR_BDAZZLED_BLUE,
                                            ':hover': {
                                                color: COLOR_PLATINIUM,
                                            },
                                            mt: '6px',
                                        }}
                                        fontSize="medium"
                                    />
                                </IconButton>
                            </Link>
                        }
                        {
                            props.user &&
                            <Link to="/cart">
                                <IconButton
                                    color="inherit"
                                >
                                    <Badge
                                        badgeContent={cartCounter}
                                        color='error'
                                    >
                                        <ShoppingCartIcon
                                            sx={{
                                                color: COLOR_BDAZZLED_BLUE,
                                                ':hover': {
                                                    color: COLOR_PLATINIUM
                                                },
                                                mt: '6px',
                                            }}
                                            fontSize="medium"
                                        />
                                    </Badge>
                                </IconButton>
                            </Link>
                        }

                        <IconButton>
                            <Button
                                edge="end"
                                sx={{
                                    bgcolor: COLOR_BDAZZLED_BLUE,
                                    color: COLOR_PLATINIUM,
                                    ':hover': {
                                        bgcolor: COLOR_BDAZZLED_BLUE,
                                        color: COLOR_PLATINIUM,
                                    },
                                    borderRadius: BORDER_RADIUS_20PX,
                                    height: '40px',
                                    marginLeft: TYPOGRAPHY_MARGIN_LEFT,
                                    fontFamily: 'Viga',
                                }}
                                aria-controls={menuId}
                                aria-haspopup="true"
                                aria-expanded={isMenuOpen ? 'true' : undefined}
                                variant="contained"
                                onClick={handleProfileMenuOpen}
                                endIcon={renderArrowFunc(props.user)}
                            >
                                <Paper sx={{
                                    width: '30px',
                                    backgroundColor: 'transparent',
                                    marginTop: '11px',
                                    marginRight: '5px',
                                    marginLeft: '-10px',
                                    boxShadow: 'none',
                                }}
                                >
                                    {
                                        props.user && <img src={props.user[0].picture} alt="" height='30px' />
                                    }
                                </Paper>
                                <p
                                    style={{
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        maxWidth: '150px',
                                    }}
                                >
                                    {renderNameFunc(props.user)}
                                </p>
                            </Button>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                        <IconButton
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {renderMenuFunc(props.user)}
        </Box>
    )
}