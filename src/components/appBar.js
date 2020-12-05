import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronDown from "mdi-react/ChevronDownIcon";
import Drawer from "@material-ui/core/Drawer";
import {
  ModalLocationWrapper,
  InputIcon,
} from "../components/modal/modalLocation";
import CloseIcon from "@material-ui/icons/Close";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Autocomplete from "../components/modal/autocomplete";
import CalendarScroll from "../components/calendarScroll";
import GooglePowered from "../assets/img/powered-google.png";

function AppBars() {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <AppBar elevation={0}>
        <ToolBar className="bg-cultured">
          <IconButton edge="start" className="color-charcoal">
            <ArrowBackIcon />
          </IconButton>
          <div>
            <Typography className="color-charcoal">
              <small className="text-sm">ALAMAT PENGANTARAN</small>
            </Typography>

            <div className="is-btn" onClick={toggleDrawer("bottom", true)}>
              <div className="color-charcoal is-flex is-item-center">
                <p className="text-lg font-semibold">Tokopedia Tower</p>{" "}
                <ChevronDown className="ml-1 color-tart-orange" />
              </div>
            </div>
          </div>
        </ToolBar>
        <ToolBar className="bg-cultured is-border-bottom p-0 is-content-center">
          <CalendarScroll />
        </ToolBar>
      </AppBar>
      <ToolBar />
      <ToolBar />

      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}>
        <ModalLocationWrapper>
          <div className="mt-3 mr-3">
            <CloseIcon
              className="is-right is-btn"
              onClick={toggleDrawer("bottom", false)}
            />
          </div>
          <div className="container px-3 mt-6 py-4">
            <h1 className="text-2xl font-bold color-charcoal">
              Cek makanan yang tersedia di lokasi kamu!
            </h1>
            <div className="mt-6">
              <InputIcon>
                <LocationOnIcon />
              </InputIcon>
              <Autocomplete
                options={[
                  {
                    addressName: "Kulina",
                    addressDetail:
                      "Jalan Tuludong Atas 28, Senayan, Kebayoran Baru",
                  },
                  {
                    addressName: "Pancoran Riverside Appartement",
                    addressDetail:
                      "RT.6/RW.1, Pengadegan Pancoran, South Jakarta",
                  },
                  {
                    addressName: "Jalan Tuludong Atas 28",
                    addressDetail:
                      "Jalan Tuludong Atas 28, Senayan, Kebayoran Baru",
                  },
                  {
                    addressName: "Block71 Jakarta",
                    addressDetail:
                      "Ariobimo Central, South Jakarta, RT.9/RW.4, East Jakarta",
                  },
                ]}
              />
            </div>
            <div className="is-flex">
              <img
                src={GooglePowered}
                className="img-label"
                alt="powered-by-google"
              />
            </div>
          </div>
        </ModalLocationWrapper>
      </Drawer>
    </div>
  );
}

export default AppBars;
