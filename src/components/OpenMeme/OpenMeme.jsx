import { useSelector } from "react-redux";
import { selectContentModal } from "../../redux/modal/selectors";
import { Image } from "@heroui/image";

const OpenMeme = () => {
  const { url, alt } = useSelector(selectContentModal);
  return (
    <div>
      <Image removeWrapper alt={alt} className="w-full" src={url} />
    </div>
  );
};

export default OpenMeme;
