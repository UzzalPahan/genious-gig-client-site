import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const { authUser} = useContext(AuthContext);
  // const dynamicCategory = useLoaderData();
  const [dynamicCategory, setDynamicCategory] = useState([])
  const [category, setCategory] = useState([]);
 console.log(dynamicCategory, 'dynamic category');

useEffect(() => {
  axios
    .get("https://genious-gig-backend.vercel.app/category")
    .then(function (response) {
      // handle success
      console.log(response);
      setCategory(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}, []);

useEffect(() => {
  axios
    .get("https://genious-gig-backend.vercel.app/alljobs")
    .then(function (response) {
      // handle success
      console.log(response);
      setDynamicCategory(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}, []);


  return (
    <div>

      <Tabs>
        <div className="text-center">
        <TabList>
          {category?.map((category) => (
            <Tab key={category?._id}>
              <Link to={`/${category.category}`}>{category?.category}</Link>
            </Tab>
          ))}
        </TabList>
        </div>

        {/* //all jobs code  */}

        
        {category?.map(tabList =>
          
          <div key={tabList._id}> 
        <TabPanel>          
          <div className="py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dynamicCategory.filter((category) => category.categoryValue === tabList.category).map((categorys) => (
              <div key={categorys?._id}>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="px-5 pb-5">
                      <h5 className="text-xl font-semibold mb-2">{categorys?.job_title}
                      </h5>
                      <h5 className="text-sm text-gray-600 mb-2">
                        Duration: { categorys?.deadline}
                      </h5>
                      <h5 className="text-sm text-gray-600 mb-2">
                        Price Range: ${categorys?.min_price} - ${categorys?.max_price}
                      </h5>
                         {
                        categorys?.description?.length>100 ? <p className="text-gray-700 mb-4"> Description: { categorys?.description?.slice(0, 100)}</p> : <p>Description: {categorys?.description}</p>
                      }
                    
                    <div className="flex items-center mt-2.5 mb-5">
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      { authUser?.email === categorys?.email? 
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">My Job</button>
                      
                       :
                       <Link
                        to={`/jobdetail/${categorys?._id}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                      >
                        Bid now
                      </Link>
                       }
                    </div>
                  </div>
                </div>
              </div>

                ))}

          </div>
            </div>

        </TabPanel>
            </div>
            )} 
        
  

      </Tabs>
    </div>
  );
};

export default Category;
