import { getCameraRollPermissionSuccess, getCameraRollPermissionFailed, getCameraPermissionSuccess } from './../state/actions';
import * as Permissions from 'expo-permissions';

class PermissionService {
    static myInstance: PermissionService;

    static getInstance() {
        if (!this.myInstance) {
            this.myInstance = new PermissionService();
        }
        return this.myInstance;
    }

    getCameraRollPermissions(): Promise<any> {
        return Permissions.askAsync(Permissions.CAMERA_ROLL)
            .then((permission: any) => {
                return getCameraRollPermissionSuccess(permission)
            })
            .catch((error) => {
                return getCameraRollPermissionFailed(error.message);
            })
    }

    getCameraPermissions(): Promise<any> {
        return Permissions.askAsync(Permissions.CAMERA)
            .then((permission: any) => {
                return getCameraPermissionSuccess(permission.status);
            }).
            catch((error) => {
                return getCameraRollPermissionFailed(error);
            })
    }
}

export default PermissionService.getInstance();