export interface LoginBody {
    username: string,
    password: string
}

export interface LoginResponse {
    details?: Array<Token>,
    result?: Array<Token>,
    error: boolean
}

interface Token {
    empId?: number,
    token: string,
    msg: string
}