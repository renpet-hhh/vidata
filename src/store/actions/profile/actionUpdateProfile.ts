import { AppState } from "../../configStore";
import { DeepPartial } from "../../../types/utils";


const actionUpdateProfile = (merge: DeepPartial<AppState['profile']>) => ({
    type: 'UPDATE',
    merge
});

export default actionUpdateProfile;