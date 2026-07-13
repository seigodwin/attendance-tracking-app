
export type BaseResponse<T = null> ={
    data: T | null;
    success: boolean;
    message: string;
    StatusCode?: number;
    pageNumber?: number;
    pageSize?: number;
}