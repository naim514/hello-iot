input.onButtonPressed(Button.A, function () {
    ESP8266ThingSpeak.connectThingSpeak(
    "api.thingspeak.com",
    "your_write_api_key",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showString(PTKidsBITIoT.HTTPGet("", 443))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (PTKidsBITIoT.GETFromJson("", "")))
})
ESP8266ThingSpeak.connectWifi(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate115200,
"your_ssid",
"your_pw"
)
