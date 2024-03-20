const Modal = ({ content, hidden, onClick, color }) => {
  const { cim, kep, leiras, imdb, evadok } = content;

  return (
    <div
      id="modal"
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        hidden ? 'invisible' : 'visible'
      }`}
    >
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-2" id="modalTitle">
          {cim}
        </h2>
        <img
          src={kep}
          alt="Netflix Sorozat"
          className="w-full h-40 object-cover mb-4"
        />
        <p id="modalContent" className={`text-${color}-700`}>
          {leiras}
        </p>
        <p id="imdbRating" className={`text-${color}-700`}>
          IMDb értékelés: {imdb}
        </p>
        <p id="seasons" className={`text-${color}-700`}>
          Évadok száma: {evadok}
        </p>
        <button
          id="closeModal"
          className={`mt-4 bg-${color}-700 text-white py-2 px-4 rounded hover:bg-${color}-600`}
          onClick={onClick}
        >
          Bezárás
        </button>
      </div>
    </div>
  );
};

export default Modal;
