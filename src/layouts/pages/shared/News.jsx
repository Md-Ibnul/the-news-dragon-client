import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from './EditorsInsights';

const News = () => {

    const news = useLoaderData();
    const {title, image_url, details, category_id} = news;

    return (
        <div>
            <Card className='mb-4'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsights />
        </div>
        
    );
};

export default News;