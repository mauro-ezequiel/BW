import "../style/buttom.scss";

interface butt {}

export const Buttom: React.FC<butt> = ({}: butt) => {
  return (
    <div id="container">
      <div className="gridb">
        <div className="cont text">
          {" "}
          puedes contactarnos en las siguientes redes{" "}
        </div>
        <div className="cont link">
          <a href="https://github.com/mauro-ezequiel" target="-blank">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100088989336658"
            target="-blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/black_wolf.3d/?hl=es"
            target="-blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://wa.me/541150941389" target="-blank">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#search/from%3A%40jooble.org+in%3Aanywhere/FMfcgzGtwCtTwJMFtBCXBlHLrcdTZmpk"
            target="-blank"
          >
            <i className="bi bi-envelope-at-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
