export function groupConsecutiveArray(arr: any) {
    const result = [];
    let currentGroup = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] === arr[i - 1] + 1) {
            // Add to the current group if consecutive
            currentGroup.push(arr[i]);
        } else {
            // Start a new group if not consecutive
            result.push(currentGroup);
            currentGroup = [arr[i]];
        }
    }

    // Add the last group
    result.push(currentGroup);

    return result;
}
