import Item from "./Item";

const Home = ({ items, search, setSearch, fetchError }) => {
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
      {items.length ?
        <div className="items">
          {items.map(item => (
              <Item 
                  item={item}
              />
          ))}
        </div>
        :
        <div className="fetchError">
          <p>{fetchError}</p>
        </div>
      }
    </main>
  )
}

export default Home
