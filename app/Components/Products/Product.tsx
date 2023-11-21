"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface ProductProps {
  data: any;
}
export const Product: React.FC<ProductProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="group relative"
      onClick={() => router.push(`/product/${data.id}`)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40 object-cover">
        <Image
          src={data.image}
          alt={data.name}
          width={150}
          height={150}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">
          <Link href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {data.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-through">${data.price}</p>
        <p className="text-sm font-bold text-gray-900">${data.price}</p>
      </div>
    </div>
  );
};
