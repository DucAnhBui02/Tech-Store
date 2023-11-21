import Image from "next/image";
import Link from "next/link";

import Container, { Category } from "./Components/Container";
import HomeBanner from "./Components/Banner";
import ProductList from "./Components/Products/ProductList";
import { products } from "@/utils/products";
import ProductCard from "./Components/Products/ProductCard";
import Brands from "./Components/Brands";

export default function Home() {
  const Product = products.slice(6, 11);
  const LaptopMSI = products.slice(11, 16);
  const Desktops = products.slice(16, 21);
  const Monitors = products.slice(21, 26);
  return (
    <>
      <Container>
        <HomeBanner
          image="https://s3-alpha-sig.figma.com/img/b5c0/816f/4de0161bbb74f57da63bc1b68324690e?Expires=1701043200&Signature=aNIYiaMVo1evar6PV~EdXmI8rw~GYFin-UkeAkAptu1c37Clh8Vn93ICd-wgFuoDwt9HAuyXSqbq1wk8LeUeTZLlqKqN11Yf36azJrvpcIJe9LXecKJqZv8KCwrhUO27JlAAlQTBtvqT~mu9RmWWl1tuigwfalnpW1F3srjE87kgO40Xg03SLldlz014cnnEsnLuPvRkoKu9jMpvZ0JPJknJpVhIOrYjMLSWbgg3tvGP-OkZfVEyCVFumEFDci0~Qa3FVqwgXADCj2KSQkBS5F4EZ0XLx79HLWtH05l1C9KSl8GbJn44ccide~ow8XVgbqYkLCBSI-68x~hUMB3yug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={1920}
          height={450}
        />
        <ProductList />
        <div
          className="flex items-center justify-center"
          style={{ backgroundColor: "#F5F7FF" }}
        >
          <Image src="/primary 1.png" alt="zip" width={77} height={27} />
          <div>
            <p
              className="p-1 ml-1 text-lg  border-l-2 "
              style={{ borderLeftColor: "#00AEB8", color: "#272560" }}
            >
              <strong>own</strong> it now, up to 6 months interest free{" "}
              <Link href="#" className="text-sm underline">
                learn more
              </Link>
            </p>
          </div>
        </div>
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/6778/36f8/66f2a591e4a0214dfd25835f14051a09?Expires=1700438400&Signature=FRyBG-cXAGPqCb2nsy-ciR56FowLjU9m46mqDEQREOv2l1hq12TrdINmpJCtN0t3qez-jQNpwiNHcU6xXJyi5jkjTjUJDLBVwMC~c5nzGE9kf0NurAYCbyH-4RPLhREuX2Fh9ah99ndtUOc4tBV~gpcFuLr~R7twtwnq880U5vuVWNa~UFovbrDQO2VHkgsZ9TUfhoiSd0lz3coPTe0t4Bx2cjcu4ultZ56g3PYs11bkmfrh5aiSgT5gcKcTUDqwTKsQd-SaQX8MHXLjoSf2kvoMqrrbNYicpTZzVXyMhaBK7jPrB5VlQu8t4wzdZXplD1qsDOXbCyTAfm08WRZ4Ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Custome Builds"
          data={Product}
        />
        <Category />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/e8a7/959b/1333cafd3d0886863a40096034e66fc9?Expires=1700438400&Signature=abyLOyIuh~8-aBxSYEdKB9PymItJFGBi4vXVrCcCuE8n4CEy3ZyeBhGYTuS4i9FdoxhnCZLwZgJK5SmtAD~60GBymk5lXjszdq51DPgNnMo-cU5T3wCQyq~lqKAH~Pg1M1BpuCjDF7TwT7iH7tArJ3FrvAEiWhZjLivcojedm2Zpaq0dsuGt7hp3l76pbbjEar52SI2j63kZ4i361PoKqzFrgzQi42EAC9kPOPo8yNrTUFl0TEKuxvf7XiXUqxsw0XUeOujv6Rl~UpcHRhRlJRhvOiFIjF5KQg~iO4iftBa7vzUmaKTvcBeAbH1b1fR3CInI7CKw9e1i9V-pgjZgUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="MSI Laptops"
          data={LaptopMSI}
        />
        <Category />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/da2f/7b79/dcaaca8473865ba1cdc9abbde7dfbaea?Expires=1700438400&Signature=inNS55lqfpArEzq0e8IjewEcDoe6kARs29xC9gko9tTdylavKAP6K8eZM3UCw9Nt3IDYYQb9fmI-1x0Lln1AW8pR7nYufoG1lBuTQc5lFPUS6paNAaYeKMog8ljLI8vNX9NerBCstkycs~PtUe9HliqhdoE18pDBz3RGymBHnZfcoyae5i-TclQ5TsWOuqh8B2nl1aC4phUEKFRICKXvDd-a-PxTSGt4inzeFH4PiqJ6pqaDHHI7pvJ0T1O9HuKwHV8KNpR96L188BqAggyAVPOmcWD~5AVAOY3qlYqvgT2A5JY1T5ZnFlQWG78XaCPuWII83EWCv1vi28RUYPHJSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Desktops"
          data={Desktops}
        />
        <Category />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/e038/37c7/1da86f4deb194ec628c7f9606daa14cb?Expires=1700438400&Signature=CD2bnGWwLZNedp5yAKweDNysdBAsl~xUlmz0e0gE25O5BbX02DGsIiCiaaJAKFj1voXcng8KmhNHRiecXB0Lp~1CzSbugnXtiZQpu52GcswP6v2VoPKfznbJMvFLVUBEHqYI~FaiEcldGuCsAnZgXkXYB22XrB2JDSiIYAeFNy3SndPVWDrudyYAYjn1hvmO7Bsy5C7ovm4ywAQsHsCpYYkSIrlZ-YGOmG3DCMONhSaiFnHw1MmLpsV-WqXKXPWUyhZOoIGiDsHUxOt6W6~nPRcXwWAoq-wVMK8MNYkwo2u3MNhLx26~oL-4tcKFlINN8s~fXZGMa~QCsZNMJnNB9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Monitors"
          data={Monitors}
        />
        <Brands />
      </Container>
    </>
  );
}
