import './Services.css'
import { UilGlobe,UilMobileAndroid } from '@iconscout/react-unicons'
import React from 'react';


const Services = () => {
   
    return (
    <div className="MainServices">
        <div className='Row-1S'><span className='ServicesText'>خدماتنا</span></div>
        <div className='Row-2S'><span className='p-ServicesText'>كل الخدمات التي تحتاجونها في مكان واحد وبأيد أمينة</span></div>
        <div className='Row-3S'>

             <div className='CardServices'>
                <div className='IconCard'><UilMobileAndroid className='iconofcardservices'/></div>
                <div className='TitleCard'><span>برمجة التطبقيات</span></div>
                <div className='DescCard'><span>تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة</span></div>

            </div> 

            <div className='CardServices'>
                <div className='IconCard'><UilMobileAndroid className='iconofcardservices'/></div>
                <div className='TitleCard'><span>برمجة التطبقيات</span></div>
                <div className='DescCard'><span>تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة</span></div>

            </div> 

            <div className='CardServices'>
                <div className='IconCard'><UilMobileAndroid className='iconofcardservices'/></div>
                <div className='TitleCard'><span>برمجة التطبقيات</span></div>
                <div className='DescCard'><span>تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة</span></div>

            </div>

            
        </div>
    </div>
    );
}
 
export default Services
