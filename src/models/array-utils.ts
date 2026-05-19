

function getFirstItem<T>(arr: T[]): T | null{
    if(arr.length === 0||arr[0] === undefined)
        return null
    return arr[0];
}
