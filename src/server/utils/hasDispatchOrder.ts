import { AxiosResponse } from "axios";

const hasDispatchOrder = (res: AxiosResponse | null | undefined): res is AxiosResponse<{ action: any }> => {
    return res && res.status === 200 && res.data.action;
};

export default hasDispatchOrder;