import React from 'react'

const Contact = () => {
    return (
        <>
            <div className=' flex flex-col justify-center items-center'>
                <div className='w-3/5'>
                    <h2 className='text-5xl font-semibold text-center '>Any Question? Feel Free to Contact</h2>

                    <form className=' py-5'>
                        <div className='flex justify-center items-center gap-6'>
                            <div className="mb-3 w-full">
                                <label className="form-label text-lg font-semibold ">Name</label>
                                <input type="text" className="form-control h-12 placeholder-gray-400 ::placeholder" placeholder="Enter the name" />
                            </div>
                            <div className="mb-3 w-full ">
                                <label className="form-label text-lg font-semibold">Email</label>
                                <input type="email" className="form-control h-12 placeholder-gray-400 ::placeholder" placeholder="Enter the email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-lg font-semibold">Phone</label>
                            <input type="email" className="form-control h-12 placeholder-gray-400 ::placeholder" placeholder="Enter the phone number" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-lg font-semibold">Subject</label>
                            <input type="email" className="form-control h-12 placeholder-gray-400 ::placeholder" placeholder="Enter Subject" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-lg font-semibold">Your Message</label>
                            <textarea className="form-control placeholder-gray-400 ::placeholder" rows="4"></textarea>
                        </div>
                        <button className='border-2 border-slate-900 text-lg px-2 py-1 rounded-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact