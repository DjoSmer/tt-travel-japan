type ErrorMessage<ErrorType extends object> = {
  property: keyof ErrorType;
  message: string;
};

type ResponseError<ErrorType extends object> = {
  success: false;
  error: string;
  message: ErrorMessage<ErrorType>[];
};

type ResponseBody<ResultType> = {
  success: true;
  result: ResultType;
};

export type ApiResponse<ResultType extends object, ErrorType extends object> =
  | ResponseBody<ResultType>
  | ResponseError<ErrorType>;

export interface ApiPayment {
  id: string;
  redirectUrl: string;
}
