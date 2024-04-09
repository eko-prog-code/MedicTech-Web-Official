import { GET_LIST_GIGI,} from "actions/GigiAction";

const initialState = {
  getListGigiLoading: false,
  getListGigiResult: false,
  getListGigiError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_GIGI:
      return {
        ...state,
        getListGigiLoading: action.payload.loading,
        getListGigiResult: action.payload.data,
        getListGigiError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
