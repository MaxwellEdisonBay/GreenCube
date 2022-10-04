import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css'

function successNotif(message) {
    Store.addNotification({
        title: "Success",
        message: message,
        type: "success",
        insert: "top",
        container: "top-right",
        // animationIn: ['animate__animated animate__fadeIn'], // `animate.css v4` classes
        animationOut: ['animate__animated animate__fadeOut'], // `animate.css v4` classes
        dismiss: {
          duration: 1500,
        }
      });
}

function errorNotif(message) {
    Store.addNotification({
        title: "Error",
        message: message,
        type: "danger",
        insert: "top",
        container: "top-right",
        // animationIn: ['animate__animated animate__fadeIn'], // `animate.css v4` classes
        animationOut: ['animate__animated animate__fadeOut'], 
        
        dismiss: {
          duration: 1500,
        }
      });
}

export {successNotif, errorNotif}