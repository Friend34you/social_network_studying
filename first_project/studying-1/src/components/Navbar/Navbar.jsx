import * as React from 'react';
import navbar from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    let friendsElements = props.state.friendsData.map( friend =>
        <div className={friend.isOnline? navbar.online : navbar.offline} >{friend.name}</div>)

    return (
        <nav className={navbar.nav}>
            <div><NavLink to='/profile'  className={({isActive}) => isActive ? navbar.active : ''}>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className={({isActive}) => isActive ? navbar.active : ''}>Dialogs</NavLink></div>
            <div><NavLink to='/users' className={({isActive}) => isActive ? navbar.active : ''}>Users</NavLink></div>
            <div><NavLink to='/music' className={({isActive}) => isActive ? navbar.active : ''}>Music</NavLink></div>
            <div><NavLink to='/settings' className={({isActive}) => isActive ? navbar.active : ''}>Settings</NavLink></div>
            <div className={navbar.friends}>
                <p>Friends:</p>
                {friendsElements}
            </div>
        </nav>
    )
};

export default Navbar;