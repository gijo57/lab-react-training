const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <img src={picture} alt={lastName}></img>
      <div className="info">
        <strong>First name: </strong>
        <span>{firstName}</span>
        <br />
        <strong>Last name: </strong>
        <span>{lastName}</span>
        <br />
        <strong>Gender: </strong>
        <span>{gender}</span>
        <br />
        <strong>Height: </strong>
        <span>{height}</span>
        <br />
        <strong>Birth: </strong>
        <span>{birth.toDateString()}</span>
      </div>
    </div>
  );
};

export default IdCard;
