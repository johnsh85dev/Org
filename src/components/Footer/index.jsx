import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
      <div className="redes">
        <a href="https://www.linkedin.com/in/jonathan-s%C3%A1nchez-hern%C3%A1ndez-00bb01270/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/johnsh85dev">
          <BsGithub />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Jonathan Sánchez</strong>
    </footer>
  );
};

export default Footer;
