import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_LIST_JADWAL = "GET_LIST_JADWAL";

export const getListJadwal = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_JADWAL);

    FIREBASE.database()
      .ref("dosis")
      .once("value", (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_JADWAL, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_JADWAL, error);
        alert(error);
      });
  };
};

export const searchListJadwal = (keyword) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_JADWAL);

    FIREBASE.database()
      .ref("dosis")
      .once("value", (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();
        Object.keys(data).map((key) => {
          if (
            !data[key]?.title
              ?.toLowerCase()
              ?.includes(keyword?.toLowerCase())
          ) {
            delete data[key];
          }
        });
        dispatchSuccess(dispatch, GET_LIST_JADWAL, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_JADWAL, error);
        alert(error);
      });
  };
};

