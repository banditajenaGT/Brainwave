import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap ">
      {pricing.map((pricing, i) => (
        <div
          className="w-19rem max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-16 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-2"
          key={i}
        >
          <h4 className="h4 mb-4">{pricing.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{pricing.description}</p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {pricing.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">{pricing.price}</div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={pricing.price ? "/pricing" : "mailto:rupejena2001@gmail.com"}
            white={!!pricing.price}
          >
            {pricing.price ? "Get Started" : "Contact Us"}
          </Button>
          <ul className="">
            {pricing.features.map((item,i)=>(
                <li className="flex items-start py-5 border-t border-n-6" key={i}>
                    <img src={check} alt="Check" width={24} height={24} />
                    <p className="body-2 ml-4">{item}</p>
                </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
