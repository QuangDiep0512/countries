import "./scss/App.scss";
import Header from "./components/header/Header";
import Main from "./components/MainContent/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryDetails } from "./components/MainContent/CountryDetail/CountryDetails";
import Footer from "./components/footer/Footer";
import { SignIn } from "./components/Auth/SignIn";
import { AuthProvider } from "./components/ContetxtProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/region/:regionName" element={<Main />} />
            <Route path="/country/:countryName" element={<CountryDetails />} />
            <Route path="/search/:name" element={<Main />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
