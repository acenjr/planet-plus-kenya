import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { Homepage, BlogContentPage, GalleryPage, MainPage, PartnersPage, ProgramsPage, AboutUspage, EventsPage } from './pages';
import ProductPage from './pages/ProductPage';

function App() {
  const { loading, data, error } = useFetch('https://apiv1.planetpluskenya.co.ke/api.php?endpoint=all');
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/partners' element={<PartnersPage />} />
        <Route path='/about' element={<AboutUspage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/blogs' element={<Homepage blogs={data} />} />
        <Route path='/blog/:id' element={<BlogContentPage blogs={data} />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/programs' element={<ProgramsPage />} />
      </Routes>
    </div>
  );
}

export default App;