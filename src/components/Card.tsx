import { ClassData } from "../types";

const Card = ({ name, students }: ClassData) => {
  return (
    <div className="card">
      <h3>Name</h3>
      <p>{name}</p>
      <br />
      <h3>Students</h3>
      <p>{students.join(", ")}</p>
    </div>
  );
};

export default Card;
