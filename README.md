Question 1: Digit Gatekeeper  
How I Solved It: I set up a for loop to scan every number from L to R-1. For each number, I first checked if it was divisible by K. To follow the other rules, I used a while loop to remove each digit one by one, making sure there were no zeros and adding them up as I went. Once I had the total sum, I ran a quick test to check if it was prime by looking for factors up to the square root of that sum.  
Complexity:  
Time: O(N * D) — We look at N numbers, and for each one, we check its D digits.  
Space: O(1) — I only used a few simple variables to keep track of the count.  

Question 2: Roll-Seed Lock  
How I Solved It: I created a loop that runs exactly three times. Inside, I used an if-else check: if the number was even, I halved it and added the seed; if it was odd, I tripled it and added the seed. After the three steps were done, I checked if the final number had three digits, specifically between 100 and 999. I also pulled out the middle digit using Math.floor(num / 10) % 10 to see if it matched the student seed.  
Complexity:  
Time: O(1) — Since the loop always runs three times, the speed doesn't change regardless of the input size.  
Space: O(1).  

Question 3: Mirror Corridor  
How I Solved It: I tested different values for X, starting from 0 and going up to 10,000. For every X, I added it to N and checked if that new total was divisible by K. If it was, I converted the number into a string and reversed it to see if it read the same forward and backward, confirming it was a palindrome.  
Complexity:  
Time: O(X * D) — We check up to 10,000 values, and reversing the string depends on the number of digits (D).  
Space: O(D) — A bit of memory is used to store the reversed version of the number string.  

Question 4: Fare Calculator  
How I Solved It: I started with the basic math: base + 7 * distance. From there, I added the specific rules: a flat 20 extra if the driver was late by more than 15 minutes, a 10% surcharge for trips over 10 units, and then either adding or subtracting the seed based on whether it was odd or even. Finally, I used Math.ceil to round the fare up to the next multiple of 5.  
Complexity:  
Time: O(1) — It is just a direct sequence of math operations.  
Space: O(1).  

Question 5: Skipping Numbers  
How I Solved It: I used a while loop that keeps running until my total sum hits the target N. I kept a counter m that goes up by 1 each time. To handle the "skip" rule, I used the modulo operator to check if m was divisible by (seed + 2). If it was not divisible, I added it to the sum; if it was, I skipped it.  
Complexity:  
Time: O(sqrt(N)) — The sum grows faster as m increases, so it hits N relatively quickly.  
Space: O(1).  

Question 6: Contest Score Judge  
How I Solved It: First, I calculated the raw score using the formula 3a + b - 2c. I then made sure the score did not go below zero. I also checked if the total number of questions answered (a + b + c) exceeded 50 to apply a 10-point penalty. Lastly, I used a simple comparison to label the result as "PASS" if the score was 60 or more, and "FAIL" otherwise.  
Complexity:  
Time: O(1) — Basic arithmetic and a couple of if checks.  
Space: O(1).  