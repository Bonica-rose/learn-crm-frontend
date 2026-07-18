import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CustomerForm from "../../components/forms/CustomerForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updateCustomerSchema } from "../../validations/customerValidation";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getCustomerAPI,
  updateCustomerAPI,
} from "../../features/customers/customerAPI";

const EditCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [customer, setCustomer] = useState({});
  useEffect(() => {
    async function loadCustomer() {
      try {
        const res = await getCustomerAPI(id);        
        reset(res.customer);
      } catch (error) {
        toast.error(error.message || "Customer fetching failed!");
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
      const res = await updateCustomerAPI(id, data);

      toast.success(res.message);

      navigate("/customers");
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Failed to update customer");
    }
  };

  return (
    <>
      <PageHeader title="Edit Customer" subtitle="Update a customer." />

      <CustomerForm methods={methods} onSubmit={handleSubmit} buttonText={'Update Customer'} />
    </>
  );
};

export default EditCustomer;
