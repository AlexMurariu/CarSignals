import { getHistorySuccess, getHistoryFailed } from './../state/actions/historyActions';
import Firebase from '../firebase.config';

class HistoryService {
    static myInstance: HistoryService;

    static getInstance() {
        if (!this.myInstance) {
            this.myInstance = new HistoryService();
        }
        return this.myInstance;
    }

    getHistory(uid: string): Promise<any>{
        return Firebase.database().ref(`/history/${uid}`).once('value')
            .then((snapshot: any) => {
                return getHistorySuccess(snapshot.val());
            })
            .catch((error: any) => {
                return getHistoryFailed(error);
            })
    }
}

export default HistoryService.getInstance();