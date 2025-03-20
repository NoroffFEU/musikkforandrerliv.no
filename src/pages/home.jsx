import heart from "/assets/images/svgs/heart.svg";

function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-extrabold">
        Welcome to MMF project
        <img className="inline bg-red-600" src={heart} alt="" />
      </h1>
      <h2>Music Changes Lives</h2>
    </div>
  );
}

export default Home;
