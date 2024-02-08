import React from "react";

import "./Report.css";
import image2019 from "../graphics/2019-report-image.jpg";
import image2022 from "../graphics/2022-report-image.jpg";

const Report = () => {
  return (
    <>
        <div class="about-section">
          <h1>REPORTS</h1>
          <p>
            <i>Big At Heart - Social Service For All</i>
          </p>
        </div>

        {/* <br><br/> */}

        <div class="row">
          <div class="column">
            <div class="card">
              <img
                src="https://assets-global.website-files.com/5da60733afec9db1fb998273/63c1d928d7e4f8453d4964c9_ExplainingPayments_Blog_Thumbnail.jpg"
                alt="2023"
                width="100%"
              />
              <div class="container">
                <h2>2023 Annual Report</h2>
                <p>
                  <a href="Profit-and-Loss.xlsx">Profit & Loss</a>
                </p>
                <p>
                  <a href="Volunteer-Attendance.xlsx">Volunteer Attendance</a>
                </p>
                <p>
                  <a href="Impacted-Organizations.docx">
                    Organizations Impacts
                  </a>
                </p>
                <p>
                  <a href="AnnualReport.pdf" target="_blank">
                    <button class="button">Generate</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={image2022} alt="2022" width="100%" height="262px" />
              <div class="container">
                <h2>2022 Annual Report</h2>
                <p>
                  <a href="Profit-and-Loss.xlsx">Profit & Loss</a>
                </p>
                <p>
                  <a href="Volunteer-Attendance.xlsx">Volunteer Attendance</a>
                </p>
                <p>
                  <a href="Impacted-Organizations.docx">
                    Organizations Impacts
                  </a>
                </p>
                <p>
                  <a href="AnnualReport.pdf" target="_blank">
                    <button class="button">Generate</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="https://stories.starbucks.com/uploads/2022/04/SBX20220425-2021GESIReport-Divider-1024x493.jpg"
                alt="2021"
                width="100%"
                height="262px"
              />
              <div class="container">
                <h2>2021 Annual Report</h2>
                <p>
                  <a href="Profit-and-Loss.xlsx">Profit & Loss</a>
                </p>
                <p>
                  <a href="Volunteer-Attendance.xlsx">Volunteer Attendance</a>
                </p>
                <p>
                  <a href="Impacted-Organizations.docx">
                    Organizations Impacts
                  </a>
                </p>
                <p>
                  <a href="AnnualReport.pdf" target="_blank">
                    <button class="button">Generate</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <div class="card">
              <img
                src="https://croi.ie/wp-content/uploads/2021/12/2020-Annual-report-feature-image.png"
                alt="2020"
                width="100%"
                height="262px"
              />
              <div class="container">
                <h2>2020 Annual Report</h2>
                <p>
                  <a href="Profit-and-Loss.xlsx">Profit & Loss</a>
                </p>
                <p>
                  <a href="Volunteer-Attendance.xlsx">Volunteer Attendance</a>
                </p>
                <p>
                  <a href="Impacted-Organizations.docx">
                    Organizations Impacts
                  </a>
                </p>
                <p>
                  <a href="AnnualReport.pdf" target="_blank">
                    <button class="button">Generate</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={image2019} alt="2019" width="100%" height="262px" />
              <div class="container">
                <h2>2019 Annual Report</h2>
                <p>
                  <a href="Profit-and-Loss.xlsx">Profit & Loss</a>
                </p>
                <p>
                  <a href="Volunteer-Attendance.xlsx">Volunteer Attendance</a>
                </p>
                <p>
                  <a href="Impacted-Organizations.docx">
                    Organizations Impacts
                  </a>
                </p>
                <p>
                  <a href="AnnualReport.pdf" target="_blank">
                    <button class="button">Generate</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="https://media.istockphoto.com/id/861762820/vector/new-year-2018-calendar-vector-icon.jpg?s=612x612&w=0&k=20&c=TwsfO8ounBXJoAGDt9IG7Jq2C0HKyXkTfybTHlZOFcQ="
                alt="2018"
                width="100%"
                height="262px"
              />
              <div class="container">
                <h2>2018 Annual Report</h2>
                <p>
                  <a href="Profit-and-Loss.xlsx">Profit & Loss</a>
                </p>
                <p>
                  <a href="Volunteer-Attendance.xlsx">Volunteer Attendance</a>
                </p>
                <p>
                  <a href="Impacted-Organizations.docx">
                    Organizations Impacts
                  </a>
                </p>
                <p>
                  <a href="AnnualReport.pdf" target="_blank">
                    <button class="button">Generate</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Report;
