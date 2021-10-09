import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <img src={img} alt={name} />
      <div className="driverInfo">
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <p className="car">
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
