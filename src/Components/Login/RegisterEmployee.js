import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRef } from "react";
import { TitleText } from "../TitleText";

const paises = [
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

export const RegisterEmployee = () => {
  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);

  const nombrePostulante = useRef();
  const pais = useRef();
  const foto = useRef();
  const email = useRef();
  const password = useRef();
  const urlLinkedin = useRef();
  const descripcion = useRef();
  const perfilprofesional = useRef();
  const formacionAcademica = useRef();

  const signup = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreEmpresa: nombrePostulante.current.value,
        pais: pais.current.value,
        logo: foto.current.value,
        emailAdmin: email.current.value,
        passwordAdmin: password.current.value,
        urlLinkedin: urlLinkedin.current.value,
        descripcion: descripcion.current.value,
        perfilprofesional: perfilprofesional.current.value,
        formacionAcademica: formacionAcademica.current.value,
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
          <TitleText text="Registrate para nuevas oportunidades laborales" />
        </div>
        <Grid container spacing={9}>
          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              Nombre y apellido
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              ¿Tu empresa ya existe en Job search App? No crees un duplicado.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={nombrePostulante}
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
                onChange={handleChange}
                rel={pais}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                input={<OutlinedInput style={{ width: 400 }} />}
              >
                <MenuItem value="">
                  <span>Selecciona</span>
                </MenuItem>
                {paises.map((name) => (
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
              Numero de telefono
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Agrega tu teléfono para asegurarte de no perder una oportunidad de
              empleo.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={email}
              style={{ width: 400 }}
              type="text"
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
              Foto
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Mínimo 200x200 px, en formato cuadrado (por ejemplo, el logo que
              usas para Twitter o Facebook).
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <Button variant="outlined" component="label">
              Seleccionar una imagen
              <input type="file" hidden rel={foto} />
            </Button>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              E-mail
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Te enviaremos semanalmente nuevos empleos que coincidan con tus
              preferencias, y podrás recibir invitaciones a empleos por parte de
              empresas.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={email}
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
              Contraseña
            </InputLabel>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              style={{ width: 400 }}
              rel={password}
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
              <LinkedInIcon color="primary" /> URL del perfil de tu Linkedin
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
              Descripción profesional
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Un texto corto y específico que te distinguen como profesional.
              Por ejemplo: "Desarrollador Android", "Coach Ágil" o "Diseñador
              UI"
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

          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              Perfil profesional y experiencia laboral
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Los cambios que realices aquí aplicarán para tus futuras
              postulaciones.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={perfilprofesional}
              type="text"
              style={{ width: 400 }}
              multiline
              margin="dense"
              className="input1-form"
              id="component-outlined"
              rows={4}
            />
          </Grid>

          <Grid item xs={6} className="cont-grid">
            <InputLabel
              className="label-text-form"
              htmlFor="component-outlined"
            >
              Formación académica y estudios
            </InputLabel>
            <Typography className="text-help" variant="body1" gutterBottom>
              Los cambios que realices aquí aplicarán para tus futuras
              postulaciones.
            </Typography>
          </Grid>
          <Grid item xs={6} className="cont-grid">
            <OutlinedInput
              rel={formacionAcademica}
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
