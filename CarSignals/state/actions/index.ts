import { 
    getPredictions,
    getPredictionsSuccess,
    getPredictionsFailed,
    clearPredictions,
    PredictionActions
} from './predictionActions';

import { 
    getCameraRollPermission,
    getCameraRollPermissionSuccess,
    getCameraRollPermissionFailed,
    getCameraPermission,
    getCameraPermissionSuccess,
    getCameraPermissionFailed,
    PermissionActions
} from './permissionActions';

import { 
    getHistory, 
    getHistorySuccess, 
    getHistoryFailed, 
    deleteDetectedSignal, 
    addPredictionsToHistory,
    HistoryActions 
} from './historyActions';

import { 
    login, 
    loginSuccess, 
    loginFailed, 
    signUp, 
    UserActions, 
    signUpSuccess, 
    signUpFailed, 
    logout, 
    logoutSuccess, 
    logoutFailed 
} from './authActions';

export {
    login,
    loginSuccess,
    loginFailed,
    signUp,
    signUpSuccess,
    signUpFailed,
    logout,
    logoutSuccess,
    logoutFailed,
    getHistory, 
    getHistorySuccess, 
    getHistoryFailed, 
    deleteDetectedSignal, 
    addPredictionsToHistory,
    getCameraRollPermission,
    getCameraRollPermissionSuccess,
    getCameraRollPermissionFailed,
    getCameraPermission,
    getCameraPermissionSuccess,
    getCameraPermissionFailed,
    getPredictions,
    getPredictionsSuccess,
    getPredictionsFailed,
    clearPredictions
}

export {
    UserActions,
    HistoryActions,
    PermissionActions,
    PredictionActions
}