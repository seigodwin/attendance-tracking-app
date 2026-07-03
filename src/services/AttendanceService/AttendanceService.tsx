import type { BaseResponse } from "../../utility/BaseResponse";
import type { CheckInOutDto } from "../../Dtos/AttendanceDtos/CheckInOutDto";

const BASE_API_URL = import.meta.env.VITE_ATTENDANCE_API_URL;


async function checkInAsync(dto: CheckInOutDto): Promise<BaseResponse> {

  try {
    const response = await fetch(`${BASE_API_URL}/attendance/checkin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    const apiResponse = await response.json();

    if (!apiResponse.Success) {
      return {
        Data: null,
        Success: false,
        Message: apiResponse.Message,
        StatusCode: response.status,
      };
    }

    return {
      Data: apiResponse.Data,
      Success: true,
      Message: apiResponse.Message,
      StatusCode: response.status,
    };


  } catch (error) {
    return {
      Data: null,
      Success: false,
      Message: error instanceof Error ? error.message : "An unexpected error occurred.",
      StatusCode: 500,
    };
  }
}


async function checkOutAsync(dto: CheckInOutDto): Promise<BaseResponse> {

  try {
    const response = await fetch(`${BASE_API_URL}/attendance/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    const apiResponse = await response.json();

    if (!apiResponse.Success) {
      return {
        Data: null,
        Success: false,
        Message: apiResponse.Message,
        StatusCode: response.status,
      };
    }

    return {
      Data: apiResponse.Data,
      Success: true,
      Message: apiResponse.Message,
      StatusCode: response.status,
    };


  } catch (error) {
    return {
      Data: null,
      Success: false,
      Message: error instanceof Error ? error.message : "An unexpected error occurred.",
      StatusCode: 500,
    };
  }
}

export { checkInAsync, checkOutAsync };