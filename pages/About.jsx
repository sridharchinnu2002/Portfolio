import React from 'react'

function About() {
  return (
    <div className='grid-cols-3 bg-black text-white pt-8'>
      <p className='flex justify-center  pb-6 text-3xl'><b>know me better..!!!</b></p>
      <div class="flex">

           <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
              <div >
                <b className='flex justify-center'><u>EDUCATION DETAILS</u></b>
             
               <pre className='py-3'><i>✦ SITS       Btech       2024</i> <br /><i>✦ VNRVJIET   Diploma     2021</i><br /><i>✦ SITS       Btech       2024</i></pre>
               
              </div>
            </div>
            
            <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
            <div >
              <b className='flex justify-center'><u>SKILLS</u></b>
           
             <pre className='py-3'><i>✦ Java      ✦ Spring </i> <br /><i>✦ HTML      ✦ CSS </i> <br /><i>✦ JS        ✦ R-JS  </i>  <br /><i>✦ SQL       ✦ MYSQL  </i></pre>
             
            </div>
          </div>

          <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
            <div >
              <b className='flex justify-center'><u>ACHIEVMENTS</u></b>
           
             <pre className='py-3'><i>✦ Built and Deployed a Live Project </i> <br /><i>✦ Developed a Full-Stack Web Application</i> <br /><i>✦ Contributed to Open-Source Projects</i> 
              <br /><i>✦ Developed a Java JEE Employee <br />     Registration System</i></pre>
             
            </div>
          </div>
           
          <div class="flex-1 flex justify-center border-2 bg-yellow-300 text-black ring-4 ring-black-500 m-3 mx-6 rounded-4xl shadow-lg shadow-red-400/50 p-2">
            
            <div >
              <b className='flex justify-center'><u>HOBBIES</u></b>
           
             <pre className='py-3'><i>✦ Reading Books </i> <br /><i>✦ Travelling </i> <br /><i>✦ Out-door Sports</i>  <br /><i>✦ Pet-Parenting</i></pre>
             
            </div>
          </div>
       </div>
      <p className='text-3xl  pt-10 pl-10'><b>My Guiding Principles :</b></p>
      <p className='text-2xl p-2 pl-40 pt-5'> ➤ Rule No.1 : Perfection with perfect timing.<i></i></p>
      <p className='text-2xl p-2 pl-40 pb-3'> ➤ Rule No.2 : Follow rule no.1<i></i></p>
    </div>
  )
}

export default About
