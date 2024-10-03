'use client'
import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [hide, setHide] = useState(true)
    const [serviceName, setServiceName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const showBlock = () => {
        setHide(false)
    }

    const selectService = (e: React.MouseEvent<HTMLParagraphElement>) => {
        let target = e.target as HTMLParagraphElement
        if (target.innerHTML) {
            setServiceName(target.innerHTML)
        }

    }

    useEffect(() => {
        window.addEventListener('click', (e) => {
            let target = e.target as HTMLElement
            if (!target.classList.contains('hide')) {
                setHide(true)
            }
        })
    }, [])

    const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateEmail = {
            from_name: (firstName + lastName),
            from_email: email,
            to_name: "Suraj Kumar Jha",
            message: message,
        };

        if (firstName != "" && lastName != "" && email != "" && message != "" && phone != "" && serviceName != "") {
            emailjs.send('service_5x6twjm', 'template_m6uj57d', templateEmail, {
                publicKey: 'qOLGOqqRXmOzFgrLz',
            })
                .then(
                    () => {
                        setFirstName('')
                        setLastName('')
                        setEmail('')
                        setPhone('')
                        setServiceName('')
                        setMessage('')
                    }
                )
        };
    }

    return (
        <>
            <section className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 -z-10'>
                <div className='w-3/5 flex justify-center items-start'>
                    <div className='w-1/2'>
                        <form action="" className='w-full h-full bg-gray-600 px-10 py-6 rounded-xl' onSubmit={sendEmail}>
                            <h1 className='text-emerald-400 font-bold text-3xl'> Let's Work together </h1>
                            <p className='text-gray-400 font-semibold text-sm my-4'> Fill your information and send me the message so i will be in touch with you. </p>
                            <div className='flex justify-center items-center gap-5'>
                                <input type="text" name="firstName" placeholder='First Name' className='p-2 w-full text-gray-300 text-sm font-bold bg-gray-800 rounded-md placeholder:text-xs placeholder:text-gray-400 placeholder:font-bold outline-none' onInput={(e) => setFirstName((e.target as HTMLInputElement).value)} value={firstName} />
                                <input type="text" name="lastName" placeholder='First Name' className='p-2 w-full text-gray-300 text-sm font-bold bg-gray-800 rounded-md placeholder:text-xs placeholder:text-gray-400 placeholder:font-bold outline-none' onInput={(e) => setLastName((e.target as HTMLInputElement).value)} value={lastName} />
                            </div>
                            <div className='flex justify-center items-center gap-5 my-5'>
                                <input type="email" name="email" placeholder='Your Email' className='p-2 w-full text-gray-300 text-sm font-bold bg-gray-800 rounded-md placeholder:text-xs placeholder:text-gray-400 placeholder:font-bold outline-none' onInput={(e) => setEmail((e.target as HTMLInputElement).value)} value={email} />
                                <input type="number" name="phoneNumber" placeholder='Your phone' className='p-2 w-full text-gray-300 text-sm font-bold bg-gray-800 rounded-md placeholder:text-xs placeholder:text-gray-400 placeholder:font-bold outline-none' onInput={(e) => setPhone((e.target as HTMLInputElement).value)} value={phone} />
                            </div>

                            <div className='relative'>
                                <input type="text" name="services" placeholder='Select a Service' className='hide p-2 w-full text-gray-300 text-sm font-bold bg-gray-800 rounded-md placeholder:text-xs placeholder:text-gray-400 placeholder:font-bold outline-none' value={serviceName} onClick={showBlock} />
                                <div className={hide ? 'absolute top-11 w-full z-20 hidden' : 'absolute top-11 w-full z-20 block bg-gray-700 rounded-md'}>
                                    <p className='text-gray-400 hover:bg-emerald-400 hover:text-gray-800 text-sm py-1 px-4 cursor-pointer font-bold' onClick={selectService}> Software Development </p>
                                    <p className='text-gray-400 hover:bg-emerald-400 hover:text-gray-800 text-sm py-1 px-4 cursor-pointer font-bold' onClick={selectService}> Full Stack Web-Application Development </p>
                                    <p className='text-gray-400 hover:bg-emerald-400 hover:text-gray-800 text-sm py-1 px-4 cursor-pointer font-bold' onClick={selectService}> Mobile App Development </p>
                                    <p className='text-gray-400 hover:bg-emerald-400 hover:text-gray-800 text-sm py-1 px-4 cursor-pointer font-bold' onClick={selectService}> Backend Development </p>
                                    <p className='text-gray-400 hover:bg-emerald-400 hover:text-gray-800 text-sm py-1 px-4 cursor-pointer font-bold' onClick={selectService}> Frontend Development  </p>
                                </div>
                            </div>

                            <textarea rows={4} placeholder='Type your message here.' className='w-full px-2 py-3 my-5 -z-10 text-gray-300 text-sm font-bold bg-gray-800 rounded-xl placeholder:text-xs placeholder:text-gray-400 placeholder:font-bold outline-none' onInput={(e) => setMessage((e.target as HTMLInputElement).value)} value={message} />

                            <input type="submit" value="Send Message" className='px-4 py-2 bg-emerald-400 rounded-full text-gray-800 font-bold text-sm cursor-pointer' />
                        </form>
                    </div>

                    <div className='w-1/2 h-full flex flex-col justify-center items-start pl-20 gap-8'>
                        <div className='flex justify-center items-center gap-5 '>
                            <div className='bg-emerald-500 p-2 rounded-md'>
                                <img src="https://img.icons8.com/?size=50&id=9730&format=png" alt="phone" className='w-10 h-10' />
                            </div>
                            <div>
                                <p className='font-bold text-sm text-emerald-400'> Phone </p>
                                <p className='text-gray-400 font-bold'> (+91) 8595917205 </p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-5 '>
                            <div className='bg-emerald-500 p-2 rounded-md'>
                                <img src="https://cdn-icons-png.freepik.com/256/1159/1159692.png?semt=ais_hybrid" alt="email" className='w-10 h-10' />
                            </div>
                            <div>
                                <p className='text-emerald-400 font-bold text-sm'> Email </p>
                                <p className='text-gray-400 font-bold'> surajkumarjha747@gmail.com </p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-5 '>
                            <div className='bg-emerald-500 p-2 rounded-md'>
                                <img src="https://icons.iconarchive.com/icons/steve/zondicons/256/Location-icon.png" alt="phone" className='w-10 h-10' />
                            </div>
                            <div>
                                <p className='text-emerald-400 font-bold text-sm'> Address </p>
                                <p className='text-gray-400 font-bold'> NIT Faridabad, Haryana - (121001) </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

