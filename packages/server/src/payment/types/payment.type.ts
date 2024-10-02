export interface ApiPayment {
  id: string;
  redirectUrl: string;
}

export interface ApiResponse<ResultType> {
  success: boolean;
  result: ResultType;
}
