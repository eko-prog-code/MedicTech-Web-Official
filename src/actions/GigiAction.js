import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_LIST_GIGI = "GET_LIST_GIGI";

export const getListGigi = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_GIGI);

    FIREBASE.database()
      .ref("gigi")
      .once("value", (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_GIGI, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_GIGI, error);
        alert(error);
      });
  };
};

export const searchListGigi = (keyword) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_GIGI);

    FIREBASE.database()
      .ref("gigi")
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
        dispatchSuccess(dispatch, GET_LIST_GIGI, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_GIGI, error);
        alert(error);
      });
  };
};

