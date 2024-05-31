import React from 'react';
import { ToastContainer, toast, ToastContentProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './customToast.module.css';

const CustomToast = ({ closeToast }: ToastContentProps) => (
  <div className={styles.toast}>
    <span className={styles.title}>Carregando...</span>
    <button onClick={closeToast} className={styles.closeButton}>
      &times;
    </button>
  </div>
);

export const showToast = () => {
    toast.loading((props: ToastContentProps) => <CustomToast {...props} />, {
      position: 'top-right',
      autoClose: 2000,
    });
};

const CustomToastContainer = () => (
  <ToastContainer className={styles.toastContainer} />
);

export default CustomToastContainer;
