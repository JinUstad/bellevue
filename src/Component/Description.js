import React from 'react'
import caro1 from '../Assests/caro1.jpg'
import caro2 from '../Assests/caro2.jpg'
import caro3 from '../Assests/caro3.jpg'
function Description() {

    const scrollTohowIt = () =>  window.scroll({
        top: 3500,
        left: 0,
        behavior: 'smooth'
      });
    return (
        <div>
            <div className='Description26_2022'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='Description26_2022_text'>
                            <h3>ROOM DESCRIPTION</h3>
                            <p>Nulla at mauris accumsan eros ullamcorper tincidunt at nec ipsum. In iaculis est ut sapien ultrices, vel feugiat nulla lobortis. Donec nec quam accumsan, lobortis.Integer at erat malesuada, tincidunt orci nec, aliquet quam. Nulla accumsan sapien eu ultrices pulvinar. 
                                Proin tincidunt augue a auctor placerat. Morbi in fermentum erat.</p>
                            </div>
                            <button className='mt-3'onClick={scrollTohowIt} >Reserve this room</button>
                        </div>
                        <div className='col-md-6 '>
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img className="d-block w-100" src={caro1} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                        <img className="d-block w-100" src={caro2} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                        <img className="d-block w-100" src={caro3} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description