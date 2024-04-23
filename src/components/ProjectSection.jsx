const ProjectSection = ({
  title,
  url,
  skills,
  date,
  desc,
  liveUrl,
  GitHub,
}) => {
  return (
    <div className=" lg:p-3 px-2  lg:my-10 my-5 lg:mx-3 mx-0.5 rounded-xl  duration-1000  hover:-translate-y-6 border-2 lg:border-purple-500 border-purple-500 ">
      <div>
        <img
          src={url}
          alt="image"
          className="h-[300px] w-full rounded-xl cursor-pointer pt-2"
        />
        <div className="grid lg:grid-cols-4 grid-cols-3 py-3 ">
          {skills &&
            skills.map((item, index) => (
              <p key={index} className="text-blue-400 text-md mb-2">
                {item}
              </p>
            ))}
        </div>
        <div className="lg:flex justify-between text-center">
          <p className="text-xl font-semibold text-white/70 mb-2 ">{title}</p>
          <div>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <button className="px-4 w-[100px] text-lg  rounded-lg font-semibold py-2 mx-2 bg-gradient-to-r from-purple-800 to bg-blue-800 mb-2">
                Live
              </button>
            </a>
            <a href={GitHub} target="_blank" rel="noopener noreferrer">
              <button className="px-4 w-[100px] text-lg  rounded-lg font-semibold py-2 mx-2 bg-gradient-to-r from-purple-800 to bg-blue-800">
                GitHub
              </button>
            </a>
          </div>
        </div>
        <p className="text-white/40 text-sm pt-2">{date}</p>
        <p className="text-white/40  py-2">{desc.slice(0, 200)}</p>
      </div>
    </div>
  );
};

export default ProjectSection;
