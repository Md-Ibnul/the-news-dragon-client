import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {

    const {id} = useParams();

    const categoryNews = useLoaderData();

    return (
        <div>
            <h4 className='mb-4'>Dragon News</h4>
            {
                categoryNews.map(news => <NewsCard 
                    key={news._id}
                    news={news}
                />)
            }
        </div>
    );
};

export default Category;