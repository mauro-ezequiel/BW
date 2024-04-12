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
        <div className="cont link">w</div>
      </div>
    </div>
  );
};
