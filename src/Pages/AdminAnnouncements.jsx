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
    <div className="py-10 ">
      <div className="max-w-4xl my-10 mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Title Heading="Add Announcement" />
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <Label value="Announcement Title" className="mb-2" />
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Enter announcement title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label value="Announcement Description" className="mb-2" />
            <Textarea
              id="description"
              name="description"
              placeholder="Enter announcement description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800">
              Add Announcement
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAnnouncements;
