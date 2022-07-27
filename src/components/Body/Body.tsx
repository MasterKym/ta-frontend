
import 'react-phone-number-input/style.css'
import './Body.scss'
import { CSSTransition } from 'react-transition-group';
import React from 'react'
import { Account } from './Account/Account';
import { Notifications } from './Notifications/Notifications';
import { Security } from './Security/Security';
import { DeleteAccount } from './DeleteAccount/DeleteAccount';


interface BodyProps {
    tab:any
}

export const Body: React.FC<BodyProps> = ({tab}) => {

        return (
            <div className='bg-white p-2 px-5 rounded-lg'>
                 {
                        tab==="Account" ?
                        
                     
                              <Account/>
                           
                            : tab === "Notifications" ? <Notifications/>
                            :tab==="Security" ? <Security/> 
                            :<DeleteAccount/> 
                }
                 
            </div>
           
        );
}