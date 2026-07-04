import type { BaseResponse } from "../../utility/BaseResponse";
import type { CheckInOutDto } from "../../Dtos/AttendanceDtos/CheckInOutDto";

const BASE_API_URL = import.meta.env.VITE_ATTENDANCE_API_URL || "http://localhost:5155/api/v1/attendance";

async function readApiResponse(response: Response): Promise<BaseResponse> {
  const responseText = await response.text();

  if (!responseText) {
    return {
      Data: null,
      Success: false,
      Message: `Request failed with status ${response.status}.`,
      StatusCode: response.status,
    };
  }

  try {
    const apiResponse = JSON.parse(responseText);

    return {
      Data: apiResponse?.Data ?? null,
      Success: apiResponse?.Success ?? false,
      Message: apiResponse?.Message ?? "No message returned by the server.",
      StatusCode: response.status,
    };
  } catch {
    return {
      Data: null,
      Success: false,
      Message: responseText,
      StatusCode: response.status,
    };
  }
}

async function checkInAsync(dto: CheckInOutDto): Promise<BaseResponse> {

  try {
    const response = await fetch(`${BASE_API_URL}/check-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    return readApiResponse(response);


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
    const response = await fetch(`${BASE_API_URL}/check-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    return readApiResponse(response);


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