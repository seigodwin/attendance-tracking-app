
type LoginResponseDto = {
    userName?: string,
    accessToken?: string,
    refreshToken?: string,
    accessTokenExpiry?: number
}

export default LoginResponseDto