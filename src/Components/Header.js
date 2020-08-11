import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

export default function Header() {
  return (
    <div>
      <div id="search-box">
        <SearchIcon />
        <InputBase className="input-search" placeholder="Cari . . ." />
      </div>
    </div>
  );
}
