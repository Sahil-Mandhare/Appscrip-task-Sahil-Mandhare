import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import { getProducts } from '../api/fakeStore';
import '../styles/Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortOption, setSortOption] = useState('RECOMMENDED');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [customizable, setCustomizable] = useState(false);
  const [genderFilter, setGenderFilter] = useState({
    men: false,
    women: false,
    kids: false
  });

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    let result = [...products];

    if (customizable) {
      result = result.filter(p => p.title.toLowerCase().includes('custom'));
    }

    const activeGenders = Object.entries(genderFilter)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    if (activeGenders.length > 0) {
      result = result.filter(p =>
        activeGenders.some(g =>
          p.category.toLowerCase().includes(g.toLowerCase())
        )
      );
    }

    if (sortOption === 'PRICE_LOW_TO_HIGH') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'PRICE_HIGH_TO_LOW') {
      result.sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
  }, [products, customizable, genderFilter, sortOption]);

  const toggleFilterPanel = () => {
    setFiltersVisible(prev => !prev);
  };

  return (
    <>
      <Header />

      <div className="home-container">


        <main className="products-panel">
          <div className="header-text">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>     
          
        </main>
        <div className='nav-container'>
          <div>
            <div className="filter-sort-bar"> 
                <div className="left-group">
                  <span className="item-count">3425 ITEMS</span>
                  {filtersVisible?<button className="hide-filter" onClick={toggleFilterPanel}>{"<"}HIDE FILTER</button>:""}
                  {!filtersVisible && (
                    <div className='filter-buttons'>
                      <button className="show-filter" onClick={toggleFilterPanel}>
                        {"> "}SHOW FILTER
                      </button>
                      <button className="show-filter-button-two" onClick={toggleFilterPanel}>
                        Filter
                      </button>

                    </div>
                  )}
                </div>
                <div className="sort-controls">
                    <div className="sort-controls-inner-div">
                    {/* <label htmlFor="sort" className="sort-label">Sort:</label> */}
                    <select
                      id="sort"
                      onChange={(e) => setSortOption(e.target.value)}
                      value={sortOption}
                    >
                      <option value="RECOMMENDED">Recommended</option>
                      <option value="NEWEST">Newest First</option>
                      <option value="POPULAR">Popular</option>
                      <option value="PRICE_LOW_TO_HIGH">Price: Low to High</option>
                      <option value="PRICE_HIGH_TO_LOW">Price: High to Low</option>
                    </select>
                  </div>
                </div>
            </div>
            <div className='products-right-container'>
                <div>
                    {filtersVisible && (
                    <Filters
                      toggleFilterPanel={toggleFilterPanel}
                      customizable={customizable}
                      setCustomizable={setCustomizable}
                      genderFilter={genderFilter}
                      setGenderFilter={setGenderFilter}
                    />
                  )}
                </div>
                <div className='products-container'>
                  <ProductList products={filtered} filtersVisible={filtersVisible} />
                </div>
              

            </div>

          </div>


        
        
        
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Home;
