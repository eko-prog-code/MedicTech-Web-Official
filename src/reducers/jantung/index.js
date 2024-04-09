import { GET_LIST_JANTUNG,} from "actions/JantungAction";

const initialState = {
  getListJantungLoading: false,
  getListJantungResult: false,
  getListJantungError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_JANTUNG:
      return {
        ...state,
        getListJantungLoading: action.payload.loading,
        getListJantungResult: action.payload.data,
        getListJantungError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
