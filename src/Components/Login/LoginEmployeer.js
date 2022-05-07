import { Button, TextField } from "@material-ui/core";
import React from "react";

export const LoginEmployeer = () => {
  return (
    <div>
      <div className="container-form-login container-text-contact">
        <div className="section">
          <h1 className="title-main title-contact">Ya tienes cuenta de empresa? Inicia sesión</h1>

        </div>
        <div className="contenedor-Formulario">
          <form className="contact-form">
            <input type="hidden" name="contact_number" />
            <TextField
              fullWidth
              type="text"
              name="correo"
              required
              label="Ingresa tu correo"
              color="primary"
            />

            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Escribe tu contraseña"
              type="password"
              name="password"
              required
              color="primary"
            />


            <div className="container-btnContact">
              <Button
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
                className="buttonWork btnGit btnContact"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
