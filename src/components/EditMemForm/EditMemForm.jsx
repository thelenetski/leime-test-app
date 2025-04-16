import { useSelector } from "react-redux";
import { selectContentModal } from "../../redux/modal/selectors";

const EditMemForm = () => {
  const data = useSelector(selectContentModal);
  return (
    <div>
      <h4 className="font-bold text-lg mb-4">Edit mem</h4>
      <p>{data._id}</p>
      <p>{data.title}</p>
      <p>{data.likes}</p>
      <p>{data.img}</p>
    </div>
  );
};

export default EditMemForm;
