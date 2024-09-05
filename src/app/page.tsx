import Calculate from "./bella/page";

export default function Home() {
  return (
    <>
      <div className="flex p-4 justify-center flex-col items-center h-screen">
        <h3 className="text-2xl ">Calulator for attirebella</h3>
        {/* <p>Use the below link to navigate different calulator features </p> */}
        <div className="flex justify-center items-center w-full">
          <Calculate />
        </div>
      </div>
    </>
  );
}
