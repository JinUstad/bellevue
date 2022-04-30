import React from 'react'

function Plan() {
    return (
        <>
       <div className='yujik_theme_26_4_22'>
       <div className='Plan_26_2022' style={{overflow:"auto" }}>
                <div className='container'>
                    <div className='plan_table'>
                        <div>
                            <h2 style={{ textAlign: 'center' }}>ROOM RATES</h2>
                            <hr/>
                            <p style={{ textAlign: 'center' }}>Phasellus sit amet enim feugiat.</p>
                        </div>
                        {
                            Array(3).fill().map((item) => (
                                <div class="columns">
                                    <ul className="price">
                                        <li className="header">Basic</li>
                                        <li className="grey">$ 9.99 / year</li>
                                        <li>10GB Storage</li>
                                        <li>10 Emails</li>
                                        <li>10 Domains</li>
                                        <li>1GB Bandwidth</li>
                                        <li className="grey"><p className="button">Check Availability</p></li>
                                    </ul>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
       </div>
        </>
    )
}

export default Plan