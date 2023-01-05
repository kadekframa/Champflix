import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-6 border">
      <p>
        &#169; Champflix 2023 | Created by{" "}
        <a
          href="https://github.com/kadekframa"
          target="blank"
          className="text-sky-600"
        >
          Kadek Frama
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
