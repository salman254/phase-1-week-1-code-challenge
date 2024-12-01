function steps(n) {
    // Loop through each level of the staircase
    for (let i = 1; i <= n; i++) {
      // Create a string with spaces and hashes
      let step = '#'.repeat(i); // Repeat '#' i times
      console.log(step); // Log the current step
    }
  }
  