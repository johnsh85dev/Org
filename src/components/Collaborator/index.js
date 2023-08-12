import "./Collaborator.css";
import { TiDelete } from "react-icons/ti";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Collaborator = (props) => {
  const { name, job, photo, id, fav } = props.data;
  const { highlightColor, deleteCollaborator, like } = props;
  return (
    <div className="collaborator">
      <TiDelete className="delete" onClick={() => deleteCollaborator(id)} />
      <div className="headerCard" style={{ backgroundColor: highlightColor }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{job}</h5>
        {fav ? (
          <AiFillHeart color="#ff0000" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Collaborator;
