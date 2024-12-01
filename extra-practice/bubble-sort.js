function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    // Loop through the array
    do {
      swapped = false; // Reset the swapped flag
      for (let i = 0; i < n - 1; i++) {
        // Compare adjacent elements
        if (arr[i] > arr[i + 1]) {
          // Swap if they are in the wrong order
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true; // Set the flag to true
        }
      }
    } while (swapped); // Repeat until no swaps occur
  
    return arr; // Return the sorted array
  }
  
  