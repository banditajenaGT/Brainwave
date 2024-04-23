import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "../components/Button";
import { RightCurve, LeftCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-4 text-n-4 mt-5 md:mb-16 lg:mb-12 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className=" relative left-1/2 md:top-12 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square border border-n-6 rounded-full m-auto">
              <div className="w-[6rem] aspect-square bg-conic-gradient rounded-full m-auto p-[0.2rem]">
                <div className="flex items-center justify-center bg-n-8 rounded-full w-full h-full">
                  <img
                    src={brainwaveSymbol}
                    alt="Brainwave"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <ul className="">
              {collabApps.map((item, i) => (
                <li
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    i * 45
                  }`}
                  key={item.id}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      i * 45
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      height={item.height}
                      width={item.width}
                      className="m-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
