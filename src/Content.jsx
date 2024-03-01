import React, { useState, useRef } from 'react';
import Avatar from 'react-avatar-edit';
import img from './assets/nike.jpeg';
import Divider from '@mui/material/Divider';
import { Dialog } from 'primereact/dialog';
import { Button } from  'primereact/button';

//toast 
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Content = () => {
    const [dialog, setDialog] = useState(false);
    const [profile, setProfile] = useState([]);
    const [imgCrop, setImgCrop] = useState(false);

    /** Backend -- work in progress */

    // const [selectedImg, setSelectedImg] = useState(null);
    // const [avatar, setAvatar] = useState(img);

    // const handleImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     if (setSelectedImg) {
    //         setSelectedImg(file);
    //     }
    // }

    // const handleImageSave = (e) => {
    //     if (selectedImg) {
    //         const uploadEndPoint = 'http://localhost:3000/';
    //         const formData = new FormData();
    //         formData.append('avatar', selectedImg)
    //             .then((data) => {
    //                 notify();
    //                 console.log(data);
    //                 setAvatar(URL.createObjectURL(selectedImg));
    //             })
    //             .catch((error) => toast.error(error));
    //     }
    //     setSelectedImg(e.target.files[0]);
    // }

    const profileFinal = profile.map((item) => item.imgCrop);

    const onClose = () => {
        setImgCrop(null);
    }

    const onCrop = (view) => {
        setImgCrop(view);
    }

    const saveCropImage = () => {
        setProfile([...profile, {imgCrop}]);
        setDialog(false);
    }

    //notification
    const notify = () => {
        toast("Well done! Profile updated <3")
    }

    return (
        <div className="bg-white rounded-md p-4 h-full flex flex-row w-full">
             <div id='profile' className="flex flex-col items-center justify-center pt-5">
                <h1 id="title" className='text-3xl text-[#6C6C6C] font-normal2'>Profile</h1>
                <img 
                    className='object-cover rounded-full w-40 h-40 my-16 ring-4 ring-[#A5A58D]'
                    src={profileFinal.length ? profileFinal : img}
                    alt=""
                />
                <h1 id='username' className='text-3xl text-black font-bold'>Khusan Akhmedov</h1>
                <p id='subtitle' className='text-2xl text-[#6C6C6C] font-thin'>Web-designer</p>
                <div className='stats flex justify-between items-center text-center my-8'>
                    <div className='stat-sub flex flex-col items-center mx-12'>
                        <p className='stat-num text-3xl pb-4'>21</p>
                        <p className='text-[#6C6C6C] text-base font-light'>Shot</p>
                    </div>
                    <Divider orientation="vertical" variant="middle" color="black" flexItem />
                    <div className='stat-sub flex flex-col items-center mx-14'>
                        <p className='stat-num text-3xl pb-4'>238</p>
                        <p className='text-[#6C6C6C] text-base font-light'>Followers</p>
                    </div>
                    <Divider orientation="vertical" variant="middle" color="black" flexItem />
                    <div className='stat-sub flex flex-col items-center mx-10'>
                        <p className='stat-num text-3xl pb-4'>101</p>
                        <p className='text-[#6C6C6C] text-base font-light'>Following</p>
                    </div>
                </div>
                <Button 
                    id="img" 
                    onClick={() => setDialog(true)}
                    />
                <ToastContainer />
                <label 
                    for="img" 
                    className="px-10 p-2 bg-[#6B705C] rounded-xl text-white text-xl font-light hover:border-2 hover:border-[#6B705C] hover:bg-white hover:text-[#6B705C] hover:font-bold duration-150 ease-in">Click me to upload image</label>
                <Dialog
                    className="backdrop-blur-xl w-3/5 h-full items-center"
                    visible={dialog}
                    header={() => (
                        <p for="" className='text-2xl font-semibold my-8 pr-72'> Update Profile </p>
                    )}
                    onHide={() => setDialog(false)}
                >   
                    <div id="confirmation-content" className="flex flex-col items-center">
                        <Avatar 
                            width={500}
                            height={500}
                            onCrop={onCrop}
                            onClose={onClose}
                            cropRadius={4}
                            backgroundColor='white'
                        />
                        <div className="flex flex-col items-center mt-5 w-12">
                            <div className="flex justify-around mt-4 w-12">
                                <Button 
                                    className="p-2 px-9 pr-20 bg-[#6B705C] rounded-xl text-white text-xl font-light hover:border-2 hover:border-[#6B705C] hover:bg-white hover:text-[#6B705C] hover:font-bold duration-150 ease-in"
                                    onClick={() => {saveCropImage(); notify()}}
                                    label="Save"
                                    icon="pi pi-check"/>
                            </div>
                        </div>
                    </div> 
                    <ToastContainer />
                </Dialog>
                <div id="location" className='my-8 text-2xl text-[#6C6C6C] font-light'>
                    <p>Uzbekistan, Tashkent</p>
                </div>
                <div id="description" className='text-center text-[#6C6C6C] text-base font-light'>
                    <p>I'm web designer, I work in programs like figma,</p>
                    <p>adobe photoshop, adobe illustrator</p>
                </div>
            </div> 

            <Divider orientation="vertical" variant="inset" sx={{ borderRightWidth: 2, color: '#E5E5E5'}} flexItem />

            <div id='edit-info-about' className='mt-10'>
                <div id='edit-info-header' className='ml-16 mb-7 inline-flex justify-center items-center'>
                    <div className=' text-xl font-bold pr-80'><p>BASIC INFO</p></div>
                    <div className='pl-36 flex flex-row pt-4'>
                        <button className='p-3 px-5 rounded-lg text-sm text-[#6C6C6C] font-normal bg-transparent border-2 border-[#A5A58D] hover:bg-[#A5A58D] hover:text-white hover:font-bold duration-150 ease-in'>CANCEL</button>
                        <button className='p-3 px-7 ml-5 rounded-lg text-[#6C6C6C] text-sm font-normal bg-transparent border-2 border-[#A5A58D] hover:bg-[#A5A58D] hover:text-white hover:font-bold duration-150 ease-in'>SAVE</button>
                    </div>
                </div>
                <Divider orientation="horizontal" variant="inset" flexItem sx={{ borderBottomWidth: 2, color: '#E5E5E5' }}/>
                <div id="edit-info-form" className='ml-16 mt-10'>
                    <form id="#" className='max-w-full mb-10'>
                        <div id="input-box" className="flex justify-between flex-wrap mb-6">
                            <div className='w-3/5'>
                                <h2 className='text-sml'>FIRST NAME</h2>
                                <input type="text" className='w-full p-1 text-lg text-black text-base bg-white rounded-lg border-2 mt-3'/>
                            </div>
                            <div className='w-2/6'>
                                <h2 className='text-sml'>LAST NAME</h2>
                                <input type="text" className='w-full p-1 text-lg text-black text-base bg-white rounded-lg border-2 mt-3'/>
                            </div>
                        </div>
                        <div id="input-box" className='mb-6'>
                            <div className='w-full'>
                                <h2 className='text-sml'>TITLE</h2>
                                <input type="text" className='w-full p-1 text-lg text-black text-base bg-white rounded-lg border-2 mt-3'/>
                            </div>
                        </div>
                        <div id="input-box" className=''>
                            <div className='w-full'>
                                <h2 className='text-sml'>EMAIL</h2>
                                <input type="email" className='w-full p-1 text-lg text-black text-base bg-white rounded-lg border-2 mt-4'/>
                            </div>
                        </div>
                    </form>
                </div>

                <div id='about' className='ml-16'>
                    <div className=' text-xl font-bold mb-10'><p>ABOUT ME</p></div>
                    <Divider orientation="horizontal" variant="middle" flexItem sx={{ borderBottomWidth: 2, color: '#E5E5E5' }}/>
                    <form id="#" className='max-w-full mt-10'>
                        <div id="input-box">
                            <div className='w-full'>
                                <input 
                                    type="text" 
                                    className='w-full p-2 pb-20 text-lg text-black text-base bg-white rounded-lg border-2 mt-3'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Content;