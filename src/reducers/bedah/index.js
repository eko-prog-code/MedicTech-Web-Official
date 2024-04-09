import { GET_LIST_BEDAH,} from "actions/BedahAction";

const initialState = {
  getListBedahLoading: false,
  getListBedahResult: false,
  getListBedahError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_BEDAH:
      return {
        ...state,
        getListBedahLoading: action.payload.loading,
        getListBedahResult: action.payload.data,
        getListBedahError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
