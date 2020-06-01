import { HistoryActions } from './../actions/historyActions';
import { Record } from 'immutable';
import { actionTypes } from '../types';
import { IPrediction, PredictionState } from './predictionReducer';


interface IHistory {
    history: IPrediction[];
    error: string
}

const HistoryStateRecord = Record({
    history: null,
    error: ''
})

class HistoryState extends HistoryStateRecord implements IHistory {
    constructor(props: IHistory) {
        super(props);
    }
}

const initialState: HistoryState = new HistoryState({ history: null, error: '' });

const historyReducer = (state: HistoryState = initialState, action: HistoryActions) => {
    switch(action.type) {
        case actionTypes.GET_HISTORY_SUCCESS: {
            const historyObject = action.payload.history;
            
            if (!historyObject) {
                return state;
            }
            
            const list = Object.keys(historyObject).map((key: string) => {

                const historyItem = new PredictionState({
                    ...historyObject[key],
                    uid: key
                })
                return historyItem;
            });

            const historyState = new HistoryState({
                history: list,
                error: ''
            })
            return historyState;
        }
        case actionTypes.GET_HISTORY_FAILED: {
            const historyState = new HistoryState({
                history: null,
                error: action.payload
            })

            return historyState;
        }
        
        case actionTypes.DELETE_DETECTED_SIGNAL: {
            const newHistoryList = state.history.filter((prediction: IPrediction) => {
                return prediction.uid !== action.payload.id
            })
      
            const newState = new HistoryState({
                ...state,
                history: newHistoryList
            })

            return newState;
        }

        case actionTypes.ADD_PREDICTIONS_TO_HISTORY: {
            const list = action.payload.predictions;
            const newList = state.history || [];
     
            list.forEach((prediction: IPrediction) => {
                newList.push(prediction);
            })

            const newState = new HistoryState({
                ...state,
                history: newList
            })
        
            return newState;
        }
        default: 
            return state;
    }
}

export {
    HistoryState,
    historyReducer
}