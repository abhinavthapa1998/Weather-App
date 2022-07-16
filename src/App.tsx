import "./styles.css";
import Search from "./components/Search/Search";
export default function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}
