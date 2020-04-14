import React, { Component } from 'react'
import {
    View, Text, ImageBackground, StyleSheet, FlatList,
    TouchableWithoutFeedback, Platform, TouchableOpacity, Modal, TextInput
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'

import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'

import Task from '../components/Task'

import DateTimePicker from '@react-native-community/datetimepicker'

const initialState = { desc: '', date: new Date(), showDatePicker: false }

export default class AdicionarTask extends Component {
    state = {
        ...initialState
    }

    save = () => {
        const newTask = { 
            desc: this.state.desc,
            date: this.state.date
        }

        if (this.props.onSave) {
            this.props.onSave(newTask)
            this.setState({ ...initialState })
        }
    }

    getDateTimePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(_, date) => this.setState({ date, showDatePicker : false })}
            mode='date'    
        />

        const dateString = moment(this.state.date).format('dddd, D [de] MMM [de] YYYY')
        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>{dateString}</Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }
            
        return datePicker
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestCose={this.props.onCancel}
                animationType={'slide'}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.backgound}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}> Nova Tarefa </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a descrição"
                        value={this.state.desc}
                        onChangeText={ desc => this.setState({ desc })}
                    />
                    {this.getDateTimePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}><Text style={styles.button}>Cancelar</Text></TouchableOpacity>
                        <TouchableOpacity onPress={this.save}><Text style={styles.button}>Salvar</Text></TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.backgound}>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>

        )
    }

}

const styles = StyleSheet.create({
    backgound: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: '#fff'
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        padding: 15,
        textAlign: 'center'
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: '5%',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e3e3e3",
        borderRadius: 6
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        color: commonStyles.colors.today,
        margin: 30,
    },
    date: {
        fontSize: 20,
        fontFamily: commonStyles.fontFamily,
        marginLeft: 20,
        marginTop: 15,
        textAlign: 'center'
    }
})