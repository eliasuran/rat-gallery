import Link from "next/link";
import data from "./../../api/rats.json";

const FetchRats = () => {
  return (
    <div className="bg-red-400 w-full flex flex-wrap">
      {data.map((item, outerIndex) => (
        <div key={outerIndex}>
          {item.basics.map((innerItem, innerIndex) => (
            <div key={innerIndex}>
              <Link href={innerItem.link} target="_blank">
                <img src={innerItem.img} alt={innerItem.name} />
              </Link>
              <h3>{innerItem.name}</h3>
              <p>{innerItem.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FetchRats;
