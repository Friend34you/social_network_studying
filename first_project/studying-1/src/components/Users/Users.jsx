import style from './Users.module.css'
import * as React from 'react'
import { NavLink } from 'react-router-dom';


export const Users = (props) => {
    let userDefaultPhoto = 'https://howmonk.com/wp-content/uploads/2020/03/funny-cat-white-paw-2048x1366.jpg';
    let allPagesCount = Math.ceil(props.totalUsersCount / props.usersCount);
    let pages = [];
    let i = 1;
    while (i <= allPagesCount) {
        pages = [...pages, i];
        i++
    }

    const changePage = (action) => {
        switch (action) {
            case 'previous':
                if (props.currentPage !== 1) {
                    props.onPageClicked(props.currentPage - 1)
                }
                break;

            case 'next':
                if (props.currentPage < pages.length) {
                    props.onPageClicked(props.currentPage + 1)
                }
                break;
        }
    }

    return (
        <div className={style.usersList}>
            <div>
                <button onClick={() => { changePage('previous') }}>previous</button>
                <span> {props.currentPage} </span>
                <button onClick={() => { changePage('next') }}>next</button>
                <span> Всего страниц: {pages.length}</span>
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={style.wrapper}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.large !== null ? u.photos.large : userDefaultPhoto} className={style.src} />
                        </NavLink>
                        <button disabled={props.isFollowing.some((user) => user === u.id)} onClick={() => {
                            props.switchFollowingThunk(u)
                            // if (!u.followed) {
                            //     props.toggleFollowing(true, u.id)
                            //     usersRequests.postFollow(u.id)
                            //         .then(data => {
                            //             if (data.resultCode === 0) props.toggleSubscription(u.id);
                            //             props.toggleFollowing(false, u.id)
                            //         })
                                
                            // }
                            // else {
                            //     props.toggleFollowing(true, u.id)
                            //     usersRequests.deleteFollow(u.id)
                            //         .then(data => {
                            //             if (data.resultCode === 0) props.toggleSubscription(u.id);
                            //             props.toggleFollowing(false, u.id)
                            //         })
                                
                            // }

                        }
                        }>
                            {u.followed ? 'Unfollow' : 'Follow'}
                        </button>
                        <p>{u.name}</p>
                        <br />
                        <p>{u.status}</p>
                    </div>
                )
            }
            <div>
                <button onClick={() => { changePage('previous') }}>previous</button>
                {props.currentPage}
                <button onClick={() => { changePage('next') }}>next</button>
            </div>
        </div>
    )

}
