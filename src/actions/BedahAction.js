import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_LIST_BEDAH = "GET_LIST_BEDAH";

export const getListBedah = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_BEDAH);

    FIREBASE.database()
      .ref("bedah")
      .once("value", (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_BEDAH, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_BEDAH, error);
        alert(error);
      });
  };
};

export const searchListBedah = (keyword) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_BEDAH);

    FIREBASE.database()
      .ref("bedah")
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
        dispatchSuccess(dispatch, GET_LIST_BEDAH, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_BEDAH, error);
        alert(error);
      });
  };
};

