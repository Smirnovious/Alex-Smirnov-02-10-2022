import {
    WiDaySunny,
    WiDaySunnyOvercast,
    WiCloudy,
    WiFog,
    WiNightRain,
    WiRaindrop,
    WiNightSprinkle,
    WiSandstorm,
    WiCloud,
    WiSnowflakeCold,
    WiRain,
    WiDayRain,
    WiNightSnowWind,
    WiDaySleetStorm,
    WiWindy,
    WiNightSnowThunderstorm,
    WiMoonNew,
    WiNightAltCloudy,
    WiHot,
    WiNightCloudyWindy,
    WiStrongWind,
    WiNightClear,
    WiNightPartlyCloudy,
    WiNightCloudy,
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
            return <WiDaySunnyOvercast />;
        case 4:
            return <WiCloudy />;
        case 5:
            return <WiFog />;
        case 6:
            return <WiCloudy />;
        case 7:
            return <WiCloud />;
        case 8:
            return <WiDaySunnyOvercast />;
        case 11:
            return <WiFog />;
        case 12:
            return <WiNightRain />;
        case 13:
            return <WiRain />;
        case 14:
            return <WiDayRain />;
        case 15:
            return <WiDaySleetStorm />;
        case 16:
            return <WiDaySleetStorm />;
        case 17:
            return <WiDaySleetStorm />;
        case 18:
            return <WiRain />;
        case 19:
            return <WiSandstorm />;
        case 20:
            return <WiStrongWind />;
        case 21:
            return <WiNightCloudyWindy />;
        case 22:
            return <WiNightPartlyCloudy />;
        case 23:
            return <WiNightCloudy />;
        case 24:
            return <WiRaindrop />;
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
        case 38:
            return <WiNightAltCloudy/>
        case 39:
            return <WiNightShowers/>
        case 40:
            return <WiNightSprinkle/>
        case 41:
            return <WiNightSnowThunderstorm/>
        case 42:
            return <WiNightSnowThunderstorm />;
        case 43:
            return <WiNightSnowWind />;
        case 44:
            return <WiNightSnowWind />;
        default:
            return 'No icon found';
    }
}
