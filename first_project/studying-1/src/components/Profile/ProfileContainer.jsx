import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfileThunk, getStatusThunk, setStatusThunk } from '../../redux/profileReducer';
import { WithRouter } from '../../WithRouter';
import { Loader } from '../common/Loader/Loader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Profile from './Profile';
class ProfileContainer extends React.Component {

    componentDidMount = () => {
        this.props.getProfileThunk(this.props.router.params.userId, this.props.authUserId)
        this.props.getStatusThunk(this.props.router.params.userId, this.props.authUserId)
    }

    render() {
        return <>
            {!this.props.profile ?
                <Loader /> :
                <Profile
                    {...this.props.profile}
                    status={this.props.status}
                    setStatusThunk={this.props.setStatusThunk}
                    authUserId={this.props.authUserId} />}
        </>
    }
};


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        authUserId: state.userAuth.id,
        status: state.profilePage.status,
    }
}


export default compose(
    connect(
        mapStateToProps,
        { getProfileThunk, getStatusThunk, setStatusThunk }),
    WithRouter)
    (ProfileContainer)
