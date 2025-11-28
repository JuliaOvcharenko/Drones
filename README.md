# Project "Drones - e-shop with drones and thermal imagers" | Проєкт "Drones - онлайн магазин з дронами та тепловізорами." 

## Навігація | Navigation on README:
- [Структура | Structure of the project](#структура--structure-of-the-project)
- [Архітектура | Architecture](#архітектура--architecture)
- [Стиль написання коду | Code writing style](#стиль-написання-коду--code-writing-style)
- [Деталі роботи у команді | Details of teamwork](#деталі-роботи-у-команді--details-of-teamwork)
- [Задачі та можливості нашого API | Tasks and opportunities of our API](#задачі-та-можливості-нашого-api--tasks-and-opportunities-of-our-api)
- [Як встановити та запустити проєкт? | How to install and run the project?](#як-встановити-та-запустити-проєкт--how-to-install-and-run-the-project)
- [Висновок | Conclusion](#висновок--conclusion)

## Структура | Structure of the project

* ![](images_for_readme/figma.svg) [Фігджем структура проєкту](https://www.figma.com/board/1RkjIOY9Bq5KLQVqiuGfMi/Drones---Structure-of-the-project?node-id=0-1&p=f&t=7biHNxhrIgGj0lhq-0)

___


* ![](images_for_readme/figma.svg) [FigJam structure of the project](https://www.figma.com/board/1RkjIOY9Bq5KLQVqiuGfMi/Drones---Structure-of-the-project?node-id=0-1&p=f&t=7biHNxhrIgGj0lhq-0)


## Архітектура | Architecture

У проєкті використовуються модульна(module architecture) та шарована(Layered architecture) архітектури.

* Модульна архітектура — це підхід, за якого складну систему поділяють на невеликі, незалежні та легко замінні модулі. Кожен модуль відповідає за свою окрему частину функціональності, що спрощує розробку, тестування та подальшу підтримку проєкту.

* Шарована архітектура — це спосіб організації застосунку, коли його логіка розбивається на кілька рівнів (шарів). Кожен шар виконує свою чітку роль, а взаємодія між ними відбувається послідовно. Такий підхід забезпечує структурованість, зрозумілість коду та зручність у масштабуванні.
___

The project uses both modular architecture and layered architecture.

* Modular architecture is an approach where a complex system is divided into small, independent, and easily replaceable modules. Each module is responsible for its own part of the functionality, which makes development, testing, and further maintenance simpler.

* Layered architecture is a way of organizing an application by splitting its logic into several levels (layers). Each layer has its own role, and they interact with each other step by step. This approach makes the code more structured, clear, and easier to scale.

___

Backend:
- Node.js.
- Express.
- TypeScript.

___

Database:

- Prisma ORM — це ORM, що допомагає читати, записувати й змінювати дані без складного SQL.
- У проєкті використовується реляційна базаданих sqlite.
___

- Prisma ORM is a tool that helps read, write, and update data without complex SQL.
- The project uses the relational database SQLite.

___

![](images_for_readme/database.svg) [ERD(Entity Relationship Diagram)](https://drive.google.com/file/d/17QWLHRQFrg42Ji-6EGJJ7Jhx4oDP8Kze/view?usp=sharing)


## Стиль написання коду | Code writing style

Команда дотримується таких правил написання коду:

- Файли, що належать до шарованої архітектури, іменуються за принципом назва.шар.ts (наприклад: user.service.ts, order.controller.ts).

- Для відступів використовується один Tab (4 пробіли).

___

The team follows these coding rules:

- Files that belong to the layered architecture are named using the pattern
name.layer.ts
(for example: user.service.ts, order.controller.ts).

- One tab (four spaces) is used for indentation.


## Деталі роботи у команді | Details of teamwork

___

## Задачі та можливості нашого API | Tasks and opportunities of our API

<details>
  <summary><strong>📁 main</strong></summary>
  ___

  - 
  
  ___


</details>

___


<details>
  <summary><strong>📁 user</strong></summary>
  ___

  - 
  
  ___


</details>

___

<details>
  <summary><strong>📁 product</strong></summary>
  ___

  - 
  
  ___


</details>

___

<details>
  <summary><strong>📁 order</strong></summary>
  ___

  - 
  
  ___


</details>

___


<details>
  <summary><strong>📁 contacts</strong></summary>
  ___

  - 
  
  ___


</details>

___

<details>
  <summary><strong>📁 aboutUs</strong></summary>
  ___

  - 
  
  ___


</details>

___




## Як встановити та запустити проєкт? | How to install and run the project?

<details>
  <summary><strong>

  ![](images_for_readme/windows.svg)
  ![](images_for_readme/macos.svg) For any OS</strong></summary>

1. Встановити Node.js | Install Node.js

   - Перейдіть на [офіційний сайт](https://nodejs.org/en/download).
   - Завантажте LTS версію.
   ___
   - Go to the [official website](https://nodejs.org/en/download)
   - Download the LTS version.
   ___
  
2. Склонуйте [репозиторій](https://github.com/JuliaOvcharenko/Drones) з GitHub. 
  | Clone the [repository](https://github.com/JuliaOvcharenko/Drones) from GitHub:

    ```sh
    git clone https://github.com/JuliaOvcharenko/Drones
    ```
1. Перейдіть в папку проєкту | Go to the project folder:.
  
    ```sh
    cd Drones
    ```

2. Встановіть залежності. | Install dependencies.
   
    ```sh
    npm i
    ```
3. Створити .env файл. | Create an .env file:
    ```sh
    cp .env.example .env
    ```
    Впишіть всі ключі, які потрібні.
    ____
    Then fill in all the required keys.

  
4. Виконати міграції. | Run migrations.
   ```sh
    npx migrate
    ```

5. Запуск проєкту | Start the project:
    ```sh
      npm start
    ```
  
6. Вітаємо! Ви локально запустили проєкт!
    ___
    Done!
    You have successfully run the project locally.

</details>

___

## Висновок | Conclusion




