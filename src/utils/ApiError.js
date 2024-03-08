class ApiError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        stack="",
        erorrs=[]
    ){
        super(message),
        this.statusCode=statusCode,
        this.data=null,
        this.message=message,
        this.success=false,
        this.erorrs=erorrs,
        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}