import React from 'react'
import { useRef, useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }


    const showPassword = () => {
        passwordRef.current.type = "password"
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        } else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log(form)
            setform({ site: "", username: "", password: "" })
            toast( 'Password Saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
        else {
            toast('Invalid credentials', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    const deletePassword = (id) => {
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        // console.log(form)
    }

    const editPassword = (id) => {
        console.log("editing password with id ", id)
        setform(passwordArray.filter(i => i.id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="p-2 pt-7 md:mycontainer">
                <h1 className='text-4xl font-bold text-center'><div className="logo font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>Key&gt;</span>
                </div></h1>
                <p className='text-green-900 text-lg text-center'>Your own password manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border-2 border-green-400 w-full px-4 py-1' type="text" name='site' id='site' />
                    <div className="flex flex-col md:flex-row w-full gap-8" id='site'>
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' type="text" className='rounded-full border-2 border-green-400 w-full px-4 py-1' name='username' id='username' />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' type="password" className='rounded-full border-2 border-green-400 w-full px-4 py-1' name='password' id='password' />
                            <span className='absolute right-[7px] top-[2px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="icons/eye.png" alt="" />
                            </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 rounded-full pl-2 pr-3 py-2 w-fit hover:bg-green-300 gap-2 border-2 border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/zrkkrrpl.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#121331,secondary:#0a5c15">
                        </lord-icon>
                        Add
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show !</div>}
                    <table className="table-auto w-full overflow-hidden rounded-md mb-8">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {

                                return <tr key={index} >
                                    <td><div className='flex items-center justify-center text-center py-2 border border-white'><a href={item.site} target='_blank'>{item.site}</a>
                                        <div className='lordiconcopy cursor-pointer pr-3' onClick={() => { copyText(item.site) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                trigger="hover"
                                                style={{ "width": "20px", "height": "20px", "paddingTop": "1px", "paddingLeft": "10px" }}>
                                            </lord-icon></div></div></td>
                                    <td><div className='flex items-center justify-center text-center py-2 border border-white'>{item.username}<div className='lordiconcopy cursor-pointer pr-3' onClick={() => { copyText(item.username) }}>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/lyrrgrsl.json"
                                            trigger="hover"
                                            style={{ "width": "20px", "height": "20px", "paddingTop": "1px", "paddingTeft": "10px" }}>
                                        </lord-icon></div></div></td>
                                    <td><div className='flex items-center justify-center text-center py-2 border border-white'>{item.password}<div className='lordiconcopy cursor-pointer pr-3' onClick={() => { copyText(item.password) }}>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/lyrrgrsl.json"
                                            trigger="hover"
                                            style={{ "width": "20px", "height": "20px", "paddingTop": "1px", "paddingLeft": "10px" }}>
                                        </lord-icon></div></div></td>
                                    <td>
                                        <div className='flex items-center justify-center text-center py-2 border border-white gap-7'>
                                            <span className='cursor-pointer' onClick={() => { editPassword(item.id) }} >
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/wuvorxbv.json"
                                                    trigger="hover"
                                                    delay="1500"
                                                    stroke="bold"
                                                    state="dynamic"
                                                    colors="primary:#121331,secondary:#242424"
                                                    style={{ "width": "20px", "height": "20px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/drxwpfop.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    colors="primary:#121331,secondary:#242424"
                                                    style={{ "width": "20px", "height": "20px" }}>
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Manager
