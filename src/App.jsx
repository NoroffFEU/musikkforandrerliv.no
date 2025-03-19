import React from "react";
import { HomePage } from "./pages/home";
import heart from "/assets/images/svgs/heart.svg";

function App() {
  return (
    <>
      <div className="w-full">
        <header className="text-center py-4">
          <h1 className="text-2xl font-extrabold">
            Welcome to MMF project{" "}
            <img className="inline bg-red-600" src={heart} alt="" />
          </h1>
        </header>
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
