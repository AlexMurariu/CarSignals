import { IPrediction } from "../../state/reducers/predictionReducer";

export type PredictionCardProps = {
    prediction: IPrediction;
    deleteOption?: boolean;
    deletePrediction?: Function;
}