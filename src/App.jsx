import Pagination from "./components/Pagination";

function App() {
  return (
    <div>
     <Pagination num_of_pages={8} active_page={1}/>
    </div>
  );
}

export default App;
