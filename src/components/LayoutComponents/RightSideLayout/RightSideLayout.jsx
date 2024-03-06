import { useContext, useState } from "react";
import { DataContext } from "../../../contexts/DataContext";
import "../RightSideLayout/RightSideLayout.css";
import { SearchResults } from "../../SearchResults/SearchResults";
import { UserCard } from "../../UserCard/UserCard";
import { FaSearch, FaTimesCircle } from "react-icons/fa";

export const RightSideLayout = () => {
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { dataState } = useContext(DataContext);

  const usersToShow = dataState.users.filter(
    (user) => user.username !== dataState.loggedInUser.username
  );

  const getFilteredUsers = (input) => {
    const filteredData = dataState.users.filter(
      (user) =>
        user.lastName.toLowerCase().includes(input.toLowerCase()) ||
        user.firstName.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  const handleInputChange = (input) => {
    setInput(input);
    getFilteredUsers(input);
  };

  const handleClearSearch = () => {
    setInput("");
    setFilteredUsers([]);
  };

  return (
    <div className="home-right-container">
      <div className="rsl-search-container">
        <div className="rsl-search-input-display">
          <FaSearch id="search-icon" />
          <input
            type="search"
            value={input}
            className="rsl-search"
            placeholder="Search"
            onChange={(e) => handleInputChange(e.target.value)}
          />
          {input && (
            <FaTimesCircle
              id="clear-search-icon"
              onClick={handleClearSearch}
              className="clear-search-icon"
            />
          )}
        </div>

        {input && filteredUsers.length > 0 && (
          <SearchResults filteredUsers={filteredUsers} />
        )}
      </div>

      <div className="rsl-users-container">
        <div className="rsl-users-container-name">
          <h3> Who to follow </h3>
        </div>
        <div>
          {usersToShow.map((user) => (
            <UserCard user={user} followOption={true} key={user._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
