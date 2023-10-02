"use client";
import React, { FormEvent } from "react";
import { useState } from "react";

const Searchbar = () => {
  const [searchPompt, setSearchPrompt] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const isValidAmazonProductURL = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      //-> check if  hostname contains amazon.com or amazon.country
      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.endsWith("amazon")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPompt);

    if (!isValidLink) return alert("please provide a valid amazon link !");

    try {
      setisLoading(true);
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPompt}
        placeholder="Enter product link"
        className=" w-[60%] md:w-[80%] border-2 border-slate-100 bg-transparent px-5 py-5 rounded-lg outline-0"
        onChange={(e) => {
          setSearchPrompt(e.target.value);
        }}
      />
      <button
        type="submit"
        className=" text-white bg-black px-5 py-2 rounded-lg font-bold"
        disabled={searchPompt === " "}
      >
        {isLoading ? "Searching...." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
