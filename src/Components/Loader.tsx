const Loader = () => {
  return (
    <div className={`card placeholder-glow mx-5 bg-warning`}>
      <img
        src={""}
        className={`card-img-top mh-100 mw-100 `}
        style={{ width: "200px", height: "200px" }}
        alt="pokemon"
      />
      <div className="card-body placeholder-glow bg-dark">
        <h5 className={`card-title placeholder-glow`}>
          <span className={`placeholder col-6 text-capitalize`}></span>
        </h5>
        <p className={`card-text placeholder-glow`}>
          <p className={`placeholder  col-4 `}>Height: </p>
          <p className={`placeholder  col-4`}>Weight: </p>
          <p className={`placeholder  col-4 `}>Type:</p>
        </p>
      </div>
    </div>
  );
};
export default Loader;
