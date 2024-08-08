import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';



function Categories() {
  const [categorieActive, setAategorieActive] = useState(0);


 

  const onClickCategory = (index) => {
    setAategorieActive(index);
  };

  const categories = [
    'Все',
    'Корейские салаты',
    'Хе',
    'Европейские салаты',
    'Кимпабы',
    'Холодные закуски',
    'Горячие закуски',
    'Супы',
    'Классические супы',
    'Рыба',
    'Свинина',
    'Курица',
    'Говядина',
    'Классические блюда',
    'Пицца',
    'Блюда на заказ',
    'BBQ по корейски',
  ];

  return (
    <Splide
      options={{
        width: '85%',
        autoWidth: true,
        pagination: false,
      }}
      aria-label="Splide Basic Example">
      {categories.map((category, index) => (
        <SplideSlide key={index}>
          <div className="categories">
            <ul>
              <li
                onClick={() => onClickCategory(index)}
                className={categorieActive === index ? 'active' : ''}>
                {category}
              </li>
            </ul>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Categories;
