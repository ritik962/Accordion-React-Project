const Accordion = ({ data, selectedId, handleClick, icon }) => {
  return (
    <div className=" flex flex-col gap-4  ">
      {data.map(({ id, title, content }) => (
        <div key={id}>
          <div
            className="flex items-center justify-between cursor-pointer h-16  rounded-tr-lg border-[1px] border-zinc-400 rounded-tl-lg px-4   bg-white"
            onClick={() => handleClick(id)}
          >
            <div className="text-xl font-serif font-semibold tracking-tight">
              {title}
            </div>
            <img
              className={`w-4 transition-all ${
                selectedId === id ? "-rotate-180" : ""
              }`}
              src={icon}
              alt="dropdown_icon"
            />
          </div>
          {selectedId === id && (
            <div className="p-4 bg-white rounded-bl-lg rounded-br-lg border-[1px] border-t-0 border-zinc-400 text-left">
              <p className=" text-lg font-serif">{content}</p>
              <button className="mt-4 bg-amber-500 text-white p-2 rounded-sm">
                Learn More
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
