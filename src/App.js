import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MiOrg from "./components/MiOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [showForm, updateShow] = useState(false);
  const [collaborators, updateCollaborators] = useState([
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/johnsh85dev.png",
      name: "Jonathan Sánchez",
      job: "Dev Junior",
      fav: true,
    },
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      job: "Instructor",
      fav: false,
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/genesysrm.png",
      name: "Genesys Rondón",
      job: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      job: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose González",
      job: "Dev FullStack",
      fav: false,
    },
  ]);
  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      nameTeam: "Programación",
      highlightColor: "#57C278",
      backgroundColor: "#D9F7E9",
    },
    {
      id: uuid(),
      nameTeam: "Front End",
      highlightColor: "#82CFFA",
      backgroundColor: "#E8F8FF",
    },
    {
      id: uuid(),
      nameTeam: "Data Science",
      highlightColor: "#A6D157",
      backgroundColor: "#F0F8E2",
    },
    {
      nameTeam: "Devops",
      highlightColor: "#E06B69",
      backgroundColor: "#FDE7E8",
    },
    {
      id: uuid(),
      nameTeam: "UX y Diseño",
      highlightColor: "#DB6EBF",
      backgroundColor: "#FAE9F5",
    },
    {
      id: uuid(),
      nameTeam: "Móvil",
      highlightColor: "#FFBA05",
      backgroundColor: "#FFF5D9",
    },
    {
      id: uuid(),
      nameTeam: "Innovación y Gestión",
      highlightColor: "#FF8A29",
      backgroundColor: "#FFEEDF",
    },
  ]);
  //Ternario --> condition ? seMuestra : noSeMuestra
  //condition && seMuestra

  const changeShow = () => {
    updateShow(!showForm);
  };

  //Regiter Collaborator

  const registerCollaborator = (collaborator) => {
    console.log("Nuevo Colaborador", collaborator);
    //Spread Operator
    updateCollaborators([...collaborators, collaborator]);
  };

  //Delete Collaborator
  const deleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id);
    updateCollaborators(newCollaborators);
  };

  //Update Color Team
  const updateColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.highlightColor = color;
      }
      return team;
    });
    updateTeams(updatedTeams);
  };

  //Create Team
  const createTeam = (newTeam) => {
    console.log(newTeam);
    updateTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  const like = (id) => {
    console.log("like", id);
    const updatedCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });
    updateCollaborators(updatedCollaborators);
  };

  return (
    <div>
      <Header />
      {/* {showForm ? <Form /> : <></>} */}
      {showForm && (
        <Form
          teams={teams.map((team) => team.nameTeam)}
          registerCollaborator={registerCollaborator}
          createTeam={createTeam}
        />
      )}
      <MiOrg changeShow={changeShow} />

      {teams.map((team) => (
        <Team
          data={team}
          key={team.nameTeam}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.nameTeam
          )}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
