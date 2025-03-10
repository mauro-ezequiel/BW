interface mate {}

export const Materials: React.FC<mate> = ({}: mate) => {
  return (
    <>
      <h1 id="cont-card" test-center>
        Materiales
      </h1>

      <div className="grid">
        <div className="card">
          <img
            src="https://d22fxaf9t8d39k.cloudfront.net/06e76cf7b7a02d9d2777d8bda55bd8261634966bd988abd190b96ac8256b22a132164.jpeg"
            className="card-img-top"
          />
          <div className="card-body">
            <h3>Filamento PLA</h3>
            <p className="card-text">
              Algunas de sus características incluyen ser biodegradable, fácil
              de imprimir, tener bajo olor y no tienen mucha resistencia. Es muy
              utilizado.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.LTq3na1Cw2aqiV6ze0ekYgHaE7&pid=Api&P=0&h=180"
            className="card-img-top"
          />
          <div className="card-body">
            <h3>Filamento FLEX</h3>
            <p className="card-text">
              Se caracteriza por su flexibilidad y elasticidad. lo que significa
              que puede doblarse y estirarse sin romperse. Esto lo hace ideal
              para imprimir objetos flexibles.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.-wqk4CoCWfzQNtVIPYfOLAAAAA&pid=Api&P=0&h=180"
            className="card-img-top"
          />
          <div className="card-body">
            <h3> Filamento PETG</h3>
            <p className="card-text">
              Caracteristicas: fuerte, resistente y duradero. Tiene alta
              resistencia al impacto, alta resistencia química, baja contracción
              al enfriarse, se puede reutilizar y reciclar
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://integrinox.com/assets/img/tuberia-acero-inoxidable.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h3>Perfil de metal</h3>
            <p className="card-text">
              Perfil de metal galvanizado es un material que está recubierto de
              zinc para protegerlo de la corrosión. Algunas de sus
              características es resistente a la humedad.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://okdiario.com/img/2017/02/02/caracteristicas-del-hierro-su-origen-y-para-que-se-utiliza-1.jpeg"
            className="card-img-top"
          />
          <div className="card-body">
            <h3>hierro</h3>
            <p className="card-text">
              El hierro es un metal que se caracteriza por ser duro, resistente,
              y maleable. Además, tiene una alta conductividad térmica y
              eléctrica.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
