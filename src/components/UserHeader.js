import React from 'react';
// import { fetchUser } from '../actions';

import { connect } from 'react-redux';

class UserHeader extends React.Component{

    // componentDidMount(){
    //     this.props.fetchUser(this.props.userId);
    // }

    render(){
        const { user } = this.props;
        if(!user)
            return '';
        //console.log(user);

        return(
            <div className="header">
                {user.name}
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) =>{
    return { user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);