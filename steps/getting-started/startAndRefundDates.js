import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { StartApplicationPage } from "../../pages/StartApplicationPage.js";
       
         Given('user is on the enrollment page', async function () {
           await startApplicationPage.login();
         });
        
         Then('the program start date is displayed', async function () {
          await expect(startApplicationPage.programStartDate).toBeVisible();
        });
        
        Then('the program refund date is displayed', async function () {
          await expect(startApplicationPage.refundEndDate).toBeVisible();
        });
     
       
         Then('the program start date for the program is correct', async function () {
         const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
         const EXPECTED_START_DATE = productInfo.startDate;
        //  console.log(`Actual Start Date: ${ACTUAL_START_DATE}`);
        //  console.log(`Expected Start Date: ${EXPECTED_START_DATE}`);

        console.log(`Expected upfront price ${productInfo.prices[0].baseAmount}`);
        console.log(`Expected upfront price ${productInfo.prices[0].upfrontDiscountAmount}`);
         expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);

         });
      

         Then('the program refund date for the program is correct', async function () {
         const ACTUAL_START_DATE = await startApplicationPage.refundEndDate.innerText();
         const EXPECTED_START_DATE = productInfo.refundDate;
         console.log(`Actual Refund Date: ${ACTUAL_START_DATE}`);
         console.log(`Expected Refund Date: ${EXPECTED_START_DATE}`);
         expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);
         });

        