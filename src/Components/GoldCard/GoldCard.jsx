import PropTypes from "prop-types";
const GoldCard = ({ gold,handleLoadGold }) => {
  const { id, title, image, price, description } = gold;
  return (
    <div className="card card-compact w-[300px] bg-gradient-to-r from-purple-500 to-purple-600 shadow-xl">
      <figure>
        <img
        className="w-full h-[300px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl">Price: {price}</h2>
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0,50)}...</p>
        <div className="card-actions justify-start">
          <button onClick={() => handleLoadGold(gold)} className="btn bg-gradient-to-r from-purple-600 to-purple-700 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
GoldCard.PropTypes = {
  gold: PropTypes.obj,
};
export default GoldCard;
