import Head from "./components/Head";
import Main from "./components/Main";
import Foot from "./components/Foot";
export default function App() {
  return (
    <div className="rounded-lg md:w-96 mt-3 mx-auto sm:w-fit bg-[#1A1B21]">
      <Head />
      <Main />
      <Foot />
    </div>
  );
}
