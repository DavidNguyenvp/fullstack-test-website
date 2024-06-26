import React, { useState } from "react";
import { Menu  as NavMenu} from "@/types/app";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { PAGE_MENU } from "./constant";
import Link from "next/link";
import {
  Logo,
  NavBarContainer,
  AppBarContainer,
  ToolBarContainer,
} from "./NavBar.styles";

const subMenus = ["Categories", "Collections", "Resources"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [activeMenu, setActiveMenu] = useState<NavMenu>(PAGE_MENU[0]);

  const [subMenu, setOpenSubMenu] = useState<Boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClickMenu = (_: React.MouseEvent<HTMLElement>, menu: NavMenu) => {
    setActiveMenu(menu);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpenSubMenu(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavBarContainer>
      <AppBarContainer position="static">
        <Logo>
          <Image src="/images/ape.png" alt="logo" width={100} height={110} />
        </Logo>
        <ToolBarContainer disableGutters>
          <Box className="menu-button">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Image
              src="/images/ape.png"
              alt="logo"
              height={60}
              width={50}
              style={{ marginLeft: 16 }}
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGE_MENU.map((page) => (
                <Link key={page.id} href={page.link}>
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box className="horizontal-menu">
            {PAGE_MENU.map((page) => (
              <Link
                key={page.id}
                href={page.link}
                className={`menu-item ${activeMenu.id === page.id ? "active" : ""}`}
                onClick={(event) => handleClickMenu(event, page)}
              >
                <Typography className="menu-text" textAlign="center">
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </ToolBarContainer>

        <ToolBarContainer disableGutters sx={{ background: "rgb(248,245,240)", height: 60 }}>
          <Box className="horizontal-menu">
            {activeMenu.subMenu.map((page) => (
              <Link
                key={page.id}
                href={page.link}
                className={`menu-item ${activeMenu.id === page.id ? "active" : ""}`}
              >
                <Typography className="menu-text" textAlign="center">
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </ToolBarContainer>
      </AppBarContainer>
    </NavBarContainer>
  );
}
export default NavBar;
