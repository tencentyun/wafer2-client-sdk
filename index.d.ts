declare module "wafer2-client-sdk"{
    export function login(opts: any): void;
    export function loginWithCode(opts: any): void;
    export function  setLoginUrl(loginUrl: string): void;
    
    export var Session: ISession;
    export function clearSession():void;
    
    export function request(options: any): void;
    export var RequestError: CRequestError;
    
    export function Tunnel(serviceUrl): void
}

export interface ISession{
    get(): ISession;
    set(session: ISession): void;
    clear(): void;
}

export class CRequestError extends Error{
    constructor(type: any, message: any);
}