import { RootState } from './../reducers';
import { createSelector } from 'reselect';
import { IPrediction } from '../reducers/predictionReducer';
import * as _ from 'lodash';

const getPredictions: any = (state: RootState): Array<IPrediction> => {
    const predictions = state.predictions.predictions;
    return predictions;
}

export const getPredictionWithHighestProbability = createSelector<RootState, Array<IPrediction>, Array<IPrediction>>(
    getPredictions,
    (predictions) => {
        if (!predictions) {
            return null;
        }
        const filteredPrediction = predictions.filter((prediction: IPrediction) => {
            return prediction.probability > 0.5;
        });

        const predictionsWithHighestProbability = _.uniqBy(filteredPrediction, (prediction: IPrediction) => { return prediction.tagName });
        return predictionsWithHighestProbability;
    }
)
