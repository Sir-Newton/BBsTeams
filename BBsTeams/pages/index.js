import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" padding="10px">
      <Head>
        <title>D3Teams with Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="BBs Teams App!" />
        <p className="description" >
        
                <h3 align="center">GROUP 4 INTERACTIVE VISUALZATION ASSESMENT</h3>
                <h4 >  </h4>
                <h4 align="center">WHAT IS INTERACTIVE VISUALIZATION</h4>
                <p width="640"> The technique of developing interactive visualizations to comprehend patterns, variances, and derive useful and meaningful 
    insights from data is known as data visualization. Data visualization is primarily used for data cleansing, exploration, and discovery, as 
    well as for conveying outcomes to Business stakeholders. It can be used as a tool for data pre-processing as well as gaining insights into the data. 
    The key to effective communication of outcomes is having the correct selection of visuals for diverse data types and business scenarios. In this project, 
    we will be discussing business insights that can be drawn from the data gotten from a Superstore Giant in the United States of America.
    </p>
    
    <h4 align="center">THE DATASET</h4>
     <p width="640">The Superstore dataset was gotten from  
    <a href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true"> Kaggle </a>
    (https://www.kaggle.com/datasets/vivek468/superstore-dataset-final ) and it about a 
    superstore giant looking to understand which product, categories, regions and customer segment they focus on or be wary of. 
    The dataset contains 9994 rows of records and 21 columns of attributes with no missing values.
 </p>
    
    
    
                <h4 align="center">DATA PREPROCESSING </h4>
Data pre-processing is a data mining technique that transforms raw data into an understandable format. It includes data cleaning, reduction, and transformation.
The python 3 IDE was employed in the pre-processing of the data.
The first step was to input and load the dataset into python after which the null values within the dataset was checked but none was found. For the next step, unique () is used to check qualitative data for noises of impossible values such as incorrect misspelt data entries, or errors of inconsistent data such as not comparable numerical measurement formats and data types.
Lastly, attributes that won’t be important in the course of our analysis were removed leaving the important features, For example, the attribute ‘Country’ was dropped since it is redundant with 100% exact same values of "United States" for all records. 'Postal Code' is also dropped since this attribute is less important towards the profit-centric task. The list of attributes/feature that are important for our analysis are as follows:

  
    <p align="left">
City => City of residence of of the Customer.
State => State of residence of the Customer.
Region => Region where the Customer belong.
Category => Category of the product ordered.
Sub-Category => Sub-Category of the product ordered.
Product Name => Name of the Product
Sales => Sales of the Product.
Quantity => Quantity of the Product.
Discount => Discount provided.
Profit => Profit/Loss incurred.

<h4 align="center"> THE CHARTS </h4>
STUDENT NAME: (not needed but as a guide)
OYEWALE OREDEIN
B1011452
(link to the chart) (bar chart)

LIKHITA VADAPALLY
W9543325
Link to chart (circular bar chart)

GIFT WIGBUDU
B1153110
Link to chart(line graph)

              </p>
                
                
    <a href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true"> Link to the dataset </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
