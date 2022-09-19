import Item from "./Item";

const Home = ({ items, search, setSearch }) => {
  return (
    <main className="homepage">
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
      <p className="items">
        {items.map(item => (
            <Item 
                item={item}
            />
        ))}
      </p>
    </main>
  )
}

export default Home
