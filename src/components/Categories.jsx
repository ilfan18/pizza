import React, { useState } from 'react';

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  function handleClickItem(index) {
    setActiveItem(index);
  }
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => handleClickItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => handleClickItem(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Categories;
