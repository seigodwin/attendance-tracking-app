
export function buildQueryParams<T extends object>(dto: T): URLSearchParams {
    if(dto === null || dto === undefined) {
        return new URLSearchParams();
    }

    let params = new URLSearchParams();

    Object.entries(dto).forEach(([key, value]) => {
        if(value !== null && value !== undefined && value !== "") {
            params.append(key, String(value));
        }
    });

    return params;
}