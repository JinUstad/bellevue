import React from 'react'

function MoreInfo() {
    const scrollTohowItWorks = () =>  window.scroll({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });

    // const buttonEl = document.getElementById('greetBttn');

    // // Add event listener
    // buttonEl.addEventListener('click', () => window.scroll({
    //         top: 400,
    //         left: 0,
    //         behavior: 'smooth'
    // })
    // );

  return (
    <div className='morinfo26_2022'>
        <div className='container moreInfo_con'>
           <div className='row' >
              

               <div className='col-md-2  '>
                   <h4><b>$98/</b>night</h4>
               </div>
               <div className='col-md-2  fontIcon'>
                   <h4><i class="fa-solid fa-user mr-2"></i> Sleeps 2</h4>
               </div>
               <div className='col-md-2 suite '>
                   <h4><i class="fa-solid fa-shower mr-2"></i>En suite</h4>
               </div>
               <div className='col-md-2  fontIcon '>
                   <h4> <i class="fa fa-utensils mr-2"></i>Kitchen</h4>
               </div>
               <div className='col-md-2  fontroom '>
                   <h4><i class="fa fa-bed mr-2 "></i>Bed room</h4>
               </div>
               <div className='col-md-2  moreInfo'>
                   <button onClick={scrollTohowItWorks}>More Info</button>
               </div>
             
           </div>
        </div>
    </div>
  )
}

export default MoreInfo