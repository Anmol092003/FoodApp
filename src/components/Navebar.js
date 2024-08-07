import Sidebar from "./ssiidebar";
import { useState } from "react";
import {faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons"

export default function Navebar(){
    const [showSidebar,setShowSidebar]= useState(false);
    const links=[
        {
            name:"Home",
            path:"/",
            icon:faHome
        },
        {
            name:"Recipes",
            path:"/recipes",
            icon:faList
        },
        {
            name:"Settings",
            path:"/settings",
            icon:faCog
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    return(
       <>
       <div className="navebar container">
        <a href="#!" className="logo">F<span>oo</span>diesHub</a>
        <div className="nave-link">
             {links.map(link=>(
                <a href="#!"key={link.name}>{link.name}</a>
             ))}
            
        </div>
        <div onClick={()=>setShowSidebar(true)} className={showSidebar ? "sidebar-btn active":"sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
       </div>
        
        {showSidebar && <Sidebar close={closeSidebar}  links={links}/>}
       </>
    )
}