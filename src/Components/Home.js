import Item from "./Item";
import SearchForm from "./SearchForm";

const Home = ({ items, search, setSearch, fetchError }) => {
  return (
    <main className="homepage">
      <SearchForm
        search={search}
        setSearch={setSearch}
      />
      
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
