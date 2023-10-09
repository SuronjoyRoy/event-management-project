<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:A

<i>In this code, a variable greeting is declared, but then, a typographical error occurs when trying to assign an empty object to it. The variable is mistakenly spelled as greetign. So, the correct output of console.log(greetign) will be an empty object, {}, because that's what is assigned to the mistakenly spelled variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:C

<i>In the sum function, there is no explicit type checking, and JavaScript will attempt to concatenate the values if one of them is a string. In the function call sum(1, "2"), JavaScript converts the number 1 to a string and then performs string concatenation, resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In this code, the info.favoriteFood is assigned the string "🍝," but this assignment does not affect the food array. The food array remains unchanged, so the console.log(food) will output ['🍕', '🍫', '🥑', '🍔'], option A.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B

<i>In the sayHi function, there is a parameter name, but when you call sayHi() without providing an argument, it defaults to undefined. Therefore, the function returns "Hi there, undefined," which is option B.
</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B 

<i>The forEach loop iterates over the nums array, and for each non-falsy value (in this case, all values except 0), it increments the count variable by 1. So, it will increment count for values 1, 2, and 3, resulting in a final value of 3. Therefore, the console.log(count) will output 3, which corresponds to option C.
</i>

</p>
</details>
