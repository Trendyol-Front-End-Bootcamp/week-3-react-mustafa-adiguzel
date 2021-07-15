import React from "react";

export default function Search() {
  return (
    <div className="top-search">
        <div class="select-container">
            <select name="gender-select" id="gender-select">
                <option selected disabled>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
            </select>
        </div>
        <div class="select-container">
            <select name="status-select" id="status-select">
                <option selected disabled>Status</option>
                <option value="1">Alive</option>
                <option value="2">Dead</option>
            </select>
        </div>

        <div class="character-link">
          <a href="/asdasdf">Search</a>
        </div>


    </div>
  );
}