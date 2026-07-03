
export type BaseResponse<T = null> ={
    Data: T | null;
    Success: boolean;
    Message: string;
    StatusCode?: number;
}