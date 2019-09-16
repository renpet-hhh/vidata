import translateStateToClient from "../../../server/utils/translateStateToClient";
import { Request } from "../../../types/Request";

const actionUpdateProfileByReq = async (req: Request) => ({
    type: 'UPDATE',
    merge: {
        ...(await translateStateToClient(req)).profile
    }
});

export default actionUpdateProfileByReq;