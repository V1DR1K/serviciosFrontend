export interface ApiFieldError{field:string;message:string}export interface ApiErrorResponse{code:string;timestamp:string;status:number;path:string;message:string;fields:ApiFieldError[]}
