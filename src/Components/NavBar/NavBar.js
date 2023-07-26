import './NavBar.css'
import arlan from './imgs/National Flag Of Egypt.png'
import darkmode from './imgs/fi-rr-moon.png'
import logoapp from './imgs/MYM_Logo.jpg'
import nav from './imgs/NavbarBackGorund1.png'
const NavBar = () => {
    return (
    <div className="MainNavBar">

        <nav className='NavBarItem'>
        <img src={nav} alt='' className='picofnav'></img>

            <div className='RightNav'>
                <img src={logoapp} alt='' className='logoapp'></img>
            </div>
          
            <div className='CenterNav'>
                <ul className='item-CenterNav'>
                    <li>الرئيسيه</li>
                    <li>خدماتنا</li>
                    <li>من نحن</li>
                    <li>شركائنا</li>
                    <li>فريق العمل</li>
                </ul>
            </div>

          
            <div className='LeftNav'>
                <button className='Lang'><span>اللغه العربية</span><img src={arlan} alt=''></img></button>
                <button className='Mode'><img src={darkmode} alt=''></img></button>
            </div>

        </nav> 
    </div>
    
    );
}
 
export default NavBar;