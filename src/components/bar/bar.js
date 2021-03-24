import "./bar.css";
import { useParams } from "react-router-dom";

const Bar = () => {
  const { id } = useParams();

  return (
    <div className="bar">
      <div className="allURL">
        <a className={id === "a" ? "divtrue" : "divfalse"} href="/works/a">
          works{" "}
        </a>
        <a className={id === "b" ? "divtrue" : "divfalse"} href="/users/b">
          users{" "}
        </a>{" "}
        <a className={id === "c" ? "divtrue" : "divfalse"} href="/details/c">
          details{" "}
        </a>{" "}
      </div>
    </div>
  );
};

export default Bar;