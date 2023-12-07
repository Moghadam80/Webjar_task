const useBlog = () => {
    const blogs = [
        {
            "title": "طراحی منوی رستوران جذاب و طرز نوشتن آن",
            "shortDescription": "آموزش طراحی منوی رستوران",
            "publishedAt": "2023-11-06T07:01:15.504357",
            "path": "4636e9f5b4414c69974fe339c42127d4.jpg",
            "category": "رستوران"
        },
        {
            "title": "چطور کالاهای فروشگاه اینترنتی را برای مشتری بفرستیم؟",
            "shortDescription": "آموزش ارسال محصولات فروشگاه های اینترنتی",
            "publishedAt": "2023-09-10T11:18:39.832345",
            "path": "c727bb8145844f75a52832945e7bb496.jpg",
            "category": "فروشگاه آنلاین"
        },
        {
            "title": "مهم ترین نکات در فروش اینترنتی",
            "shortDescription": "آموزش فروش اینترنتی و تسلط بر هنر فروش آنلاین",
            "publishedAt": "2023-09-18T09:07:50.829904",
            "path": "471fdf353c5f40178dd44ec23b9e7e61.jpg",
            "category": "فروش آنلاین"
        },
        {
            "title": "اصلی ترین ایده های باشگاه مشتریان",
            "shortDescription": "ایده های مختلف برای راه اندازی باشگاه مشتریان موفق",
            "publishedAt": "2023-09-27T08:22:22.422892",
            "path": "3b72d18e41eb491596339fc614a0d982.jpg",
            "category": "باشگاه مشتریان"
        },
        {
            "title": "آیا راه اندازی فروشگاه اینترنتی نیاز به مجوز دارد؟",
            "shortDescription": "مراحل گرفتن مجوز فروشگاه اینترنتی به صورت گام به گام",
            "publishedAt": "2023-10-14T08:21:59.699184",
            "path": "f18bc1f778754cf08f7e7f94ab6ce92d.jpg",
            "category": "فروشگاه آنلاین"
        },
        {
            "title": "معرفی انواع وب سایت و ویژگی های آن",
            "shortDescription": "سایت هایی که بیشترین به کار می‌یاد",
            "publishedAt": "2023-09-12T06:21:06.790245",
            "path": "80df4892c7c743cc8f107a7f93fc4538.webp",
            "category": "وب سایت"
        },
        {
            "title": "مهم ترین فاکتور های باشگاه مشتریان",
            "shortDescription": "فروش بیشتر با باشگاه مشتریان موفق",
            "publishedAt": "2023-09-23T08:54:03.70293",
            "path": "7d00fc7601154e9fb733eadf4b190e1a.jpg",
            "category": "باشگاه مشتریان"
        },
        {
            "title": "راهنمای کامل راه اندازی و ساخت سایت ",
            "shortDescription": "آموزش ساخت سایت مرحله به مرحله",
            "publishedAt": "2023-09-17T11:32:03.495974",
            "path": "f47bd9d469a44e2e9509c4bb3511f166.jpg",
            "category": "وب سایت"
        },
        {
            "title": "چگونه یک سایت را در گوگل ثبت کنیم",
            "shortDescription": "آموزش کامل ثبت سایت در گوگل",
            "publishedAt": "2023-10-18T12:50:02.715491",
            "path": "26a56080880240a993afd182ea5d5c76.jpg",
            "category": "وب سایت"
        },
        {
            "title": "بهترین روش‌های تبلیغ رستوران و فست‌فود",
            "shortDescription": "راه هایی برای تبلیغات صحیح رستوران و فست فود",
            "publishedAt": "2023-10-16T08:02:06.518987",
            "path": "0d09701e7e454d169db017a4fd2eb6ea.jpg",
            "category": "رستوران"
        },
        {
            "title": " بهترین کالا برای فروش اینترنتی",
            "shortDescription": "مناسب ترین محصولات برای فروش در فروشگاه اینترنتی ",
            "publishedAt": "2023-11-15T08:36:55.067419",
            "path": "c0e20c90b66f4cec86138f1a167a8eee.jpg",
            "category": "فروشگاه آنلاین"
        },
        {
            "title": "انواع روش های فروش محصول+ تکنیک ها و نکات مهم",
            "shortDescription": "روش‌های فروش در فرآیند تجارت",
            "publishedAt": "2023-12-03T07:26:31.026442",
            "path": "f43cae6837ab4f07be5ccf962807f1e6.jpg",
            "category": "فروش"
        },
    ];

    // Extract unique categories
    const uniqueCategories = [...new Set(blogs.map(item => item.category))];

    
  return {
    blogs,
    uniqueCategories
  }
}

export default useBlog