import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const API_URL = 'http://localhost:3000/menu';
export const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  
  
  const [items, setItems] = useState([]);
  const [state, setState] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  useEffect(() => {
    // const sortBy = sort.sortProperty.sortProperty.replace('-', '');
    // const order = sort.sortProperty.sortProperty.includes('-') ? 'asc' : 'desc';
    // const category = categoryId > 0 ? `category=${categoryId}` : '';
    // const search = searchValue ? `&search=${searchValue}` : '';

    setIsLoader(true);
    axios
      // 'http://localhost:3000/menu?page=${currentPage}&limit=4&${category}&sortBy={sortBy}&order=${order}${search}'
      .get(API_URL, {
        params: {
          category: categoryId > 0 ? categoryId : '',
          title: searchValue,
        },
      })
      .then((responce) => {

        setItems(responce.data);
        setIsLoader(false);
      })
      .catch((error) => {
        console.error(error);
      });

    // window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все блюда</h2>
      <div className="content__items">
        {isLoader
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                id={obj.id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                price={obj.price}
                description={obj.description}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
