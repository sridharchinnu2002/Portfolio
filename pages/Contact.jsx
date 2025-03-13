import React, { useState } from 'react'

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let newErrors = {}
    const numberRegex = /^([0-9]{1,})$/
    if (formData.name.trim() == "") {
      newErrors.name = "Name is required"
    }
    if (formData.email.trim() == "") {
      newErrors.email = "Email is required"
    }
    if (formData.number.trim() == "") {
      newErrors.number = "Ph.No is required"
    }
    if (formData.message.trim() == "") {
      newErrors.message = "message is required"
    }
    if (!numberRegex.test(formData.number)) {
      newErrors.numberregex =
        "Ph.No must contain Numbers from 0-9 only"
    }
    setErrors(newErrors)
    if (setErrors == {}) {
      fetch()
    }
  }
  return (
    <div>
      <div className=' flex justify-center  bg-black text-white text-3xl font-extrabold p-5'>
        <p>GET IN TOUCH</p>
      </div>
      <div className=' flex justify-center  bg-black text-white p-2'>
        <p><b>📞 Phone :</b> +91 9014578450</p>
      </div>

      <div className=' flex justify-center  bg-black text-white'>
        <p><b>📧 Email :</b> chinthalasridhar70@gmail.com</p>
      </div>

      <div className=' flex justify-center  bg-black text-white p-2'>
        <p><b>📍 Address :</b> 404-Error, Java lane, Void city ,NullPointer Dist </p>
      </div>


      <div className='flex justify-center bg-black text-white'>

        <form className='flex justify-center' onSubmit={handleSubmit}>

          <div>
          <div className='flex justify-center m-3 pt-3'>
                <div>
                 <input
                type="text"
                name='name'
                onChange={handleChange}
                value={formData.name}
                placeholder='Enter your name'
                className='border-2 border-yellow-300 m-2 rounded-2xl bg-amber-50 text-black p-1'
              />
              <p className=' text-red-500'> {errors.name}</p>

              <input
                type="email"
                name='email'
                onChange={handleChange}
                value={formData.email}
                placeholder='Enter your EMail'
                className='border-2 border-yellow-300 m-2 rounded-2xl bg-amber-50 text-black p-1'
              />
              <p className=' text-red-500'> {errors.email}</p>

              <input
                type="tel"
                name='number'
                onChange={handleChange}
                value={formData.number}
                placeholder='Enter your Ph.No'
                className='border-3 border-yellow-300 m-2 rounded-2xl bg-amber-50 text-black p-1'
              />
              <p className=' text-red-500'> {errors.number}</p>
              <p className=' text-red-500'> {errors.numberregex}</p>
               </div>


            <div>
              <textarea
                type="textarea"
                name='message'
                onChange={handleChange}
                value={formData.message}
                placeholder='Enter your message'
                className='border-2 border-yellow-300 m-2 rounded-2xl bg-amber-50 text-black p-1 h-35'
              />
              <p className=' text-red-500'> {errors.message}</p>
              </div>
             
            
          </div>
          <div className=' flex justify-center pb-5' > 
            <button className='justify-center bg-yellow-300 text-black font-bold rounded-2xl h-10 w-50 m-3'>Submit</button></div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
