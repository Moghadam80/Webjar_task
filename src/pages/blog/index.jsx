import { React, useEffect } from "react";
import style from './Style.module.scss'
import SearchBox from "@/components/SearchBox";
import { ArrowSvg } from "@/components/Svg";
import useBlog from "@/hooks/Blog";
import PaginationData from "@/components/Pagination";
import CheckBox from "@/components/checkbox";
import ImageComponent from "@/components/ImageComponent";

const url = 'https://file.webjar.site/'

const Blog = () => {
  const { blogs, uniqueCategories } = useBlog();

  return (
    <div className={style.blog}>
      <div className="mt-6 lg:px-[170px] px-[15px]">
        <div className="flex items-center text-base">
          <p className="ml-2">خانه</p>
          <ArrowSvg />
          <p className="mr-2 text-[#00C853]">وبلاگ</p>
        </div>
        <div className="flex justify-center mt-16 text-xl font-bold">وبلاگ</div>
        <div className="flex justify-center mt-8">
          <SearchBox />
        </div>
        <div className="grid grid-cols-9 mt-12">
          <div className="col-span-2 grid grid-cols-8 gap-2 h-fit">
            <p className="col-span-full text-base font-bold mb-4">دسته بندی</p>
            {uniqueCategories.map((category) => (
              <div className="flex col-span-full">
                <p className="text-[#7B7B7B] w-36">{category}</p>
                <CheckBox />
              </div>
            ))}
          </div>
          <div className="col-span-6">
            {blogs?.map((blog) => (
              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-3 my-2 w-fit h-fit">
                  <ImageComponent
                    src={url + blog.path}
                    className="w-[300px] h-[200px]"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="col-span-5 flex flex-col p-8">
                  <p className="mb-4 text-[16px] font-semibold">{blog.title}</p>
                  <p className="font-normal leading-7">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                  <div className="flex items-center">
                        
                  </div>
                </div>
              </div>
            ))}
            {/* <PaginationData/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
