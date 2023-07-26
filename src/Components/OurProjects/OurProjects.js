import './OurProjects.css'
import { useState } from 'react'
import p1 from './p1.png'


const OurProjects = () => {

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
    <div className="MainOurProjects">
        <div className='Row-1OP'><span>دعنا نعرفك علي مشاريعنا السابقة</span></div>
        <div className='Row-2OP'><span>اكتشف اهم مشاريعنا في السنوات الماضية</span></div>
        <div className='Row-2T'>
            <button className='btnTeamWork' onClick={hadellopenall}>الكل</button>
            <button className='btnTeamWork' onClick={handellopenweb}> مطور ويب</button>
            <button className='btnTeamWork' onClick={handellopenphone}>مطور تطبيقات الهاتف</button>
            <button className='btnTeamWork' onClick={handellopenui}>مصمم الواجهات</button>
            <button className='btnTeamWork' onClick={handellopenmodrator}>المدراء</button>
            <button className='btnTeamWork' onClick={handellopendatabase}>قواعدالبيانات</button>
        </div>
        <div className='Row-3OP'>
            {
                all ?
                <>
                 <div className='CardEmp'>
                <div className='ImgEmp'><img src={p1} alt='' className='picofpro'></img></div>
                <div className='NameEmp'><span>DataBaseProject</span></div>
                <div className='PositionEmp'><span>2021</span></div>
                 </div>
                 
                    <div className='CardEmp'>
                <div className='ImgEmp'><img src={p1} alt='' className='picofpro'></img></div>
                <div className='NameEmp'><span>DataBaseProject</span></div>
                <div className='PositionEmp'><span>2021</span></div>
                    </div>
                </>
               
            :
            <></>
            }
        </div>

    </div>
    );
}
 
export default OurProjects;