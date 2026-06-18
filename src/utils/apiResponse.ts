// class apiResponse {
//   success: boolean;
//   constructor(
//     public statusCode: number,
//     public message: string,
//     public data?: any,
//     public errors?: any[]
//   ) {
//     this.statusCode = statusCode;
//     this.message = message;
//     this.data = data;
//     this.errors = errors;
//     this.success = statusCode < 400;
//   }
// }

class ApiResponse<T = any> {
  success: boolean;

  constructor(
    public statusCode: number,
    public message: string,
    public data: T | null = null,
    public errors: any[] = []
  ) {
    this.success = statusCode < 400;
  }
}

export default ApiResponse;