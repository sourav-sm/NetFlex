import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-custom-bg bg-cover h-screen w-full">
      <div className="flex justify-around pt-5">
        <h1 className="text-red-500 text-5xl font-semibold">NetFlix</h1>
        <div>
          <button className="bg-red-500 text-white px-3 py-2 rounded-2xl text-xl">Sign In</button>
        </div>
      </div>
    </div>
  );
}
