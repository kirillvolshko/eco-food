import React from 'react'
import { useState } from 'react';
import './Form.css'
function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        file: null,
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({ ...prevData, file }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            file: null,
          });
      };
  return (
    <div className='back-layer'>
        <div className='form-container'>
            <div className='form-content'>
                <div>
                    <h1 className='headline'>НАПИСАТИ НАМ!</h1>
                </div>
                <form className='form' >
                    <div className='form-inputs'>
                        <div className='input-group'>

                            <input
                             placeholder='Ім`я'
                             name='firstName'
                             className='small-input'
                             value={formData.firstName}
                             onChange={handleInputChange} />

                            <input
                            placeholder='Прізвище' 
                            name='lastName'
                            className='small-input'
                            value={formData.lastName}
                            onChange={handleInputChange}
                            />

                        </div>

                            <input 
                            placeholder='E-mail' 
                            type='email' 
                            className='big-input'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            />
                        <div className='input-group'>
                            <label className='file-label'>Завантажити файл</label>
                            <input placeholder='Прикріпити' type='file' className='file-input' onChange={handleFileChange}/>
                        </div>
                            <label className='textarea-label'>Повідомлення</label>
                            <textarea
                            className='textarea-block'
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}></textarea>
                    </div>
                    <div className='submit-button-container'>
                        <button type='submit' className='submit-button' onClick={handleSubmit}>Надіслати</button>
                    </div>
                    
                </form>
            </div>
            <div className='contact-form'>
                <div>
                    <h1 className='headline'>КОНТАКТИ</h1>
                </div>
                <div>
                    <p className='text-contact'>м. Київ, вул. Комбінатна, 21</p>
                    <p className='text-contact'>+38 067 900 93 83</p>
                    <p className='text-contact'>EcoFoodUkraine@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form