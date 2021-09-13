import React, { Component } from "react";
import "./HomeScreenComponent.css";

class HomeScreenComponent extends Component {
  render() {
    return (
      <>
        <div className="left-bar">
          <p id="mc">MC</p>
          <div class="social">
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.322"
                height="18.322"
                viewBox="0 0 18.322 18.322"
              >
                <path
                  class="b"
                  d="M17.161,8a9.161,9.161,0,1,0,9.161,9.161A9.171,9.171,0,0,0,17.161,8ZM24.8,17.161c0,.128-.013.253-.019.381a17.829,17.829,0,0,0-5.084.608,20.562,20.562,0,0,0-.565-2.081c-.126-.384-.268-.765-.418-1.141a14.372,14.372,0,0,0,4.156-2.822A7.594,7.594,0,0,1,24.8,17.161ZM21.744,11.07a12.808,12.808,0,0,1-3.648,2.46,16.565,16.565,0,0,0-2.54-3.83,7.563,7.563,0,0,1,6.188,1.37Zm-7.783-.831a14.377,14.377,0,0,1,2.723,3.877c-.376.139-.762.273-1.161.393a16.473,16.473,0,0,1-5.739.72A7.655,7.655,0,0,1,13.961,10.239ZM9.527,17.161c0-.142.014-.282.021-.422.364.029.734.05,1.116.05a18.8,18.8,0,0,0,5.3-.816c.463-.139.907-.295,1.34-.457.134.34.262.683.376,1.03a19.018,19.018,0,0,1,.55,2.044,15.546,15.546,0,0,0-6.471,3.958A7.609,7.609,0,0,1,9.527,17.161Zm3.409,6.353a13.847,13.847,0,0,1,5.541-3.395,12.891,12.891,0,0,1-.212,4.587,7.458,7.458,0,0,1-5.329-1.192Zm6.98.758a15.389,15.389,0,0,0,.039-4.611,16.83,16.83,0,0,1,4.59-.6A7.657,7.657,0,0,1,19.917,24.273Z"
                  transform="translate(-8 -8)"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/manik-chhabra/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.322"
                height="18.322"
                viewBox="0 0 18.322 18.322"
              >
                <path
                  class="b"
                  d="M20.978,8H13.344A5.35,5.35,0,0,0,8,13.344v7.634a5.35,5.35,0,0,0,5.344,5.344h7.634a5.35,5.35,0,0,0,5.344-5.344V13.344A5.35,5.35,0,0,0,20.978,8ZM16.4,21.741a.764.764,0,0,0-.763-.763H14.107V19.451h1.527a.764.764,0,0,0,.763-.763V15.634a2.293,2.293,0,0,1,2.29-2.29h3.054v1.527h-2.29A1.528,1.528,0,0,0,17.924,16.4v2.29a.764.764,0,0,0,.763.763h2.925l-.445,1.527H18.688a.764.764,0,0,0-.763.763V24.8H16.4Zm8.4-.763A3.821,3.821,0,0,1,20.978,24.8H19.451V22.5h2.29a.763.763,0,0,0,.733-.55l.734-2.518a1.145,1.145,0,0,0-1.085-1.513H19.451V16.4H22.5a.764.764,0,0,0,.763-.763V12.58a.764.764,0,0,0-.763-.763H18.688a3.821,3.821,0,0,0-3.817,3.817v2.29H13.344a.764.764,0,0,0-.763.763v3.054a.764.764,0,0,0,.763.763h1.527V24.8H13.344a3.821,3.821,0,0,1-3.817-3.817V13.344a3.821,3.821,0,0,1,3.817-3.817h7.634A3.821,3.821,0,0,1,24.8,13.344Z"
                  transform="translate(-8 -8)"
                ></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/bittech10"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.322"
                height="18.322"
                viewBox="0 0 18.322 18.322"
              >
                <path
                  class="b"
                  d="M20.978,8H13.344A5.35,5.35,0,0,0,8,13.344v7.634a5.35,5.35,0,0,0,5.344,5.344h7.634a5.35,5.35,0,0,0,5.344-5.344V13.344A5.35,5.35,0,0,0,20.978,8ZM24.8,20.978A3.821,3.821,0,0,1,20.978,24.8H13.344a3.821,3.821,0,0,1-3.817-3.817V13.344a3.821,3.821,0,0,1,3.817-3.817h7.634A3.821,3.821,0,0,1,24.8,13.344Z"
                  transform="translate(-8 -8)"
                ></path>
                <path
                  class="b"
                  d="M25.2,21a4.2,4.2,0,1,0,4.2,4.2A4.2,4.2,0,0,0,25.2,21Zm0,6.871A2.672,2.672,0,1,1,27.871,25.2,2.675,2.675,0,0,1,25.2,27.871Z"
                  transform="translate(-16.038 -16.038)"
                ></path>
                <path
                  class="b"
                  d="M43.145,16a1.145,1.145,0,1,0,1.145,1.145A1.147,1.147,0,0,0,43.145,16Z"
                  transform="translate(-29.022 -12.946)"
                ></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/techienotfound"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.322"
                height="18.322"
                viewBox="0 0 18.322 18.322"
              >
                <path
                  class="b"
                  d="M20.978,8H13.344A5.35,5.35,0,0,0,8,13.344v7.634a5.35,5.35,0,0,0,5.344,5.344h7.634a5.35,5.35,0,0,0,5.344-5.344V13.344A5.35,5.35,0,0,0,20.978,8ZM24.8,20.978A3.821,3.821,0,0,1,20.978,24.8H13.344a3.821,3.821,0,0,1-3.817-3.817V13.344a3.821,3.821,0,0,1,3.817-3.817h7.634A3.821,3.821,0,0,1,24.8,13.344Z"
                  transform="translate(-8 -8)"
                ></path>
                <path
                  class="b"
                  d="M26.87,23.634h-2.29V22.489h.764a2.29,2.29,0,0,0,0-4.58h-.8A2.29,2.29,0,0,0,20,18.29V24.4a3.821,3.821,0,0,0,3.817,3.817H26.87a2.29,2.29,0,1,0,0-4.58Zm0,3.054H23.816a2.293,2.293,0,0,1-2.29-2.29V18.29a.763.763,0,0,1,1.527,0v.382a.762.762,0,0,0,.763.763h1.527a.763.763,0,0,1,0,1.527H23.816a.764.764,0,0,0-.763.763v1.909a1.528,1.528,0,0,0,1.527,1.527h2.29a.763.763,0,1,1,0,1.527Z"
                  transform="translate(-15.419 -12.946)"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h3 className="align-start">I am</h3>
          <h1 className="headerName">Manik Chhabra</h1>
          <div className="typewriter">
            <span>FrontEnd Developer</span>
          </div>
          <p className="goals">
            with 3.5 years of experience in web application development and
            programming.
          </p>
          <div className="links">
            <a
              href="https://drive.google.com/u/1/uc?id=1PIqYaqAF9waUc-Ff4dYmmb5WeJI9ipZ2&export=download"
              download=""
              class="download"
            >
              Download CV{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </a>
            <a class="contact" href="mailto:manikchhabra10@gmail.com">
              Contact Me{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default HomeScreenComponent;
