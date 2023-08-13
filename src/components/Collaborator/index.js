import "./Collaborator.css";
import { TiDelete } from "react-icons/ti";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";

const Collaborator = (props) => {
  const { name, job, photo, id, fav } = props.data;
  const { highlightColor, deleteCollaborator, like } = props;
  return (
    <div className="collaborator">
      <TiDelete
        className="delete"
        onClick={() =>
          Swal.fire({
            title: "Está seguro de eliminar el colaborador?",
            text: "Esta acción es ireversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!",
          }).then((response) => {
            if (response.isConfirmed) {
              Swal.fire(
                "Excelente!",
                "El colaborador fué eliminado correctamente!",
                "success"
              ).then(() => {
                deleteCollaborator(id);
              });
            }
          })
        }
      />
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
