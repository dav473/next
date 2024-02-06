import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Test!!</h1>
      <div>
        <a href="/users"> to users by a</a>
      </div>
      <div>
        <Link href="/users">to users by Link</Link>
      </div>

      <div>
        <ProductCard />
      </div>
    </main>
  );
}
