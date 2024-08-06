import React, { useState, useEffect } from "react";
import DateFilter from "./components/DateFilter";
import SortToolbar from "./components/SortToolbar";
import FollowerList from "./components/FollowerList";
import "./styles.css";

const App = () => {
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);

  useEffect(() => {
    fetch("/twubric.json")
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data);
        setFilteredFollowers(data);
      });
  }, []);

  const handleFilter = (startDate, endDate) => {
    const filtered = followers.filter((follower) => {
      const joinDate = new Date(follower.join_date * 1000); // Convert from UNIX timestamp
      return joinDate >= startDate && joinDate <= endDate;
    });
    setFilteredFollowers(filtered);
  };

  const handleSort = (criteria) => {
    const sorted = [...filteredFollowers].sort((a, b) => {
      if (criteria === sortCriteria) {
        setSortCriteria(null);
        return a.twubric[criteria] < b.twubric[criteria] ? 1 : -1;
      } else {
        setSortCriteria(criteria);
        return a.twubric[criteria] > b.twubric[criteria] ? 1 : -1;
      }
    });
    setFilteredFollowers(sorted);
  };

  const handleRemove = (id) => {
    setFilteredFollowers(
      filteredFollowers.filter((follower) => follower.uid !== id)
    );
  };

  return (
    <div className="app">
      <DateFilter onFilter={handleFilter} />
      <SortToolbar onSort={handleSort} />
      <FollowerList followers={filteredFollowers} onRemove={handleRemove} />
    </div>
  );
};

export default App;
