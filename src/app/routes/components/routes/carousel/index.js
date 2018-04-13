import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import Simple from './simple/index';
import {products, testimonials} from './data'
import ProductCarousel from "./product/index";
import TestimonialCarousel from "./testimonial/index";

const Carousel = ({match}) => (
    <div className="animated slideInUpTiny animation-duration-3">
        <ContainerHeader title="Carousel" match={match}/>

        <div className="row mb-md-4">
            <CardBox styleName="col-lg-12" heading="Basic Carousel">
                <div>Basic BS4 Carousel Powered With ReactStrap</div>
                <Simple/>
            </CardBox>
        </div>

        <div className="row mb-md-4">
            <CardBox styleName="col-lg-12" cardStyle="text-center" heading="Product Carousel">
                <div>A Horizontal Grid View Carousel</div>
                <ProductCarousel products={products}/>
            </CardBox>
        </div>

        <div className="row mb-md-4">
            <CardBox styleName="col-lg-12" cardStyle="text-center" heading="Testimonial Carousel">
                <div>One item carousel at a time</div>
                <TestimonialCarousel testimonials={testimonials}/>
            </CardBox>
        </div>
    </div>
);
export default Carousel;