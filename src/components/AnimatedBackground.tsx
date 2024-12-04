import { useEffect } from "react";
import { Dimensions, useWindowDimensions, View } from "react-native"
import Animated, { useSharedValue, withRepeat, Easing, withTiming } from "react-native-reanimated"
export default function AnimatedBackground() {
    const { height } = useWindowDimensions();
    const top1 = useSharedValue(0.3 * height);
    const top2 = useSharedValue(0.5 * height);
    const top3 = useSharedValue(0.7 * height);

    useEffect(() => {
        top1.value = withRepeat(
            withTiming(0.2 * height, { duration: 4000,easing:Easing.bezier(
                0.5,0,0.5,1
            ) }),
            -1,
            true
        )
        top2.value = withRepeat(
            withTiming(0.4 * height, { duration: 4000,easing:Easing.bezier(
                0.5,0,0.5,1
            ) }),
            -1,
            true
        )
        top3.value = withRepeat(
            withTiming(0.6 * height, { duration: 4000,easing:Easing.bezier(
                0.5,0,0.5,1
            ) }),
            -1,
            true
        )
    }, [])
    return (
        <View className="absolute top-0 left-0 right-0 bottom-0 items-center">
            <Animated.View className="absolute w-[400%] aspect-square rounded-full bg-yellow-400 " style={{ top: top1 }} />
            <Animated.View className="absolute w-[400%] aspect-square rounded-full bg-yellow-300 " style={{ top: top2 }} />
            <Animated.View className="absolute w-[400%] aspect-square rounded-full bg-orange-500 " style={{ top: top3 }} />



        </View>
    )
}