import React from "react";

function Card({ userName = "HC", designation = "Staff Engineer", source }) {
  //console.log(props)
  return (
    <>
      <h1 className="text-3xl bg-green-400 p-3 rounded">
        React With {userName} using Tailwind{" "}
      </h1>
      <figure className=" md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={source}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-mediu">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{userName}</div>
            <div>{designation}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Card;
