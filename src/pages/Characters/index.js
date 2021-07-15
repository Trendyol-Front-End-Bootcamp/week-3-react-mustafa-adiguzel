import React from "react";
import Search from "../../components/Search/Search.js";
import CharacterList from "../../components/Character/CharacterList.js";

const Characters = () => {
  return (
      <main>
          <Search />
          <CharacterList/>
      </main>
  )
}

export default Characters