import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Link,
  CardFooter,
  Button,
} from "@heroui/react";
import { useDispatch } from "react-redux";
import { openMem } from "../../redux/modal/slice";

const CardMem = ({ data, index }) => {
  const dispatch = useDispatch();

  const openMemeHandler = ({ url, alt }) => {
    dispatch(openMem({ url, alt }));
  };

  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="bg-gray-800/30 absolute z-10 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{`Mem ${
          index + 1
        }`}</p>
        <h4 className="text-black font-medium text-2xl capitalize">
          {data.title}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={`Mem ${index + 1}`}
        className="z-0 w-full h-full -translate-y-6 object-cover"
        src={data.img}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Likes</p>
          <p className="text-black text-tiny">❤ {data.likes}</p>
        </div>
        <Button
          onPress={() =>
            openMemeHandler({
              url: data.img,
              alt: `Mem ${index + 1}`,
            })
          }
          className="text-tiny"
          color="primary"
          radius="full"
          size="sm"
        >
          Open
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardMem;
