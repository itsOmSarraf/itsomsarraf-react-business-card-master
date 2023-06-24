import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

export default function Buttons() {
  return (
    <>
      <div
        className="flex mx-auto md:w-96 w-80 bg-[#1A1B21] justify-center items-center"
        target="_blank"
      >
        <a
          href="https://www.twitter.com/itsomsarraf_"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" m-4 bg-white px-4 py-2 border flex gap-2  border-slate-200 rounded-lg text-slate-950 font-bold hover:border-slate-400 hover:text-[#179CF0] hover:shadow transition duration-150 text-center items-center">
            <img className="w-6" src={twitter} loading="lazy" alt="Twitter" />
            <span className="pt-0.5">Twitter</span>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/itsomsarraf/"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" m-4 font-bold  bg-white px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-950 hover:border-slate-400 hover:text-[#007EBB] hover:shadow transition duration-150 text-center items-center">
            <img className="w-6" src={linkedin} loading="lazy" alt="Linkedin" />
            <span className="pt-0.5">Linkedin</span>
          </button>
        </a>
      </div>
    </>
  );
}
