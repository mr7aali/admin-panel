export type IResponseType<T> = {
    success: boolean,
    statusCode: number,
    message: string,
    data?: T;
}