import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Hieu',
            email: 'hieu@example.com',
            password: bcrypt.hashSync('123'),
            isAdmin: true,

        },
        {
            name: 'Hieu',
            email: 'hieu22@example.com',
            password: bcrypt.hashSync('123'),
            isAdmin: true,

        },
        {
            name: 'Quang',
            email: 'quang@example.com',
            password: bcrypt.hashSync('123'),
            isAdmin: false,
        }
    ],
    products: [
        {
            // _id: '1',
            name: 'Ao So Mi1',
            slug: 'Adidas-somi1',
            image: '/images/p1.jpg',
            brand: 'Adidas',
            category: 'Ao',
            description: "Test ao1",
            price: 100,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10
        },
        {
            // _id: '2',
            name: 'Ao So Mi2',
            slug: 'Adidas-somi2',
            image: '/images/ao2.png',
            brand: 'Adidas',
            category: 'Ao',
            description: "Test ao2",
            price: 100,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10
        },
        {
            // _id: '3',
            name: 'Ao So Mi3',
            slug: 'Adidas-somi3',
            image: '/images/ao3.png',
            brand: 'Adidas',
            category: 'Ao',
            description: "Test ao3",
            price: 100,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10

        },
        {
            // _id: '3',
            name: 'Ao So Mi4',
            slug: 'Adidas-somi4',
            image: '/images/ao4.png',
            brand: 'Adidas',
            category: 'Ao',
            description: "Test ao4",
            price: 100,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10
        }
    ]
}
export default data;