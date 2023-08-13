import { useState } from "react";
import "./Form.css";
import InputField from "../InputField";
import OptionsList from "../OptionsList";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import Swal from "sweetalert2";

const Form = (props) => {
  const [name, updateName] = useState("");
  const [job, updateJob] = useState("");
  const [photo, updatePhoto] = useState("");
  const [team, updateTeam] = useState("");
  const [nameTeam, updateNameTeam] = useState("");
  const [color, updateColor] = useState("");

  const { registerCollaborator, createTeam } = props;

  const manageSubmit = (e) => {
    e.preventDefault();
    let dataToSend = {
      id: uuid(),
      name,
      job,
      photo,
      team,
    };
    Swal.fire({
      icon: "question",
      title: "Quieres agregar al nuevo colaborador?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("El colaborador se ha agragado con éxito!", "", "success").then(() => {
          registerCollaborator(dataToSend);
        });
      } else if (result.isDenied) {
        Swal.fire("El colaborador no se ha agregado", "", "info");
      } else {
        Swal.fire("La operacíon se canceló", "", "error");
      }
    });
  };

  const manageNewTeam = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "question",
      title: "Quieres crear el nuevo equipo?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("El equipo se ha creado con éxito!", "", "success").then(() => {
          createTeam({ nameTeam, highlightColor: color });
        });
      } else if (result.isDenied) {
        Swal.fire("El equipo no se ha creado", "", "info");
      }
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={manageSubmit}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <InputField
          label="Nombre"
          placeholder="Ingresar nombre"
          required
          value={name}
          updateValue={updateName}
        />
        <InputField
          label="Puesto"
          placeholder="Ingresar puesto"
          required
          value={job}
          updateValue={updateJob}
        />
        <InputField
          label="Foto"
          placeholder="Ingresar enlace de foto"
          required
          value={photo}
          updateValue={updatePhoto}
        />
        <OptionsList value={team} updateTeam={updateTeam} teams={props.teams} />
        <Button>Crear</Button>
      </form>
      <form onSubmit={manageNewTeam}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <InputField
          label="Nombre"
          placeholder="Ingresar nombre del equipo"
          required
          value={nameTeam}
          updateValue={updateNameTeam}
        />
        <InputField
          label="Color"
          placeholder="Ingresar un color en Hex"
          required
          value={color}
          updateValue={updateColor}
          type="color"
        />
        <Button>Crear equipo</Button>
      </form>
    </section>
  );
};

export default Form;
