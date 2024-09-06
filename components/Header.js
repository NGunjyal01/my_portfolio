import Link from 'next/link'
import SideMenu from './SideMenu'

const Header = () => {
    return (
        <div className='fixed z-20 w-full flex justify-between bg-white shadow-md pt-10 pb-5 text-lg font-heading'>
            <h1 className='ml-[8%] sm:ml-[5%] text-xl font-bold tracking-wider'>Nakshatra.dev</h1>
            <div className='hidden md:flex gap-5 mr-[5%]'>
                <Link href='#home-section' className='hover:text-blue-500 duration-300'>Home</Link>
                <Link href='#about-section' className='hover:text-blue-500 duration-300'>About</Link>
                <Link href='#projects-section' className='hover:text-blue-500 duration-300'>Projects</Link>
                <Link href='#contact-section' className='hover:text-blue-500 duration-300'>Contact</Link>
            </div>
            <SideMenu/>
        </div>
    )
}

export default Header
