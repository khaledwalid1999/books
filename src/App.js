import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
