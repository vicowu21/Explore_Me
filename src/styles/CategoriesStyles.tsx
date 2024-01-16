import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FAFB',
        display: 'flex',
        flexDirection: 'column'

      },
      container1: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        // marginTop: '30%',
        // marginLeft: '10%',
       
          
      },
      container2: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-around',
        backgroundColor: 'blue'

      }
})