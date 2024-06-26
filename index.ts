//Prime
const arrNumbers: number[] = [356, 701, 39, 46, 133];

const filterPrime = (arrNumbers: number[]): number[] => {
  const primeNumbers: number[] = [];
  for (let index = 0; index < arrNumbers.length; index++) {
    const currNumber: number = arrNumbers[index];
    let isPrime: boolean = true;

    if (currNumber === 1 || currNumber === 0) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(currNumber); i++) {
        if (currNumber % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      primeNumbers.push(currNumber);
    }
  }
  return primeNumbers;
};

// console.log(filterPrime(arrNumbers))

// 2. Palindrome
function isPalindrome(txt: string): string {
  txt = txt.toLowerCase().replace(/[^a-z0-9]/g, "");
  const isTxtPalindrome = txt == txt.split("").reverse().join("");
  return isTxtPalindrome
    ? `${txt} - is a palindrome.`
    : `${txt} - is NOT a palindrome.`;
}

// console.log(isPalindrome("level"))
// console.log(isPalindrome("radar"))
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("apple"));
// console.log(isPalindrome("Was it a car or a cat I saw?"));

// 3. Array Reversed

interface Arr extends Array<string | number> {}
function reverseArray(arr: Arr): Arr {
  let reverseArray: Arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}
// console.log(reverseArray([1, 2, 3, 5 ]));

//4. Reverse inplace Array
type ArrElement = string | number;

function reverseInplaceArray(arr: Arr) :Arr {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp: ArrElement = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}
// console.log(reverseInplaceArray([1,2,3,5]))



//5. Formated Object
type PersonInfo = { "second-name": string; age: number };

interface Result {
  females: Record<string, PersonInfo>;
  males: Record<string, PersonInfo>;
}

function formatArray(arr: string[]): Result {
  let result: Result = { females: {}, males: {} };

  arr.forEach((person) => {
    let [fullName, ageStr, gender] = person.split(", ");
    let [firstName, secondName] = fullName.split(" ");

    let age = parseInt(ageStr);
    let personInfo: PersonInfo = { "second-name": secondName, age };

    if (gender === "female") {
      result.females[firstName] = personInfo;
    } else if (gender === "male") {
      result.males[firstName] = personInfo;
    }
  });

  return result;
}

let people = [
  "Elvis mugisha, 23, male",
  "Angel Diane, 26, female",
  "Papi Emanuel, 21, male",
];

// console.log(formatArray(people));

// 6. Sorting Array
function isPrime(num: number) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function customSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(customSort([10, 5, 3, 8, 7, 2, 6]));

// 7. majorityArray
function hasMajorityElement(arr: number[]) {
  const counts: Record<number, number> = {};
  for (let i = 0; i < arr.length; i++) {
    const num: number = arr[i];
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > arr.length / 2) {
      return true;
    }
  }
  return false;
}

// console.log("[3, 1, 3, 4, 3] has majority element? => ", hasMajorityElement([3, 1, 3, 4, 3]));
// console.log("[3, 1, 3, 4, 4] has majority element? => ", hasMajorityElement([3, 1, 3, 4, 4]));

// 8. AsynchJS
interface student {
  name: string;
  age?: number;
}
const setStudentAgeApi = (student: student, age: number) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      student.age = age;
      if (age < 0) reject("Bad Age");
      else resolve(student);
    }, 500);
  });
};

// let student = { name: "Elvis" }
// console.log("show data of student..")
// setStudentAgeApi(student, 23).then(res=>{
//     console.log(res)
// }).catch(err => console.log(err))

// 9. AsynchJS

interface familyObject {
  fatherName: string;
  MotherName: string;
  childrenNumber: number;
  totalNumberOfFamilyMembers?: number;
}
const setFamilyApi = async (arr: familyObject[]) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].totalNumberOfFamilyMembers = arr[i].childrenNumber + 2;
        if (arr[i].fatherName.toLowerCase() === "yves")
          reject("Yves is not an allowed dad in 2022.");
      }
      resolve(arr);
    }, 1000);
  });
};

let families = [
  {
    fatherName: "Elvis",
    MotherName: "Rachel",
    childrenNumber: 4,
  },
  {
    fatherName: "Papi",
    MotherName: "Angelique",
    childrenNumber: 6,
  },
  {
    fatherName: "Yvess",
    MotherName: "Rachel",
    childrenNumber: 2,
  },
];

(async () => {
  // console.log("showing Family DATA...");
  try {
    const family = await setFamilyApi(families);
    // console.log(family);
  } catch (error) {
    console.error(error);
  }
})();
