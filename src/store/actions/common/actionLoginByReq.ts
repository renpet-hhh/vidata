import { Request } from "../../../types/Request";
import translateStateToClient from "../../../server/utils/translateStateToClient";


const actionLoginByReq = async (req: Request) => ({
    type: 'LOGIN',
    profile: (await translateStateToClient(req)).profile
});

export default actionLoginByReq;