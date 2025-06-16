import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <IconButton component={Link} to="/" color="inherit" aria-label="home">
          <HomeIcon sx={{ display: { xs: "block", sm: "none" }}}/>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Home
          </Typography>
        </IconButton>
        <IconButton
          component={Link}
          to="/about"
          color="inherit"
          aria-label="home"
        >
          <InfoIcon sx={{ display: { xs: "block", sm: "none" }}} />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            About
          </Typography>
        </IconButton>
        <IconButton
          component={Link}
          to="/projects"
          color="inherit"
          aria-label="projects"
        >
          <WorkIcon sx={{ display: { xs: "block", sm: "none" }}} />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Projects
          </Typography>
        </IconButton>
        <IconButton
          component={Link}
          to="/contact"
          color="inherit"
          aria-label="contact"
        >
          <ContactPageIcon sx={{ display: { xs: "block", sm: "none" }}}/>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Contact
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
