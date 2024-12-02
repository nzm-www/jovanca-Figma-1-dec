import logo from '../../public/logo.svg'


function Header() {
    return (
        <div className='pl-[121px] pr-[121px] pt-5'>
            <div className='flex items-center justify-between'>
                <img src={logo} alt="" />
                <nav className='flex items-center gap-16 text-xl text-white'>
                    <p className='hover:border w-[90px] flex items-center justify-center h-12   ' >Home</p>
                    <p className='hover:border w-[90px] flex items-center justify-center h-12   ' >About</p>
                    <p className='hover:border w-[90px] flex items-center justify-center h-12   ' >Services</p>
                    <p className='hover:border w-[90px] flex items-center justify-center h-12   ' >Hire Me</p>
                </nav>
            </div>
        </div>
    )
}

export default Header;