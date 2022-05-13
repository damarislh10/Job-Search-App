import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../styles/RegisterEmployer.css";
import { TitleText } from "../TitleText";
import { useRef } from "react";
const names = [
  "Colombia",
  "Mexico",
  "Panama",
  "Perú",
  "Chile",
  "Venezuela",
  "Costa rica",
  "Estados unidos",
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

  const nombreEmpresa = useRef();
  const pais = useRef();
  const logo = useRef();
  const emailAdmin = useRef();
  const passwordAdmin = useRef();
  const urlLinkedin = useRef();
  const descripcion = useRef();

  const signup = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreEmpresa: nombreEmpresa.current.value,
        pais: pais.current.value,
        logo: logo.current.value,
        emailAdmin: emailAdmin.current.value,
        passwordAdmin: passwordAdmin.current.value,
        urlLinkedin: urlLinkedin.current.value,
        descripcion: descripcion.current.value,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error)),
    });
  };
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
    <Container sx={{ width: "40%" }}>
      <form onSubmit={signup} className="container-form">
        <div>
          <TitleText text="Registra tu empresa " />
        </div>
        <Grid container spacing={9}>
          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              Nombre de la empresa
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              ¿Tu empresa ya existe en Job search App? No crees un duplicado.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={nombreEmpresa}
              style={{ width: 400 }}
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              id="demo-multiple-name-label"
            >
              Pais
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Puedes publicar empleos en todos los países donde estamos
              presentes, independiente de tu ubicación.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <Select
                value={personName}
                rel={pais}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                input={<OutlinedInput style={{ width: 400 }} />}
              >
                <MenuItem value="">
                  <span>Selecciona</span>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    className="select-pais"
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              Logo de la empresa
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Mínimo 200x200 px, en formato cuadrado (por ejemplo, el logo que
              usas para Twitter o Facebook).
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <Button variant="outlined" component="label">
              Seleccionar una imagen
              <input type="file" hidden rel={logo} />
            </Button>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              E-mail de la cuenta de administrador
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Con esta cuenta tendrás acceso completo de administrador de la
              empresa y podrás agregar nuevos miembros al equipo.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={emailAdmin}
              style={{ width: 400 }}
              type="email"
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              Contraseña cuenta administrador
            </InputLabel>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              style={{ width: 400 }}
              rel={passwordAdmin}
              type="password"
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>

          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              <LinkedInIcon color="primary" /> URL del perfil de tu empresa en
              Linkedin
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Agrega el perfil de tu empresa y haz que tus empleos aparezcan
              automáticamente en los resultados de búsqueda en LinkedIn.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              type="text"
              rel={urlLinkedin}
              style={{ width: 400 }}
              placeholder="http://www.linkedin.com/yourcompany"
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>

          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              Descripción de la empresa
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              La pondremos al pie de todos tus empleos.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={descripcion}
              type="text"
              style={{ width: 400 }}
              multiline
              margin="dense"
              className="input1-form"
              id="component-outlined"
              rows={4}
            />
          </Grid>
          <div className="btn-register-company">
            <Button
              type="submit"
              variant="contained"
              className="buttonRegister"
            >
              Crear cuenta
            </Button>
          </div>
        </Grid>
      </form>
    </Container>
  );
};
