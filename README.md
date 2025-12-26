# Project "Drones - e-shop with drones and thermal imagers" | Проєкт "Drones - онлайн магазин з дронами та тепловізорами." 

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

<details>
  <summary><strong>

  ![](images_for_readme/windows.svg)
  ![](images_for_readme/macos.svg) For any OS</strong></summary>


> [!NOTE]
> У проєкті для надсилання email-листів використовується nodemailer. Google потребує app password для роботи з листами. Будь ласка, на пункті 3 перейдіть у .env.example і виконайте дії, прописані там.
> 
> The project uses nodemailer to send emails. Google requires an app password to work with emails. Please go to .env.example in step 3 and follow the steps there.
> 

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




