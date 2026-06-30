import { ways } from "@/data";
import Link from "next/link";
import { useState } from "react";
import WayToTeach from "../WayToTeach";


export default function Header(){
const [openMenu, setOpenMenu] = useState(false)


    return(
        <header className="header_top">
              <nav>
                 <ul className="header_top_list">
                <Link href="#" className="lnk">
                <WayToTeach title={ways[0].title}/>
                </Link>
                 
                 <Link href="#" className="lnk">
                 <WayToTeach {...ways[1]}/>
                 </Link>    

                 <Link href="#" className="lnk">
                 <WayToTeach {...ways[2]}/>
                 </Link>

                 <Link href="#" className="lnk">
                 <WayToTeach {...ways[3]}/>
                 </Link>

                 <Link href="#" className="lnk">
                 <WayToTeach {...ways[4]}/>
                 </Link>
                         
                 <Link href="#" className="lnk">
                 <WayToTeach {...ways[4]}/>
                 </Link>        
               </ul>
              </nav>
               
               <p className="txt">+7 (4872) 710-150</p>
               <div className="header_menu">
                 <ul className={`header_list ${openMenu ? "active": ""}`}>
                 <li>
                  <Link href="#" className="header_lnk">
                  Акции
                  </Link>
                 </li>

                 <li>
                  <Link href="#" className="header_lnk">
                  Отзывы
                  </Link>
                 </li>

                 <li>
                  <Link href="#" className="header_lnk">
                  Покупателям
                  </Link>
                 </li>

                 <li>
                  <Link href="#" className="header_lnk">
                  Контакты
                  </Link>
                 </li>

                 <li className="item_header" onClick={() => setOpenMenu(false)}>
                  закрыть 
                 </li>
                 </ul>

                 <div className="header_btn" onClick={() => setOpenMenu(!openMenu)}>
                  <img src="./img/menu.png" alt="" />
                 </div>
               </div>

        </header>
    )
}