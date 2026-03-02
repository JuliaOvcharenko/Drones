# Project "Drones - e-shop with drones and thermal imagers - Backend" | Проєкт "Drones - онлайн магазин з дронами та тепловізорами - Backend." 


![Node.js Version](https://img.shields.io/badge/Node.js-20_LTS-808080?style=for-the-badge&logo=node.js&logoColor=white&labelColor=brightgreen)
![TypeScript Version](https://img.shields.io/badge/TypeScript-5.x-808080?style=for-the-badge&logo=typescript&logoColor=white&labelColor=informational)
![Express Version](https://img.shields.io/badge/Express-4.x-808080?style=for-the-badge&logo=express&logoColor=white&labelColor=black)
![Backend](https://img.shields.io/badge/Backend-teal?style=for-the-badge&logo=serverless&logoColor=white)
![API](https://img.shields.io/badge/API-orange?style=for-the-badge&logo=swagger&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-purple?style=for-the-badge&logo=apache&logoColor=white)
![Architecture_BFF](https://img.shields.io/badge/Architecture_BFF-blueviolet?style=for-the-badge&logo=graphql&logoColor=white)
![Architecture_SRV](https://img.shields.io/badge/Architecture_SRV-ff1493?style=for-the-badge&logo=nginx&logoColor=white)
![Architecture_API](https://img.shields.io/badge/Architecture_API-turquoise?style=for-the-badge&logo=openapiinitiative&logoColor=white)


## Навігація | Navigation on README:
- [Структура | Structure of the project](#структура--structure-of-the-project)
- [Архітектура | Architecture](#архітектура--architecture)
- [Стиль написання коду | Code writing style](#стиль-написання-коду--code-writing-style)
- [API Документація | API Documentation](#api-документація--api-documentation)
- [Деталі роботи у команді | Details of teamwork](#деталі-роботи-у-команді--details-of-teamwork)
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

- У проєкті використовуємо prisma studio.

___

The team follows these coding rules:

- Files that belong to the layered architecture are named using the pattern
name.layer.ts
(for example: user.service.ts, order.controller.ts).

- One tab (four spaces) is used for indentation.

- In project we use the prisma studio.


## Деталі роботи у команді | Details of teamwork

Проєкт виконувався у складі команди з двох осіб. Співпраця була побудована на взаємодопомозі та спільному пошуку рішень.

Ключові аспекти роботи:

1. Розподіл задач відбувався природньо, відповідно до поточних потреб проєкту та взаємних домовленостей.

2. Ми спільно обговорювали архітектуру, планували реалізацію та узгоджували підходи до написання коду, щоб уникнути конфліктів та забезпечити цілісність проєкту.

___

Незважаючи на складні умови та обмежений час, обидва учасники активно працювали над кодом, вели проєкт від початку до кінця. Завдяки спільним зусиллям, комунікації та взаємодопомозі вдалося успішно закрити дедлайн та отримати робочий результат.

___

Ключові навички, застосовані в командній роботі:

1. Планування та декомпозиція задач.

2. Контроль версій (Git) та вирішення конфліктів.

3. Взаємодія в парі (pair programming elements).

4. Дотримання дедлайнів.

___

The project was carried out as part of a two-person team. Our collaboration was built on mutual assistance and joint problem-solving.

Key aspects of the work:

1.  Task distribution occurred naturally, according to the project's current needs and our mutual agreements.
2.  We jointly discussed the architecture, planned the implementation, and agreed on coding approaches to avoid conflicts and ensure the project's integrity.

___

Despite challenging conditions and limited time, both team members actively worked on the code, steering the project from start to finish. Thanks to our joint efforts, communication, and mutual support, we successfully met the deadline and achieved a working result.

___

Key skills applied in the teamwork:

1.  Planning and task decomposition.
2.  Version control (Git) and conflict resolution.
3.  Pair interaction (pair programming elements).
4.  Meeting deadlines.

___

## API Документація | API Documentation


<details>
  <summary><strong>📁 user</strong></summary>

  

  Рєєстрація користувача. | User register.

  ```sh
    POST /users/register
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 400  | Bad Request             | некоректний запит                | bad request                 |
| 409  | Conflict                | конфлікт даних                   | conflict                    |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

___

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  ```sh
    {
      "name": "user",
      "email": "email@gmail.com",
      "password": "123",
      "passwordConfirm": "123"
    }
  ```

  </details>
  
____

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    {
      "message": "User Creared. Please, login"
    }
  ```

  </details>

___

  Логін користувача. | User login. | JWT REQUIRED

  ```sh
    POST /users/login
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 400  | Bad Request             | некоректний запит                | bad request                 |
| 404  | Not Found               | користувача не знайдено          | not found                   |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

____

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  ```sh
    {
      "email": "email@gmail.com",
      "password": "123"
    }
  ```

  </details>

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    {
    "token": "login token (example)"
    }
  ```

  </details>

____


  Особистий кабінет. | Personal account.

  ```sh
    GET /users/me
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 401  | Unauthorized            | неавторизований                  | unauthorized                |
| 404  | Not Found               | користувача не знайдено          | not found                   |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

____

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  - Дотримуйтесь інструкцій. | Follow the instructions.

  1. Перейдіть на вкладку Authorization. | Go to the Authorization tab.
  2. У полі Type оберіть Bearer Token. | Type → Bearer Token
  3. У поле Token вставте ваш токен. | In the Token field, paste your JWT token. 
  
  ```sh
    "login token (example)"
  ```

  </details>

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    {
      "id": 1,
      "username": "user",
      "lastname": "",
      "patronymic": "",
      "email": "email@gmail.com",
      "birthDate": "2025-12-22T21:32:43.291Z",
      "phoneNumber": "",
      "addressId": null
    }
  ```

  </details>

  ___


  Редагування профілю користувача. | User profile update.

  ```sh
    PATCH /users/:userId
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 404  | Not Found               | користувача не знайдено          | not found                   |
| 422  | Unprocessable Content   | сутність не підлягає обробці     | unprocessable сontent       |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

____

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  ```sh
    {
      "username": "user2",
      "patronymic": "UserIser",
      "email": "email2@gmail.com",
      "phoneNumber": "+000 000 000",
    }
  ```

  </details>

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    {
      "id": 12,
      "username": "user2",
      "lastname": "",
      "patronymic": "UserIser",
      "email": "email5hhvjhvy67@gmail.com",
      "birthDate": "2025-12-23T19:27:32.368Z",
      "phoneNumber": "+000 000 000",
      "addressId": null
    }
  ```

  </details>

  ___

   Створення власної адреси. | Creating your own address.

  ```sh
    POST /users/address
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 201  | Created                 | створено                         | created                     |
| 422  | Unprocessable Content   | сутність не підлягає обробці     | unprocessable сontent       |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

____

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  ```sh
    {
      "city": "Dnipro",
      "entrance": "second entrance",
      "flat": "12777",
      "house": "435",
      "street": "Pr.Catovsky 4"
    }
  ```

  </details>

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    {
      "id": 1,
      "city": "Dnipro",
      "street": "Pr.Catovsky 4",
      "house": "435",
      "flat": "12777",
      "entrance": "second entrance"
    }
  ```

  </details>

 ___


  Редагування адреси. | Address update.

  ```sh
    PATCH /users/address/:addressId
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 400  | Bad Request             | некоректний запит                | bad request                 |
| 404  | Not Found               | адреси не знайдено               | not found                   |
| 422  | Unprocessable Content   | сутність не підлягає обробці     | unprocessable сontent       |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

____

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  ```sh
    {
      "city": "Dnipro",
      "entrance": "1",
      "flat": "6",
      "house": "5",
      "street": "Pr.Catovsky"
    }
  ```

  </details>

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    "Address updated successfully"
  ```

  </details>

   ___


  Видалення адреси. | Address delete.

  ```sh
    DELETE /users/address/:addressId
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 400  | Bad Request             | некоректний запит                | bad request                 |
| 404  | Not Found               | адреси не знайдено               | not found                   |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    "Address deleted successfully"
  ```

  </details>

___

  Отримати усі адреси. | Get all addresses.

  ```sh
    GET /users/addresses
  ```


| Code| Error                     | Українською                     | English                    |
|-----|---------------------------|---------------------------------|----------------------------|
| 200 | OK                        | адреси отримано                 | items received             |
| 500 | Internal Server Error     | помилка сервера                 | server error               |

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    [
      {
          "id": 3,
          "city": "Dnipro",
          "street": "Pr.Catovsky",
          "house": "1",
          "flat": "12",
          "entrance": "7"
      },
      {
          "id": 17,
          "city": "Dnipro",
          "street": "Pr.Catovsky 4",
          "house": "435",
          "flat": "12777",
          "entrance": "second entrance"
      },
      {
          "id": 18,
          "city": "Dnipro",
          "street": "Pr.Catovsky 4",
          "house": "435",
          "flat": "12777",
          "entrance": "second entrance"
      }
    ]
  ```

  </details>

  ____

  Редагування паролю - відправка коду на email. | Password editing - sending code to email.

  ```sh
    POST /users/password/recover
  ```

| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 400  | Bad Request             | некоректний запит                | bad request                 |

____

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  ```sh
    {
      "email": "email@gmail.com",
    }
  ```

  </details>

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    "Email was sended"
  ```

  </details>

___

Редагування паролю - змінення за допомогою коду. | Edit password - change using code.

  ```sh
    POST /users/password/reset
  ```

| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 400  | Bad Request             | некоректний запит                | bad request                 |

____

  <details>
    <summary><strong>Приклад даних для надсилання | Example of data to send</strong></summary>

  ```sh
    {
      "email": "email@gmail.com",
      "code": "1213",
      "newPassword": "12345678"
    }
  ```

  </details>

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    "Password successfully changed"
  ```

  </details>


</details>

___

<details>
  <summary><strong>📁 product</strong></summary>

  Отримати усі продукти. | Get all products.

  ```sh
    GET /products
  ```


| Code| Error                     | Українською                     | English                    |
|-----|---------------------------|---------------------------------|----------------------------|
| 200 | OK                        | товари отримано                 | items received             |
| 500 | Internal Server Error     | помилка сервера                 | server error               |
___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    [
      {
          "id": 1,
          "name": "Drone1",
          "price": 1000,
          "discount": 10,
          "countOfProduct": 2,
          "categoryId": 1,
          "infoBlocks": [
              {
                  "id": 1,
                  "blockOrder": 1,
                  "align": "center",
                  "title": "drone 1",
                  "content": "drone max super",
                  "productId": 1
              }
          ]
      },
      {
          "id": 2,
          "name": "thermal imager 1",
          "price": 100000,
          "discount": 100,
          "countOfProduct": 6,
          "categoryId": 2,
          "infoBlocks": [
              {
                  "id": 2,
                  "blockOrder": 3,
                  "align": "start",
                  "title": "imager",
                  "content": "imager thermal",
                  "productId": 2
              }
          ]
      }
  ]
  ```

  </details>

___

Query Params:
- categoryName

  ```sh
    GET /products?categoryName=Drones
  ```

  
  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

    ```sh
      [
        {
            "id": 1,
            "name": "Drone1",
            "price": 1000,
            "discount": 10,
            "countOfProduct": 2,
            "categoryId": 1,
            "infoBlocks": [
                {
                    "id": 1,
                    "blockOrder": 1,
                    "align": "center",
                    "title": "drone 1",
                    "content": "drone max super",
                    "productId": 1
                }
            ]
        },
        {
            "id": 4,
            "name": "Drone2",
            "price": 29543330,
            "discount": 10,
            "countOfProduct": 1,
            "categoryId": 1,
            "infoBlocks": [
                {
                    "id": 1,
                    "blockOrder": 1,
                    "align": "center",
                    "title": "drone 1",
                    "content": "drone max super",
                    "productId": 4
                }
            ]
        }
    ]
    ```

  </details>



____

  Отримати конкретний продукт. | Get product by id.

  ```sh
    GET /products/:id
  ```

| Code | Error                 | Українською                                | English                                  |
|------| ----------------------|--------------------------------------------| -----------------------------------------|
| 200  | OK                    | товар знайдено і отримано                  | item found and received                  |
| 400  | Bad Request           | неправильний формат id                     | wrong ID format                          |
| 404  | Not Found             | товар з таким id не знайдено               | item with this ID not found              |

<details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    [
      {
      "id": 1,
      "name": "Drone1",
      "price": 1000,
      "discount": 10,
      "countOfProduct": 2,
      "categoryId": 1,
      "infoBlocks": [
        {
          "id": 1,
          "blockOrder": 1,
          "align": "center",
          "title": "drone 1",
          "content": "drone max super",
          "productId": 1
        }
      ],
      "mainImage": {
        "id": 1,
        "image": "image 1",
        "productId": 1
        }
      }
    ]
  ```

  </details>

____

  Отримати пропозиційні продукти. Працює тільки з query-params | Get suggestion products. Work only with query-params

  ```sh
    GET /products/suggestions/isNew=true
  ```

  ```sh
    GET /products/suggestions/popularity=true
  ```

  ```sh
    GET /products/suggestions/sameAs=product_id
    GET /products/suggestions?sameAs=product_id&limit=limit_number
  ```

| Code | Error                 | Українською                                | English                                  |
|------| ----------------------|--------------------------------------------| -----------------------------------------|
| 200  | OK                    | товари знайдено і отримано                 | items found and received                 |
| 400  | Bad Request           | неправильний формат                        | wrong format                             |

<details>
    <summary><strong>Відповідь | Responce</strong></summary>

  <details>
    <summary><strong>Відповідь - isNew | Responce - isNew</strong></summary>

  ```sh
    [
        {
            "id": 2,
            "name": "Apple",
            "price": 10,
            "discount": 0,
            "countOfProduct": 200,
            "categoryId": 2,
            "createdAt": "2026-11-30T16:33:08.000Z",
            "mainImage": null
        },
        {
            "id": 5,
            "name": "Orange",
            "price": 10,
            "discount": 0,
            "countOfProduct": 5,
            "categoryId": 2,
            "createdAt": "2026-01-19T14:16:38.529Z",
            "mainImage": {
                "id": 1,
                "image": "image 1",
                "productId": 5
            }
        },
        {
            "id": 3,
            "name": "thermal imager 1",
            "price": 100000,
            "discount": 100,
            "countOfProduct": 6,
            "categoryId": 3,
            "createdAt": "2025-04-18T20:41:19.000Z",
            "mainImage": {
                "id": 2,
                "image": "image 2",
                "productId": 3
            }
        }
      ]
  ```

  
  </details>

  <details>
    <summary><strong>Відповідь - popularity | Responce - popularity</strong></summary>

  ```sh
    [
      {
          "id": 4,
          "name": "Drone2",
          "price": 29543330,
          "discount": 10,
          "countOfProduct": 1,
          "categoryId": 1,
          "createdAt": "2024-09-01T06:50:00.000Z",
          "category": {
              "id": 1,
              "name": "Drones",
              "image": "DronesImage",
              "orderId": 4
          },
          "mainImage": null
      },
      {
          "id": 1,
          "name": "Drone1",
          "price": 1000,
          "discount": 10,
          "countOfProduct": 2,
          "categoryId": 1,
          "createdAt": "2023-01-15T10:24:00.000Z",
          "category": {
              "id": 1,
              "name": "Drones",
              "image": "DronesImage",
              "orderId": 4
          },
          "mainImage": {
              "id": 1,
              "image": "image 1",
              "productId": 1
          }
      }
    ]
  ```
  </details>

  <details>
    <summary><strong>Відповідь - sameAs | Responce - sameAs</strong></summary>

  ```sh
    [
    {
        "id": 1,
        "name": "DJI Mini 4K",
        "price": 299,
        "discount": 0,
        "description": "Compact drone for beginners",
        "countOfProduct": 50,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.009Z",
        "mainImage": {
            "id": 1,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 1
        },
        "infoBlocks": []
    },
    {
        "id": 2,
        "name": "DJI Air 3",
        "price": 1099,
        "discount": 100,
        "description": "Dual camera power",
        "countOfProduct": 20,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.013Z",
        "mainImage": {
            "id": 2,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 2
        },
        "infoBlocks": []
    },
    {
        "id": 3,
        "name": "DJI Mavic 3",
        "price": 2199,
        "discount": 0,
        "description": "Flagship camera drone",
        "countOfProduct": 10,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.017Z",
        "mainImage": {
            "id": 3,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 3
        },
        "infoBlocks": []
    },
    {
        "id": 1,
        "name": "DJI Mini 4K",
        "price": 299,
        "discount": 0,
        "description": "Compact drone for beginners",
        "countOfProduct": 50,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.009Z",
        "mainImage": {
            "id": 1,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 1
        },
        "infoBlocks": []
    },
    {
        "id": 3,
        "name": "DJI Mavic 3",
        "price": 2199,
        "discount": 0,
        "description": "Flagship camera drone",
        "countOfProduct": 10,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.017Z",
        "mainImage": {
            "id": 3,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 3
        },
        "infoBlocks": []
    },
    {
        "id": 6,
        "name": "Test Drone Model #3",
        "price": 130,
        "discount": 0,
        "description": "This is a generated test drone number 3 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.028Z",
        "mainImage": {
            "id": 6,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 6
        },
        "infoBlocks": []
    },
    {
        "id": 9,
        "name": "Test Drone Model #6",
        "price": 160,
        "discount": 0,
        "description": "This is a generated test drone number 6 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.039Z",
        "mainImage": {
            "id": 9,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 9
        },
        "infoBlocks": []
    },
    {
        "id": 12,
        "name": "Test Drone Model #9",
        "price": 190,
        "discount": 0,
        "description": "This is a generated test drone number 9 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.048Z",
        "mainImage": {
            "id": 12,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 12
        },
        "infoBlocks": []
    },
    {
        "id": 15,
        "name": "Test Drone Model #12",
        "price": 220,
        "discount": 0,
        "description": "This is a generated test drone number 12 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.056Z",
        "mainImage": {
            "id": 15,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 15
        },
        "infoBlocks": []
    },
    {
        "id": 18,
        "name": "Test Drone Model #15",
        "price": 250,
        "discount": 50,
        "description": "This is a generated test drone number 15 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.065Z",
        "mainImage": {
            "id": 18,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 18
        },
        "infoBlocks": []
    },
    {
        "id": 21,
        "name": "Test Drone Model #18",
        "price": 280,
        "discount": 0,
        "description": "This is a generated test drone number 18 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.074Z",
        "mainImage": {
            "id": 21,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 21
        },
        "infoBlocks": []
    },
    {
        "id": 24,
        "name": "Test Drone Model #21",
        "price": 310,
        "discount": 0,
        "description": "This is a generated test drone number 21 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.082Z",
        "mainImage": {
            "id": 24,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 24
        },
        "infoBlocks": []
    },
    {
        "id": 27,
        "name": "Test Drone Model #24",
        "price": 340,
        "discount": 0,
        "description": "This is a generated test drone number 24 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.088Z",
        "mainImage": {
            "id": 27,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 27
        },
        "infoBlocks": []
    },
    {
        "id": 30,
        "name": "Test Drone Model #27",
        "price": 370,
        "discount": 0,
        "description": "This is a generated test drone number 27 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.097Z",
        "mainImage": {
            "id": 30,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 30
        },
        "infoBlocks": []
    },
    {
        "id": 33,
        "name": "Test Drone Model #30",
        "price": 400,
        "discount": 50,
        "description": "This is a generated test drone number 30 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 1,
        "createdAt": "2026-02-04T13:07:23.107Z",
        "mainImage": {
            "id": 33,
            "image": "http://localhost:8000/uploads/drone1.png",
            "productId": 33
        },
        "infoBlocks": []
    },
    {
        "id": 13,
        "name": "Test Drone Model #10",
        "price": 200,
        "discount": 50,
        "description": "This is a generated test drone number 10 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.050Z",
        "mainImage": {
            "id": 13,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 13
        },
        "infoBlocks": []
    },
    {
        "id": 14,
        "name": "Test Drone Model #11",
        "price": 210,
        "discount": 0,
        "description": "This is a generated test drone number 11 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 3,
        "createdAt": "2026-02-04T13:07:23.053Z",
        "mainImage": {
            "id": 14,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 14
        },
        "infoBlocks": []
    },
    {
        "id": 16,
        "name": "Test Drone Model #13",
        "price": 230,
        "discount": 0,
        "description": "This is a generated test drone number 13 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.059Z",
        "mainImage": {
            "id": 16,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 16
        },
        "infoBlocks": []
    },
    {
        "id": 17,
        "name": "Test Drone Model #14",
        "price": 240,
        "discount": 0,
        "description": "This is a generated test drone number 14 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 3,
        "createdAt": "2026-02-04T13:07:23.062Z",
        "mainImage": {
            "id": 17,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 17
        },
        "infoBlocks": []
    },
    {
        "id": 19,
        "name": "Test Drone Model #16",
        "price": 260,
        "discount": 0,
        "description": "This is a generated test drone number 16 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.068Z",
        "mainImage": {
            "id": 19,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 19
        },
        "infoBlocks": []
    },
    {
        "id": 20,
        "name": "Test Drone Model #17",
        "price": 270,
        "discount": 0,
        "description": "This is a generated test drone number 17 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 3,
        "createdAt": "2026-02-04T13:07:23.071Z",
        "mainImage": {
            "id": 20,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 20
        },
        "infoBlocks": []
    },
    {
        "id": 22,
        "name": "Test Drone Model #19",
        "price": 290,
        "discount": 0,
        "description": "This is a generated test drone number 19 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.077Z",
        "mainImage": {
            "id": 22,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 22
        },
        "infoBlocks": []
    },
    {
        "id": 23,
        "name": "Test Drone Model #20",
        "price": 300,
        "discount": 50,
        "description": "This is a generated test drone number 20 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 3,
        "createdAt": "2026-02-04T13:07:23.079Z",
        "mainImage": {
            "id": 23,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 23
        },
        "infoBlocks": []
    },
    {
        "id": 25,
        "name": "Test Drone Model #22",
        "price": 320,
        "discount": 0,
        "description": "This is a generated test drone number 22 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.084Z",
        "mainImage": {
            "id": 25,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 25
        },
        "infoBlocks": []
    },
    {
        "id": 26,
        "name": "Test Drone Model #23",
        "price": 330,
        "discount": 0,
        "description": "This is a generated test drone number 23 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 3,
        "createdAt": "2026-02-04T13:07:23.086Z",
        "mainImage": {
            "id": 26,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 26
        },
        "infoBlocks": []
    },
    {
        "id": 28,
        "name": "Test Drone Model #25",
        "price": 350,
        "discount": 50,
        "description": "This is a generated test drone number 25 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.091Z",
        "mainImage": {
            "id": 28,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 28
        },
        "infoBlocks": []
    },
    {
        "id": 29,
        "name": "Test Drone Model #26",
        "price": 360,
        "discount": 0,
        "description": "This is a generated test drone number 26 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 3,
        "createdAt": "2026-02-04T13:07:23.094Z",
        "mainImage": {
            "id": 29,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 29
        },
        "infoBlocks": []
    },
    {
        "id": 31,
        "name": "Test Drone Model #28",
        "price": 380,
        "discount": 0,
        "description": "This is a generated test drone number 28 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 2,
        "createdAt": "2026-02-04T13:07:23.100Z",
        "mainImage": {
            "id": 31,
            "image": "http://localhost:8000/uploads/drone2.png",
            "productId": 31
        },
        "infoBlocks": []
    },
    {
        "id": 32,
        "name": "Test Drone Model #29",
        "price": 390,
        "discount": 0,
        "description": "This is a generated test drone number 29 for pagination testing.",
        "countOfProduct": 100,
        "categoryId": 3,
        "createdAt": "2026-02-04T13:07:23.104Z",
        "mainImage": {
            "id": 32,
            "image": "http://localhost:8000/uploads/drone3.png",
            "productId": 32
        },
        "infoBlocks": []
    }
]
  ```
  </details>



  
</details>
</details>

____

<details>
  <summary><strong>📁 category</strong></summary>

  ___

  
  Отримати усі категорії. | Get all categories.

  ```sh
    GET /categories
  ```


| Code| Error                     | Українською                     | English                    |
|-----|---------------------------|---------------------------------|----------------------------|
| 200 | OK                        | категорії отримано              | items received             |
| 500 | Internal Server Error     | помилка сервера                 | server error               |

  
  ___

<details>
    <summary><strong>Відповідь | Responce</strong></summary>

      ```sh
        [
          {
          "id": 1,
          "name": "Drone1",
          "price": 1000,
          "discount": 10,
          "countOfProduct": 2,
          "categoryId": 1,
          "infoBlocks": [
              {
                  "id": 1,
                  "blockOrder": 1,
                  "align": "center",
                  "title": "drone 1",
                  "content": "drone max super",
                  "productId": 1
              }
          ],
          "mainImage": {
              "id": 1,
              "image": "image 1",
              "productId": 1
          }
        }
      ]
      ```

  </details>

      [
          {
              "id": 1,
              "name": "Drones",
              "image": "DronesImage"
          },
          {
              "id": 2,
              "name": "thermalImager",
              "image": "thermalImagerImage"
          }
      ]

</details>

___

<details>
  <summary><strong>📁 order</strong></summary>

___

  Отримати усі замовлення користувача. | Get all user orders.

  ```sh
    GET /orders/
  ```


| Code| Error                     | Українською                     | English                    |
|-----|---------------------------|---------------------------------|----------------------------|
| 200 | OK                        | замовлення отримано             | items received             |
| 500 | Internal Server Error     | помилка сервера                 | server error               |

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    [
      {
          "id": 1,
          "username": "user1",
          "lastname": "lasname",
          "patronymic": "patro",
          "totalDiscount": 2,
          "payment": "own",
          "trackingNumber": 22,
          "totalPrice": 11,
          "countOfProducts": 8,
          "orderDate": "1970-01-01T00:00:00.000Z",
          "user": {
              "id": 11,
              "username": "user",
              "email": "email4@gmail.com",
              "lastname": "",
              "patronymic": "",
              "birthDate": "2025-12-22T21:32:43.291Z",
              "phoneNumber": ""
          },
          "products": [
              {
                  "count_of_product": 78,
                  "price": 90,
                  "discount": 20,
                  "Product": {
                      "category": {
                          "id": 3,
                          "name": "thermalImager",
                          "image": "",
                          "orderId": 3
                      }
                  }
              }
          ]
      },
      {
          "id": 2,
          "username": "user2",
          "lastname": "jj",
          "patronymic": "hhhhhhh",
          "totalDiscount": 77777,
          "payment": "hhhhh",
          "trackingNumber": 666,
          "totalPrice": 777,
          "countOfProducts": 7,
          "orderDate": "1970-01-01T00:00:00.000Z",
          "user": {
              "id": 12,
              "username": "user6",
              "email": "email5hhvjhvy67@gmail.com",
              "lastname": "",
              "patronymic": "UserIser",
              "birthDate": "2025-12-23T19:27:32.368Z",
              "phoneNumber": "+000 000 000"
          },
          "products": []
      },
      {
          "id": 3,
          "username": "Анастасія",
          "lastname": "Павлівна",
          "patronymic": "Оленівна",
          "totalDiscount": 70,
          "payment": "Накладений Платіж",
          "trackingNumber": 9270351,
          "totalPrice": 103853,
          "countOfProducts": 3,
          "orderDate": "1970-01-01T00:00:00.000Z",
          "user": {
              "id": 15,
              "username": "password test 3",
              "email": "julia.ovcharenko2000@gmail.com",
              "lastname": "",
              "patronymic": "",
              "birthDate": "2025-12-25T20:55:33.588Z",
              "phoneNumber": ""
          },
          "products": [
              {
                  "count_of_product": 2,
                  "price": 1000,
                  "discount": 290,
                  "Product": {
                      "category": {
                          "id": 1,
                          "name": "Drones",
                          "image": "DronesImage",
                          "orderId": 1
                      }
                  }
              }
          ]
      }
  ]
  ```
  </details>

  ___

  Скасувати замовлення. | Cancel order.

  ```sh
    DELETE /orders/:orderId
  ```
| Code | Status                  | Українською                      | English                     |
|------|-------------------------|----------------------------------|-----------------------------|
| 200  | OK                      | успішно                          | success                     |
| 400  | Bad Request             | некоректний запит                | bad request                 |
| 404  | Not Found               | замовлення не знайдено               | not found                   |
| 500  | Internal Server Error   | внутрішня помилка сервера        | internal server error       |

___

  <details>
    <summary><strong>Відповідь | Responce</strong></summary>

  ```sh
    "Order deleted successfully"
  ```

  </details>

  
  ___



</details>




## Як встановити та запустити проєкт? | How to install and run the project?


> [!NOTE]
> У проєкті для надсилання email-листів використовується nodemailer.  
> Google потребує App Password для роботи з листами.  
> Будь ласка, перейдіть у `.env.example` на кроці 3 та виконайте інструкції, прописані там.
>
> The project uses nodemailer to send emails.  
> Google requires an App Password to work with emails.  
> Please open `.env.example` in step 3 and follow the instructions provided there.


<details>
  <summary><strong>

  ![](images_for_readme/windows.svg)
  ![](images_for_readme/macos.svg) For any OS</strong></summary>
  

1. Встановити Node.js | Install Node.js

   - Перейдіть на [офіційний сайт](https://nodejs.org/en/download).
   - Завантажте LTS версію.
   ___
   - Go to the official website
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
    npx prisma migrate dev
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


Цей проєкт став першим досвідом роботи з **Node.js, Express, TypeScript, Prisma та Postman** для обох учасників команди. Попри те, що технології були новими, а час — обмеженим, нам вдалося не лише розібратися в них, а й побудувати працюючий бекенд із чіткою архітектурою, документованим API та зв'язками з базою даних.

Ключовим фактором успіху стала **взаємодія в команді**. Ми не ділили проєкт на дві ізольовані частини — навпаки, постійно обговорювали рішення, допомагали одне одному розбиратися з помилками, перевіряли код одне одного та разом шукали оптимальні підходи. Це дозволило уникнути типових для новачків глухих кутів і значно прискорити розробку.

Особливу увагу ми приділили **структурі коду** — поєднали модульний підхід із шаруватою архітектурою, щоб проєкт залишався зрозумілим, гнучким і зручним для масштабування в майбутньому.

Під час роботи ми зіткнулися з типовими викликами: конфліктами в Git, неочікуваною поведінкою бібліотек, складністю налаштування Prisma та необхідністю тримати в голові логіку зв'язків між таблицями. Але кожна проблема вирішувалася через **комунікацію, ґугл, експерименти та взаємну підтримку**.

Ми пишаємося тим, що:
- Проєкт повністю завершено та здано вчасно.
- API задокументовано, протестовано в Postman і готове до використання.
- Код написано за єдиним стилем, із коментарями та зрозумілою структурою.
- Ми отримали реальний досвід командної розробки, який неможливо замінити жодними туторіалами.

Ми довели, що навіть без досвіду, але з бажанням, підтримкою та відповідальністю можна створити якісний продукт.

____


This project was the first experience working with Node.js, Express, TypeScript, Prisma, and Postman for both team members. Even though the technologies were new and time was limited, we managed not only to understand them but also to build a working backend with a clear architecture, documented API, and database relationships.

The key success factor was team collaboration. We didn't split the project into two isolated parts — instead, we constantly discussed solutions, helped each other debug issues, reviewed each other's code, and looked for the best approaches together. This helped us avoid common beginner pitfalls and significantly speed up development.

We paid special attention to code structure — combining modular and layered architecture to keep the project clear, flexible, and easy to scale in the future.

During development, we faced typical challenges: Git conflicts, unexpected library behavior, difficulties setting up Prisma, and the need to keep track of complex table relationships. But every problem was solved through communication, Google searches, experiments, and mutual support.

We are proud that:

- The project was fully completed and submitted on time.

- The API is documented, tested in Postman, and ready to use.

- The code follows a consistent style, with comments and a clear structure.

- We gained real teamwork experience that no tutorial can replace.

We proved that even without prior experience, with motivation, support, and responsibility, you can create a quality product.

