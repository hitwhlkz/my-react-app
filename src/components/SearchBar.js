function SearchBar({
    filterText,
    completedOnly,
    onFilterTextChange,
    completedOnlyChange
  }) {
    return (
      <form>
        <input
          type="text"
          value={filterText} placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label>
          <input
            type="checkbox"
            checked={completedOnly}
            onChange={(e) => completedOnlyChange(e.target.checked)} />
          {' '}
          仅查看未完成项目
        </label>
      </form>
    );
  }

  export default SearchBar;