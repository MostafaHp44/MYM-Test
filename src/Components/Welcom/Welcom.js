import './Welcom.css'
import mainimg from './imgs/1 1.png'
import  line2  from './imgs/خيارك الاول لتحول فكرتك الي واقع مع افضل سعر ل اعلي جودة.png'
import { UilFacebook,UilTwitterAlt,UilInstagram,UilYoutube,UilLinkedin} from '@iconscout/react-unicons'
const Welcom = () => {
    return (
    <div className="MainWelcom">

        <div className='Row-1W'>

          <div className='Col-1W'>
            <div className='t1'>
                <span className='s1'>ابحث عن أفضل <span className='w1'>الحلول </span> <br/>البرمجية</span></div>
            <div className="t2"><img src={line2} alt=''></img></div>
            <div className="t3"><button className='btnget'>الحصول علي استشارة</button></div>

          </div>
        
          <div className='Col-2w'>
            <img src={mainimg} alt='' className='mainimg'></img>
          </div>
 
        

        </div>

        <div className='Row-2W'>

            <div className='Col-3W'>
                <span className='t4'>هدفنا</span>
                <br/>
                <span className='t5'>أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات و موقع ويب من البداية يناسب احتياجاتك</span>
            </div>
            
            <div className='Col-4W'>
                <span className='t6'>صفحاتنا علي السوشيال ميديا</span>
                <div className='iconsocial'>
                    <UilFacebook color='white'/>
                    <UilTwitterAlt color='white'/>
                    <UilInstagram color='white'/>
                    <UilYoutube  color='white'/>
                    <UilLinkedin color='white'/>

                </div>

            </div>
        </div>
    </div>
    );
}
 
export default Welcom;