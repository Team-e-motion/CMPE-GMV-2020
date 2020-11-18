# CMPE 2020, GMV 🚀

This repository contains the code for the implementation of a webpage which solves the problem proposed by GMV to the Universidad Complutense de Madrid (UCM) for the [Company Problem Modelling Contest (Concurso de Modelización de Problemas de Empresa, CMPE) 2020](https://matematicas.ucm.es/modelizacion-de-problemas-de-empresas). 

Given a message, the problem that GMV proposed was to add a string, in Spanish, indicating the number of letters that appear in the message using words to express the numbers. For example, if we had the following message:
```
Buenas tardes
```
Then we can add a string indicating the number of letters e in the message:
```
Buenas tardes; en este mensaje aparece quince veces la letra e.
```
Note that _quince_ is the Spanish word for 15, which also contains an e. If you count the number of e's in the message above with the string attached you will see that it does contain just 15 e's. The main issue you have to face to create the string is to calculate what number should be written, taken into account that some numbers might contain the letter you are referring to. This problem generalizes to generating a string which express the number of all letters in the Latin alphabet. 

You can check an example of the webpage deployed in the [github pages of this repository](https://Team-e-motion.github.io/CMPE-GMV-2020). 

### 🔧 Installation
To install all the dependencies you can use [npm](https://www.npmjs.com/), a package manager for the JavaScript programming language (if you do not have it yet, [click here](https://www.npmjs.com/get-npm) to get it!), simply run the following command:
```
npm install 
```

### ⚙️ Running Tests 

### 📦 Deploying 
To deploy the project in localhost you can run the following command after installing all the dependencies:
```
npm run start 
```
If you want to deploy the webpage to your github pages you will have to modify the [package.json](https://github.com/Team-e-motion/CMPE-GMV-2020/blob/main/package.json) file and change the "homepage" value to match your own github pages url.  
### ✒️ Authors 

### 📄 License 
