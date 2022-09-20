const SearchForm = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id="searchForm">
        <label htmlFor='search'>Search</label>
        <input
        id = "search"
        type="text"
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchForm
