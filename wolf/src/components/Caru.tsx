import "../style/caru.scss";

interface caru {}

export const Carousel: React.FC<caru> = ({}: props) => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className=" cont carousel-item active">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_934689-MLA69273974746_052023-O.webp"
              className="d-block "
              alt="1"
            />
            <h1 id="title">BLACK WOLF</h1>
            <h3 id="p">IMPRESION 3D</h3>
          </div>
          <div className="cont carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_943463-MLA54980504636_042023-O.webp"
              className="d-block "
              alt="1"
            />
            <h1 id="title">BLACK WOLF</h1>
            <h3 id="p">IMPRESION 3D</h3>
          </div>
          <div className="cont carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_943463-MLA54980504636_042023-O.webp"
              className="d-block "
              alt="2"
            />

            <h1 id="title">BLACK WOLF</h1>
            <h3 id="p">IMPRESION 3D</h3>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
