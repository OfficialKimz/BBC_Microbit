bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
basic.showString("BLUE-NP")
bluetooth.startAccelerometerService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startMagnetometerService()
