class DataResponse<T> {
  constructor(public data: T, public isSuccess: boolean, public status: number) {}
}

export default DataResponse;