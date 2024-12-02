import girl2 from '../../public/girl2.svg'

function Section1() {
    return (
        <div className='pl-[121px] pr-[121px] pt-[100px]'>
            <div className='flex pb-24 justify-around items-center'>
                <div>
                    <img src={girl2} alt="" />
                </div>
                <div>
                    <h2 className='zbl text-5xl font-serif font-semibold text-white  ;' >DIGITAL DESIGNER <br /> <br />
                        CURRENTLY BASED IN <br /> <br />
                        INDONESIA</h2>
                    <p className='text-2xl font-semibold text-white pt-11'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et <br /> velit interdum, ac aliquet odio mattis.</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Section1;