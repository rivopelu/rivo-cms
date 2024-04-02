import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import swall from 'sweetalert';

export default class ErrorService {
  private handleSnackbar(message: string) {
    toast.error(message);
  }

  private handleSnackbarSuccess(message: string) {
    toast.success(message);
  }

  public fetchApiError(error: AxiosError<any>) {
    let message;

    if (axios.isAxiosError(error) && error.response) {
      message = error?.response?.data?.errors?.message ? error?.response?.data?.errors?.message : 'Terjadi Kesalahan Pada Sistem';
    } else message = String(error);
    return this.handleSnackbar(message);
  }

  public fetchApiSuccess(message: string) {
    return this.handleSnackbarSuccess(message ? message : 'Success');
  }

  public swallApiError(error?: Error) {
    let message;
    if (axios.isAxiosError(error) && error.response) {
      message = error.response.data.message ?? 'Terjadi Kesalahan Pada Sistem';
    } else message = String(error);
    swall('Failed', message, 'error').then();
  }
}
