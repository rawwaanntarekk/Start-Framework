import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer bg-dark-blue  text-center  ">
        <div className="container mx-auto py-5">
            <div className="row pt-5">
                <div className="col-sm-12 col-md-6 col-lg-4 mx-auto text-white">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mx-auto text-white">
                    <h3>AROUND THE WEB</h3>
                    <i class="fa-brands fa-facebook p-2 border rounded-circle me-2"></i>
                    <i class="fa-brands fa-twitter p-2 border rounded-circle me-2"></i>
                    <i class="fa-brands fa-linkedin-in p-2 border rounded-circle me-2"></i>
                    <i class="fa-solid fa-globe p-2 border rounded-circle me-2"></i>
                    </div>
                
                <div className="col-sm-12 col-md-6 col-lg-4 mx-auto text-white">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            
        </div>
        <div className="cpy-right bg-darkest-blue text-white py-3">
            Copyright © Your Website 2021
            </div>
      </div>
    </div>
  )
}
