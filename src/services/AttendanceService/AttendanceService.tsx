import type { BaseResponse } from "../../utility/BaseResponse";
import type { CheckInOutDto } from "../../Dtos/AttendanceDtos/CheckInOutDto";

const BASE_API_URL = import.meta.env.VITE_ATTENDANCE_BASE_API_URL


async function checkInAsync(dto: CheckInOutDto): Promise<BaseResponse> {

  try {
    const url = `${BASE_API_URL}/check-in`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    if(!response.ok) {
      const errorData = await response.json();
      return {
        Data: null,
        Success: false,
        Message: errorData?.message || "Failed to check in.",
        StatusCode: response.status,
      };
    }

    const data = await response.json();
    return {
      Data: data,
      Success: true,
      Message: data.Message || "Check in successful.",
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
    const url = `${BASE_API_URL}/check-out`;
    const body = JSON.stringify(dto);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    if(!response.ok) {
      const errorData = await response.json();
      return {
        Data: null,
        Success: false,
        Message: errorData?.message || "Failed to check out.",
        StatusCode: response.status,
      };
    }

    const data = await response.json();
    return {
      Data: data,
      Success: true,
      Message: data.Message || "Check out successful.",
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