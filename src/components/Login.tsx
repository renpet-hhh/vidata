import React, { useState } from 'react'
import LabeledInput from './LabeledInput';
import RequestErr from '../constants/RequestErr';
import Alert from './Alert';
import COLOR from '../constants/COLOR';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MESSAGE from '../constants/MESSAGE';
import { AxiosResponse } from 'axios';
import { askSignin } from '../server/routes/api/db/session/request';
import { BtnGray } from './styled/buttons';
import { CtnGray_style } from './styled/containers';
import { Blank, FlexVertical, FormAligned } from './styled/positionals';

interface Props extends ReturnType<typeof mapDispatch> {
    onSuccess?: () => void,
    onFail?: () => void
}

const Login = (props: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertText, setAlertText] = useState("");

    const onFail = (status: number, reason: string) => {
        if (status >= 500 && status <= 599) {
            return setAlertText(MESSAGE.auth.error.serverError);
        }
        /** RequestErr constants are stringified by JSON (convenience for server side)
         *  We could either parse them or stringify `reason`, the latter is simpler */
        switch (JSON.stringify(reason)) {
            case RequestErr.ALREADY_USED_USERNAME:
            case RequestErr.AUTHENTICATION_FAILED:
                setAlertText(MESSAGE.auth.error.invalidCredentials);
                break;
            case RequestErr.ALREADY_USED_EMAIL:
                setAlertText(MESSAGE.auth.error.emailAlreadyTaken);
                break;
            default:
                setAlertText(MESSAGE.auth.error.general);
        }
        props.onFail && props.onFail();
    }

    const onSuccess = (res: AxiosResponse) => {
        setAlertText("");
        props.onSuccess && props.onSuccess();
        props.dispatch(res.data.action);
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await askSignin(username, password).catch(err => {
            const res = err.response;
            onFail(res.status, res.data);
        });
        if (res) onSuccess(res);
    }

    return (
        <div>
            <Blank vertical="5rem"></Blank>
            <FlexVertical style={{ position: "relative" }}>
                {alertText &&
                    <div style={{ position: "absolute", top: "-4rem" }}>
                        <Alert onClick={() => setAlertText("")}>{alertText}</Alert>
                    </div>
                }
                <FormAligned style={CtnGray_style} data-testid="Form" onSubmit={onSubmit}>
                    <LabeledInput label="Username" onChange={setUsername}></LabeledInput>
                    <LabeledInput label="Password" onChange={setPassword}></LabeledInput>
                    <BtnGray type="submit" data-testid="submit">Login</BtnGray>
                </FormAligned>
            </FlexVertical>
        </div>
    );
}

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
})

export default connect(null, mapDispatch)(Login);