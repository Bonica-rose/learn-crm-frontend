import PageHeader from "../../components/PageHeader";
import CustomerForm from "../../components/forms/CustomerForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createCustomerSchema } from "../../validations/customerValidation";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createCustomerAPI } from "../../features/customers/customerAPI";

const AddCustomer = () => {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(createCustomerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      status: "Lead",
    },
  });
  const handleSubmit = async (data) => {
    try {
      const res = await createCustomerAPI(data);

      toast.success(res.message);

      navigate("/customers");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create customer"
      );
    }
  };

  return (
    <>
      <PageHeader title="Add Customer" subtitle="Create a new customer." />

      <CustomerForm
        methods={methods}
        onSubmit={handleSubmit}
        buttonText={"Save Customer"}
      />
    </>
  );
};

export default AddCustomer;
