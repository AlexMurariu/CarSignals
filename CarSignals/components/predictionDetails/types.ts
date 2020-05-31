import { IPrediction } from "../../state/reducers/predictionReducer";

export type PredictionDetailsProps = {
    prediction: IPrediction;
    showModal: boolean;
    toggleModal: Function;
}