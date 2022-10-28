import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import './HeaderInfo.css'


function HeaderInfo() {
    return(
        <aside className='headerInfo'>
            <a href="mailto:contact@tuartecontable.com">
                <MdMail />
                contact@tuartecontable.com
            </a>
            <a href="tel:+573210123456">
                <FaPhoneAlt />
                +57 3210123456
            </a>
        </aside>
    )
}

export { HeaderInfo }