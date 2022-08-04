import { connect } from "react-redux";
import Card from "../components/Card";
import IStore from "../store/IStore";
import { ClassData } from "../types";

const User = ({ data }: { data: ClassData[] | undefined }) => {
  return (
    <>
      {data &&
        data.map((data, index) => (
          <Card key={index} name={data.name} students={data.students} />
        ))}
    </>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    data: state.user.data,
  };
};

export default connect(mapStateToProps)(User);
