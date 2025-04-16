import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Image,
} from "@heroui/react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMemes } from "../../redux/memes/selectors";
import { openEditMem } from "../../redux/modal/slice";

export const columns = [
  { name: "MEM", uid: "mem" },
  { name: "NAME", uid: "title" },
  { name: "LIKES", uid: "likes" },
  { name: "ACTIONS", uid: "actions" },
];

export const EditIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const ColumnPage = () => {
  const { results } = useSelector(selectMemes);
  const dispatch = useDispatch();

  const renderCell = useCallback((results, columnKey) => {
    const cellValue = results && results[columnKey];

    switch (columnKey) {
      case "mem":
        return (
          <div className="flex justify-center">
            <Image src={results.img} className="w-[50px] rounded-lg" />
          </div>
        );
      case "title":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "likes":
        return <p>{cellValue}</p>;
      case "actions":
        return (
          <div className="flex justify-center">
            <Tooltip content="Edit mem">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon
                  onClick={() => dispatch(openEditMem({ ...results }))}
                />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  // console.log(results);
  return (
    results && (
      <>
        <Table aria-label="Memes table" className="bg-gray-700 rounded-lg mx-2">
          <TableHeader columns={columns} className="rounded-lg">
            {(column) => (
              <TableColumn className="bg-gray-600 p-1 py-2" key={column.uid}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={results}>
            {(item) => (
              <TableRow key={item._id} className="mt-4">
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </>
    )
  );
};

export default ColumnPage;
