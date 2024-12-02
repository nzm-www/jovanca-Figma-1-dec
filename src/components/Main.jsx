import girl from '../../public/girl.svg'
import drib from '../../public/dribbble.svg'
import lin from '../../public/Linked.svg'
import med from '../../public/Medium.svg'
import beh from '../../public/behance.svg'

function Main() {
    return (
       <div>
         <div className="pl-[121px] pr-[121px] pt-[100px]">
            <h3 className='jova'>JOVANCA</h3>
            <div className='text-center '>
                <h2 className='text-7xl text-white font-serif font-semibold cursor-pointer hover:text-yellow-100 '>I’m Jovanka Lovata.</h2>
                <p className='text-2xl font-bold text-white pb-12 pt-8 cursor-pointer  hover:text-yellow-100 '>UI/UX Designer and Web Developer</p>
                <div className='flex justify-center'>
                    <img src={girl} alt="" />
                </div>
            </div>
        </div>
            <div className='bg-black h-[130px]'>
                <div  className="pl-[121px]  pr-[121px] flex items-center justify-around pt-[45px]">
                <img src={drib} alt="" />
                <img src={lin} alt="" />
                <img src={med} alt="" />
                <img src={beh} alt="" />
                </div>

            </div>

       </div>
    )
}

export default Main