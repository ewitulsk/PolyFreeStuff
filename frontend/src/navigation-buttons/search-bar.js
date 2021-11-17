import React from "react";

function SearchBar(props) {

    async function handleSearch(e){
        e.preventDefault();
        props.setSearchValue(e.target.search.value);
    }

  return (
    <div id="search-area">
      <div id="search-bar">
          <form onSubmit={(e) => handleSearch(e)}>
              <input type="text" name="search" placeholder="Search..."/>
              <button>Submit</button>
          </form>
      </div>
    </div>
  );
}

export default SearchBar;
