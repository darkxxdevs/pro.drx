"use client";
import React, { FormEvent, useState } from "react";
import { scrapeAndStoreProduct } from "../../../../lib/actions";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidAmazonProductURL = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      // Check if the hostname contains amazon.com or amazon.country
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) {
      return alert("Please provide a valid Amazon link!");
    }

    try {
      setIsLoading(true);

      // scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        placeholder="Enter product link"
        className="w-[60%] md:w-[80%] border-2 border-slate-100 bg-transparent px-5 py-5 rounded-lg outline-0"
        onChange={(e) => {
          setSearchPrompt(e.target.value);
        }}
      />
      <button
        type="submit"
        className="text-white bg-black px-5 py-2 rounded-lg font-bold"
        disabled={!searchPrompt.trim()} // Disable when searchPrompt is empty or only contains whitespace
      >
        {isLoading ? "Searching...." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
