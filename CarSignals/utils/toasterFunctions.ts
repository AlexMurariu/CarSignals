import Toast from "react-native-root-toast";

export const showToaster = (
    message: string, 
    duration: number = 5000, 
    shadow: boolean = true, 
    animation: boolean = true, 
    hideOnPress: boolean = true, 
    position: number = 100, 
    delay: number = 0
) => {
    Toast.show(message, {
        duration,
        shadow,
        animation,
        hideOnPress,
        position,
        delay,
    }) 
}