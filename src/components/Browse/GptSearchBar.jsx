import { useState } from "react";
import { Search } from "lucide-react";

// components
import Input from "../../ui/Input";
import Button from "../../ui/Button";

import client from "../../openai";

const GptSearchBar = () => {
  const [search, setSearch] = useState("");
  // const searchText = useRef(null);

  const handleSearchFromGpt = async () => {
    console.log(search);

    // const query =
    //   "Act as a movie recommandation system and suggest some movies for the query" +
    //   search +
    //   ". only give me 5 movies which is comma separated like the example result which is given ahead. Eg: 'Metro', 'Ramayan', 'Gadar', '3 idiots','golmal'";

    // const completion = await client.chat.completions.create({
    //   model: "Meta-Llama-3.1-405B-Instruct",
    //   messages: [{ role: "developer", content: query }],
    // });

    // console.log(completion);
  };
  return (
    <div className="relative top-[25%]">
      <form
        className="w-xl h-auto bg-black/80 mx-auto px-10 py-7 flex justify-between gap-4 items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          placeholder="What's your favourite movie ?"
          classname="!w-[25rem]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          label="Search"
          showIcon={true}
          Icon={<Search size={18} />}
          classname="px-3 py-2"
          onClick={handleSearchFromGpt}
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
