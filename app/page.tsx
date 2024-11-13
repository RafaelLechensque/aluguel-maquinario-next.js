import Image from "next/image";
import Cover from "./acesst/cover.jpg"
import Card from "./acesst/card.png"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="relative">
        <Image src={Cover} alt="Capa" fill={false} />
        <div className="absolute bottom-20 bg-stone-50 mx-52  rounded-lg text-stone-600  p-4">
          <h1 className="text-3xl font-semibold  ">Alugel, compra e venda de maquinas e implementos agricolos</h1>
          {/* <p className="my-4">A forma mais simples e barata para o seu plantil alguma coisa, alguma coisa,alguma coisa, alguma coisa,alguma coisa, alguma coisa, </p> */}
          {/* <Button variant={"default"} className="w-80 h-16 bg-emerald-600 text-xl mt-7">Veja a onde encontrar</Button> */}
          <div className="flex  w-full max-w-full  items-center space-x-2">
            <Input type="search" placeholder="Insira o tipo ou modelo do maquinario" />
            <Button type="submit" className="bg-emerald-500 w-80 hover:bg-emerald-700">Procurar</Button>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex m-4 justify-evenly">
          <li className="bg-sky-600 S rounded-xl relative ">
            <Link href="/" >
              <h1 className="font-extrabold text-3xl text-stone-50 absolute top-2 left-5">Colheitadeiras</h1>
              <Image src={Card} alt="" className="rounded-xl " />
            </Link>
          </li>
          <li className="bg-sky-600  rounded-xl relative ">
            <Link href="/" >
              <h1 className="font-extrabold text-3xl text-stone-50 absolute top-2 left-5">Colheitadeiras</h1>
              <Image src={Card} alt="" className="rounded-xl " />
            </Link>
          </li>
          <li className="bg-sky-600 S rounded-xl relative ">
            <Link href="/" >
              <h1 className="font-extrabold text-3xl text-stone-50 absolute top-2 left-5">Colheitadeiras</h1>
              <Image src={Card} alt="" className="rounded-xl " />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
