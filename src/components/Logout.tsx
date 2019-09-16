import React from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { askLogout } from '../server/routes/api/db/session/request';
import hasDispatchOrder from '../server/utils/hasDispatchOrder';
import { BtnGray } from './styled/buttons';

interface Props {
    dispatch: Dispatch,
    children?: string
}

const Logout = (props: Props) => {
    const onClick = async () => {
        const res = await askLogout().catch(err => null);
        if (hasDispatchOrder(res)) props.dispatch(res.data.action);
    }
    return (
        <BtnGray onClick={onClick}>{props.children}</BtnGray>
    )
}

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
})

export default connect(null, mapDispatch)(Logout);