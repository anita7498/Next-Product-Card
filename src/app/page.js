import DarkModeProvider from '@/components/DarkModeProvider';
import ProductCard from '../components/ProductCard';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  const products = await res.json();

  return (
    <section className="grid place-items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((elem) => (
          <ProductCard key={elem.id} product={elem} />
        ))}
      </div>
    </section>
  );
}