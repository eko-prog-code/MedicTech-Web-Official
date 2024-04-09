import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_LIST_SARAF = "GET_LIST_SARAF";

export const getListSaraf = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_SARAF);

    FIREBASE.database()
      .ref("saraf")
      .once("value", (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_SARAF, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_SARAF, error);
        alert(error);
      });
  };
};

export const searchListSaraf = (keyword) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_SARAF);

    FIREBASE.database()
      .ref("saraf")
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
        dispatchSuccess(dispatch, GET_LIST_SARAF, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_SARAF, error);
        alert(error);
      });
  };
};

