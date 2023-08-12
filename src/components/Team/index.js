import "./Team.css";
import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  //Destructuración
  const { highlightColor, nameTeam, id } = props.data;
  const { collaborators, deleteCollaborator, updateColor, like } = props;

  const colorBackground = {
    backgroundColor: hexToRgba(highlightColor, 0.2),
  };

  const styleNameTeam = {
    borderColor: highlightColor,
  };

  return (
    <>
      {collaborators.length > 0 && (
        <section className="team" style={colorBackground}>
          <input
            type="color"
            className="input-color"
            value={highlightColor}
            onChange={(e) => {
              updateColor(e.target.value, id);
            }}
          />
          <h3 style={styleNameTeam}>{nameTeam}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, index) => (
              <Collaborator
                data={collaborator}
                key={index}
                highlightColor={highlightColor}
                deleteCollaborator={deleteCollaborator}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
