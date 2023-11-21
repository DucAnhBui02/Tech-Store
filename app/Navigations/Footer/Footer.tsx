import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        {/* <!-- Social media icons container --> */}

        {/* Newsletter sign-up form */}
        <div>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6">
                <p>
                  <strong className="">Sign up for our newsletter</strong>
                </p>
              </div>

              {/* <!-- Newsletter sign-up input field --> */}
              <div className="relative md:mb-6">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Your Email
                </label>
              </div>

              {/* <!-- Newsletter sign-up submit button --> */}
              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* <!-- Links section --> */}
        <div className=" flex justify-evenly max-sm:flex-col">
          <div className="mb-6 text-start">
            <h5 className="mb-2.5 font-bold uppercase">Information</h5>

            <ul className="mb-0 list-none" style={{ fontSize: 14 }}>
              <li className="mb-2">
                <Link href="#!">About Us</Link>
              </li>
              <li>
                <Link href="#!">About Zip</Link>
              </li>
              <li>
                <Link href="#!">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#!">Search</Link>
              </li>
              <li>
                <Link href="#!">Terms</Link>
              </li>
              <li>
                <Link href="#!">Orders and Returns</Link>
              </li>
              <li>
                <Link href="#!">Contact Us</Link>
              </li>
              <li>
                <Link href="#!">Advanced Search</Link>
              </li>
              <li>
                <Link href="#!">Newsletter Subscription</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 text-start">
            <h5 className="mb-2.5 font-bold uppercase">PC Parts</h5>

            <ul className="mb-0 list-none" style={{ fontSize: 14 }}>
              <li>
                <Link href="#!">CPUS</Link>
              </li>
              <li>
                <Link href="#!">Add On Cards</Link>
              </li>
              <li>
                <Link href="#!">Hard Drives (Internal)</Link>
              </li>
              <li>
                <Link href="#!">Graphic Cards</Link>
              </li>
              <li>
                <Link href="#!">Keyboards / Mice</Link>
              </li>
              <li>
                <Link href="#!">Cases / Power Supplies / Cooling</Link>
              </li>
              <li>
                <Link href="#!">RAM (Memory)</Link>
              </li>
              <li>
                <Link href="#!">Software</Link>
              </li>
              <li>
                <Link href="#!">Speakers / Headsets</Link>
              </li>
              <li>
                <Link href="#!">Motherboards</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 text-start">
            <h5 className="mb-2.5 font-bold uppercase">Desktop PCs</h5>
            <ul className="mb-0 list-none" style={{ fontSize: 14 }}>
              <li>
                <Link href="#!">Custom PCs </Link>
              </li>
              <li>
                <Link href="#!">Servers </Link>
              </li>
              <li>
                <Link href="#!">MSI All-In-One PCs </Link>
              </li>
              <li>
                <Link href="#!">HP/Compaq PCs </Link>
              </li>
              <li>
                <Link href="#!">ASUS PCs </Link>
              </li>
              <li>
                <Link href="#!">Tecs PCs</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 text-start">
            <h5 className="mb-2.5 font-bold uppercase">Laptops</h5>
            <ul className="mb-0 list-none" style={{ fontSize: 14 }}>
              <li>
                <Link href="#!">Evryday Use Notebooks</Link>
              </li>
              <li>
                <Link href="#!">MSI Workstation Series</Link>
              </li>
              <li>
                <Link href="#!">MSI Prestige Series</Link>
              </li>
              <li>
                <Link href="#!">Tablets and Pads</Link>
              </li>
              <li>
                <Link href="#!">Netbooks</Link>
              </li>
              <li>
                <Link href="#!">Infinity Gaming Notebooks</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 text-start">
            <h5 className="mb-2.5 font-bold uppercase">Address</h5>

            <ul className="mb-0 list-none" style={{ fontSize: 14 }}>
              <li>
                <Link href="#!">
                  Address: 1234 Street Adress City Address, 1234
                </Link>
              </li>
              <li>
                <Link href="#!">Phones: (00) 1234 5678</Link>
              </li>
              <li>
                <Link href="#!">
                  We are open: Monday-Thursday: 9:00 AM - 5:30 PM
                </Link>
              </li>
              <li>
                <Link href="#!">Friday: 9:00 AM - 6:00 PM</Link>
              </li>
              <li>
                <Link href="#!">Saturday: 11:00 AM - 5:00 PM</Link>
              </li>
              <li>
                <Link href="#!">E-mail: shop@email.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Copyright section --> */}
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <Link href="https://tw-elements.com/">TW elements</Link>
      </div>
    </footer>
  );
}
