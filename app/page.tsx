import Image from "next/image";
import { Login } from "./components/Login";

export default function Home() {
  return (
    <div className="bg-custom-bg bg-cover h-screen w-full">
      <div className="bg-black opacity-80">
      <div className="flex justify-around pt-5">
        <h1 className="text-red-700 text-5xl font-semibold">NetFlix</h1>
        <div>
          <button className="bg-red-700 text-white px-3 py-2 rounded-2xl text-xl">Sign In</button>
        </div>
      </div>
      <div className="flex pt-48 justify-center">
           <div className="flex flex-col text-white">
              <h1 className="text-6xl font-black flex justify-around">Unlimited movies, TV shows and more</h1>
              <h2 className="text-2xl flex justify-around font-semibold pt-9">Watch anywhere. Cancel anytime.</h2>
              <h2 className="text-2xl font-semibold flex justify-around pt-4">Ready to watch? Enter your email to create or restart your membership.</h2>
              <div className="text-2xl flex justify-center mt-5">
                <input className="mx-2 rounded-2xl py-3 px-2 text-orange-700" type="text" placeholder="Email address"/>
                <button className="bg-orange-800 px-3 py-2 rounded-xl">Get Started</button>
              </div>
              <Login/>
           </div>
      </div>
      </div>
    </div>
  );
}
