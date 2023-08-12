// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  // Estado - hooks
  // useState
  // const [nombreVariable, funcionActualiza] = useState(valorInicial)
  console.log(props);
  // const [show, updateShow] = useState(true);
  // const manageClick = () => {
  //   console.log("Mostrar / Ocultar elemento", !show);
  //   updateShow(!show);
  // };

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.changeShow} />
    </section>
  );
};

export default MiOrg;
