import {
  DeleteForever,
  Fingerprint,
  ControlPointIcon,
  EditLocation,
} from "@mui/icons-material";
import { Button, ButtonGroup, Fab, IconButton } from "@mui/material";
import React from "react";
const ButtonComponent = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button variant="contained">Variant contained</Button>
      <Button variant="outlined">Variant outlined</Button>
      <Button color="secondary">Color change</Button>
      <Button color="error" href="http://www.arfat.xyz/">
        With href
      </Button>
      <Button disabled>Disabled</Button>

      {/* button size  */}
      <div>
        <Button variant="outlined" size="large">
          Size
        </Button>
        <Button variant="outlined" size="medium">
          Size
        </Button>
        <Button variant="outlined" size="small">
          Size
        </Button>
      </div>

      {/* button with icon  */}
      <div className="">
        <Button endIcon={<DeleteForever />} variant="contained">
          End Icon
        </Button>
        <Button startIcon={<DeleteForever />} variant="contained" color="error">
          Start Icon
        </Button>
      </div>
      <div>
        <h1>Icon button </h1>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <IconButton color="success">
          <Fingerprint />
        </IconButton>
      </div>
      <div>
        <h1>custom css</h1>
        <Button variant="contained" style={{ backgroundColor: "pink" }}>
          Custom color
        </Button>
      </div>
      <div>
        <h1>Buttton with click</h1>
        <Button onClick={console.log("arfat")}>arfat</Button>
      </div>
      <div>
        <h1>Group button</h1>
        <ButtonGroup variant="outlined" sx={{ backgroundColor: "yellow" }}>
          <Button>ONe</Button>
          <Button variant="contained" color="error">
            two
          </Button>
          <Button>three</Button>
        </ButtonGroup>
      </div>
      <div>
        <h1>Floating Action Button (FAB)</h1>
        <Fab>Arfat </Fab>
        <Fab color="primary">
          <EditLocation />
        </Fab>
      </div>
    </div>
  );
};

export default ButtonComponent;
