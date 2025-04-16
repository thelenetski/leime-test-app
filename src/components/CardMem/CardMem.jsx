import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Link,
  CardFooter,
  Button,
} from "@heroui/react";

const CardMem = ({ data, index }) => {
  return (
    <Card className="bg-gray-700 p-4 rounded-lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{`Mem ${index + 1}`}</p>
        <small className="text-tiny uppercase">❤ {data.likes}</small>
        <div className="w-full flex justify-between">
          <h4 className="font-bold text-large capitalize">{data.title}</h4>
          <Link href={data.img} className="font-bold hover:underline">
            Open
          </Link>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.img}
          width={300}
          height={300}
        />
      </CardBody>
    </Card>
  );
};

export default CardMem;
