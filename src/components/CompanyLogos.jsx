import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-5 text-center text-n-1/50">
        Helping people with creating beautiful logos.
      </h5>
      <ul className="flex">
        {companyLogos.map((companyLogo,i) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={i}
          >
            <img src={companyLogo} alt={companyLogo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
