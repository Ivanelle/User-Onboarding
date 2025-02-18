# Sprint 7 Module 3 Project

## Introduction

Welcome to Module 3 Project! In this project, you will practice input validation and submitting forms in React.

Your goal is to implement a form that validates input from the user and submits it to a real registration endpoint.

To successfully complete this project, you will need the following technical knowledge:

1. **Basic React** to manipulate props and the JSX.
2. **State hook** to track the values entered into the form.
3. **Effect hook** to validate form data as the user enters it.
4. **Event handlers** to change inputs and submit the form.
5. **Input types** like text, checkboxes, radio buttons and dropdowns.
6. **Input validation** using the Yup library.
7. **Postman** to study the endpoint being dealt with.

## Instructions

You have been given a take-home coding assessment as part of the hiring process for a Web Developer position. Your task is to implement **user registration** functionality for a site. This is done using a form that takes user input, validates it as it's entered, and submits the validated input to a registration endpoint.

From the point of view of the data, each user registration POSTed to the endpoint must contain `username`, `favLanguage`, `favFood` and `agreement` properties. The form captures these values using inputs of different types. Here is an example of a properly built payload:

```js
{ "username": "Luke", "favFood": "pizza", "favLanguage": "javascript", "agreement": true }
// ❗ Note that even if the payload passes validation, the username might be taken
```

👉 The registration endpoint is `[POST] https://webapis.bloomtechdev.com/registration`

👉 Your fully-functional design mock is `https://bloominstituteoftechnology.github.io/W_S7M3_Project`

**Study the endpoint using _Postman_, and study the mock site using _Chrome Dev Tools_, paying special attention to the Elements tab and the Network tab.**

### 💾 Setup

**Here are the steps to set up this project:**

1. **Clone this repository** to your computer.

2. Within your terminal, navigate to the project folder **and execute `npm i`**.

3. After successful installation **execute `npm run dev`**.

4. You will load the app in Chrome by **navigating the browser to `http://localhost:3003`**.

**❗ Note:** On the event of NPM errors during setup, delete the `node_modules` folder and the `package-lock.json` file, and retry `npm i` and `npm run dev`.

### 🥷 Tasks

**Here are guidelines for completing your tasks:**

- If you look inside the `frontend/components` folder you will find an `App.js` component. You will complete your tasks inside this file.

- The `App.js` component includes hints and pseudo-code in its comments to guide you.

- As you make progress, the behavior of your app will start matching that of the [mock](https://bloominstituteoftechnology.github.io/W_S7M3_Project).

- Use your attention-to-detail skills to ensure that the functionality of your form matches that of the mock as closely as possible.

- Have fun, and check out the Solution Video for this project if you need help!

#### 👉 TASK 1 - Implement submitting the form without validation

**Here is a suggested sequence for completing this task.**

(If you don't need any hand holding at all, feel free to ignore the suggestions. For an even harder challenge, delete the contents of the App component and implement the form completely from scratch. The only real requirement is that **the functionality of your form matches that of the mock.**)

1. Create a state to track the values of the form. This state could be an object with `username`, `favLanguage`, `favFood` and `agreement` keys.

2. More states are needed to track validation errors, messages from the server, and whether the form is disabled or not.

3. Fix the JSX to wire the change handler, the submit handler. Consume server messages and validation errors from the corresponding states using curly braces.

4. Implement the change handler without any validation.

5. Implement the submit handler. POST the form to the endpoint, and set the success and error messages into their proper states.

6. You should have a functional form that relies on back-end validation only, without any front-end validation to help the user.

#### 👉 TASK 2 - Implement front-end validation using Yup

The front-end could be doing a lot more to prevent the user from POSTing data that does not meet the requirements of the API. Let's implement form validation using Yup.

**Here is a suggested sequence.**

1. Create a schema using Yup to validate the state of the form. Use the provided dictionary of error messages to guide you.

2. In the JSX, add a `disabled` prop to the submit input that takes its value from state. State controls whether the form is submittable.

3. Create an effect that fires whenever the form changes. Run validation on the whole form, and set in state whether the submit element stays disabled or not.

4. Edit the change handler so that validation is run on the particular field that changed (E.G. `favFood`). Update the corresponding validation error in component state.

5. The form should be fully functional now!

#### 👉 TASK 3 - (OPTIONAL) Start over from scratch

Delete the contents of `App.js` and challenge yourself to rebuild this form without any help. The moves practiced in this project are fundamental. Even if you don't take this challenge on right now, revisit it in the future. Consider this task a [Kata](https://en.wikipedia.org/wiki/Kata) you should master before applying for a React position.

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Sometimes Node can be installed but misconfigured. Try deleting `node_modules` and running `npm install`. If that fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already, including Yup and Axios.

</details>

<details>
  <summary>Can I edit the styles?</summary>

Of course! Have at it.

</details>

<details>
  <summary>Can I edit the HTML?</summary>

That's probably not a great idea. Why do you want to do that?

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

With React, it's very important that we use the React Dev Tools to monitor the state of our components as we interact with the App. If the state is not adjusting like it should, that's good to know. If the state does change but the UI does not respond, that's a different thing.

If your code has a syntax problem, the app will print error messages in the console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem originates) and see if your variables contain the data you think they do. Comment out chunks of code until you get it to compile!

</details>

<details>
  <summary>How do I run tests against my code?</summary>

This particular project has no tests in it. All testing must be manual!

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. Make a commit whenever you achieve anything and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well. Research how to reset hard to a specific commit.

</details>

**Project created with [@bloomtools/react@0.1.10](https://github.com/bloominstituteoftechnology/npm-tools-react) and Node v18.17.1 on Tue, August 22, 2023 at 04:09 PM**
