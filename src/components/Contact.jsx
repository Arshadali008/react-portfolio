import React, { useState } from 'react'
import Title from '../designs/Title';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';

const Contact = () => {
        const [clientName, setClientName] = useState("");
        const [email, setEmail] = useState("");
        const [messages, setMessages] = useState("");

        const [errClientName, setErrClientName] = useState(false);
        const [errEmail, setErrEmail] = useState(false);
        const [errMessages, setErrMessages] = useState(false);

        const [successMsg, setSuccessMsg] = useState("");

        const EmailValidation=(email)=>{
            return String(email)
            .toLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
        }

        const handleName =(e) =>{
            setClientName(e.target.value);
            setErrClientName(false)
        };
        const handleEmail =(e) =>{
            setEmail(e.target.value);
            setErrEmail(false)
        };
        const handleMessages =(e) =>{
            setMessages(e.target.value);
            setErrMessages(false)
        };


        const handleSend =(e) =>{
            e.preventDefault();
            if(!clientName){
                setErrClientName(true);
            }
            if(!email){
                setErrEmail(true);
            }
            else{
                if(!EmailValidation(email)){
                    setErrEmail(true);
                }
            }
            if(!messages){
                setErrMessages(true);
            }
        if(clientName && email && EmailValidation(email) && messages){
                axios.post("https://getform.io/f/49e5d7da-8871-4dc5-adfe-0d44837e7674",{
                    name:clientName,
                    email:email,
                    message:messages
                });
                setSuccessMsg(
                    `Hello dear ${clientName}, Your messages has been successfully. Thank you for your time!`
                );
                setClientName("");
                setEmail("");
                setMessages("")
            }
    };
  return (
    <div name="contact" className='bg-yellow-50 w-full p-20'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-yellow-500'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-yellow-900 inline'>Contact</p>
            </div>
        <div className='p-6 justify-between gap-10 max-w-screen-lg mx-auto w-full text-black flex'>
            <div className='lg:grid lg:grid-cols-2 w-full py-8 gap-10 sm:grid sm:grid-cols-1'>
            <p className='flex w-full text-lg justify-between text-gray py-4 border-b-[1px] border-b-zinc-800'>
                <span className='bg-yellow-500 text-gray-700 text-sm font-medium px-2 rounded-md flex items-center justify-center'>Address:</span>Manjeri, Malappuram
                </p>
                <p className='flex w-full text-lg justify-between text-gray py-4 border-b-[1px] border-b-zinc-800'>
                <span className='bg-yellow-500 text-gray-700 text-sm font-medium px-2 rounded-md flex items-center justify-center'>Phone:</span>+91 9496980008
                </p>
                <p className='flex w-full text-lg justify-between text-gray py-4 border-b-[1px] border-b-zinc-800'>
                <span className='bg-yellow-500 text-gray-700 text-sm font-medium px-2 rounded-md flex items-center justify-center'>Email:</span>arshuarshad8019@gmail.com
                </p>
                <p className='flex w-full text-lg justify-between text-gray py-4 border-b-[1px] border-b-zinc-800'>
                <span className='bg-yellow-500 text-gray-700 text-sm font-medium px-2 rounded-md flex items-center justify-center'>Freelance:</span>Available
                </p>
            </div>
        </div>
        <div className='w-full mt-10'>
        <div>
                <p className='text-4xl font-bold inline text-black'>Message</p>
            </div>            {
            successMsg ? <p className='text-center text-base font-titleFont p-20 text-yellow-500'>{successMsg}</p>:(
                <form id='form' action='https://getform.io/f/49e5d7da-8871-4dc5-adfe-0d44837e7674' method='Post' className='p-6 flex flex-col gap-6'>
                <div className='w-full flex gap-10'>
                    <input 
                    onChange={handleName}
                    value={clientName}
                    className={`${errClientName?"border-red-600 focus-visible:border-red-600":"border-yellow-900 focus-visible:border-yellow-600"} w-full lg:w-1/3 bg-transparent border-2 px-4 py-3 text-base text-yellow-600 outline-none duration-300`} type="text" placeholder='Full Name'/>
                     <input 
                     onChange={handleEmail}
                     value={email}
                     className={`${errEmail?"border-red-600 focus-visible:border-red-600":"border-yellow-900 focus-visible:border-yellow-600"} w-full lg:w-2/3 bg-transparent border-2 px-4 py-3 text-base text-yellow-600 outline-none duration-300`} type="email" placeholder='Email Address'/>
                     </div>
                <textarea
                onChange={handleMessages}
                value={messages}
                className={`${errMessages?"border-red-600 focus-visible:border-red-600":"border-yellow-900 focus-visible:border-yellow-600"} w-full bg-transparent border-2 px-4 py-2 text-base text-yellow-600 outline-none duration-300 resize-none`}cols={"30"} rows={"10"} placeholder='Enter Message'>
                </textarea>
                <button onClick={handleSend} className='text-base w-44 flex items-center gap-1 text-yellow-800 hover:text-yellow-500 duration-200'>Sent Message{" "}<span className='mt-1 text-yellow-500'>{<FiSend/>}</span></button>
            </form>
            )
            }
        </div>
        </div>
    </div>
  )
}

export default Contact