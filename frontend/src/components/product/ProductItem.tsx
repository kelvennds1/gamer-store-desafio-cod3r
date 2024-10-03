"use client";

import Image from "next/image";

import { Product } from "@/core";
import Link from "next/link";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="
      flex 
      flex-col 
      bg-violet-dark border 
      border-white/10 
      rounded-xl 
      relative 
      max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image
          src={product.image}
          alt="Imagem do produto"
          className="object-contain"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div
        className="
            flex-1 
            flex 
            flex-col 
            p-5 
            gap-3 
            border-t 
            border-white/10 "
      >
        <span className="text-lg font-semibold">{product.name}</span>
        <span className="text-sm border-b border-dashed self-start">
          {product.specifications.highlight}
        </span>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {product.basePrice}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {product.promoPrice}
          </span>
        </div>
        <button
          className="flex gap-2 bg-violet-700 rounded-full justify-center items-center h-8 hover:border-2 border-emerald-400"
          onClick={(e) => {
            e.preventDefault();
            console.log("Adicionando ao carrinho");
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
