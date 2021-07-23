export default class TResponse<T>
{
    data: T;
    message: string | null;
    
    constructor(data: T, message: string | null) {
        this.data = data;
        this.message = message;    
    }
}