import { client } from "../src/client/client";

const prisma = client;

const PORT = 8000;
const BASE_URL = `http://localhost:${PORT}`;

async function main() {
    console.log('Start seeding...')

    // КАТЕГОРІЇ

    const category1 = await prisma.category.upsert({
        where: { id: 1 },
        update: {},
        create: { name: 'Квадрокоптери', image: `${BASE_URL}/uploads/drone1.svg` },
    })

    const category2 = await prisma.category.upsert({
        where: { id: 2 },
        update: {},
        create: { name: 'FPV Дрони', image: `${BASE_URL}/uploads/drone2.svg` },
    })

    const category3 = await prisma.category.upsert({
        where: { id: 3 },
        update: {},
        create: { name: 'Аксесуари', image: `${BASE_URL}/uploads/drone3.svg` },
    })

    const category4 = await prisma.category.upsert({
        where: { id: 4 },
        update: {},
        create: { name: 'Тепловізори', image: `${BASE_URL}/uploads/cam1.svg` },
    })

    const allCategories = [category1, category2, category3, category4];


    // Товар 1
    const product1 = await prisma.product.create({
        data: {
            name: 'DJI Mini 4 Pro',
            price: 299,
            discount: 0,
            countOfProduct: 50,
            categoryId: category1.id,
            description: '100-мегапіксельна основна камера Hasselblad, великі CMOS-телекамери, нескінченний карданний шарнір з можливістю обертання на 360°, всеспрямоване зондування перешкод 0,1-Lux Nightscape, передача відео O4+.',
            mainImage: { create: { image: `${BASE_URL}/uploads/drone1.svg` } },

            infoBlocks: {
                create: [
                    {
                        blockOrder: 1,
                        title: "ВОЛОДІЙТЕ КОЖНИМ КУТОМ",
                        content: "Представляємо вдосконалену систему з трьома камерами, де кожен об'єктив має свої переваги, створюючи виняткові зображення - від широких ширококутних пейзажів до детальних телефото-знімків крупним планом. Усі три камери оснащені функцією Dual Native ISO Fusion, яка бездоганно поєднує переваги високих і низьких значень ISO для захоплення приголомшливих деталей, яких неможливо досягти за допомогою традиційних рішень. Крім того, ви можете розкрити свій творчий потенціал завдяки можливості створення знімків у форматі RAW з високою роздільною здатністю (до 5 кадрів), а також таким функціям, як «Вільні панорами» та «Фокусування на об'єкті», які доступні на всіх камерах.",
                        align: "center",
                        video: `${BASE_URL}/uploads/video.mp4`,
                    },
                    {
                        blockOrder: 2,
                        title: "Основна камера 4/3 CMOS Hasselblad",
                        content: "У ретельно розробленій 4/3 CMOS-камері Hasselblad використовується абсолютно новий 100-мегапіксельний сенсор і відома технологія Hasselblad Natural Color Solution (HNCS), що забезпечує виняткову точність передачі кольору. Вона створює захоплюючі 100-мегапіксельні зображення з високою деталізацією та чіткістю, пропонуючи безпрецедентну гнучкість у пост-обробці. Конструкція об'єктива була перероблена відповідно до вимог 100-мегапіксельної матриці, що забезпечує неймовірну різкість.",
                        align: "left",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic1.png`, imageOrder: 1 }] }
                    },
                    {
                        blockOrder: 3,
                        title: "51-ХВ ЧАС ПОЛЬОТУ",
                        content: "Аеродинамічний дизайн Mavic 4 Pro, ефективна силова установка та акумуляторна батарея ємністю 95 Вт-год забезпечують тривалість польоту до 51 хвилини, максимальну швидкість до 90 км/год та дальність польоту до 41 км (25,4 милі) [2]. Незалежно від того, чи ви розвідуєте місцевість, відпрацьовуєте маневри, робите затримки в часі або панорамні фото за допомогою телеоб'єктива, достатня тривалість польоту дозволяє вам діяти легко і впевнено.",
                        align: "right",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic2.png`, imageOrder: 1 }] }
                    },
                    {
                        blockOrder: 4,
                        title: "До 512 ГБ вбудованої пам'яті",
                        content: "Стандартна версія DJI Mavic 4 Pro поставляється з 64 ГБ вбудованої пам'яті [14], тому ви можете відразу ж почати зйомку без зовнішньої карти пам'яті. Mavic 4 Pro 512GB в комплектації Creator Combo має 512 ГБ високошвидкісної вбудованої пам'яті [15],",
                        align: "center",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic3.png`, imageOrder: 1 }] }
                    }
                ]
            }
        }
    })

    // Товар 2
    const product2 = await prisma.product.create({
        data: {
            name: 'DJI Air 3',
            price: 1099,
            discount: 100,
            countOfProduct: 20,
            categoryId: category2.id,
            description: 'Революційний дрон серії Air, оснащений першою в світі подвійною системою основних камер для безмежних творчих можливостей.',
            mainImage: { create: { image: `${BASE_URL}/uploads/drone2.svg` } },
            infoBlocks: {
                create: [
                    {
                        blockOrder: 1,
                        title: "Подвійна система камер",
                        content: "DJI Air 3 оснащений першою в серії системою з двома основними камерами: ширококутною та телекамерою з 3-кратним зумом.",
                        align: "center",
                        video: `${BASE_URL}/uploads/video.mp4`,
                    },
                    {
                        blockOrder: 2,
                        title: "46 хвилин у повітрі",
                        content: "Збільшений час польоту до 46 хвилин дозволяє досліджувати більше локацій за один виліт.",
                        align: "left",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic1.png`, imageOrder: 1 }] }
                    }
                ]
            }
        }
    })

    // Товар 3
    const product3 = await prisma.product.create({
        data: {
            name: 'DJI Mavic 3 Pro',
            price: 2199,
            discount: 0,
            countOfProduct: 10,
            categoryId: category1.id,
            description: 'Вершина інженерної думки DJI, Mavic 3 Pro пропонує неперевершену якість зображення завдяки легендарній камері Hasselblad.',
            mainImage: { create: { image: `${BASE_URL}/uploads/drone3.svg` } },
            infoBlocks: {
                create: [
                    {
                        blockOrder: 1,
                        title: "Легенда Hasselblad",
                        content: "Камера Hasselblad L2D-20c записує відео в 5.1K Apple ProRes. Вона забезпечує неймовірний динамічний діапазон.",
                        align: "center",
                        video: `${BASE_URL}/uploads/video.mp4`,
                    },
                    {
                        blockOrder: 2,
                        title: "Потрійна камера",
                        content: "Mavic 3 Pro оснащений трьома сенсорами з різними фокусними відстанями (24мм, 70мм, 166мм).",
                        align: "right",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic1.png`, imageOrder: 1 }] }
                    }
                ]
            }
        }
    })

    //Товар 4 (ТЕПЛОВІЗОР)
    const product4 = await prisma.product.create({
        data: {
            name: 'Pulsar Telos LRF XQ35',
            price: 1450,
            discount: 50,
            countOfProduct: 15,
            categoryId: category4.id,
            description: 'Pulsar Telos LRF XQ35 – тепловізійний монокуляр з лазерним далекоміром. Перед вами наймолодший представник інноваційної лінійки продуктів від світового гіганта індустрії Yukon Advanced Optics Worldwide із заявленою дальністю виявлення в 1300 метрів.',
            mainImage: { create: { image: `${BASE_URL}/uploads/cam1.svg` } },
            infoBlocks: {
                create: [
                    {
                        blockOrder: 1,
                        title: "Майбутнє готове. Модернізована продуктивність",
                        content: "Бездоганна якість термографічної картинки дозволить точно ідентифікувати ціль, а лазерний далекомір допоможе дізнатися точну відстань до неї. Під капотом традиційний набір мультимедійних опцій по запису відео, високошвидкісний модуль Wi-Fi, великий набір колірних палітр, режим PIP і багато іншого. Завдяки оновленій концепції корпусу, управляти приладом однаково зручно як правшам, так і лівшам. Велика батарея контейнерного типу забезпечить до 8,5 годин автономної роботи. Pulsar Telos LRF XQ35 відгуки власників має тільки позитивні. Монокуляр повністю герметичний і готовий до роботи в найскладніших умовах експлуатації. Дану модель можна сміливо використовувати в якості військового тепловізора.",
                        align: "center",
                        video: `${BASE_URL}/uploads/video2.mp4`,
                    },
                    {
                        blockOrder: 2,
                        title: "Оновлений пристрій",
                        content: "Компоненти та програмні рішення у високотехнологічних галузях з кожним роком удосконалюються. Теплобачення не є винятком. Згодом вибір та переваги користувачів змінюються. Крім того, з досвідом у користувачів виробилися власні вимоги до можливостей та роботи пристрою. Тепловізійні монокуляри Telos створені з урахуванням технологій та потреб користувачів. Телос - перша лінійка тепловізійних приладів на ринку з можливістю технічного оновлення за бажанням клієнта. Стати власником Телоса та отримайте можливість гнучко та вигідно покращувати його на довгі роки. Оснастіть його потужною оптикою, сенсором і дисплеєм з більш високою роздільною здатністю, більш ефективною та функціональною електронікою,",
                        align: "right",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic4.png`, imageOrder: 1 }] }
                    },
                    {
                        blockOrder: 3,
                        title: "Удосконалена технологія підвищення якості зображення Pulsar",
                        content: "Pulsar Image Boost забезпечує тепловізору Telos найвищий рівень деталізації, чіткості та контрастності завдяки набору оригінальних алгоритмів обробки зображень. Тепловізійні монокуляри Telos візуалізують складні сцени у широкому діапазоні напівтонів з рівномірним виділенням малоконтрастних об'єктів, таких як небо, трава та водні поверхні. Програмна деталізація та різкість об'єктів на різних відстанях робить теплове зображення високоінформативним. ",
                        align: "left",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic5.png`, imageOrder: 1 }] }
                    },
                    {
                        blockOrder: 4,
                        title: "Регулятор масштабування кільця об'єктива",
                        content: "Ідеально налаштувати зображення в Телос можна однією рукою - кільця фокусування і плавного зуму розташовані на об'єктиві в класичній компонуванні, одне за одним, як в об'єктивах професійних фотоапаратів. Послідовне розташування кілець дозволяє швидко та з мінімальними зусиллями отримати чітке зображення з необхідним збільшенням.",
                        align: "center",
                        images: { create: [{ image: `${BASE_URL}/uploads/pic6.png`, imageOrder: 1 }] }
                    },
                ]
            }
        }
    })

    //ГЕНЕРАЦІЯ

    for (let i = 1; i <= 30; i++) {
        const categoryIndex = i % 4;
        const randomCategory = allCategories[categoryIndex]!;

        let currentImage = `${BASE_URL}/uploads/drone${(i % 3) + 1}.svg`;
        if (randomCategory.name === 'Тепловізори') {
            currentImage = `${BASE_URL}/uploads/cam${(i % 3) + 1}.svg`;
        }

        let name = "";
        let desc = "";

        if (randomCategory.name === 'Квадрокоптери') {
            name = `Autel Evo Lite+ V${i}`;
            desc = "Професійний дрон з підтримкою 6K відео.";
        } else if (randomCategory.name === 'FPV Дрони') {
            name = `iFlight Nazgul Evo #${i}`;
            desc = "Швидкісний FPV дрон для гонок.";
        } else if (randomCategory.name === 'Аксесуари') {
            name = `Battery Pack Pro #${i}`;
            desc = "Посилена батарея для тривалих польотів.";
        } else {
            // Для тепловізорів
            name = `Thermal Hunter X${i}`;
            desc = "Компактний тепловізійний монокуляр для спостереження.";
        }

        await prisma.product.create({
            data: {
                name: name,
                price: 100 + (i * 50),
                discount: i % 5 === 0 ? 50 : 0,
                countOfProduct: 100,
                categoryId: randomCategory.id,
                description: desc,
                mainImage: { create: { image: currentImage } },

                infoBlocks: {
                    create: [
                        {
                            blockOrder: 1,
                            title: "Демонстрація",
                            content: "Огляд можливостей пристрою.",
                            align: "center",
                            // Чергуємо відео для різноманітності
                            video: (i % 2 === 0) ? `${BASE_URL}/uploads/video.mp4` : `${BASE_URL}/uploads/video2.mp4`,
                        },
                        {
                            blockOrder: 2,
                            title: "Деталі",
                            content: "Опис технічних характеристик.",
                            align: "left",
                            images: { create: [{ image: currentImage, imageOrder: 1 }] }
                        }
                    ]
                }
            }
        });
    }

    //ЮЗЕР

    const user = await prisma.user.create({
        data: {
            username: 'Test', lastname: 'User', patronymic: 'A',
            email: 'test@example.com', birthDate: new Date(), phoneNumber: '1234567890', password: 'hash',
            address: { create: { city: 'Dnipro', street: 'Main', house: '1', flat: '1', entrance: '1' } }
        }
    })

    console.log('Generating orders to simulate popularity...')

    // Масив товарів із вагою (чим більше разів товар тут, тим частіше його купуватимуть)
    const productsPool = [
        product1, product1, product1, product1, product1, product1, // DJI Mini 4K 
        product4, product4, product4, product4, // Тепловізор 
        product2, product2, product2, // DJI Air 3 
        product3, // Mavic 3 
    ];

    // Генеруємо 50 замовлень
    for (let i = 0; i < 50; i++) {
        // Вибираємо випадковий товар зі списку "популярності"
        const randomProduct = productsPool[Math.floor(Math.random() * productsPool.length)];

        // Генеруємо випадкову дату за останні 30 днів
        const randomDate = new Date();
        randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30));

        if (!randomProduct) continue;

        await prisma.order.create({
            data: {
                username: `Buyer_${i + 1}`,
                lastname: 'Client',
                patronymic: 'V',
                totalDiscount: 0,
                payment: Math.random() > 0.5 ? 'card' : 'cash', // Випадковий тип оплати
                trackingNumber: 10000 + i,
                totalPrice: randomProduct.price,
                countOfProducts: 1,
                orderDate: randomDate,

                user: { connect: { id: user.id } },

                address: {
                    create: {
                        city: Math.random() > 0.5 ? 'Kyiv' : 'Lviv',
                        street: Math.random() > 0.5 ? 'Main St' : 'Central Ave',
                        house: `${Math.floor(Math.random() * 100)}`,
                        flat: `${Math.floor(Math.random() * 50)}`,
                        entrance: '1'
                    }
                },

                products: {
                    create: {
                        Product: { connect: { id: randomProduct.id } },
                        count_of_product: 1,
                        price: randomProduct.price,
                        discount: 0
                    }
                }
            }
        })
    }

    console.log('Seeding completed! Created 50 orders.')
}

main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async (e) => { console.error(e); await prisma.$disconnect(); throw e })