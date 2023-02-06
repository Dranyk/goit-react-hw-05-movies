import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
