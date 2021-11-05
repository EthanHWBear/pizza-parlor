# _{Pizza Parlor}_

#### Independent Project - Week 4 - JavaScript Objects, Prorotypes, and Constructors

 By *{Ethan Bear}*

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JavaScript_
* _jQuery_

#

## Description

_{A website designed to showcase competencies in constructors, objects, and prototypes in JavaScript. The website allows a customer to create their own pizza using object constructors to select toppings and a size. It then emplys a prototype method in order to determine the cost of the pizza.}_

#

## https://ethanhwbear.github.io/portfolio-landing-page/

#

## Application Setup instructions

* _Make sure you have the latest versions of the related software installed on your machine._
* _Clone this repository to your desktop by executing $ git clone https://github.com/pizza-parlor in the command line._
* _Select the "index.html" file within the project directory to open the web page in your browser._

#

## Known Bugs

* _JS script is not tied successfully to HTML._
* _ ._

#

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Ethan Bear

## Contact Information

Ethan Bear <a href="mailto:ehwbear@icloud.com">ehwbear@icloud.com</a>

#BUSINESS LOGIC TESTS#

Describe: Pizza()

Test 1: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

#### Mindless chatter - notes to self:

- Create a constructor that creates new pizzas. The pizzas will contain a delivery method, toppings, and a size within their object qualities.

- Link customer input (using buttons from HTML) to the qualities in my object.

- Once input is gathered, a new object will be created with customer inputted selections.

- Create prototype that checks for if/else statements and adjusts price based on user-inputted choices.



