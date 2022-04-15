import "./sass/main.scss";

const data = require("./data/data0.json");
// console.log(typeof data);

const hoMainContainerEl = document.querySelector(".ho-main-container");

const modifiedObj = {};
let serviceMainList = [];
Object.entries(data).forEach((item) => {
  // console.log(item);
  serviceMainList.push(item[1].serviceNameMain);
});

serviceMainList = [...new Set(serviceMainList)];
// console.log(serviceMainList);
serviceMainList.forEach((item) => {
  modifiedObj[item] = [];
});

// console.log(modifiedObj);

serviceMainList.forEach((sMain) => {
  Object.entries(data).forEach((item) => {
    // console.log(item);
    serviceMainList.push(item[1].serviceNameMain);

    if (sMain == item[1].serviceNameMain) {
      modifiedObj[sMain].push(data[item[0]]);
    }
  });
});
// console.log(modifiedObj);

// Object.entries(modifiedObj).forEach((item) => console.log(item));
Object.entries(modifiedObj).forEach(([serviceMain, ServiceDetailes]) => {
  let html0 = `
  
  <input type="checkbox" name="" id="serviceShow">
  <div class="ho-service__name--main">
  
        <p class="ho-service__name--main__value">${serviceMain}</p>

        <svg class="chevron-down" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
<path fill="#000000" d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"></path>
</svg>
        
        
      </div>
    

      
  `;

  ServiceDetailes.forEach((service) => {
    html0 =
      html0 +
      `
    
    <div class="ho-service--detailes">
        <div class="ho-service__name--sub">
          <p class="ho-service__name--sub__value">${service.serviceNameSub}</p>
        </div>

        <div class="ho-service__isElectronic">
          <p class="ho-service__isElectronic__value">${
            service.isElectronic ? "الکترونیکی" : "حضوری"
          }</p>
        </div>

        <div class="ho-service__guideLink">
          <a href="${
            service.guideLink
          }" class="ho-service__guideLink__value">راهنما</a>
        </div>

        <div class="ho-service__mardomLink">
          <a href="${
            service.mardomLink
          }" class="ho-service__mardomLink__value">شناسنامه خدمت</a>
        </div>

        <div class="ho-service__link">
          <a href="${
            service.serviceLink
          }" class="ho-service__link__value">لینک خدمت</a>
        </div>

        <div class="ho-service__faqLink">
          <a href="${
            service.servicFAQ
          }" class="ho-service__faqLink__value">سئوالات متداول</a>
        </div>

        <div class="ho-service__slaLink">
          <a href="${
            service.serviceSLA
          }" class="ho-service__slaLink__value">توافقنامه سطح خدمات</a>
        </div>

        <div class="ho-service__contactInfo">
          <p class="ho-service__contactInfo__value">${service.contactInfo}</p>
        </div>

      </div>
    `;
  });

  let html = `
  
  
  <div class="ho-service-container">

 
  
  ${html0} 
  
  </div>`;

  hoMainContainerEl.insertAdjacentHTML("beforeend", html);
});

// click
