// simple API route that returns an array of products
export async function GET() {
    const products = [
        {
            id: 1,
            title: 'Classic Watch',
            description: 'Elegant analog watch for everyday wear.',
            price: 2499,
            rating: 4.5,
            inStock: true,
            sale: true,
            image: 'images/watch.png'
        },
        {
            id: 2,
            title: 'Leather Bag',
            description: 'Premium leather bag with roomy interior.',
            price: 4999,
            rating: 4.7,
            inStock: false,
            sale: false,
            image: 'images/watch.png'
        },
        {
            id: 3,
            title: 'Sport Shoes',
            description: 'Comfortable running shoes.',
            price: 3299,
            rating: 4.3,
            inStock: true,
            sale: false,
            image: 'images/watch.png'
        },
        {
            id: 4,
            title: 'Sport Shoes',
            description: 'Comfortable running shoes.',
            price: 3299,
            rating: 4.3,
            inStock: true,
            sale: false,
            image: 'images/watch.png'
        },
        {
            id: 5,
            title: 'Sport Shoes',
            description: 'Comfortable running shoes.',
            price: 3299,
            rating: 4.3,
            inStock: true,
            sale: false,
            image: 'images/watch.png'
        },
        {
            id: 6,
            title: 'Sport Shoes',
            description: 'Comfortable running shoes.',
            price: 3299,
            rating: 4.3,
            inStock: true,
            sale: false,
            image: 'images/watch.png'
        },
        {
            id: 7,
            title: 'Sport Shoes',
            description: 'Comfortable running shoes.',
            price: 3299,
            rating: 4.3,
            inStock: true,
            sale: false,
            image: 'images/watch.png'
        }
    ];


    return new Response(JSON.stringify(products), {
        headers: { 'Content-Type': 'application/json' }
    });
}