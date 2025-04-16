import { useSelector } from "react-redux";
import { selectMemes } from "../../redux/memes/selectors";
import CardMem from "../../components/CardMem/CardMem";

const ListPage = () => {
  const memes = useSelector(selectMemes);

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {memes?.results?.map((item, index) => {
        return (
          <li key={item._id}>
            <CardMem data={item} index={index} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListPage;
