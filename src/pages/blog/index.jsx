import { React, useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import { ArrowSvg } from "@/components/Svg";
import useBlog from "@/hooks/Blog";
import PaginationData from "@/components/Pagination";
import CheckBox from "@/components/checkbox";
import ImageComponent from "@/components/ImageComponent";
import Pagination from '@mui/material/Pagination';
import GreenButton from "@/components/GreenButton";


const url = 'https://file.webjar.site/'

const Blog = () => {
  const { blogs, uniqueCategories } = useBlog();
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  // Function to filter data based on selected categories
  const filteredData = blogs.filter(item => {
    // If no categories are selected, show all items
    if (selectedCategories.length === 0) {
      return true;
    }
    
    // Check if the item's category is in the selected categories
    return selectedCategories.includes(item.category);
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = filteredData.slice(startIndex, endIndex);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleCategoryChange = (category) => {
    // Toggle the selected category
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(c => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });

    // Reset current page to 1 when categories change
    setCurrentPage(1);
  };

  return (
    <div className="mt-6 mb-20 lg:px-[170px] px-[15px]">
      <div className="flex items-center text-base">
        <p className="ml-2">خانه</p>
        <ArrowSvg />
        <p className="mr-2 text-[#00C853]">وبلاگ</p>
      </div>
      <div className="flex justify-center mt-16 text-xl font-bold">وبلاگ</div>
      <div className="flex justify-center mt-8">
        <SearchBox />
      </div>
      <div className="grid grid-cols-10 mt-20">
        <div className="col-span-3">
          <div className="grid grid-cols-8 gap-4 h-fit w-fit p-8 shadow-[0px_0px_30px_0px_#0000001A] rounded-l-[15px]">
            <p className="col-span-full text-base font-bold mb-4">دسته بندی</p>
            {uniqueCategories.map((category) => (
              <div className="flex col-span-full">
                <p className="text-[#7B7B7B] w-48">{category}</p>
                <CheckBox value={category} onClick={() => handleCategoryChange()}/>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-7">
          {currentData?.map((blog, i) => (
            <div
              key={i}
              className="grid grid-cols-8 gap-4 mb-12 rounded-[15px] shadow-[0px_0px_30px_0px_#00C8530D]"
            >
              <div className="col-span-3 w-fit h-fit">
                <ImageComponent
                  src={`${url}${blog.path}`}
                  className="w-[300px] h-[233px] rounded-r-[15px]"
                  width={0}
                  height={0}
                  key={i}
                />
              </div>
              <div className="col-span-5 flex flex-col p-4 pb-0">
                <p className="mb-4 text-[16px] font-semibold">{blog.title}</p>
                <p className="font-normal leading-7 w-[360px]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
                <div className="flex items-center justify-between h-full">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2501 3.33341H13.7501V2.08341C13.7501 1.97291 13.7062 1.86693 13.628 1.78879C13.5499 1.71065 13.4439 1.66675 13.3334 1.66675C13.2229 1.66675 13.1169 1.71065 13.0388 1.78879C12.9606 1.86693 12.9167 1.97291 12.9167 2.08341V3.33341H7.08342V2.08341C7.08342 1.97291 7.03952 1.86693 6.96138 1.78879C6.88324 1.71065 6.77726 1.66675 6.66675 1.66675C6.55624 1.66675 6.45026 1.71065 6.37212 1.78879C6.29398 1.86693 6.25008 1.97291 6.25008 2.08341V3.33341H3.75008C3.19775 3.33408 2.66823 3.55378 2.27767 3.94434C1.88712 4.3349 1.66741 4.86442 1.66675 5.41675V16.2501C1.66741 16.8024 1.88712 17.3319 2.27767 17.7225C2.66823 18.113 3.19775 18.3328 3.75008 18.3334H16.2501C16.8025 18.333 17.3321 18.1133 17.7227 17.7227C18.1133 17.3321 18.333 16.8025 18.3334 16.2501V5.41675C18.333 4.86435 18.1133 4.3347 17.7227 3.9441C17.3321 3.55349 16.8025 3.33386 16.2501 3.33341ZM17.5001 16.2501C17.5001 16.9401 16.9401 17.5001 16.2501 17.5001H3.75008C3.05841 17.5001 2.50008 16.9401 2.50008 16.2501V9.16675H17.5001V16.2501ZM17.5001 8.33342H2.50008V5.41675C2.50008 4.72675 3.05841 4.16675 3.75008 4.16675H6.25008V5.41675C6.25008 5.52726 6.29398 5.63324 6.37212 5.71138C6.45026 5.78952 6.55624 5.83342 6.66675 5.83342C6.77726 5.83342 6.88324 5.78952 6.96138 5.71138C7.03952 5.63324 7.08342 5.52726 7.08342 5.41675V4.16675H12.9167V5.41675C12.9167 5.52726 12.9606 5.63324 13.0388 5.71138C13.1169 5.78952 13.2229 5.83342 13.3334 5.83342C13.4439 5.83342 13.5499 5.78952 13.628 5.71138C13.7062 5.63324 13.7501 5.52726 13.7501 5.41675V4.16675H16.2501C16.9401 4.16675 17.5001 4.72675 17.5001 5.41675V8.33342Z"
                        fill="black"
                      />
                    </svg>
                    <p className="mr-1">
                      {new Date(blog.publishedAt).toLocaleDateString("fa", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.68734 3.54167C4.16243 3.54167 3.65902 3.75019 3.28786 4.12135C2.91669 4.49252 2.70817 4.99593 2.70817 5.52083V11.9792C2.70817 12.5041 2.91669 13.0075 3.28786 13.3786C3.65902 13.7498 4.16243 13.9583 4.68734 13.9583H6.0415V17.2242L10.6678 13.9583H15.3123C15.8372 13.9583 16.3407 13.7498 16.7118 13.3786C17.083 13.0075 17.2915 12.5041 17.2915 11.9792V5.52083C17.2915 4.99593 17.083 4.49252 16.7118 4.12135C16.3407 3.75019 15.8372 3.54167 15.3123 3.54167H4.68734ZM1.6665 5.52083C1.6665 4.71966 1.98477 3.9513 2.55129 3.38478C3.1178 2.81827 3.88616 2.5 4.68734 2.5H15.3123C16.1135 2.5 16.8819 2.81827 17.4484 3.38478C18.0149 3.9513 18.3332 4.71966 18.3332 5.52083V11.9792C18.3332 12.7803 18.0149 13.5487 17.4484 14.1152C16.8819 14.6817 16.1135 15 15.3123 15H10.9986L6.47775 18.1908C5.85692 18.6292 4.99984 18.185 4.99984 17.425V15H4.68734C3.88616 15 3.1178 14.6817 2.55129 14.1152C1.98477 13.5487 1.6665 12.7803 1.6665 11.9792V5.52083Z"
                        fill="black"
                      />
                    </svg>
                    <p className="mr-1">10 نظر</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0002 2.38086C10.7579 2.38086 11.4846 2.68188 12.0205 3.2177C12.5563 3.75352 12.8573 4.48024 12.8573 5.238V7.14276C12.8573 7.90053 12.5563 8.62725 12.0205 9.16307C11.4846 9.69889 10.7579 9.99991 10.0002 9.99991C9.2424 9.99991 8.51567 9.69889 7.97986 9.16307C7.44404 8.62725 7.14302 7.90053 7.14302 7.14276V5.238C7.14302 4.48024 7.44404 3.75352 7.97986 3.2177C8.51567 2.68188 9.2424 2.38086 10.0002 2.38086V2.38086ZM16.6668 15.7142V15.0209C16.6668 11.9856 13.1564 9.99991 10.0002 9.99991C6.84397 9.99991 3.3335 11.9856 3.3335 15.0209V15.7142C3.3335 15.9668 3.43384 16.209 3.61244 16.3876C3.79105 16.5662 4.03329 16.6666 4.28588 16.6666H15.7144C15.967 16.6666 16.2093 16.5662 16.3879 16.3876C16.5665 16.209 16.6668 15.9668 16.6668 15.7142Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="mr-1">علی نسیمی</p>
                  </div>
                  <GreenButton className="w-[157px] h-[45px]" text='بیشتر' />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-6">
            <PaginationData
              count={totalPages}
              page={currentPage}
              onChange={handleChangePage}
              variant="outlined"
              color="secondary"
              shape="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
