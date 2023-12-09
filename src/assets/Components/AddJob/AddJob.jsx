import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import axios from "axios";
import swal from "sweetalert";

const AddJob = () => {
  const { category ,authUser} = useContext(AuthContext);
  const [categoryValue, setCategoryValue] = useState();

  console.log(categoryValue, "test value");

  const addJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const job_title = form.job_title.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const min_price = form.min_price.value;
    const max_price = form.max_price.value;

    const job_detail = {
      email,
      job_title,
      deadline,
      description,
      min_price,
      max_price,
      categoryValue,
    };

    console.log(job_detail);

    axios
      .post("https://genious-gig-backend.vercel.app/job", job_detail, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        swal("Good job!", "Job added !", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectedCategory = (event) => {
    setCategoryValue(event.target.value);
  };

  return (
    <div>
     


      <div class="max-w-xl mx-auto">
        <h2 className="text-center text-2xl mb-3">Add Job</h2>
        <form onSubmit={addJob}>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="email" class="text-sm text-gray-600 block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="example@email.com"
              defaultValue={authUser.email}
              readOnly
              required
            />
          </div>
          <div>
            <label for="job-title" class="text-sm text-gray-600 block">
              Job Title:
            </label>
            <input
              type="text"
              id="job-title"
              name="job_title"
              class="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter job title"
              required
            />
          </div>
          <div>
            <label for="deadline" class="text-sm text-gray-600 block">
              Deadline:
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              class="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter deadline"
              required
            />
          </div>

          <div>
            <label for="category" class="text-sm text-gray-600 block">
              Category:
            </label>
            <select
              className="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              onChange={selectedCategory}
            >
              <option value="">Choose a Category:</option>
              {category?.map((category) => (
                <option key={category._id}>{category.category}</option>
              ))}
            </select>
          </div>
          <div class="col-span-2">
            <label for="description" class="text-sm text-gray-600 block">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              class="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter job description"
              required
            ></textarea>
          </div>
          <div>
            <label for="min-price" class="text-sm text-gray-600 block">
              Minimum Price:
            </label>
            <input
              type="number"
              id="min-price"
              name="min_price"
              class="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter minimum price"
              required
            />
          </div>
          <div>
            <label for="max-price" class="text-sm text-gray-600 block">
              Maximum Price:
            </label>
            <input
              type="number"
              id="max-price"
              name="max_price"
              class="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter maximum price"
              required
            />
          </div>
        </div>
        <div class="mt-4 flex justify-end">
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Job
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
