import * as React from 'react';
import './Topbar.css';
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
import { height } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: alpha(theme.palette.common.white, 0.15), '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '50%',
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

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '75ch',
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
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
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
                    <Badge badgeContent={17} color="error">
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
        <Box sx={{ flexGrow: 1,  height: 90,}}>
            <AppBar position="static" style={{ background: '#0D1B2A', color: '#C4C4C4' ,  height: "100%",}} >
                <Toolbar sx={{ flexGrow: 1}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#415A77' }}
                    >
                        GOOFRSTORE
                    </Typography>
                    <Search
                        style={{ background: '#C4C4C4', color: '#0D1B2A' }}
                    >
                        <SearchIconWrapper>
                            <SearchIcon
                                sx={{
                                    bgcolor: '#415A77', color: '#000',
                                    borderRadius: '20px',
                                }}
                            />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Pesquisar jogo..."
                            inputProps={{ 'aria-label': 'search' }}
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
                                        bgcolor: '#415A77',
                                        color: '#C4C4C4'
                                    },
                                    borderRadius: '20px',

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
                                <AccountCircleIcon style={{ marginRight: "15px" }} />
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