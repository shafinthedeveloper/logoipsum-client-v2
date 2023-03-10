import React from "react";
import { GrDocumentDownload } from "react-icons/gr";
import { default as image1, default as image2, default as image3, default as image4 } from "../../../assets/images/pdf/84b64599ffd4d19e6d5920d5a29fdcd4.png";
import styles from "./IRSForms.module.css";


import file1 from "../../../assets/file/4506T Request For Transcript Tax Form.pdf";
import file4 from "../../../assets/file/8379 Injured Spouse Allocation Form.pdf";
import file2 from "../../../assets/file/9465 IRS Installment Agreement.pdf";
import file3 from "../../../assets/file/IRS Extension Form 4868.pdf";

const IRSForms = () => {
  const data = [
    {
      id: 1,
      header: "IRS Tax Transcript",
      text: "Download this federal form to request an official IRS Tax Transcript for any year from the IRS.  * Please note that this transcript does not include your state tax return, this is only the FEDERAL. ",
      image: image1,
      subText: "4506T REQUEST FOR TAX TRANSCRIPT FORM",      
      link: file1
    },
    {
      id: 2,
      header: "Installment agreement",
      text: "Download this federal form to request an installment agreement for filers who owe the IRS money and do not want to pay one lump sum while still be in compliance.  ",
      image: image2,
      subText: "9465 IRS INSTALLMENT AGREEMENT FORM",      
      link: file2,
    },
    {
      id: 3,
      header: "Extension to file",
      text: "Download this federal form to request for an extension to file your taxes for all late filers.  ",
      image: image3,
      subText: "4868 IRS EXTENSION FORM",      
      link: file3,
    },
    {
      id: 4,
      header: "Separate your tax responsibilities",
      text: "Download this federal form to request to separate your tax responsibilities from your spouse.  * Please note that this does not guarantee that your request will be honored by the IRS.",
      image: image4,
      subText: "8379 INJURED SPOUSE ALLOCATION FORM",
      link: file4,
    },
  ];
  return (
    <div className="container">
      <div className={styles.irsForms}>
        <h2>
          <span>
            <GrDocumentDownload />
          </span>{" "}
          IRS DOWNLOADABLE FORMS
        </h2>
        <div className={styles.iRSFormsInfo}>
          {data.map((item) => (
            <div key={item.id} className={styles.iRSFormsInfoCards}>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
              <a  href={item?.link}
                 rel="noreferrer"
                 target="_blank">
                <div>
                   <img src={item.image} alt="" width="85" height="85" />
                </div>
                <h6>{item.subText}</h6>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IRSForms;
