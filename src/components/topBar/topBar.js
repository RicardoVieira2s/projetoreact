import * as React from 'react';
import './topbar.css';
import {
    COLOR_RICH_BLACK,
    COLOR_OXFORD_BLUE,
    COLOR_BDAZZLED_BLUE,
    COLOR_SHADOW_BLUE,
    COLOR_PLATINIUM,
} from '../utils/color';

import {
    FONT_SECUNDARY_SIZE,
    FONT_FAMILY
} from '../utils/font';

import {
    BORDER_RADIUS_1
} from '../utils/border';

import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';

const DESKTOP_ITEM_HEIGHT = '27px'
const MOBILE_ITEM_HEIGHT = '15px'
const ICON_MARGIN_LEFT = '-10px'
const TYPOGRAPHY_MARGIN_LEFT = '10px'

const Search = styled('div')(({ theme }) => ({
    height: '40px',
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '360px',
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(2),
        width: '520px',
    },
    [theme.breakpoints.down('md')]: {
        width: '350px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

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
    },
}));

export default function PrimarySearchAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();

    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
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
                    borderRadius: BORDER_RADIUS_1,
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
                    <Typography style={{ fontFamily: FONT_FAMILY }}>
                        Detalhes da conta
                    </Typography>
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
                    <Typography>
                        Biblioteca
                    </Typography>
                </MenuItem>
            </Link>
            <Link to="/account">
                <MenuItem
                    onClick={handleMenuClose}
                    style={{
                        height: DESKTOP_ITEM_HEIGHT,
                        fontSize: FONT_SECUNDARY_SIZE
                    }}
                    disableRipple
                >
                    <Typography>
                        Saldo:
                    </Typography>
                </MenuItem>
            </Link>
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
                <Typography>
                    Logout
                </Typography>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
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
                    padding: '5px',
                    borderRadius: BORDER_RADIUS_1,
                    marginTop: '60px'
                },
            }}
        >
            <Link to="/">
                <MenuItem style={{ height: MOBILE_ITEM_HEIGHT }}>
                    <IconButton
                        color="inherit"
                        style={{ marginLeft: ICON_MARGIN_LEFT, backgroundColor: 'transparent' }}
                    >
                        <HomeIcon fontSize="small"/>
                    </IconButton>
                    <Typography style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                        Página Principal
                    </Typography>
                </MenuItem>
            </Link>
            <Link to="/account">
                <MenuItem style={{ height: MOBILE_ITEM_HEIGHT}}>
                    <IconButton
                        color="inherit"
                        style={{ marginLeft: ICON_MARGIN_LEFT, backgroundColor: 'transparent' }}
                    >
                        <PersonIcon fontSize="small" />
                    </IconButton>
                    <Typography style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                        Perfil
                    </Typography>
                </MenuItem>
            </Link>
            <MenuItem style={{ height: MOBILE_ITEM_HEIGHT}}>
                <IconButton
                    color="inherit"
                    style={{ marginLeft: ICON_MARGIN_LEFT, backgroundColor: 'transparent'   }}
                >
                    <Badge
                        color="error"
                    >
                        <FavoriteIcon fontSize="small" />
                    </Badge>
                </IconButton>
                <Typography style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                    Lista de Desejos
                </Typography>
            </MenuItem>
            <MenuItem style={{ height: MOBILE_ITEM_HEIGHT}}>
                <IconButton
                    aria-label="show 17 new notifications"
                    color="inherit"
                    style={{ marginLeft: ICON_MARGIN_LEFT, backgroundColor: 'transparent'   }}
                >
                    <Badge
                        variant="dot"
                        color="error"
                    >
                        <ShoppingCartIcon fontSize="small" />
                    </Badge>
                </IconButton>
                <Typography style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                    Carrinho
                </Typography>
            </MenuItem>
            <MenuItem style={{ height: MOBILE_ITEM_HEIGHT}}>
                <IconButton
                    color="inherit"
                    style={{ marginLeft: ICON_MARGIN_LEFT, backgroundColor: 'transparent'   }}
                >
                    <LibraryBooksIcon fontSize="small" />
                </IconButton>
                <Typography style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                    Biblioteca
                </Typography>
            </MenuItem>
            <MenuItem style={{ height: MOBILE_ITEM_HEIGHT}}>
                <IconButton
                    color="inherit"
                    style={{ marginLeft: ICON_MARGIN_LEFT, backgroundColor: 'transparent'   }}
                >
                    <LogoutIcon fontSize="small" />
                </IconButton>
                <Typography style={{ marginLeft: TYPOGRAPHY_MARGIN_LEFT }}>
                    Logout
                </Typography>
            </MenuItem>
        </Menu >
    );

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
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Paper sx={{ width: '150px' }}>
                            <img src="/images/store.png" />
                        </Paper>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search
                        style={{
                            background: COLOR_PLATINIUM,
                            color: COLOR_RICH_BLACK,
                        }}
                    >
                        <SearchIconWrapper>
                            <SearchIcon style={{ marginLeft: '-5px' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Pesquisar jogo..."
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ marginLeft: '-5px' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton color="inherit">
                            <FavoriteIcon
                                sx={{
                                    color: COLOR_BDAZZLED_BLUE,
                                    ':hover': {
                                        color: COLOR_PLATINIUM
                                    },
                                }}
                                fontSize="medium"
                            />
                        </IconButton>
                        <IconButton
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge
                                badgeContent={17}
                                color='error'
                            >
                                <ShoppingCartIcon
                                    sx={{
                                        color: COLOR_BDAZZLED_BLUE,
                                        ':hover': {
                                            color: COLOR_PLATINIUM
                                        },
                                    }}
                                    fontSize="medium"
                                />
                            </Badge>
                        </IconButton>
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
                                    borderRadius: BORDER_RADIUS_1,
                                    height: '40px',
                                    marginLeft: TYPOGRAPHY_MARGIN_LEFT,
                                    fontFamily: 'Viga',
                                }}
                                aria-controls={menuId}
                                aria-haspopup="true"
                                aria-expanded={isMenuOpen ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={handleProfileMenuOpen}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                <AccountCircleIcon
                                    style={{
                                        marginRight: "5px",
                                        marginLeft: ICON_MARGIN_LEFT
                                    }}
                                />
                                <Typography
                                    style={{
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        maxWidth: '150px',
                                    }}
                                >
                                    {props.userAccount}
                                </Typography>
                            </Button>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
    );
}