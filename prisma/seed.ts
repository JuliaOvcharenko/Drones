import { client } from "../src/client/client";

const prisma = client;

const PORT = 8000; 
const BASE_URL = `http://localhost:${PORT}`;

async function main() {
    console.log('Start seeding...')

    const category1 = await prisma.category.upsert({
        where: { id: 1 },
        update: {},
        create: { 
            name: 'Квадрокоптери', 
            image: `${BASE_URL}/uploads/drone1.png` 
        },
    })

    const category2 = await prisma.category.upsert({
        where: { id: 2 },
        update: {},
        create: { 
            name: 'FPV Дрони', 
            image: `${BASE_URL}/uploads/drone2.png` 
        },
    })

    const category3 = await prisma.category.upsert({
        where: { id: 3 },
        update: {},
        create: { 
            name: 'Аксесуари', 
            image: `${BASE_URL}/uploads/drone3.png` 
        },
    })

    const allCategories = [category1, category2, category3]; 

    const product1 = await prisma.product.create({
        data: {
            name: 'DJI Mini 4K',
            price: 299,
            discount: 0,
            countOfProduct: 50,
            categoryId: category1.id, 
            description: 'Compact drone for beginners',
            mainImage: {
                create: { image: `${BASE_URL}/uploads/drone1.png` }
            }
        }
    })

    const product2 = await prisma.product.create({
        data: {
            name: 'DJI Air 3',
            price: 1099,
            discount: 100,
            countOfProduct: 20,
            categoryId: category2.id,
            description: 'Dual camera power',
            mainImage: {
                create: { image: `${BASE_URL}/uploads/drone2.png` }
            }
        }
    })

    const product3 = await prisma.product.create({
        data: {
            name: 'DJI Mavic 3',
            price: 2199,
            discount: 0,
            countOfProduct: 10,
            categoryId: category1.id, 
            description: 'Flagship camera drone',
            mainImage: {
                create: { image: `${BASE_URL}/uploads/drone3.png` }
            }
        }
    })

    
    for (let i = 1; i <= 30; i++) {
        const imageIndex = (i % 3) + 1; 
        
        const randomCategory = allCategories[i % 3]!;

        await prisma.product.create({
            data: {
                name: `Test Drone Model #${i}`, 
                price: 100 + (i * 10), 
                discount: i % 5 === 0 ? 50 : 0,
                countOfProduct: 100,
                categoryId: randomCategory.id, 
                description: `This is a generated test drone number ${i} for pagination testing.`,
                
                mainImage: {
                    create: {
                        image: `${BASE_URL}/uploads/drone${imageIndex}.png`
                    }
                }
            }
        });
    }


    const user = await prisma.user.create({
        data: {
            username: 'Test', lastname: 'User', patronymic: 'A',
            email: 'test@example.com', birthDate: new Date(), phoneNumber: '1234567890', password: 'hash',
            address: {
                create: { city: 'Dnipro', street: 'Main', house: '1', flat: '1', entrance: '1' }
            }
        }
    })

    for (let i = 0; i < 3; i++) {
        await prisma.order.create({
            data: {
                username: 'Buyer', lastname: 'Test', patronymic: 'T',
                totalDiscount: 0, payment: 'card', trackingNumber: 123 + i,
                totalPrice: product2.price, countOfProducts: 1, orderDate: new Date(),
                user: { connect: { id: user.id } },
                address: { create: { city: 'Kyiv', street: 'Kreschatyk', house: '1', flat: '2', entrance: '1' } },
                products: {
                    create: {
                        Product: { connect: { id: product2.id } },
                        count_of_product: 1,
                        price: product2.price,
                        discount: 0
                    }
                }
            }
        })
    }

    await prisma.order.create({
        data: {
            username: 'Buyer2', lastname: 'Test', patronymic: 'T',
            totalDiscount: 0, payment: 'cash', trackingNumber: 999,
            totalPrice: product1.price, countOfProducts: 1, orderDate: new Date(),
            user: { connect: { id: user.id } },
            address: { create: { city: 'Lviv', street: 'Rynok', house: '1', flat: '1', entrance: '1' } },
            products: {
                create: {
                    Product: { connect: { id: product1.id } },
                    count_of_product: 1,
                    price: product1.price,
                    discount: 0
                }
            }
        }
    })

    console.log('Seeding completed! Database now has 3 categories and 33+ products.')
}

main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async (e) => { console.error(e); await prisma.$disconnect(); throw e })