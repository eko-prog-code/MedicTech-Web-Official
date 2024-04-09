import { GET_LIST_KANDUNGAN,} from "actions/KandunganAction";

const initialState = {
  getListKandunganLoading: false,
  getListKandunganResult: false,
  getListKandunganError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_KANDUNGAN:
      return {
        ...state,
        getListKandunganLoading: action.payload.loading,
        getListKandunganResult: action.payload.data,
        getListKandunganError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
