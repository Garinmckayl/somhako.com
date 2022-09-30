import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Benefits(props) {
  const { data } = props;

  return (
    <>
      <div id={`${props.idName}`} className="container p-8 px-4 mx-auto flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="max-w-[400px] m-auto">
            <Image
              src={data.image}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl">
                {data.title}
              </h3>
              {data.desc && (
              <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-white">
                {data.desc}
              </p>
              )}
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-2 bg-white rounded-md w-9 h-9 ">
          {React.cloneElement(props.icon, {
            className: "w-5 h-5 text-black",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-white">
            {props.title}
          </h4>
          <p className="mt-1 text-white">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
