import * as React from 'react'
import { connect } from 'react-redux'
import { toggleSubscription, toggleFollowing, getUsersThunk, switchFollowingThunk } from '../../redux/usersReducer'
import { Users } from './Users'
import { Loader } from '../common/Loader/Loader'
import { compose } from 'redux'


export class UsersAPI extends React.Component {

    componentDidMount = () => {

        this.props.getUsersThunk(this.props.currentPage, this.props.usersCount);
    }

    onPageClicked = (pageNumber) => {
        debugger;
        this.props.getUsersThunk(pageNumber, this.props.usersCount);
    }

    render = () => {
        return <div style={{ display: 'flex', justifyContent: 'center' }}>
            {this.props.isLoading ?
                <Loader /> : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    usersCount={this.props.usersCount}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageClicked={this.onPageClicked}
                    isFollowing={this.props.isFollowing}
                    switchFollowingThunk={this.props.switchFollowingThunk}
                />}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isLoading: state.usersPage.isLoading,
        isFollowing: state.usersPage.isFollowing,
    }
}


export default compose(connect(
    mapStateToProps,
    {
        toggleSubscription,
        toggleFollowing,
        getUsersThunk,
        switchFollowingThunk,
    }))
    (UsersAPI)