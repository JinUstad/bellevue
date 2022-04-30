import React from 'react'

function Amenties() {
    return (
        <div className='amenities_main'>
            <div className='container'>
                <div className='Amenities'>
                    <h2 className='text-center'>AMENITIES</h2>
                    <hr />
                </div>
                <div className='container'>
                <div className='row'>
                    {
                        Array(6).fill().map((item)=>(
                            <div className='col-md-6'>
                            <div className='Amenities_card_sec'>
                               
                            <i className='fa fa-envelope-open mr-2 fontAwesome' style={{marginTop:'8px',marginLeft:'-40px',color:'#c6c6c6',fontSize:'25px', position:'absolute'}}></i> <h2 className='mt-5 sm-fs-5'>  Private Access</h2>
                                    <p>Phasellus sit amet enim feugiat, dignissim sem et, tempus sapien. Mauris leo.</p>
                            </div>
                        </div>
                        ))
                    }
                   
                </div>
            </div>
            </div>
        </div>
    )
}

export default Amenties