import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_LIST_JANTUNG = "GET_LIST_JANTUNG";

export const getListJantung = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_JANTUNG);

    FIREBASE.database()
      .ref("jantung")
      .once("value", (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_JANTUNG, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_JANTUNG, error);
        alert(error);
      });
  };
};

export const searchListJantung = (keyword) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_JANTUNG);

    FIREBASE.database()
      .ref("jantung")
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
        dispatchSuccess(dispatch, GET_LIST_JANTUNG, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_JANTUNG, error);
        alert(error);
      });
  };
};

