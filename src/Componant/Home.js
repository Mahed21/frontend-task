import React, { useState } from "react";
import { SlNote } from "react-icons/sl";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { HiLocationMarker } from "react-icons/hi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { FaAmazonPay } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { Button, Modal } from "react-bootstrap";
import Table from "./Table";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [isPayNow, setIsPayNow] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidenavright = () => {
    setIsOpenRight(!isOpenRight);
  };
  const payNow = () => {
    setIsPayNow(true);
  };
  const cancelPayment = () => {
    setIsPayNow(false);
  };
  return (
    <div className="ms-2">
      {/* left navigation bar */}
      <div
        className={`sidenav ${isOpen ? "open" : ""}`}
        style={{ width: isOpen ? "250px" : "0" }}
      >
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={toggleSidenav}
        >
          &times;
        </a>
        <div className="go_billing pt-5 pb-5">
          <h3 className="text-center">
            go<span style={{ color: "#84D408" }}>B</span>illing
          </h3>
          <h6>Location: </h6>
          <h4>Los Angle, California</h4>
        </div>
        <Link href="#">
          <RxDashboard className="me-1 mb-1" />
          Dashboard
        </Link>
        <Link href="#">
          <HiLocationMarker className="me-1 mb-1" />
          Locations
        </Link>
        <Link href="#">
          <FaFileInvoiceDollar className="me-1 mb-1" />
          Pos Invoice
        </Link>
        <Link href="#">
          <FiSettings className="me-1 mb-1" />
          Setting
        </Link>
      </div>
      {/* right navigation bar */}
      <div
        className={`sidenavright ${isOpenRight ? "open" : ""}`}
        style={{ width: isOpenRight ? "800px" : "0" }}
      >
        <Link
          href="javascript:void(0)"
          className="closebtn"
          onClick={toggleSidenavright}
        >
          &times;
        </Link>
        <div className="d-flecx justify-content-between ms-2 mt-3">
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            new
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
        </div>
        <div className="d-flecx justify-content-between ms-2 mt-3">
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            new
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
        </div>
        <div className="d-flecx justify-content-between ms-2 mt-3">
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            new
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
        </div>
        <div className="d-flecx justify-content-between ms-2 mt-3">
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            new
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
        </div>
        <div className="d-flecx justify-content-between ms-2 mt-3">
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            new
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
        </div>
        <div className="d-flecx justify-content-between ms-2 mt-3">
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            new
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
        </div>
        <div className="d-flecx justify-content-between ms-2 mt-3">
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            Women Fasion
          </button>
          <button className="all_categories pt-2 pb-2 ps-4 pe-4 me-1 rounded">
            new
          </button>
        </div>
      </div>
      <div className="row row-cols-lg-2 mb-3">
        <div>
          <div className="d-flex justify-content-between mt-3 ms-2">
            <button
              className="humburger_btn pt-2 pb-2 ps-4 pe-4"
              onClick={toggleSidenav}
            >
              <GiHamburgerMenu className="me-1 mb-1" />
            </button>
            <button className="header_btn pt-2 pb-2 ps-4 pe-4">
              <SlNote className="me-1 mb-1 header_icon" />
              Note
            </button>
            <button className="header_btn pt-2 pb-2 ps-4 pe-4 ">
              <MdOutlineLocalShipping className="me-1 mb-1 header_icon" />
              Shipping
            </button>
            <button className="header_btn pt-2 pb-2 ps-4 pe-4 ">
              <BsClockHistory className="me-1 mb-1 header_icon" />
              Hold Orders
            </button>
            <button className="header_btn pt-2 pb-2 ps-4 pe-4">
              <IoIosAddCircle className="me-1 mb-1 header_icon" />
              New Items
            </button>
          </div>

          {/* profile */}

          <div className="d-flex justify-content-between profile p-3 mt-4">
            <h5>
              {" "}
              <CgProfile className="me-1 mb-1 header_icon" />
              Steve Jobs
            </h5>
            <h5>
              {" "}
              <IoIosAddCircle
                className="me-1 mb-1 header_icon"
                onClick={handleShow}
              />
            </h5>
          </div>

          {/* table */}
          <Table></Table>
          {/* footer button */}
          <div className="d-flex justify-content-between mt-3 ms-2">
            <button className="cancel_btn pt-3 pb-2 ps-5 pe-5">
              <ImCancelCircle className="me-1 mb-1 cancel_icon" />
              Cancel
            </button>
            <button className="header_btn pt-3 pb-2 ps-5 pe-5 ">
              <BsFillHandThumbsUpFill className="me-1 mb-1 header_icon" />
              Hold
            </button>
            <button className="header_btn pt-3 pb-2 ps-5 pe-5">
              <CiDiscount1 className="me-1 mb-1 header_icon" />
              Discount
            </button>
            <button className="header_btn pt-3 pb-2 ps-5 pe-5" onClick={payNow}>
              <FaAmazonPay className="me-1 mb-1 header_icon" />
              Pay Now
            </button>
          </div>
        </div>

        {/* right part product info */}
        {isPayNow ? (
          <div className="pay_orderPage">
            <div className="d-flex justify-content-between border p-4 mt-3">
              <h3 style={{ color: "#7c8892" }}>Order Amount</h3>
              <h3>$500,00</h3>
            </div>

            <div className="payment-form border mt-5">
              <div className="row">
                <div className="col-lg-4 ms-3 mt-3">
                  <h3 style={{ color: "#7c8892" }} className="mb-3">
                    <BsCashCoin className="me-1 mb-1" />
                    Cash
                  </h3>
                  <h3 style={{ color: "#7c8892" }} className="mb-3">
                    <AiOutlineIdcard className="me-1 mb-1" />
                    Card
                  </h3>
                  <h3 style={{ color: "#7c8892" }} className="mb-3">
                    <MdOutlineManageAccounts className="me-1 mb-1" />
                    On Account
                  </h3>
                  <h3 style={{ color: "#7c8892" }} className="mb-3">
                    <BsCashCoin className="me-1 mb-1" />
                    Checque
                  </h3>
                </div>
                <div className="col-lg-1 vl"></div>
                <div className="col-lg-6 mt-3">
                  <div>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Card Name"
                        className="modal_input w-100"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="modal_input w-100"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Card Expiry Date"
                        className="modal_input w-100"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Card Stret"
                        className="modal_input w-100"
                      />
                    </div>
                  </div>
                  <div className="d-flex  payment_form_btn">
                    <button
                      className="cancel_btn pt-3 pb-2 ps-5 pe-5 me-2"
                      onClick={cancelPayment}
                    >
                      <ImCancelCircle className="me-1 mb-1 cancel_icon" />
                      Cancel
                    </button>
                    <button className="cancel_btn pt-3 pb-2 ps-4 pe-4 complete_payment">
                      <RiHandCoinFill className="me-1 mb-1" />
                      Complete Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="product_page">
            <div className="searhbar p-2">
              <h5 className="ms-3">
                <AiOutlineSearch className="me-2 mb-1" />
                Search product
              </h5>
            </div>
            <div className="d-flex justify-content-between mt-3 ms-2">
              <button className="acticve_category pt-2 pb-2 ps-4 pe-4 rounded">
                All Categories
              </button>
              <button
                className="all_categories pt-2 pb-2 ps-4 pe-4 rounded"
                onClick={toggleSidenavright}
              >
                Electronics
              </button>
              <button
                className="all_categories pt-2 pb-2 ps-4 pe-4 rounded"
                onClick={toggleSidenavright}
              >
                Home & Lifestyle
              </button>
              <button
                className="all_categories pt-2 pb-2 ps-4 pe-4 rounded"
                onClick={toggleSidenavright}
              >
                Men Fasion
              </button>
              <button
                className="all_categories pt-2 pb-2 ps-4 pe-4 rounded"
                onClick={toggleSidenavright}
              >
                Women Fasion
              </button>
            </div>
            {/* display product */}
            <Card></Card>
          </div>
        )}

        {/* pay now */}
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          <form>
            <h5 className="text-center">Add New Customer</h5>
            <div class="text-center mb-4">
              <input
                type="text"
                placeholder="Name"
                className="modal_input w-75 "
              />
            </div>
            <div class="text-center mb-4">
              <input
                type="email"
                placeholder="Email"
                className="modal_input w-75 "
              />
            </div>
            <div class="text-center mb-4">
              <input
                type="text"
                placeholder="Phone"
                className="modal_input w-75 "
              />
            </div>
            <div class="text-center mb-4">
              <input
                type="text"
                placeholder="Currency"
                className="modal_input w-75 "
              />
            </div>
            <div class="text-center mb-4">
              <input
                type="text"
                placeholder="Tax Id"
                className="modal_input w-75 "
              />
            </div>
            <div class="ms-5 mb-4">
              <h6 className="ms-2 discount">
                <BsFillPlusCircleFill className="me-1 mb-1 header_icon" />
                Add More Details
              </h6>
            </div>
            <div class="text-center mb-4">
              <input
                type="button"
                value="Submit"
                className="modal_input w-75 form_btn pt-2 pb-2"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
