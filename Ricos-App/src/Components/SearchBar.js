import "../css/header.css";

const SearchBar = () => {
  return (
    <div>
      <input
        className="search-bar"
        name="subject"
        type="text"
        placeholder="Search.."
      />
    </div>
  );
};
export default SearchBar;
