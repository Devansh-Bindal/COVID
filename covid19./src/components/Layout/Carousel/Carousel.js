import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 
class Carousel extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={6}
        >
        <Slider>
          <Slide index={0}>Symptoms of CoronaVirus That You Should Know</Slide>
          <Slide index={1}>Running a high Temperature</Slide>
          <Slide index={2}>Coughing for more than an hour</Slide>
          <Slide index={3}>Breathing Difficulties can be a symptom</Slide>
          <Slide index={4}>Loss of Smell and Taste</Slide>
          <Slide index={5}>Sore Throat,Headache & Diarrhoea</Slide>
        </Slider>
         <ButtonBack>Back</ButtonBack>
         <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
export default Carousel;