import { Container } from "@mui/material";
import React from "react";

import { FormControl } from "@mui/material";
import {
  Button,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../../styles/RegisterEmployer.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const RegisterEmployer = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Container maxWidth="lg">
      <Typography
        color="info"
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, fontWeight: "bold" }}
      >
        Registra tu empresa
      </Typography>
      <div className="container-form">
        <div className="contenedor-Formulario">
          <form className="contact-form">
            <FormControl className="controller">
              <div className="row">
                <div className="col">
                  <InputLabel htmlFor="component-outlined">
                    Nombre de la empresa
                  </InputLabel>
                </div>
                <div className="col-2">
                  <OutlinedInput
                    margin="dense"
                    className="input1-form"
                    id="component-outlined"
                    label="Name"
                  />
                </div>
              </div>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: "98%" }}>
              <div className="row">
                <div className="col">
                  <InputLabel id="demo-multiple-name-label">Pais</InputLabel>{" "}
                </div>
                <div className="col-2">
                  <InputLabel id="demo-multiple-name-label">Select</InputLabel>
                  <Select
                    margin="dense"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    <MenuItem className="select-pais" selected>
                      Selecciona
                    </MenuItem>
                    <MenuItem className="select-pais">Colombia</MenuItem>

                    {/* {names.map((name) => (
                      <MenuItem
                        className="select-pais"
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))} */}
                  </Select>
                </div>
              </div>
            </FormControl>
            <FormControl>
              <div className="row">
                <div className="col">
                  <InputLabel htmlFor="component-outlined">
                    Logo de la empresa
                  </InputLabel>
                </div>
                <div className="col-2">
                  <Button variant="outlined" component="label">
                    Seleccionar una imagen
                    <input type="file" hidden />
                  </Button>
                </div>
              </div>
            </FormControl>
            <FormControl>
              <div className="row">
                <div className="col">
                  <InputLabel htmlFor="component-outlined">
                    E-mail de la cuenta de administrador
                  </InputLabel>
                </div>
                <div className="col-2">
                  <OutlinedInput
                    margin="dense"
                    className="input1-form"
                    id="component-outlined"
                    label="Name"
                  />
                </div>
              </div>
            </FormControl>
            <FormControl>
              <div className="row">
                <div className="col">
                  <InputLabel htmlFor="component-outlined">
                    <LinkedInIcon color="primary" /> URL del perfil de tu
                    empresa en Linkedin
                  </InputLabel>
                </div>
                <div className="col-2">
                  <OutlinedInput
                    margin="dense"
                    className="input1-form"
                    id="component-outlined"
                    label="Name"
                    rows={4}

                  />
                </div>
              </div>
            </FormControl>
            <FormControl>
              <div className="row">
                <div className="col">
                  <InputLabel htmlFor="component-outlined">
                    Descripción de la empresa
                  </InputLabel>
                </div>
                <div className="col-2">
                  <OutlinedInput
                    sx={{ mt: 2 }}
                    name="message"
                    required
                    color="primary"
                    label="Escribe tu mensaje"
                    multiline
                    rows={4}
                    col={3}
                  />
                </div>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    </Container>
  );
};
