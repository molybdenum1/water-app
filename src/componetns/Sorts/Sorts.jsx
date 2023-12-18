import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import PropTypes from "prop-types";

import "./Sorts.css";

const Sorts = (props) => {
  const { sortBy, handleChangeSortBy } = props;
  return (
    <div className="sorts">
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sortBy}
          onChange={handleChangeSortBy}
          autoWidth
          label="Sort By"
        >
          <MenuItem value={"Highest"}>Price - Highest</MenuItem>
          <MenuItem value={"Lowest"}>Price - Lowest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
Sorts.propTypes = {
  sortBy: PropTypes.string.isRequired,
  handleChangeSortBy: PropTypes.func.isRequired,
};

export default Sorts;
