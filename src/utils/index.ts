export const formatTimeData = (timeValue: number) => {
    let finalValue = ""
    if (timeValue < 10) {
        finalValue = "0" + timeValue
    } else {
        finalValue = timeValue.toString()
    }
    return finalValue
}