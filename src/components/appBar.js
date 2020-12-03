import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function appbar() {
  return (
    <div>
      <AppBar>
        <ToolBar>
          <IconButton edge="start" color="inherit">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Alamat Pengataran</Typography>
        </ToolBar>
        <ToolBar>
          <Typography variant="h6">Calendar slider</Typography>
        </ToolBar>
      </AppBar>
      <ToolBar />
      <ToolBar />
    </div>
  );
}

export default appbar;
