import React from 'react'
import { SocialIcon } from 'react-social-icons'
function Projects() {
  return (
    <div className='bg-black text-white'>
      <p className='text-3xl flex justify-center p-2'><b>My Technical Work</b></p>
      <div class="flex ">
          <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
            <div >
              <b className='flex justify-center'><u>Online Electronic Store</u></b>
           
             <pre className='py-3'><i>✦ Description: An online platform developed using  Java,<br />  JDBC, HTML,   and CSS,  allowing users to  browse and purchase<br />  electronic items securely. </i> <br />
             <i>✦ GitHub Repository: <a href="https://github.com/sridharchinnu2002/Online_Electronic_Store"><u><b>Online_Electronic_Store</b></u></a></i></pre>
             
            </div>
          </div>
  
        <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
            <div >
              <b className='flex justify-center'><u>Bank Registration System</u></b>
           
             <pre className='py-3'><i>✦ Description: A Java JEE-based system enabling <br />  authorized personnel to register,and manage bank employee details <br />  securely, integrating JSP, HTML, CSS, and SQL. </i> <br />
              <i>✦ GitHub Repository: <a href="https://github.com/sridharchinnu2002/Bank_Registration"><u><b>Bank_Registration</b></u></a></i></pre>
             
            </div>
          </div>
        
      </div>
           
      <div class="flex ">
          <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
            <div >
              <b className='flex justify-center'><u>My_Hotel</u></b>
           
             <pre className='py-3'><i>✦ Description: A simple yet elegant food hotel <br />  website built using React.js, offering customers an interactive<br />  platform to explore dishes, view menus, and place orders. </i> <br />
             <i>✦ GitHub Repository: <a href="https://github.com/sridharchinnu2002/myhotel"><u><b>myhotel</b></u></a></i></pre>
             
            </div>
          </div>
  
        <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
            <div >
              <b className='flex justify-center'><u>Portfolio</u></b>
           
             <pre className='py-3'><i>✦ Description: A personal portfolio website built from scratch <br />  using React.js and different libraries showcasing my <br />  skills, projects, and contact details.</i> <br />
            <i>✦ GitHub Repository: <a href="https://github.com/sridharchinnu2002/Bank_Registration"><u><b>Portfolio</b></u></a></i></pre>
             
            </div>
          </div>
        
      </div>

        <div className='text-3xl flex justify-center gap-5 p-2'>
        <span ><b>For more projects visit </b></span>   
        <SocialIcon url='https://github.com/sridharchinnu2002' /> </div>     
    </div>
  )
}

export default Projects
