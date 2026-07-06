import type { GetEmployeeDto } from "../../dtos/EmployeeDtos/GetEmployeeDto";
import type { RegisterEmployeeDto } from "../../dtos/EmployeeDtos/RegisterEmployeeDto";
import type { UpdateEmployeeDto } from "../../dtos/EmployeeDtos/UpdateEmployeeDto";
import type { BaseResponse } from "../../utility/BaseResponse";

const BASE_API_URL = import.meta.env.VITE_EMPLOYEE_API_BASE_URL

async function getAll(pageNumber: number = 1 , pageSize:number = 10): Promise<BaseResponse<GetEmployeeDto[]>>{

    pageNumber < 1 ? 1 : pageNumber;
    pageSize < 1 ? 10 : (pageSize > 30 ? 30 : pageSize)

    const url = `${BASE_API_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    try{
        const response = await fetch(url)

        if(response.ok){
            const apiResponse = await response.json();
            return{
                Data: apiResponse.Data,
                Success: true,
                Message: apiResponse.Message ?? "Data retrived successfully",
                StatusCode: response.status
            } 
        } 

        const errorApiResponse = await response.json();
        return{
               Data: null,
                Success: false,
                Message: errorApiResponse.Message ?? "Failed to retrieve data",
                StatusCode: response.status
        }
    } 

    catch(error){
        return{
            Data: null,
            Success: false,
            Message: error instanceof Error ? error.message : "Failed to retrive data",
            StatusCode: 500
        }
    }

}

async function getById(Id: number): Promise<BaseResponse<GetEmployeeDto>>{
    
    const url = `${BASE_API_URL}/${Id}`

    try{
        const response = await fetch(url);

        if(response.ok){
            const apiResponse: BaseResponse<GetEmployeeDto> = await response.json();

            return{
                Data: apiResponse.Data,
                Message: apiResponse.Message ?? "Data retrived successfully",
                Success: true,
                StatusCode: response.status
            }
        }

        const errorApiResponse: BaseResponse<GetEmployeeDto> = await response.json();
        return{
            Data: null,
            Message: errorApiResponse.Message ?? "Failed to fecth data",
            Success: false,
            StatusCode: response.status
        }

    }

    catch(error){
        return{
            Data: null,
            Message: error instanceof Error ? error.message : "Failed to retrieve",
            Success: false,
            StatusCode: 500
        }
    }
}

async function Delete(Id: number): Promise<BaseResponse<GetEmployeeDto>>{
       const url = `${BASE_API_URL}/delete/${Id}`

    try{
        const response = await fetch(url);

        if(response.ok){
            const apiResponse: BaseResponse<GetEmployeeDto> = await response.json();

            return{
                Data: null,
                Message: apiResponse.Message ?? "Delete successfull",
                Success: true,
                StatusCode: response.status
            }
        }

        const errorApiResponse: BaseResponse<GetEmployeeDto> = await response.json();
        return{
            Data: null,
            Message: errorApiResponse.Message ?? "Failed to delete",
            Success: false,
            StatusCode: response.status
        }

    }

    catch(error){
        return{
            Data: null,
            Message: error instanceof Error ? error.message : "Failed to delete",
            Success: false,
            StatusCode: 500
        }
    }
}

async function Update(dto: UpdateEmployeeDto): Promise<BaseResponse<GetEmployeeDto>>{
    const url = `${BASE_API_URL}/register`

    try{
        const body = JSON.stringify(dto);

        const response = await fetch(url , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        });

        if(response.ok){
            const apiResponse: BaseResponse<GetEmployeeDto> = await response.json();

            return{
                Data: null,
                Message: apiResponse.Message ?? "Registeration successfull",
                Success: true,
                StatusCode: response.status
            }
        }

        const errorApiResponse: BaseResponse<GetEmployeeDto> = await response.json();
        return{
            Data: null,
            Message: errorApiResponse.Message ?? "Update failed",
            Success: false,
            StatusCode: response.status
        }

    }

    catch(error){
        return{
            Data: null,
            Message: error instanceof Error ? error.message : "Update failed",
            Success: false,
            StatusCode: 500
        }
    }
}

async function Register(dto: RegisterEmployeeDto): Promise<BaseResponse<GetEmployeeDto>>{
    const url = `${BASE_API_URL}/register`;
    
    const body = JSON.stringify(dto);

    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        })

        if(response.ok){
            const apiResponse: BaseResponse<GetEmployeeDto> = await response.json();

            return{
                Data: apiResponse.Data,
                Message: apiResponse.Message ?? "Registeration success",
                StatusCode: response.status,
                Success: true
            }
        }

        const errorApiResponse: BaseResponse<GetEmployeeDto> = await response.json();
        return{
            Data: null,
            Message: errorApiResponse.Message ?? "Registeration failed",
            Success: false,
            StatusCode: response.status
        }

    }
      catch(error){
        return{
            Data: null,
            Message: error instanceof Error ? error.message : "Registeration failed",
            Success: false,
            StatusCode: 500
        }
    }
}

export default {getAll , getById, Delete, Update, Register}