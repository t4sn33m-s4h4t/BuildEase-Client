import { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";
import Title from "../Components/Shared/Title";

const AdminAnnouncements = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosSecure.post("/announcements", formData);
      toast.success("Announcement added successfully!");
      navigate("/dashboard/announcements");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add announcement.");
      console.error(error);
    }
  };

  return (
    <div className="py-8 bg-white dark:bg-gray-900">
        <Title Heading="Add Announcement" />
      <div className="md:w-4/5 lg:w-3/5 w-full my-10 mx-auto p-2 md:p-8 bg-white dark:bg-gray-800 rounded-md shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label value="Announcement Title" className="mb-2 text-gray-900 dark:text-white" />
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Enter announcement title"
              value={formData.title}
              onChange={handleChange}
              required
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <Label value="Announcement Description" className="mb-2 text-gray-900 dark:text-white" />
            <Textarea
              id="description"
              name="description"
              placeholder="Enter announcement description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700">
              Add Announcement
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAnnouncements;