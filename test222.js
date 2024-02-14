// �������� ������� �� 10 ��������� �����
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10));
}

// ������� ��� ������ ������� �� �����
function displayArray(arr) {
  console.log(arr);
}

// ������� ��� ������ ������ ������ ��������� �������
function displayEvenNumbers(arr) {
  let evenNumbers = arr.filter(num => num % 2 === 0);
  console.log(evenNumbers);
}

// ������� ��� ������� ����� ���� ��������� �������
function calculateSum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// ������� ��� ������ ������������� �������� �������
function findMax(arr) {
  let max = Math.max(...arr);
  return max;
}

// ������� ��� ���������� ������ �������� � ������ �� ���������� �������
function addElementAtIndex(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

// ������� ��� �������� �������� �� ������� �� ���������� �������
function removeElementAtIndex(arr, index) {
  arr.splice(index, 1);
  return arr;
}

// ������������ �������
displayArray(numbers);
displayEvenNumbers(numbers);
console.log(calculateSum(numbers));
console.log(findMax(numbers));
console.log(addElementAtIndex(numbers, 5, 50));
console.log(removeElementAtIndex(numbers, 2))
//2
const nums1 = [1, 2, 5, 3];
const nums2 = [1, 2, 7, 3, 8];

const findIntersection = (array1, array2) => {
  const array1Set = new Set(array1);
  const intersection = [];
  
  for (const num of array2) {
    if (array1Set.has(num)) {
      intersection.push(num);
    }
  }
  
  return intersection;
}

console.log(findIntersection(nums1, nums2));
//3
const sorted = animals.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  
  console.log(sorted);
                 