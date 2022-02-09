export function dateToString(date) {
    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    let year = date.getFullYear()
    return day + "/" + month + "/" + year
}

export function dateWithoutTimeZone(date) {
    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    let year = date.getFullYear()
    return year + "-" + month + "-" + day
}