

function getFirstItem<T>(arr: T[]): T | null{
    if(!arr.length)
        return null
    return arr[0];
}
