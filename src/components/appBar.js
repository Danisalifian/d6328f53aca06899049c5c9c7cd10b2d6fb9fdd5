import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function appbar() {
  return (
    <div>
      <AppBar elevation={0}>
        <ToolBar className="bg-cultured">
          <IconButton edge="start" className="color-charcoal">
            <ArrowBackIcon />
          </IconButton>
          <Typography className="color-charcoal">
            <small>Alamat Pengataran</small>
          </Typography>
        </ToolBar>
        <ToolBar className="bg-cultured">
          <Typography variant="h6" className="color-charcoal">
            Calendar slider
          </Typography>
        </ToolBar>
      </AppBar>
      <ToolBar />
      <ToolBar />
    </div>
  );
}

export default appbar;
