import React from 'react'
import style from "./Contact.module.css"

export default function Contact() {
  return (
    <div>
      <section>
        <div className={`light-main`}>
            <div className={` content text-center `}>
            <h2 className='text-uppercase fs-1 fw-bold mt-4'>contact section</h2>
            <div className={`bdarkBorder`}>
          <i class="fa-solid fa-star"></i>
          </div>
            </div>

        </div>
        <div className={`${style.form}  px-3 mt-5 `}>
               <div className={`${style.inputField} mb-5 col-sm-7 mx-auto `}>
               <input type="text" placeholder='userName' id='userName' className='d-bl' />
                <label htmlFor="userName"> userName:</label>
               </div>
               <div className={`${style.inputField} mb-5 mb-5 col-sm-7 mx-auto `}>
               <input type="text" placeholder='userAge' id='userAge' />
                <label htmlFor="userAge"> userAge:</label>
               </div>
               <div className={`${style.inputField} mb-5 mb-5 col-sm-7 mx-auto `}>
               <input type="text" placeholder='userEmail' id='userEmail' />
                <label htmlFor="userEmail"> userEmail:</label>
               </div>
               <div className={`${style.inputField} mb-5  col-sm-7 mx-auto  `}>
               <input type="text" placeholder='userPassword' id='userPassword' />
                <label htmlFor="userPassword">userPassword:</label>
               </div>
               <div className='col-sm-7 mx-auto '>
               <button className={`${style.sndBtn} text-capitalize d-block  rounded-3 `}> send message</button>

               </div>
            </div>
           
            
      </section>
    </div>
  )
}
