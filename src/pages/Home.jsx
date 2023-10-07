import React, { useEffect, useState } from 'react';
import Banner from '../header/Banner';
import Header from '../header/Header';
import Cards from '../card/Cards';

const Home = () => {
    const [card, setCard] = useState();
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCard(data))
    },[]);
    return (
        <div>
            <Banner></Banner>
            <Cards data={card}></Cards>
        </div>
    );
};

export default Home;