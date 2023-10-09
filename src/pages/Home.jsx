import React, { useEffect, useState } from 'react';
import Banner from '../header/Banner';
import Header from '../header/Header';
import Cards from '../card/Cards';

const Home = () => {
    const [card, setCard] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Cards data={card}></Cards>
            <div className='py-15 my-10 bg-[#69c947]'>
                <div className="flex-col grid grid-cols-1 lg:grid-cols-2 w-fulls">
                    <div className="">
                        <img className='w-full' src="https://i.ibb.co/MCDstgY/testimonial.jpg" alt="testimonial" border="0" />
                    </div>

                    <div className="">
                        <h3 className='text-2xl text-white text-center md:py-10 lg:mt-[100px] lg:ml-[40px]'>"Great teacher, great <br /> environment, great <br />
                            energy. Awesome specials <br />
                            for new yogis."</h3>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                    <div>
                            <h1 className="text-5xl font-bold">The Main Reasons to Practice Yoga</h1>
                            <p className="py-6">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae lorem.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    <img src="https://i.ibb.co/h9MhcSg/promo-1.webp" alt="promo-1" border="0"/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;