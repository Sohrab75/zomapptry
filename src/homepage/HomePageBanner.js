import React from 'react'
import { Carousel } from 'react-bootstrap';
import HomePageBannerStyled from './HomePageBannerStyled';

const HomePageBanner = () => {
  return (
    <>
    <HomePageBannerStyled>
    <Carousel slide={false}>
      <Carousel.Item>
        <img src="https://i.ibb.co/0JZy59X/healthy-vegetables-wooden-table.jpg" alt="img1" />
        <Carousel.Caption>
          <h3>Fresh Vegetables</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/TTXW9gr/common-food-that-can-cause-allergic-reactions-people.jpg" alt="img1" />
        <Carousel.Caption>
          <h3>Fresh Dairy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/34bPd0m/pile-fresh-fruits.jpg" alt="img1" />
        <Carousel.Caption>
          <h3>Fresh Fruits</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </HomePageBannerStyled>
    </>
  )
}

export default HomePageBanner;