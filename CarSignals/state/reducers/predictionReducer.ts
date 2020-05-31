import { PredictionActions } from './../actions/predictionActions';
import { Record } from 'immutable';
import { actionTypes } from '../types';
import moment from 'moment';

interface IPrediction {
    boundingBox: {
        height: number;
        left: number;
        top: number;
        width: number;
    };
    probability: number;
    predictionDate: string;
    tagId: string;
    tagName: string;
}

const PredictionStateRecord = Record({
    boundingBox: {
        height: null,
        left: null,
        top: null,
        width: null
    },
    probability: null,
    predictionDate: '',
    tagId: '',
    tagName: ''
})

class PredictionState extends PredictionStateRecord implements IPrediction {
    constructor(props: IPrediction) {
        super(props);
    }
}

interface IPredictionList {
    predictions: IPrediction[];
    error: string;
}

const PredictionListStateRecord = Record({
    predictions: null,
    error: ''
})

class PredictionListState extends PredictionListStateRecord implements IPredictionList {
    constructor(props: IPredictionList) {
        super(props);
    }
}

const initialState: PredictionListState = new PredictionListState({ predictions: null,  error: '' });

const predictionReducer = (state: PredictionListState = initialState, action: PredictionActions) => {
    switch(action.type) {
        case actionTypes.GET_PREDICTIONS_SUCCESS: {
            const predictionList: Array<any> = action.payload
            const predictions = predictionList && predictionList.map((prediction: IPrediction) => {
                const predictionDate = moment().format('DD-MM-YYYY');

                const pred = new PredictionState({
                    ...prediction,
                    predictionDate
                });
                return pred;
            });

            const newState = new PredictionListState({
                predictions,
                error: ''
            });
            return newState;
        }
        
        case actionTypes.GET_PREDICTIONS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        
        case actionTypes.CLEAR_PREDICTIONS: 
            return {
                ...state,
                predictions: null
            }
            
        default: {
            return state;
        }
    }
}

export {
    PredictionListState,
    IPrediction,
    predictionReducer
}