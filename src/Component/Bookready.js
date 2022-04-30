import React from 'react'

function Bookready() {
  return (
    <>
            <div className='BookReadytext text-center'>
            <i class="fa fa-credit-card mb-3" aria-hidden="true"></i>
                <h2 className='mt-3 mb-5'>READY TO BOOK?</h2>
            </div>
        <div className='container border p-5 bookReady2022'>
            <div className='readytour2022'>

        <h2>When would you like to stay?</h2>
            </div>
              <div className='row  mt-3 '>
                 
               
                  <div className='col-md-4'>
                      <label>Name</label>
                      <br/>
                      <input type="text" className='inputArea' placeholder='Enter the Name' style={{width:'96%'}}/>
                  </div>
                  <div className='col-md-4 '>
                  <label>Name</label>
                  <br/>
                      <input type="text" className='inputArea' placeholder='Enter the Name' style={{width:'96%'}}/>
                  </div>
                  <div className='col-md-4'>
                      <button className='bookButton'>Click Me</button>
                  </div>
              </div>     
        </div>
    </>
  )
}

export default Bookready