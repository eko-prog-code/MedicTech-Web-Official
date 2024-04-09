import { GET_LIST_JADWAL,} from "actions/JadwalAction";

const initialState = {
  getListJadwalLoading: false,
  getListJadwalResult: false,
  getListJadwalError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_JADWAL:
      return {
        ...state,
        getListJadwalLoading: action.payload.loading,
        getListJadwalResult: action.payload.data,
        getListJadwalError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
