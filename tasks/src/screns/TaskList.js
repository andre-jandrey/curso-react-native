import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Alert } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from "@react-native-community/async-storage"

import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'

import Task from '../components/Task'

import AdiconarTask from './AdicionarTask'

const initialState = { 
    showDoneTasks: true,
    showAdicionarTask: false,
    visibleTasks: [],
    tasks: []
 }


export default class TaskList extends Component {

    state = {
        ...initialState
    }

    addTask = newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Decrição não informáda')
            return
        }
        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        })
        this.setState({ tasks, showAdicionarTask: false }, this.filterTasks )
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    isVisible = () => {
        
    }

    componentDidMount = async () => {
        //this.filterTasks()
        const s = await AsyncStorage.getItem('state') 
        const state = JSON.parse(s)
        this.setState( state, this.filterTasks )
    }

    filterTasks = () => {
        let visibleTasks = []
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks] 
        } else {
            visibleTasks = this.state.tasks.filter(t => t.doneAt === null)

        }
        this.setState({ visibleTasks })
        AsyncStorage.setItem('state', JSON.stringify(this.state))
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMM')
        return (
            <View style={styles.container}>
                <AdiconarTask
                    isVisible={this.state.showAdicionarTask}
                    onCancel={() => this.setState({ showAdicionarTask: false })}
                    onSave={this.addTask}
                />
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? "eye" : "eye-slash"} size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toggleTask={this.toggleTask} onDelete={this.deleteTask}
                        />}></FlatList>
                </View>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={ () => this.setState({ showAdicionarTask : true })}>
                    <Icon name="plus" size={20} color={commonStyles.colors.secondary} ></Icon>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        marginTop: Platform.OS === 'ios'? 40 : 10
    },
    addButton: {
        position: "absolute",
        bottom: 30,
        width: 50,
        height: 50,
        right: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: commonStyles.colors.today
    }
});