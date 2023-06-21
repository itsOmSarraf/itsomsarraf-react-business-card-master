import github from "../assets/github.gif";

export default function Foot() {
  return (
    <div className="flex justify-center items-center sm:bg-[#161619] text-gray-400 text-sm sm:mt-10">
      <p className="flex items-center mx-5 my-1">
        Made with ❤️ by&nbsp;
        <a
          href="https://github.com/itsomsarraf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          Om Sarraf &nbsp;
        </a>
        <a
          href="https://github.com/itsomsarraf"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github}
            alt="Github"
            className="w-8 bg-white rounded-full
        "
          />
        </a>
      </p>
    </div>
  );
}
