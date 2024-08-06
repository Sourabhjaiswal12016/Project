import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div className="date-filter">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default DateFilter;
