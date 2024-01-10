import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomepageImage from '../../assets/AdoptMwa/AdoptMwa_homepage.png';
import IndexImage from '../../assets/AdoptMwa/AdoptMwa_index.png';
import ShowImage from '../../assets/AdoptMwa/AdoptMwa_show.png';
import ShowImage2 from '../../assets/AdoptMwa/AdoptMwa_show2.png';
import AddImage from '../../assets/AdoptMwa/AdoptMwa_add.png';
import MyAnimalsImage from '../../assets/AdoptMwa/AdoptMwa_my_animals.png';
import OffCanvasImage from '../../assets/AdoptMwa/AdoptMwa_offcanvas.png';


class AdoptMwaCarousel extends Component {
    componentDidMount() {
      ReactDOM.render(<AdoptMwaCarousel />, document.querySelector('#carousel-container-adoptmwa'));
    }

    render() {
        return (
            <Carousel infiniteLoop centerMode centerSlidePercentage={33} swipeable >
                <div>
                    <img src={IndexImage} alt='index' />
                    <p className="legend">Index view of animals</p>
                </div>
                <div>
                    <img src={ShowImage} alt='show' />
                    <p className="legend">Show view of animal</p>
                </div>
                <div>
                    <img src={ShowImage2} alt='show2' />
                    <p className="legend">Show view of animal with extra info and map</p>
                </div>
                <div>
                    <img src={AddImage} alt='add animal' />
                    <p className="legend">Add an animal form</p>
                </div>
                <div>
                    <img src={MyAnimalsImage} alt='my animals' />
                    <p className="legend">Requests screen for animals </p>
                </div>
                <div>
                    <img src={OffCanvasImage} alt='booking index' />
                    <p className="legend">Off-canvas menu from the right side</p>
                </div>
                <div>
                    <img src={HomepageImage} alt='homepage'/>
                    <p className="legend">Homepage</p>
                </div>
            </Carousel>
        );
      }
    };

export default AdoptMwaCarousel;
