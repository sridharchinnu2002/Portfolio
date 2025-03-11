import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Home() {
  return (
    
    <div className='bg-black'>
      <p className='font-serif text-5xl text-yellow-300 animate-bounce ease-linear flex justify-center pt-10 pb-3 '>Iam a FullStack Developer</p>
      <div className='flex flex-column p-10'>
      <nav className='text-white px-20 text-2xl font-serif'>"Hi, I'm ,<mark><b>SRIDHAR</b></mark>, a passionate Full-Stack Developer eager to build scalable and user-friendly web applications.
         I specialize in  Java,Spring Boot & MS,JavaScript, React, and enjoy turning ideas into functional digital solutions. Constantly learning and exploring new technologies, I am excited to contribute my skills to real-world projects. Let's build something amazing together!"</nav>
         <img className='col-6 rounded-t-full h-56 w-3xl mr-15' src="https://www.cnet.com/a/img/resize/0e9874cc9d6b18489f832793796d285141496106/hub/2021/10/16/11804578-0dbc-42af-bcd1-3bc7b1394962/the-batman-2022-teaser-poster-batman-01-promo.jpg?auto=webp&fit=bounds&height=900&precrop=1881,1411,x423,y0&width=1200" alt="" />
         </div>

       <div className=' flex justify-center gap-5 pb-9 '>
        <button className='bg-yellow-600 py-2  rounded rounded-b-md px-2 text-black hover:bg-yellow-300 '><b>Hire Me</b></button>
        <button className='bg-yellow-600 py-2  rounded rounded-b-md px-2 text-black hover:bg-yellow-300 '><b><a href='resume.pdf' download>Resume</a></b></button>
   
								<SocialIcon url='https://github.com/sridharchinnu2002' />
								<SocialIcon url='https://linkedin.com/in/chinthala-sridhar-265690335' />
			
       </div>
      
    </div>
  )
}

export default Home
 