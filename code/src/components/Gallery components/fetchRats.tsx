import Link from "next/link";
import data from "./../../api/rats.json";
import { useEffect } from "react";

interface Props {
  id: string;
  onRatsLoaded: () => void;
}

interface innerItem {
  name: string;
  img: string;
  link: string;
}

interface RatData {
  [key: string]: innerItem[];
}

const FetchRats = ({ id, onRatsLoaded }: Props) => {
  const selectedArray = data.find((item: RatData) => id in item) as RatData;

  useEffect(() => {
    if (selectedArray) {
      onRatsLoaded();
    }
  }, [selectedArray, onRatsLoaded]);

  return (
    <div className="h-full flex flex-wrap justify-center items-center gap-12 p-8">
      {selectedArray ? (
        selectedArray[id].map((innerItem: innerItem, innerIndex: number) => (
          <div
            key={innerIndex}
            className="flex flex-col items-center gap-8 break-all text-center"
          >
            <Link href={innerItem.link} target="_blank">
              <img
                src={innerItem.img}
                alt={innerItem.name}
                className="border-2 border-accent rounded-md h-48 max-w-sm"
              />
            </Link>
            <h3 className="text-text text-6xl font-Berlin">{innerItem.name}</h3>
          </div>
        ))
      ) : (
        <div className="text-text text-9xl">
          No rats with this id blud. only use links from the website if u wanna
          see rats
        </div>
      )}
    </div>
  );
};

export default FetchRats;
