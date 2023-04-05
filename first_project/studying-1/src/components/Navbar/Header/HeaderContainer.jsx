import axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAuthUserDataThunk } from '../../../redux/authReducer';
import { WithRouter } from '../../../WithRouter';
import { Header } from './Header';

export class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.getAuthUserDataThunk();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        login: state.userAuth.login,
    }
}

export default compose(connect(
    mapStateToProps, 
    { getAuthUserDataThunk }), 
    WithRouter)
    (HeaderContainer)
