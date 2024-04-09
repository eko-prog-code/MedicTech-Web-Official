import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_LIST_KANDUNGAN = "GET_LIST_KANDUNGAN";

export const getListKandungan = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_KANDUNGAN);

    FIREBASE.database()
      .ref("kandungan")
      .once("value", (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_KANDUNGAN, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_KANDUNGAN, error);
        alert(error);
      });
  };
};

export const searchListKandungan = (keyword) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_KANDUNGAN);

    FIREBASE.database()
      .ref("kandungan")
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
        dispatchSuccess(dispatch, GET_LIST_KANDUNGAN, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_KANDUNGAN, error);
        alert(error);
      });
  };
};

