import { GET_LIST_SARAF,} from "actions/SarafAction";

const initialState = {
  getListSarafLoading: false,
  getListSarafResult: false,
  getListSarafError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_SARAF:
      return {
        ...state,
        getListSarafLoading: action.payload.loading,
        getListSarafResult: action.payload.data,
        getListSarafError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
