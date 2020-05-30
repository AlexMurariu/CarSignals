import { getPredictionsSuccess, getPredictionsFailed } from './../state/actions/predictionActions';

class PredictionService {
    static myInstance: PredictionService;

    static getInstance() {
        if (!this.myInstance) {
            this.myInstance = new PredictionService();
        }
        return this.myInstance;
    }

    getPredictions(imageBuffer: any): Promise<any> {
        const url = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/8392ecee-fb13-405f-9e00-23d0fc32f0a1/detect/iterations/Iteration9/image';
        return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/octet-stream',
              'Prediction-Key': '470ca9a7e4324ad891e3869dcff21ca2'
            },
            body: imageBuffer
          })
          .then((response:any) => response.json())
            .then((data: any) => {
                const predictions = data && data.predictions;
                return getPredictionsSuccess(predictions);
            })
            .catch((error) => {
                return getPredictionsFailed('Something went wrong while predicting, please try again or reload the app!');
            });
    }
}

export default PredictionService.getInstance();