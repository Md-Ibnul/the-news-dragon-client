import React from 'react';
import { Card, Image, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {  FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {_id, title, details, image_url, author, rating, total_view} = news;
    return (
        <Card className=" mb-4">
      <Card.Header className='d-flex align-items-center'>
            <div className='d-flex gap-3 align-items-center flex-grow-1'>
                <div>
                <Image style={{height: "40px"}} src={author?.img} roundedCircle />
                </div>
                <div>
                    <p className='mb-0'>{author?.name}</p>
                    <span><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></span>
                </div>
            </div>
            <div>
                <FaRegBookmark /> <FaShareAlt />
            </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : 
          <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>
            <Rating placeholderRating={rating.number}
  emptySymbol={<FaRegStar />}
  placeholderSymbol={<FaStar  className='text-warning'/>}
  fullSymbol={<FaStar />} readonly/>
            <span className='ms-2'>{rating.number}</span>
        </div>
        <div>
            <FaEye className='me-2' />
            {total_view}
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsCard;