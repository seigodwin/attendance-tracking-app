
import type { LoginRequestDto } from "../../dtos/AuthDtos/LoginRequestDto";
import type { LoginResponseDto } from "../../dtos/AuthDtos/LoginResponseDto"
import type { BaseResponse } from "../../utility/BaseResponse";

const BASE_API_URL = import.meta.env.VITE_AUTH_API_BASE_URL


async function Login(dto: LoginRequestDto): Promise<BaseResponse<LoginResponseDto>>{

    const url = `${BASE_API_URL}/login`;
    const body = JSON.stringify(dto);
    try{
        const response = await fetch(url , {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: body
        })

        if(response.ok){
            const apiResponse: BaseResponse<LoginResponseDto> = await response.json();

            return{
                Data: apiResponse.Data,
                Success: true,
                Message: apiResponse.Message ?? "Login success",
                StatusCode: response.status
            }
        }
        
        const errorResponse = await response.json();
         return{
                Data: null,
                Success: false,
                Message: errorResponse.Message ?? "Login Failed",
                StatusCode: response.status
            }
    }

    catch(error){
         return{
                Data: null,
                Success: false,
                Message: error instanceof Error ? error.message : "Failed to login",
                StatusCode:500
            }
    }

}

export default Login