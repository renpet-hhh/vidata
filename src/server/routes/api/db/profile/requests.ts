import { UserInfo, DBProfile } from "../../../../../types/Profile";
import axios from "axios";
import { Dispatch } from "redux";
import hasDispatchOrder from "../../../../utils/hasDispatchOrder";
import { DeepPartial } from "../../../../../types/utils";

export const askSaveProfile = async (dispatch: Dispatch, data: DeepPartial<DBProfile>) => {
    const res = await axios.post("http://localhost:9228/api/db/profile/save", data);
    if (hasDispatchOrder(res)) dispatch(res.data.action);
}

export const askGetProfile = async (filter?: { [key in keyof DBProfile]: 0 | 1 | boolean }) => {
    return (await axios.post("http://localhost:9228/api/db/profile/get", { filter })).data;
}
