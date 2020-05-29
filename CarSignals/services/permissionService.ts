import { getCameraPermissionSuccess, getCameraPermissionFailed } from './../state/actions/permissionActions';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class PermissionService {
    static myInstance: PermissionService;

    static getInstance() {
        if (!this.myInstance) {
            this.myInstance = new PermissionService();
        }
        return this.myInstance;
    }

    getCameraPermissions(): Promise<any> {
        return Permissions.askAsync(Permissions.CAMERA_ROLL)
            .then((permission: any) => {
                return getCameraPermissionSuccess(permission.status)
            })
            .catch((error) => {
                return getCameraPermissionFailed(error.message);
            })
    }
}

export default PermissionService.getInstance();