export function stringToBolean(s) {
    if (typeof (s) === "boolean")
        return s
    if (typeof (s) === "string") {
        if (s === "true")
            return true

        if (s === "false")
            return false
    }
    return null
}