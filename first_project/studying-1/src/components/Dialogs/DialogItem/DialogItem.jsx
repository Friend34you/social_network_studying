import * as React from 'react';
import { NavLink } from 'react-router-dom';
import dialogs from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (

        <NavLink to={'' + props.id} className={({ isActive }) => isActive ? dialogs.item_active : dialogs.item}><div>{props.name}</div></NavLink>

    )
}

export default DialogItem