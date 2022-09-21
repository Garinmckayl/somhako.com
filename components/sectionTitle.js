import React from "react";
import Link from "next/link";

export default function SectionTitle(props) {
  return (
    <div
    id={`${props.idName}`}
      className={`container p-8 px-4 mx-auto flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}

      {props.btn && (
      <div className="text-center pt-4">
        <Link href={`${props.btnURL}`}>
          <a className="px-6 py-2 inline-block text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
          {props.btn}
          </a>
        </Link>
      </div>
      )}
    </div>
  );
}
