import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

function CarouselComponent({apiResponse}) {
    <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="sliderContainer"
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      > 
    
    
      {apiResponse.map((book) => (
        
        <div key={book.id}>
        {book.volumeInfo.imageLinks?.thumbnail && (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        )}
        </div>   
    

      ))}
    
    </Carousel>
}

export default CarouselComponent
