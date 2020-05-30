import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    activityLoader: {
        marginBottom: 10
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    imageWrapper: {
        width: '80%',
        height: '30%',
        padding: 10,
        borderColor: '#236ACD',
        borderWidth: 5,
        borderStyle: 'dashed',
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
      },
      imageContainer: {
        width: '98%',
        height: '98%',
        borderRadius: 10
      },
      buttonsContainer: {
        display: "flex",
        flexDirection: 'row'
      },
      takePhotoButton: {
        backgroundColor: '#236ACD',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
      },
      takePhotoButtonText: {
        color: '#fff',
        fontSize: 20
      },
      predictionsContainer: {
          marginTop: 20,
          width: "60%"
      },
      notGoodEnoughMessage: {
        
      }
})