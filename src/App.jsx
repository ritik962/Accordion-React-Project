import Accordion from "./components/Accordion";
import accordionData from "../src/DB/data";
import { useState } from "react";
import icon from "../src/assets/Down (1).svg";

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };
  return (
    <div className="flex flex-col gap-16  w-3/4 text-center my-16 mx-auto">
      <h1 className="text-black text-3xl md:text-4xl uppercase font-serif font-semibold tracking-tight">
        React Interview Questions
      </h1>
      <Accordion
        icon={icon}
        data={accordionData}
        selectedId={selectedId}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
