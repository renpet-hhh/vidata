import React, { useState, useEffect, useRef } from 'react'
import LabeledInput from './LabeledInput';
import Alert from './Alert';
import RequestErr from '../constants/RequestErr';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { askUserAlreadyExists } from '../server/routes/api/db/requests';
import MESSAGE from '../constants/MESSAGE';
import { askSignup } from '../server/routes/api/db/session/request';
import { BtnGray } from './styled/buttons';
import { Blank, FlexVertical } from './styled/positionals';
import { Form } from './styled/containers';

const SPACE_FOR_ALERT = "5rem";

interface Props extends ReturnType<typeof mapDispatch> {
    onSuccess?: () => void
}

const Register = (props: Props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [alertText, setAlertText] = useState("");
    const [usernameWarningActive, setUsernameWarning] = useState(false);

    const invalidateTimeoutId: React.MutableRefObject<number | undefined> = useRef(undefined);

    useEffect(() => {
        setUsernameWarning(false);
        window.clearTimeout(invalidateTimeoutId.current);
        if (username !== "") {
            invalidateTimeoutId.current = window.setTimeout(async () => {
                if (await askUserAlreadyExists(username)) {
                    setUsernameWarning(true);
                }
            }, 800);
        }
        return () => {
            window.clearTimeout(invalidateTimeoutId.current);
        }
    }, [username]);

    const onFail = (status: number, reason: string) => {
        if (status >= 500 && status <= 599) return setAlertText(MESSAGE.auth.error.serverError);
        /** RequestErr constants are stringified by JSON (convenience for server side)
         *  We could either parse them or stringify `reason`, the latter is simpler */
        switch (JSON.stringify(reason)) {
            case RequestErr.ALREADY_USED_USERNAME:
                return setAlertText(MESSAGE.auth.error.usernameAlreadyTaken);
            case RequestErr.ALREADY_USED_EMAIL:
                return setAlertText(MESSAGE.auth.error.emailAlreadyTaken);
            default:
                setAlertText(MESSAGE.auth.error.general);
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await askSignup(username, password, email).catch(err => {
            const res = err.response;
            onFail(res.status, res.data);
        });
        if (res && props.onSuccess) props.onSuccess();
    }

    return (
        <div>
            <FlexVertical style={{ position: "relative", marginTop: SPACE_FOR_ALERT }}>
                {alertText &&
                    <div style={{ position: "absolute", top: `-${SPACE_FOR_ALERT}`, left: "50%", transform: "translate(-50%, 0)" }}>
                        <Alert height="5rem" onClick={() => setAlertText("")}>{alertText}</Alert>
                    </div>
                }
                <Form onSubmit={onSubmit} style={{ padding: "1.5rem" }}>
                    <LabeledInput inputWidth="20rem" marginVertical="0.8rem" invalid={usernameWarningActive} label="Username" onChange={setUsername}></LabeledInput>
                    <LabeledInput inputWidth="20rem" marginVertical="0.8rem" label="Password" onChange={setPassword}></LabeledInput>
                    <LabeledInput inputWidth="20rem" marginVertical="0.8rem" label="Email" onChange={setEmail}></LabeledInput>
                    <BtnGray type="submit">Sign up</BtnGray>
                </Form>
            </FlexVertical>
        </div>

    )
}

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
})

export default connect(null, mapDispatch)(Register)