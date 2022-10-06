import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Register from './components/Register';
import AuthProvider from './contexts/AuthProvider';
import DataProvider from './contexts/DataProvider';


function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/login" element={<Register />}></Route>
            <Route exact path='/' element={<Main />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
