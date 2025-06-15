import React from 'react';
import '../styles/Filters.css';

function Filters({
  toggleFilterPanel,
  customizable,
  setCustomizable,
  genderFilter,
  setGenderFilter
}) {
  const handleGenderChange = (gender) => {
    setGenderFilter(prev => ({
      ...prev,
      [gender]: !prev[gender]
    }));
  };

  return (
    <aside className="filters-panel">
      <div className="filter-header">
        
        
      </div>

      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={customizable}
            onChange={() => setCustomizable(prev => !prev)}
          />
          Customizable
        </label>
      </div>

      <div className="filter-group">
        <h4>IDEAL FOR</h4>
        <label>
          <input
            type="checkbox"
            checked={genderFilter.men}
            onChange={() => handleGenderChange('men')}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            checked={genderFilter.women}
            onChange={() => handleGenderChange('women')}
          />
          Women
        </label>
        <label>
          <input
            type="checkbox"
            checked={genderFilter.kids}
            onChange={() => handleGenderChange('kids')}
          />
          Baby & Kids
        </label>
      </div>

      <div className="filter-group"><h4>OCCASION</h4></div>
      <div className="filter-group"><h4>WORK</h4></div>
      <div className="filter-group"><h4>FABRIC</h4></div>
      <div className="filter-group"><h4>SEGMENT</h4></div>
      <div className="filter-group"><h4>SUITABLE FOR</h4></div>
    </aside>
  );
}

export default Filters;