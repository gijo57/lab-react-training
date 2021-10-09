const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <img src={picture} alt={lastName}></img>
      <div className="info">
        <div className="field">
          <strong>First name: </strong>
          <span>{firstName}</span>
        </div>
        <div className="field">
          <strong>Last name: </strong>
          <span>{lastName}</span>
        </div>
        <div className="field">
          <strong>Gender: </strong>
          <span>{gender}</span>
        </div>
        <div className="field">
          <strong>Height: </strong>
          <span>{height}</span>
        </div>
        <div className="field">
          <strong>Birth: </strong>
          <span>{birth.toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
