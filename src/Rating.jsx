const Rating = ({ children }) => {
  const rating = Math.round(children);
  return (
    <div>
      {'\u2605'.repeat(rating)}
      {'\u2606'.repeat(5 - rating)}
    </div>
  );
};

export default Rating;
