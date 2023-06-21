import imageOmSarraf from "../assets/Om-Sarraf.jpg";

export default function Head() {
  return (
    <div className="flex-col text-center align-middle mx-auto text-white">
      <div>
        <img
          src={imageOmSarraf}
          className="w-44 h-44 mx-auto"
          alt="Om Sarraf"
        />
      </div>
      <h1 className="font-bold text-2xl">Om Sarraf</h1>
      <h2 className="text-[#F3BF99]">Front-end Developer</h2>
      <a href="https://itsomsarraf.is-a.dev" target="_blank" rel="noreferrer">
        <p className="text-white mt-1 mb-3">itsOmSarraf.is-a.dev</p>
      </a>
    </div>
  );
}
