import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-screen bg-slate-300">
      <div className="flex flex-col gap-6 items-center justify-center h-screen">
        <h1 className="text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
          Quiz App
        </h1>
        <h3 className="text-3xl font-semibold flex flex-wrap">
          Are you ready to take a quiz?
        </h3>
        <Link href={"/quiz"}>
          <Button
            className={
              "w-full md:w-[100px] py-6 hover:bg-gradient-to-r hover:from-blue-600 hover:to-fuchsia-600"
            }
          >
            Start Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}
