const Card = ({ color, content, onClick }) => {
  const { kep, cim, leiras } = content;

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      onClick={onClick}
    >
      <img
        src={kep}
        alt="Netflix Sorozat"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 line-clamp-2">
        <h2 className={`text-xl font-semibold text-${color}-800 mb-2`}>
          {cim}
        </h2>
        <p className={`text-${color}-700 line-clamp-2`}>{leiras}</p>
      </div>
    </div>
  );
};

export default Card;
