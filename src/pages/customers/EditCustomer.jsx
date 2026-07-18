import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CustomerForm from "../../components/forms/CustomerForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updateCustomerSchema } from "../../validations/customerValidation";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getCustomerAPI,
  updateCustomerAPI,
  getCustomerForAdminAPI,
  updateCustomerForAdminAPI,
} from "../../features/customers/customerAPI";
import { useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";

const EditCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    async function loadCustomer() {
      try {
        let res;
        if (user.role === 'Admin') {
          res = await getCustomerForAdminAPI(id);
        }else{
          res = await getCustomerAPI(id);
        }
        reset(res.customer);
      } catch (error) {        
        toast.error(
          error.response?.data?.message || "Customer fetching failed!",
        );
      }
    }
    loadCustomer();
  },[])


  const methods = useForm({
    resolver: yupResolver(updateCustomerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      status: "Lead",
    },
  });
  const { reset } = methods;

  const handleSubmit = async (data) => {
    try {
      let res;
      if (user.role === "Admin") {
        res = await updateCustomerForAdminAPI(id, data);
      } else {
        res = await updateCustomerAPI(id, data);
      }

      toast.success(res.message);
      navigate("/customers");
    } catch (error) {
      // console.log(error)
      toast.error(error.response?.data?.message || "Failed to update customer");
    }
  };

  return (
    <>
      <PageHeader
        title="Edit Customer"
        subtitle="Update a customer."
        action={
          <Link
            to="/customers"
            className="flex items-center gap-2 p-2 text-gray-500"
          >
            <IoArrowBack />
            Back
          </Link>
        }
      />

      <CustomerForm
        methods={methods}
        onSubmit={handleSubmit}
        buttonText={"Update Customer"}
      />
    </>
  );
};

export default EditCustomer;
