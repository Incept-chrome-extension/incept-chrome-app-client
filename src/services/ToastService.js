/* eslint-disable  class-methods-use-this */
import { toast, Flip } from 'react-toastify';

export default class ToastService {
  constructor() {
    toast.configure();
  }

  showErrorNotification(message) {
    toast.dismiss();
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      transition: Flip,
    });
  }

  showSuccessNotification(message) {
    toast.dismiss();
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      transition: Flip,
    });
  }
}
