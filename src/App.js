import './App.css';
import CharactersPage from "./pages/Characters/index";
import Character from "./components/Character/Character";
import { Route } from "react-router-dom";
import './style.css';

function App() {
  return (
    <main>
      <Route path="/" component={CharactersPage} />
      <Route path="/character/:id" component={Character} />
    </main>
  );
}

export default App;
