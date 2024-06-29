"use client";
import { Button } from "../../components/ui/button";
import { data } from "./questions";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const quizPage = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0);
  const quiz = data[index];
  const handleIndex = () => {
    console.log(score);
    setSelected();
    setIndex(index + 1);
  };
  const handleAnswer = (e) => {};
  return (
    <div className="w-full h-screen bg-slate-300">
      <div className="">
        {index < 15 ? (
          <div>
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h1 className="text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
                Quiz Page
              </h1>
              <h3 className="text-2xl font-semibold ">
                Questions{data.length}
              </h3>
            </div>

            <div className="w-full">
              <div>
                <Card className={"w-full py-4 px-4 flex flex-col gap-7"}>
                  <div>
                    <CardHeader
                      className={
                        "text-lg sm:text-lg md:text-3xl font-bold px-1 h-20"
                      }
                    >
                      <h1>
                        {index + 1}.{quiz.question}
                      </h1>
                    </CardHeader>
                  </div>
                  <div className="flex flex-col gap-3">
                    <CardContent
                      onClick={() => {
                        quiz.optionA == quiz.answer
                          ? setScore(score + 1)
                          : null;
                        setSelected(0);
                        handleAnswer();
                      }}
                      className={cn(
                        `border-2 border-slate-300 py-3 hover:bg-slate-300 cursor-pointer `,
                        selected == 0
                          ? "bg-blue-600 hover:bg-blue-600"
                          : "bg-white"
                      )}
                    >
                      {quiz.optionA}
                    </CardContent>
                    <CardContent
                      onClick={() => {
                        quiz.optionB == quiz.answer
                          ? setScore(score + 1)
                          : null;
                        setSelected(1);
                      }}
                      className={cn(
                        `border-2 border-slate-300 py-3 hover:bg-slate-300 cursor-pointer `,
                        selected == 1
                          ? "bg-blue-600 hover:bg-blue-600"
                          : "bg-white"
                      )}
                    >
                      {quiz.optionB}
                    </CardContent>
                    <CardContent
                      onClick={() => {
                        quiz.optionC == quiz.answer
                          ? setScore(score + 1)
                          : null;
                        setSelected(2);
                      }}
                      className={cn(
                        `border-2 border-slate-300 py-3 hover:bg-slate-300 cursor-pointer`,
                        selected == 2
                          ? "bg-blue-600 hover:bg-blue-600"
                          : "bg-white"
                      )}
                    >
                      {quiz.optionC}
                    </CardContent>
                    <CardContent
                      onClick={() => {
                        quiz.optionD == quiz.answer
                          ? setScore(score + 1)
                          : null;
                        setSelected(3);
                      }}
                      className={cn(
                        `border-2 border-slate-300 py-3 hover:bg-slate-300 cursor-pointer`,
                        selected == 3
                          ? "bg-blue-600 hover:bg-blue-600"
                          : "bg-white"
                      )}
                    >
                      {quiz.optionD}
                    </CardContent>
                  </div>
                  <div className=" w-full float-end">
                    <Button
                      className={
                        "w-full md:w-[100px] py-6 hover:bg-gradient-to-r hover:from-blue-600 hover:to-fuchsia-600"
                      }
                      onClick={() => {
                        handleIndex();
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center  h-screen">
            <div className="bg-gradient-to-r from-blue-600 to-fuchsia-600 p-[3px] rounded-md">
              <Card>
                <CardHeader>
                  <h1 className="text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
                    Results
                  </h1>
                </CardHeader>
                <CardContent className="text-2xl font-bold">
                  <h1>
                    Total Marks: {score} /{data.length}
                  </h1>
                </CardContent>
                <CardContent className="text-2xl font-bold ">
                  <h1>Percentage: {(score / 15) * 100}%</h1>
                </CardContent>
                <CardFooter>
                  <Button
                    className={
                      "hover:bg-gradient-to-r hover:from-blue-600 hover:to-fuchsia-600"
                    }
                    onClick={() => {
                      setIndex(0);
                    }}
                  >
                    Restart Quiz
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default quizPage;
