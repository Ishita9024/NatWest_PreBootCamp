function mergeSort(arr) {
    if (arr.length > 1) {
        var mid = Math.floor(arr.length / 2)
        var left = arr.slice(0, mid)
        var right = arr.slice(mid,arr.length)
        mergeSort(left)
        mergeSort(right)
        var left_index = 0
        var right_index = 0
        var position = 0
        while (left_index < left.length && right_index < right.length) {
            if (left[left_index] < right[right_index]) {
                arr[position] = left[left_index]
                left_index+=1
            }
            else {
                arr[position] = right[right_index]
                right_index+=1
            }
            position+=1
        }
        while (left_index < left.length) {
            arr[position] = left[left_index]
            position+=1
            left_index+=1
        }
        while (right_index < right.length) {
            arr[position] = right[right_index]
            position+=1
            right_index+=1
        }
    }
}
var arr = [2, 4, 6, 7, 4, 3]
mergeSort(arr)
console.log(arr);