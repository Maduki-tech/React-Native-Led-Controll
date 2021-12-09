import React from 'react'
import { View, Text } from 'react-native'
import ButtonControll from '../Components/ButtonControll'
import Head from '../Components/Header'
import ScreenControll from '../Components/ScreenControll'

export default function LedControll() {
    return (
        <View>
            <Head/>
            <ScreenControll/>
            {/* <ButtonControll/>  */}
        </View>
    )
}
