const Random = ({ min, max }) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="Random">
      Random value between {min} and {max} => {result}
    </div>
  );
};

export default Random;
