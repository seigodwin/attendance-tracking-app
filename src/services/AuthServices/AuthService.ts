
import type { LoginResponseDto } from "../../dtos/AuthDtos/LoginResponseDto"

function Login(): string{
    const corr:boolean = true
    return corr ? "Login success" : "login failed";
    //Login logic
}

export default Login