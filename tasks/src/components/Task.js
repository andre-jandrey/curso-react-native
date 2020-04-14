import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'

import Swipeable from 'react-native-gesture-handler/Swipeable'

import commonStyles from '../commonStyles'

export default props => {
    const doneOrNotStyle = props.doneAt != null ? 
        { textDecorationLine: 'line-through'} : {}

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right} onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon name="trash" size={20} color="#fff" />
            </TouchableOpacity>
        )
    }


    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <Icon name="trash" size={20} color="#fff" style={{ marginLeft: 15 }}/>
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        )
    }
    
    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMM')
    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>    
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.estimate}>{formatedDate}</Text>
                </View>

                {/* <Text>{props.doneAt + ""}</Text> */}
            </View> 
        </Swipeable>
    )
}
    
function getCheckView(doneAt) {
    if (doneAt == null) {
        return <View style={styles.pending}></View>    
    } else {
        return <View style={styles.done}>
            <Icon name="check" size={20} color={commonStyles.colors.secondary}></Icon>
        </View>    
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: "#fff"
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderColor: '#555',
        borderWidth: 1
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderColor: '#555',
        borderWidth: 1,
        backgroundColor: '#4d7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    estimate: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
    },
    right: {
        backgroundColor: "#f00",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: "#fff",
        fontSize: 20,
        margin: 10
    }
})
