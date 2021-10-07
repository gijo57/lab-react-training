const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div style={{ color, backgroundColor: bgColor }} className="CreditCard">
      <div className="imgWrapper">
        <img src={`/img/${type}${type === 'Visa' ? '.png' : '.svg'}`} />
      </div>
      <p className="number">
        {'\u2022'.repeat(4).concat(' ').repeat(3)}
        {number.substring(number.length - 4)}
      </p>
      <div className="expAndBank">
        <p>
          <span>
            Expires {expirationMonth.toString().padStart(2, '0')}/
            {expirationYear}
          </span>
          <span class="bank">{bank}</span>
        </p>
      </div>
      <p className="owner">{owner}</p>
    </div>
  );
};

export default CreditCard;
