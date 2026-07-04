export interface TradeResponse{id:number;code:string;name:string;icon:string}
export interface UserResponse{id:string;email:string;fullName:string|null;maskedDni:string|null;phone:string|null;photoUrl:string|null;locality:string|null;latitude:number|null;longitude:number|null;onboardingComplete:boolean;professionalEnabled:boolean;available:boolean;rating:number;ratingCount:number;trades:TradeResponse[]}
export interface UserSummaryResponse{id:string;fullName:string;photoUrl:string|null;locality:string;rating:number;ratingCount:number;phone:string|null}
export interface UpdateProfileRequest{fullName:string;dni:string;phone:string;locality:string;latitude:number;longitude:number;professionalEnabled:boolean;tradeIds:number[];photoUrl?:string|null}
export interface UpdateAvailabilityRequest{available:boolean}
