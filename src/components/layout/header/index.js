import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";

function Header(props) {
  const { title } = props;

  return (
    <StickyHeader
      headerOnly={true}
      header={
        <Toolbar
          sx={{ borderBottom: 1, borderColor: "divider", background: "white" }}
        >
          <Button href="https://www.buymeacoffee.com/ankitpawar" size="small">
            Buy me a coffee
          </Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      }
    ></StickyHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
