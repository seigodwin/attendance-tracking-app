
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
                data: apiResponse.data,
                success: true,
                message: apiResponse.message ?? "Login success",
                StatusCode: response.status
            }
        }
        
        const errorResponse: BaseResponse<LoginResponseDto> = await response.json();

         return{
                data: null,
                success: false,
                message: errorResponse.message ?? "Login Failed backend",
                StatusCode: response.status
            }
    }

    catch(error){
         return{
                data: null,
                success: false,
                message: error instanceof Error ? error.message : "Failed to login",
                StatusCode:500
            }
    }

}

export default Login