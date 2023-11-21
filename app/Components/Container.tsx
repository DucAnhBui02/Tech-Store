import Link from "next/link";

export const Category = () => {
  return (
    <ul className="flex flex-wrap items-center justify-start text-gray-900 dark:text-white font-semibold">
      <li>
        <Link href="#" className="me-4 hover:underline md:me-6 ">
          MSI GS Series
        </Link>
      </li>
      <li>
        <Link href="#" className="me-4 hover:underline md:me-6">
          MSI GT Series
        </Link>
      </li>
      <li>
        <Link href="#" className="me-4 hover:underline md:me-6 ">
          MSI GL Series
        </Link>
      </li>
      <li>
        <Link href="#" className="me-4 hover:underline md:me-6">
          MSI GE Series
        </Link>
      </li>
    </ul>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
