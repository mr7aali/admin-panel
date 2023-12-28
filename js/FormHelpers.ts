export const printInputInPattern = (index: number): boolean => {

    const towInputElementIndex = [
      4, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 30, 34, 35, 39, 40, 44, 45, 49,
      50,
    ];
    // const towInputElementIndex = [
    //     1, 2, 6, 7, 11, 12, 16, 17, 21, 22, 26, 27, 31, 32, 36, 37, 41, 42, 46, 47, 51, 52

    // ];
    return towInputElementIndex.includes(index);
};