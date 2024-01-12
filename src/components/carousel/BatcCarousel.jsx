import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomepageImage from '../../assets/BatC/BatC_homepage.png';
import IndexImage from '../../assets/BatC/BatC_index.png';
import ShowImage from '../../assets/BatC/BatC_show.png';
import ShowImage2 from '../../assets/BatC/BatC_show2.png';
import AddImage from '../../assets/BatC/BatC_add.png';
import BookNewImage from '../../assets/BatC/BatC_book_new.png';
import BookIndexImage from '../../assets/BatC/BatC_book_index.png';
import BookShowImage from '../../assets/BatC/BatC_book_show.png';
import LoginImage from '../../assets/BatC/BatC_login.png';

class BatcCarousel extends Component {
    componentDidMount() {
      ReactDOM.render(<BatcCarousel />, document.querySelector('#carousel-container-batc'));
    }

    render() {
        return (
            <Carousel infiniteLoop swipeable autoPlay>
                <div>
                    <img src={HomepageImage} alt='homepage'/>
                    <p className="legend">Homepage</p>
                </div>
                <div>
                    <img src={IndexImage} alt='index' />
                    <p className="legend">Index view of boats</p>
                </div>
                <div>
                    <img src={ShowImage} alt='show' />
                    <p className="legend">Show view of boat with working carousel</p>
                </div>
                <div>
                    <img src={ShowImage2} alt='show2' />
                    <p className="legend">Show view of boat with Description of boat and Mapbox map</p>
                </div>
                <div>
                    <img src={AddImage} alt='add boat' />
                    <p className="legend">Add boat form</p>
                </div>
                <div>
                    <img src={BookNewImage} alt='new booking' />
                    <p className="legend">Create a new booking for a boat</p>
                </div>
                <div>
                    <img src={BookIndexImage} alt='booking index' />
                    <p className="legend">Index view of all created bookings</p>
                </div>
                <div>
                    <img src={BookShowImage} alt='booking show' />
                    <p className="legend">Show view of booking</p>
                </div>
                <div>
                    <img src={LoginImage} alt='login' />
                    <p className="legend">Login screen</p>
                </div>
            </Carousel>
        );
      }
    };

export default BatcCarousel;
