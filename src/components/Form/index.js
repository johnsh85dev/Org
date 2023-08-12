import { useState } from "react";
import "./Form.css";
import InputField from "../InputField";
import OptionsList from "../OptionsList";
import Button from "../Button";

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
      name,
      job,
      photo,
      team,
    };
    registerCollaborator(dataToSend);
  };

  const manageNewTeam = (e) => {
    e.preventDefault();
    createTeam({ nameTeam, highlightColor: color });
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
