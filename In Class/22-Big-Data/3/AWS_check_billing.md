# Checking AWS Billing

If you shut down everything in AWS, you should not accrue any costs. To ensure that you have properly shut down all AWS services, follow these steps.

1. In the AWS Management Console, search for Billing and click the result.

  ![aws billing dashboard](Images/billing_dashboard.png)

2. On the Billing & Cost Management dashboard, scroll down to find your Spend Summary. This summary is only a forecast and does not reflect what you will be charged. It also doesn't apply to your AWS free usage credits. The amount displayed should not be more than a few dollars.

  ![spend summary](Images/billing_spend_summary.png)

3. Scroll further down to find the Top Free Tier Services by Usage section.Check hat all your services are within the Free Tier Usage. If you are close to the limit or if your usage is higher than expected for any services, delete them and limit future usage for the month.

  ![top free tier services](Images/billing_top_free_tier.png)

4. Navigate to the menu on the left side of the page and select Bills.

  ![bills](Images/billing_bills.png)

   * The Bills dashboard displays your up-to-date service charges. You should see **$0.00** listed next to each service. You can explore individual services by selecting the arrow to the left of the service.

  ![service charges](Images/billing_service_charges.png)

  * This page will also display how the AWS Free Tier credits will be applied. Click the arrow next to Relational Database Services to view the charge you accrued and the AWS credits applied to it.

  ![expanded charges](Images/billing_expanded_charges.png)

For the next few months, check your AWS statements and the Bills page to make sure that there are no surprise costs or reoccurring paid services. For more information about the Free Tier, read this [AWS article from Amazon](https://aws.amazon.com/premiumsupport/knowledge-center/stop-future-free-tier-charges/).

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
