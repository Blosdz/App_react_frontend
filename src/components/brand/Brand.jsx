import React from 'react'
import{google,slack,atlassian,dropbox,shopify} from './import'
import './brands.css'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div >
        <img src={google} alt="" />
      <div>

        <img src={slack } alt="" />
      </div>
      <div>

        <img src={atlassian} alt="" />
      </div>
      <div>

        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={ shopify} alt="" />
      </div>
    </div>
    </div>
  )
}


export default Brand