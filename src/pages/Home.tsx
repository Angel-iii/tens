import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const API_URL = 'http://localhost:3000/menu';

export const Home = () => {

  const [tooDoos, setTooDoos] = useState([]);
  const [state, setState] = useState(false);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((responce) => {
        setTooDoos(responce.data);
        setIsLoader(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все блюда</h2>
            <div className="content__items">
              {isLoader
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : tooDoos.map((obj) => (
                    <PizzaBlock
                      title={obj.title}
                      imageUrl={obj.imageUrl}
                      price={obj.price}
                      description={obj.description}
                    />
                  ))}
            </div>
    </>
  )
}

export default Home;
