import React from 'react'

function Question() {
  return (
    <div>
      <div className='question'>
        <h1 className='text-center mb-5'>Question?</h1>
        <div className='container'>
          <div className="row">
          <form role="form" id="frmRegister5" name="formName">
            <div className='col-md-3'>
              <input type='text' name="firstName"  className='inputArea' placeholder='Name' required />
            </div>
            <div className='col-md-3'>
              <input type='email' name="email" className='inputArea' placeholder='Email Address' required  />
            </div>
            <div className='col-md-3'>
              <input type="text"   name="requirement" className='inputArea' required  placeholder='Question/Comments' />
            </div>
            <div className='col-md-3'>
            <input type="hidden" name="appKey" id="appKey" defaultValue="0CvrNUpqu9YQxKBYs5e8kVcexYrngGMI" />
      <input type="hidden" name="source" id="source" defaultValue="TourOxy_Web" />
      <input type="hidden" name="userRoleType" id="userRoleType" defaultValue="UR04" />
        <input type="hidden" name="leadType" id="leadType" defaultValue={48} />
        <input type="hidden" name="service" id="service" defaultValue="Tour" />

              <button type="submit" name="submit">Send</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question;


