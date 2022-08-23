import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="testimonial-area pd-top-118 pd-bottom-120 bg-overlay" style={{background: 'url('+publicUrl+'assets/images/3.png)'}}>
			  <div className="bg-overlay-wrap">
			    <div className="section-title style-white text-center">
			      <h6>Our Testomonial </h6>
			      <h2>What Client Say</h2>
			      <p>Land Sales rose 6% in 2022, surpassing the sales increase of other commercial real estate types due to Landjax proclivity in the Market. </p>
			    </div>
			    <div className="container">
			      <div className="row justify-content-center">
			        <div className="col-lg-10">
			          <div className="testimonial-slider-1 owl-carousel">
			            <div className="item">
			              <div className="single-testimonial-inner style-two text-center">
			                <div className="thumb main-thumb">
			                  <img src={publicUrl+"assets/img/testimonial/1.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h6 className="name">Sarif Jaya Miprut</h6>
			                  <p>“Residential land sales accounted for a higher share of residential real estate sales, at 4%. Residential land for the buyer to build on accounted for a higher share of residential sales, at 4% in 2021’’ </p>
			                  <div className="rating-inner">
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="far fa-star" aria-hidden="true" />
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="item">
			              <div className="single-testimonial-inner style-two text-center">
			                <div className="thumb main-thumb">
			                  <img src={publicUrl+"assets/img/testimonial/4.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h6 className="name">Sarif Jaya Miprut</h6>
			                  <p>“consecte Lorem ipsum dolor sit amet, Lorem ipsum dolor amet, consecte Lorem ipsum dolor sit adipisicing amet, consectetur sed do eiusmod tempor incididunt dolore magna consecrem adipisicing ipsum dolor sit amet, consectetur elit,’’ </p>
			                  <div className="rating-inner">
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="far fa-star" aria-hidden="true" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial