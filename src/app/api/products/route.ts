import { NextResponse } from "next/server";


export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price?: number;
  rating?: Rating;
}

export interface APIProduct {
  id: number;
  title: string;
  image?: string;
  thumbnail?: string;
  price?: number;
}


const getData = async (urls: string[]): Promise<Product[]> => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));

    const combinedProducts: Product[] = data.flatMap((item) => {
      if (item.products) {
        return item.products.map((product: APIProduct) => ({
          id: product.id,
          title: product.title,
          image: product.thumbnail || "",
          price: product.price,
        }));
      } else {
        return item.map((product: APIProduct) => ({
          id: product.id,
          title: product.title,
          image: product.image || "",
          price: product.price,
        }));
      }
    });

    return combinedProducts;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Next.js API route handler
export async function GET() {
  const urls = [
    "https://fakestoreapi.com/products/category/men's clothing",
    "https://fakestoreapi.com/products/category/women's clothing",
    "https://fakestoreapi.com/products/category/jewelery",
  ];

  const products = await getData(urls);

  return NextResponse.json(products);
}
