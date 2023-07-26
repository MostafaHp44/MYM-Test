import { useState } from 'react'
import './TeamWork.css'
import pic1 from './img/Rectangle 22734.png'
import { UilFacebook,UilTwitterAlt,UilInstagram,UilYoutube,UilLinkedin} from '@iconscout/react-unicons'

const TeamWork = () => {
    const [all,setall]=useState(false)
    const [webdevelop,setwebdevelop]=useState(false)
    const [phonedevelop,setphonedevelop]=useState(false)
    const [uidevelop,setuidevelop]=useState(false)
    const [modrator,setmodrator]=useState(false)
    const [database,setdatabase]=useState(false)

    const hadellopenall=()=>{
        setall(curr=>!curr)
    }

    const handellopenweb=()=>{
        setwebdevelop(curr=>!curr)
    }

    const handellopenphone=()=>{
        setphonedevelop(curr=>!curr)
    }

    const handellopenui=()=>{
        setuidevelop(curr=>!curr)
    }

    const handellopenmodrator=()=>{
        setmodrator(curr=>!curr)
    }

    const handellopendatabase=()=>{
        setdatabase(curr=>!curr)
    }

    return (
    <div className="MainTeamWork">
        <div className='Row-1T'>
            <span> فريق العمل </span>
        </div>
        <div className='Row-2T'>
            <button className='btnTeamWork' onClick={hadellopenall}>الكل</button>
            <button className='btnTeamWork' onClick={handellopenweb}> مطور ويب</button>
            <button className='btnTeamWork' onClick={handellopenphone}>مطور تطبيقات الهاتف</button>
            <button className='btnTeamWork' onClick={handellopenui}>مصمم الواجهات</button>
            <button className='btnTeamWork' onClick={handellopenmodrator}>المدراء</button>
            <button className='btnTeamWork' onClick={handellopendatabase}>قواعدالبيانات</button>

        </div>
        <div className='Row-3T'>
            {
             all ?
             <>
            <div className='CardEmp'>
                <div className='ImgEmp'><img src={pic1} alt='' className='picofemp'></img></div>
                <div className='NameEmp'><span>Mostafa Amine</span></div>
                <div className='PositionEmp'><span>WebDevelop</span></div>
                <div className='SocialEmp'>
                    <UilFacebook   className="icon-SocialEmp"/>
                    <UilInstagram  className="icon-SocialEmp"/>
                    <UilLinkedin   className="icon-SocialEmp"/>
                    <UilTwitterAlt className="icon-SocialEmp"/>
                </div>

            </div>

             <div className='CardEmp'>
             <div className='ImgEmp'><img src={pic1} alt='' className='picofemp'></img></div>
             <div className='NameEmp'><span>Ahmed saeed</span></div>
             <div className='PositionEmp'><span>DataBase</span></div>
             <div className='SocialEmp'>
                 <UilFacebook   className="icon-SocialEmp"/>
                 <UilInstagram  className="icon-SocialEmp"/>
                 <UilLinkedin   className="icon-SocialEmp"/>
                 <UilTwitterAlt className="icon-SocialEmp"/>
             </div>

             </div>

             <div className='CardEmp'>
             <div className='ImgEmp'><img src={pic1} alt='' className='picofemp'></img></div>
             <div className='NameEmp'><span>Twfik hamed</span></div>
             <div className='PositionEmp'><span>UI/UX</span></div>
             <div className='SocialEmp'>
                 <UilFacebook   className="icon-SocialEmp"/>
                 <UilInstagram  className="icon-SocialEmp"/>
                 <UilLinkedin   className="icon-SocialEmp"/>
                 <UilTwitterAlt className="icon-SocialEmp"/>
             </div>

             </div>

             </>
         
            
            :
            <></>
            }
        </div>

    </div>
    );
}
 
export default TeamWork;