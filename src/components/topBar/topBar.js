/**
* TODO:
* - DAR FIX NA IMAGEM DO LOGOTIPO
*/

import * as React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Paper from '@mui/material/Paper';

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
        width: '400px',
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
            width: '335px',
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
        >
            <Link to="/account">
                <MenuItem onClick={handleMenuClose} disableRipple>
                    <PersonIcon />
                    Detalhes da conta
                </MenuItem>
            </Link>
            <Link to="/library">
                <MenuItem onClick={handleMenuClose} disableRipple>
                    <LibraryBooksIcon />
                    Biblioteca
                </MenuItem>
            </Link>
            <Link to="/account">
                <MenuItem onClick={handleMenuClose} disableRipple>
                    <AccountBalanceWalletIcon />
                    Saldo:
                </MenuItem>
            </Link>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleMenuClose} disableRipple>
                <LogoutIcon />
                Logout
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
        >
            <MenuItem >
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <Badge
                        color="error"
                    >
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Wishlist</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge
                        badgeContent={17}
                        color="error"
                    >
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>ShoppingCart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircleIcon />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu >
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                style={{
                    background: '#0D1B2A',
                    color: '#C4C4C4',
                    height: "75px",
                }}
            >
                <Toolbar
                    sx={{
                        flexGrow: 1
                    }}
                >
                    {
                        //FIXME: COLOCAR UMA IMAGEM NA PASTA DAS IMAGENS E COLOCAR O CAMINHO NO SRC

                    }
                    <Paper variant="outlined">
                        <img src="" />
                    </Paper>

                    <Box sx={{ flexGrow: 1 }} />
                    <Search
                        style={{
                            background: '#C4C4C4',
                            color: '#0D1B2A',
                        }}
                    >
                        <SearchIconWrapper>
                            <SearchIcon
                                style={{
                                    marginLeft: '-5px',
                                }}
                            />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Pesquisar jogo..."
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ marginLeft: '-5px', }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <FavoriteIcon
                                sx={{
                                    color: '#415A77',
                                    ':hover': {
                                        color: '#C4C4C4'
                                    },
                                }}
                            />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <ShoppingCartIcon
                                    sx={{
                                        color: '#415A77',
                                        ':hover': {
                                            color: '#C4C4C4'
                                        },
                                    }}
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Button
                                aria-label="account of current user"
                                size="large"
                                edge="end"
                                sx={{
                                    bgcolor: '#C4C4C4', color: '#415A77',
                                    ':hover': {
                                        bgcolor: '#C4C4C4',
                                        color: '#415A77',
                                    },
                                    borderRadius: '20px',
                                    height: '40px'
                                }}
                                alignItems='center'
                                aria-controls={menuId}
                                aria-haspopup="true"
                                aria-expanded={isMenuOpen ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={handleProfileMenuOpen}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                <AccountCircleIcon style={{ marginRight: "10px", marginLeft: '-10px' }} />
                                {props.userAccount}
                            </Button>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
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