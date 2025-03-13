import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Projects() {
  return (
    <div className='flex flex-col gap-2 bg-black text-white pt-8'>
      <p className='flex justify-center  pb-6 text-3xl'><b>My Technical Work..!!!</b></p>
      <div class=" border-2 text-yellow-300 bg-black ring-2 ring-black-500 m-3 mr-25 ml-25 pb-5 rounded-4xl shadow-lg shadow-red-400/50 ">
      <b className='flex justify-center text-2xl p-3'><u>My_Hotel</u></b>
            <div className='flex justify-evenly' >
              <img className='rounded-4xl justify-center border-yellow-500 border-2' src=".\images\mh-1.png" alt="img" height={200} width={400} />
           
             <pre className='py-3'><i>✦ <b>Description:</b> A simple yet elegant food hotel<br />   website built using React.js, offering customers an interactive<br />   platform to explore dishes, view menus, and place orders. </i> <br />
             <i>✦ Login options for(Customers) with high end security.</i><br />
            
             <i>✦ Customers can Add/remove items before checkout. <br />  </i><br />
             <i>✦ GitHub Repository: <a href="https://github.com/sridharchinnu2002/myhotel"><u><b>myhotel</b></u></a></i></pre>
            </div>
          </div>
          <div class=" border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mr-25 ml-25 pb-5 rounded-4xl shadow-lg shadow-red-400/50 ">
             <b className='flex justify-center text-2xl pb-3'><u>Online Electronic Store</u></b>
            <div className='flex justify-evenly' >
              <img className='rounded-4xl justify-center' src=".\images\es-4.jpeg" alt="img" height={400} width={400} />
           
             <pre className='py-3'><i>✦ <b>Description:</b> An online platform developed using  Java,<br />  JDBC, HTML,   and CSS,  allowing users to  browse and purchase<br />  electronic items securely. </i> <br />
             <i>✦ with 2 login options for(ADMIN & USER) with high end security.</i><br />
             <i>✦ Admin can Manage users, orders, and product inventory..</i><br />
             <i>✦ Customers can add products to the cart and proceed. <br />  </i><br />
             <i>✦ GitHub Repository: <a href="https://github.com/sridharchinnu2002/Online_Electronic_Store"><u><b>Online_Electronic_Store</b></u></a></i></pre>
            </div>
          </div>

          <div class=" border-2 text-yellow-300 bg-black ring-2 ring-black-500 m-3 mr-25 ml-25 pb-5 rounded-4xl shadow-lg shadow-red-400/50 ">
      <b className='flex justify-center text-2xl pb-3'><u>Bank Registration System</u></b>
            <div className='flex justify-evenly' >
              <img className='rounded-4xl justify-center border-yellow-500 border-2' src="https://s3-alpha.figma.com/hub/file/4397175417/07f7e307-881f-453a-ae3a-432059611638-cover.png" alt="img" height={200} width={300} />
           
             <pre className='py-3'><i>✦ <b>Description:</b>  A Java JEE-based system enabling<br />  authorized person to register,and manage bank employee details <br />  securely, integrating JSP, HTML, CSS, and SQL. </i> <br />
             <i>✦ with 2 login options for(ADMIN & USER) with high end security.</i><br />
             <i>✦ Admin can edit and remove customer records.</i><br />
             <i></i><br />
             <i>✦ GitHub Repository: <a href="https://github.com/sridharchinnu2002/Bank_Registration"><u><b>Bank Registration System</b></u></a></i></pre>
            </div>
          </div>
          <div className='text-3xl flex justify-center gap-5 p-2'>
        <span ><b>For more projects visit </b></span>   
        <SocialIcon url='https://github.com/sridharchinnu2002' /> </div> 

    </div>

  )
}

export default Projects
