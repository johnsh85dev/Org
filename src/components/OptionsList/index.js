import "./OptionsList.css";

const OptionsList = (props) => {
  // Método map -> array.map((team, index)=>{
  //    return <option></option>
  //})

  const manageChange = (e) => {
    props.updateTeam(e.target.value);
  };

  return (
    <div className="options-list">
      <label>Equipos</label>
      <select value={props.value} onChange={manageChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsList;
