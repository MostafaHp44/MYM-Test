import './WhoWe.css'
import phone from './imgs/pic1.png'
import right from './imgs/right.png'
import left from './imgs/left.png'
import { UilGlobe,UilMobileAndroid } from '@iconscout/react-unicons'

const WhoWe = () => {
    return (
    <div className="MainWhoWe">
        <div className='Row-1Who'>
            <h1>من نحن</h1>
            <span className='text-whowe1'>هؤلاء وثقوا بنا , كن انت التالي </span>
            <p className='text-whowe2'>نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بأفضل الخبرات والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة الدفع والبنوك</p>

        </div>

        <div className='Row-2Who'>
            
            <div className='RightSec'>
                <div className='MainCard'>

                    <div className='col-1c'>
                        <span className='numbercard'>1</span>
                    </div>

                    <div className='col-2c'>
                        <span className='numbercard-2'>+10</span>
                        <p className='textcard'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>
                    </div>

                    <div className='col-3c'>
                        <UilMobileAndroid color="#EF2B2D" size='35' className='iconcard'/>
                    </div>

                </div>
            </div>

            <div className='CenterSec'>
                <img src={left} className='leftarrow' alt=''></img>
                <img src={phone} className='centerpic' alt=''></img>
                <img src={right} className='rightarrow' alt=''></img>
            </div>

            <div className='LeftSec'>
            <div className='MainCard'>
                    <div className='col-1c'>
                        <span className='numbercard'>1</span>
                    </div>
                    <div className='col-2c'>
                        <span className='numbercard-2'>+10</span>
                        <p className='textcard'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>
                    </div>
                    <div className='col-3c'>
                        <UilGlobe color="#EF2B2D" size='35' className='iconcard'/>
                    </div>
                </div>
            </div>

        </div>

    </div>
    );
}
 
export default WhoWe;