
import produce from 'immer';
// import tempLogo from '../../components/assets/newLogo.png';
import createReducer from "./reducerUtils";
// import bInvoice from '../../components/assets/flo.jpg';
import Untitled from '../../Img/Untitled-1.jpg'
// import { SettingsPhoneTwoTone } from '@material-ui/icons'
// import flower from '../../'
const initialState = {
  // ../../Img/Untitled-1.jpg
  isLevel: 1,
  show: false,
  nameAction: '',
  massageToUser: '',
  imageInvoice: Untitled,
  // listImages: [bInvoice],
  itemData: [
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',

  ],
  colors: ['black', 'black', 'black', 'black'],
  componentConfigurator: "",

}

const designReducer = {

  setIsLevel(state, action) {
    state.isLevel = action.payload;
  },


  setImageInvoice(state, action) {
    state.imageInvoice = action.payload;
  },
  setListImages(state, action) {
    state.listImages.push(action.payload);
  },
  setItemData(state, action) {
    state.itemData.push(action.payload);
  },
  setColors(state, action) {
    state.colors = action.payload;
  },
  setIndexList(state, action) {
    state.indexList = state.indexList + 1
  },
  setComponentConfigurator(state, action) {
    state.componentConfigurator = action.payload
  },
  setShow(state, action) {
    state.show = action.payload;
  },
  setNameAction(state, action) {
    state.nameAction = action.payload;
  }
}
export default produce((state, action) => createReducer(state, action, designReducer), initialState);