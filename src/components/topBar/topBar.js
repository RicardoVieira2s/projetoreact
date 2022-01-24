import * as React from 'react'
import './topbar.css'
import { COLOR_RICH_BLACK, COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { FONT_SECUNDARY_SIZE } from '../utils/font'
import { BORDER_RADIUS_20PX } from '../utils/border'
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import { IconButton, Toolbar, Paper, Button, Divider, Menu, MenuItem, Badge, InputBase, Box, AppBar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LogoutIcon from '@mui/icons-material/Logout'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'
import ImageLogo from './imageLogo'
import { makeStyles } from '@material-ui/core/styles'

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
    borderRadius: '20px',
    background: COLOR_PLATINIUM,
    color: COLOR_RICH_BLACK,
    marginRight: theme.spacing(1),
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
        // vertical padding + font size from searchIcon
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
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
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
                <p>Saldo: {props.userBalance.coin}{props.userBalance.amount}</p>
            </MenuItem>
            <Divider
                variant="middle"
                sx={{ marginTop: 1.3 }}
            />
            <MenuItem
                onClick={handleMenuClose}
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
            <Link to="/home">
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
            <Link to="/cart">
                <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                    <IconButton
                        color={MOBILE_ICON_BUTTON_COLOR}
                        style={MOBILE_ICON_BUTTON_STYLE}
                        disableRipple
                    >
                        <Badge
                            variant="dot" invisible={props.userCart.count <= 0}
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
            <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
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
        </Menu >
    )
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

                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
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
                        <Link to="/cart">
                            <IconButton
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={props.userCart.count}
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
                                endIcon={<KeyboardArrowDownIcon />}

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
                                    <img src="/images/avatar-Man-1.png" alt="" height='30px' />
                                </Paper>
                                <p
                                    style={{
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        maxWidth: '150px',
                                    }}
                                >
                                    {props.userAccount.name}
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
            {renderMobileMenu}
            {renderMenu}
        </Box>
    )
}