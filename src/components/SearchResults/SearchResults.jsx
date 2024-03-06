import React from "react";
import "../SearchResults/SearchResults.css";
import { UserCard } from "../UserCard/UserCard";

export const SearchResults = ({ filteredUsers }) => {
  return (
    <div className="searchResults">
      {filteredUsers.length > 0 &&
        filteredUsers?.map((user) => (
          <UserCard user={user} followOption={false} />
        ))}
    </div>
  );
};
