import byq from '../../public/byq.svg'
import ntb from '../../public/ntb.svg'
import prsn from '../../public/prsn.svg'
import pay from '../../public/pay.svg'

function Section2() {
    return (
        <div className="pl-[121px] pt-[97px] pr-[121px] ">
            <div className='flex pb-28 items-center justify-around'>
                <div>
                    <h2 className="text-5xl font-serif font-semibold text-white">WHAT DO I HELP</h2>
                    <p className="text-xl text-[#ffffffa8] font-semibold pt-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed <br /> dignissim, metus nec fringilla accumsan, risus sem <br /> sollicitudin lacus, ut interdum tellus elit sed risus. <br /> Maecenas eget condimentum velit, sit amet feugiat <br /> lectus. </p>
                    <div className="flex gap-28 pt-[107px]">
                        <span>
                            <p className="text-5xl font-serif text-white">250+</p>
                            <p className="text-xl font-semibold text-white font-sans">Project Completed</p>
                        </span>
                        <span>
                            <p className="text-5xl font-serif text-white">249+</p>
                            <p className="text-xl font-semibold text-white font-sans">Happy Clients</p>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className=' shadow-lg shadow-black w-[460px] gap-5 h-[176px] rounded-3xl bg-[#ffffff58] flex items-center justify-start pl-10'>
                        <img src={byq} alt="" />
                        <span>
                            <h2 className='text-3xl font-medium font-serif'>User Interface Design</h2>
                            <p className='text-xl  font-sans'>100 Projects</p>
                        </span>
                    </div>
                    <div className=' shadow-lg shadow-black w-[460px] gap-5 h-[176px] rounded-3xl bg-[#ffffffde] flex items-center justify-start pl-10'>
                        <img src={ntb} alt="" />
                        <span>
                            <h2 className='text-3xl font-medium font-serif'>Website Design</h2>
                            <p className='text-xl  font-sans'>100 Projects</p>
                        </span>
                    </div>
                    <div className=' shadow-lg shadow-black w-[460px] gap-5 h-[176px] rounded-3xl bg-[#ffffff58] flex items-center justify-start pl-10'>
                        <img src={prsn} alt="" />
                        <span>
                            <h2 className='text-3xl font-medium font-serif'>Marketing</h2>
                            <p className='text-xl  font-sans'>100 Projects</p>
                        </span>
                    </div>
                </div>
            </div>
            <hr />
            <h2 className='text-center pt-28 text-5xl font-serif font-medium text-white'>Let’s Start by Saying Hi!</h2>
            
            <div className='flex justify-center pt-6'>
            <button className='flex gap-4 border hover:bg-[#ffffff2c] pl-4 pr-4 pt-2 pb-2 items-center text-2xl font-sans text-indigo-50'>
                <img src={pay} alt="" />
                email me
            </button>
            </div>
        </div>
    )
}

export default Section2;