import React, { Component, useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

import { useState, useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import styles from './Styles'

export const PIC1 = require("../src/tshirt/0011_fashion_image.jpg")
export const PIC2 = require("../src/tshirt/0008_fashion_image.jpg")
export const arrow = require("../src/Arrow2.png")

const carolItem = [
    { imgSrc: PIC1, desc: 'For all your summer clothing needs' },
    { imgSrc: PIC2, desc: 'For all your winter clothing needs' },

]

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItem, setCarouselItemIndex] = useState(carolItem)
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
        <View>

            <View style={{ height: "100%", width: "58%" }}>
                <Image source={item.imgSrc} style={{ height: 200, width: 350, borderRadius: 20 }} />
                <View style={{ position: 'absolute' }}>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, paddingTop: 20 }}>{item.desc}</Text>
                </View>
                <View style={{ position: 'absolute', height: 200, width: 180 }}>
                    <TouchableHighlight style={{
                        height: "30%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        width: "80%", borderRadius: 30, marginTop: 130, backgroundColor: 'white', marginLeft: 10
                    }}>
                        <Text>
                            <View>
                            <Text style={{ fontSize: 18, color: 'gray', paddingRight: 10 }}> See More</Text>
                            </View>
                            <Image style={{paddingLeft:10}}source={arrow} />
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    ), [])
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: 200, marginLeft: 10 }}>
            <Carousel
                autoplay={false}
                loop={false}
                verticle
                layout="default"
                ref={ref}
                data={carouselItem}
                sliderWidth={200}
                itemWidth={350}
                renderItem={renderItem}
                onSnapToItem={(index) => (setActiveIndex(index))}
            />
        </View>
    )

}