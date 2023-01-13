// Step 2: Coding problems
//
// 1.) Sum Zero

const addsToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
          for (let x = i+1; x < arr.length; x++) {
            //   console.log(i, x)
              if (arr[i] + arr[x] === 0) {
                  return true
              }
          }
      }
      return false
  }

// console.log(addsToZero([1, 2, 3, -2]))

// 2.) Unique Characters

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

// console.log(hasUniqueChars("Moonday"))

// 3.) Panagram Sentence

const isPangram = string => {
    let strArr = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    for (let i = 0; i < alphabet.length; i++) {
        if(strArr.indexOf(alphabet[i]) < 0){
          return false;
        }
      }
      return true;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("Not a pangram"))

// 4.) Longest Word

const longestWord = words => {
    letterCount = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= letterCount) {
            letterCount = words[i].length 
        }
    }
    return letterCount
}

// console.log(longestWord(["hi", "hello", "pineapple"]))