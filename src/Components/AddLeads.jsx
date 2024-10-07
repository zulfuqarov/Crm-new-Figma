import React, { useContext, useState } from "react";
import { ContextCrm } from "../context/Context";
import { toast } from "react-toastify";

const AddLeads = ({ StageId }) => {
  const {
    handleAddLeads,
    searchLeadsContact,
    handleSearchLeadsContact,
    searchLeadsProduct,
    handleSearchLeadsProduct,
  } = useContext(ContextCrm);

  const [showContact, setshowContact] = useState(false);
  const [showProduct, setshowProduct] = useState(false);

  const [newLeads, setnewLeads] = useState({});
  const [contact, setContact] = useState({});
  const [product, setProduct] = useState({});

  const onChangeNewLeads = (e) => {
    setnewLeads({ ...newLeads, [e.target.name]: e.target.value });
  };

  const onChangeNewLeadsContact = (e) => {
    handleSearchLeadsContact(e.target.value);
    setContact({
      id: "",
      name: e.target.value,
    });
    setshowContact(true);
  };
  const handleSelectSuggestionContact = (Contact) => {
    setContact(Contact);
    setshowContact(false);
  };

  const onChangeNewLeadsProduct = (e) => {
    handleSearchLeadsProduct(e.target.value);
    setProduct({
      id: "",
      name: e.target.value,
    });
    setshowProduct(true);
  };
  const handleSelectSuggestionProduct = (Product) => {
    setProduct(Product);
    setshowProduct(false);
  };

  return (
    <div className="flex flex-col w-full   items-start gap-8 p-6 bg-white rounded border border-gray-300 shadow-sm top-[99px] right-0 absolute">
      <div className="flex flex-col w-full items-start gap-6">
        <div className="flex flex-col w-[100%] items-start justify-center gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Contact
          </p>
          <input
            className="w-full h-[36px] border-none rounded p-2 text-sm focus:outline-none focus:ring-0 transition"
            type="text"
            placeholder="Enter contact"
            onChange={onChangeNewLeadsContact}
            value={contact.name || ""}
          />

          {showContact ? (
            searchLeadsContact.length > 0 ? (
              <ul className="w-full max-h-[300px] overflow-y-auto mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                {searchLeadsContact.map((Contact, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectSuggestionContact(Contact)}
                  >
                    {Contact.name}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  No User
                </li>
              </ul>
            )
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col w-[100%] items-start justify-center gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Product
          </p>
          <input
            className="w-full h-[36px] border-none rounded p-2 text-sm focus:outline-none focus:ring-0 transition"
            type="text"
            placeholder="e.g. Product"
            onChange={onChangeNewLeadsProduct}
            value={product.name || ""}
          />
          {showProduct ? (
            searchLeadsProduct.length > 0 ? (
              <ul className="w-full max-h-[300px] overflow-y-auto mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                {searchLeadsProduct.map((Product, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectSuggestionProduct(Product)}
                  >
                    {Product.name}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  No Product
                </li>
              </ul>
            )
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col w-[100%] items-start gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Expected Revenue
          </p>
          <div className="flex items-center w-full">
            <input
              className="w-full h-[36px] border-none rounded p-2 text-sm focus:outline-none focus:ring-0 transition"
              type="number"
              placeholder="$0.00"
              name="expectedRevenue"
              onChange={onChangeNewLeads}
              value={newLeads.expectedRevenue || ""}
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%] items-start justify-center gap-3">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Probability
          </p>
          <div className="flex w-full justify-center items-center">
            <input
              type="range"
              min="0"
              max="100"
              className="w-full h-2 bg-blue-500 rounded-lg cursor-pointer accent-blue-500"
              name="probability"
              onChange={onChangeNewLeads}
              value={newLeads.probability || ""}
            />
            <div className=" w-[52px] h-[25px] flex justify-center items-center rounded-[4px] border-[1px] border-blue-500">
              <span className="">
                {newLeads.probability ? `%${newLeads.probability}` : "50%"}
              </span>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Expected Closing Date
          </p>
          <input
            className="w-full h-[36px] border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            type="date" // Tarih seçici
            placeholder="e.g. (mm/dd/yyyy)"
            name="expectedClosingDate"
            onChange={onChangeNewLeads}
            value={newLeads.expectedClosingDate || ""}
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button className="flex h-[44px] items-center justify-center gap-3 px-3 bg-gray-200 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 transition">
          <p className="font-normal text-main-text-color text-sm">Discard</p>
        </button>
        <button
          onClick={() => {
            if (
              contact.id &&
              product.id &&
              (newLeads.expectedClosingDate?.trim() || "").length > 0 &&
              (newLeads.probability?.trim() || "").length > 0 &&
              (newLeads.expectedRevenue?.trim() || "").length > 0
            ) {

              const updatedLeads = {
                ...newLeads,
                customerId: contact.id,
                productId: product.id,
              };

              handleAddLeads(updatedLeads, StageId, 99);
              setnewLeads({});
              setContact({ id: "", name: "" });
              setProduct({ id: "", name: "" });
            } else {
              toast.error("Please fill all the fields!");
              return;
            }
          }}
          className="flex h-[44px] items-center justify-center gap-3 px-3 bg-blue-500 border border-blue-500 rounded cursor-pointer hover:bg-blue-600 transition"
        >
          <p className="font-normal text-white text-sm">Add</p>
        </button>
      </div>
    </div>
  );
};

export default AddLeads;
