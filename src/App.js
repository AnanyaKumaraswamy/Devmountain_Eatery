import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import RecipeCard from "./RecipeCard";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="newRecipe" element={<NewRecipeScreen />} />
          <Route path="/recipe/:id" element={<DetailScreen />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
