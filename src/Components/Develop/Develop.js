import './Develop.css'
import phone from './imgs/pic1.png'
import right from './imgs/right.png'
import left from './imgs/left.png'
import { UilBracketsCurly,UilPalette,UilTachometerFastAlt,UilRocket } from '@iconscout/react-unicons'

const Develop = () => {
    return (
        <div className="MainDevelop">
            <div className='Row-1D'><span>يمكننا<span className='text2'>تطوير تطبيقات الهاتف</span></span></div>
            <div className='Row-2D'><span>أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات / موقع ويب من البداية يناسب احتياجاتك</span></div>

            <div className='Row-3D'>

                <div className='Left-3D'>

                    <div className='CardDevelop-LeftUp'>
                        <div className='iconDevelop'><UilBracketsCurly size='35' color="#EF2B2D"/></div>
                        <div className='TitleDevelop'><span>كود قوي و مرن</span></div>
                        <div className='DescDevelop'>يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء</div>
                    </div>

                    <div className='CardDevelop-LeftDown'>
                        <div className='iconDevelop'><UilTachometerFastAlt size='35' color="#EF2B2D"/></div>
                        <div className='TitleDevelop'><span>سهل الاطلاق</span></div>
                        <div className='DescDevelop'>سوف نقدم لك لوحه الادارة و كيفيه التعامل معها بشكل كامل </div>
                    </div>
                </div>

                <div className='Center-3D'>
                    <div className='LeftImg'><img src={left} alt='' className='leftarr'></img><img src={left} alt='' className='leftarr1'></img></div>
                    <div className='CenterImg'><img src={phone} alt=''></img></div>
                    <div className='RightImg'><img src={right} alt='' className='rightarr'></img><img src={right} alt='' className='rightarr1'></img></div>

                </div>

                <div className='Right-3D'>

                    <div className='CardDevelop-RightUp'>
                        <div className='iconDevelop'><UilBracketsCurly size='35' color="#EF2B2D"/></div>
                        <div className='TitleDevelop'><span>كود قوي و مرن</span></div>
                        <div className='DescDevelop'>يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء</div>
                    </div>

                    <div className='CardDevelop-RightDown'>
                        <div className='iconDevelop'><UilBracketsCurly size='35' color="#EF2B2D"/></div>
                        <div className='TitleDevelop'><span>كود قوي و مرن</span></div>
                        <div className='DescDevelop'>يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Develop;