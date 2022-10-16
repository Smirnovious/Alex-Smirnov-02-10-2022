import {
    WiDaySunny,
    WiDaySunnyOvercast,
    WiDayHaze,
    WiDayCloudy,
    WiCloudy,
    WiFog,
    WiCloud,
    WiDayShowers,
    WiThunderstorm,
    WiDayThunderstorm,
    WiSnowflakeCold,
    WiRain,
    WiSnow,
    WiDaySnow,
    WiWindy,
    WiSleet,
    WiRainMix,
    WiMoonNew,
    WiHot,
    WiStrongWind,
    WiNightClear,
    WiNightPartlyCloudy,
    WiNightCloudy,
    WiNightFog,
    WiNightShowers,
    WiNightThunderstorm,
    WiNightSnow,
    WiNightCloudyHigh,
} from "react-icons/wi";


export const iconPicker = (icon) => {
    switch (icon) {
        case 1:
            return <WiDaySunny />;
        case 2:
            return <WiDaySunnyOvercast />;
        case 3:
            return <WiDayHaze />;
        case 4:
            return <WiDayCloudy />;
        case 5:
            return <WiCloudy />;
        case 6:
            return <WiFog />;
        case 7:
            return <WiCloud />;
        case 8:
            return <WiDayShowers />;
        case 11:
            return <WiThunderstorm />;
        case 12:
            return <WiDayThunderstorm />;
        case 13:
            return <WiRain />;
        case 14:
            return <WiSnow />;
        case 15:
            return <WiDaySnow />;
        case 16:
            return <WiSnowflakeCold />;
        case 17:
            return <WiSleet />;
        case 18:
            return <WiRainMix />;
        case 19:
            return <WiHot />;
        case 20:
            return <WiStrongWind />;
        case 21:
            return <WiNightClear />;
        case 22:
            return <WiNightPartlyCloudy />;
        case 23:
            return <WiNightCloudy />;
        case 24:
            return <WiNightFog />;
        case 25:
            return <WiNightShowers />;
        case 26:
            return <WiNightThunderstorm />;
        case 29:
            return <WiNightSnow />;
        case 30:
            return <WiHot/>;
        case 31:
            return <WiSnowflakeCold/>
        case 32:
            return <WiWindy/>
        case 33:
            return <WiNightClear/>
        case 34:
            return <WiNightClear/>
        case 35:
            return <WiNightCloudy/>
        case 36: 
            return <WiNightCloudyHigh/>
        case 37:
            return <WiMoonNew/>
        default:
            return 'No icon found';
    }
}
