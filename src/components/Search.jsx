import React, { useState } from "react";
import styled from "styled-components";

function Search({ setSearchResults }) {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchResults(search);
    setSearch("");
  };

  console.log(search);
  return (
    <StyledSearch>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search your location and hit Enter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  margin-bottom: 30px;

  form {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;

      input {
        width: 60%;
        margin-right: 20px;
      }
    }

    input {
      width: 100%;
      height: 45px;
      border-radius: 10px;
      padding-left: 20px;
    }
  }
`;

export default Search;
