import Image from 'next/image';
import { Link } from "react-router-dom";

import { sidebarLinks } from 'src/constants';
const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
      </div>
    </section>
  )
}

export default LeftSidebar