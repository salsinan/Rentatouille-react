import Item from "./Item";

const Home = ({ items }) => {
  return (
    <article>
        {items.map(item => (
            <Item 
                item={item}
            />
        ))}
    </article>
  )
}

export default Home
