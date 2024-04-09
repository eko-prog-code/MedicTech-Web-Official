import { combineReducers } from 'redux'
import JadwalReducer from './jadwal';
import BedahReducer from './bedah';
import SarafReducer from './saraf';
import GigiReducer from './gigi';
import JantungReducer from './jantung';
import KandunganReducer from './kandungan';

export default combineReducers({ JadwalReducer, BedahReducer, SarafReducer, GigiReducer , JantungReducer , KandunganReducer 

})