import style from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  changeNameFilter,
  changeNumberFilter,
} from "../../redux/filters/slice";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);
  const dispatch = useDispatch();

  return (
    <div className={style.wrapSB}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search contacts..."
        value={nameFilter}
        onChange={(e) => {
          dispatch(changeNameFilter(e.target.value));
        }}
      />
      <label htmlFor="number">Find contacts by number</label>
      <input
        type="text"
        id="number"
        name="number"
        placeholder="Search contacts by number..."
        value={numberFilter}
        onChange={(e) => {
          dispatch(changeNumberFilter(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
