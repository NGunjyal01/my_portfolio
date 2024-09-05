import Link from 'next/link'

const Header = () => {
    return (
        <div className='fixed z-20 w-full flex justify-between bg-white shadow-md py-10 text-lg font-heading'>
            <h1 className='ml-[5%] text-xl font-bold tracking-wider'>Nakshatra.dev</h1>
            <div className='flex gap-5 mr-[5%]'>
                <Link href='#home-section'>Home</Link>
                <Link href='#about-section'>About</Link>
                <Link href='#projects-section'>Projects</Link>
                <Link href='#contact-section'>Contact</Link>
            </div>
        </div>
    )
}

export default Header
