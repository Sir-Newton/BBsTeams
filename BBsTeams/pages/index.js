import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
return (
<div className="container">
    <Head>
        <title>D3Teams with Links</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <Header className="title"  align="center" title="INTERACTIVE VISUALIZATION GROUP ASSESMENT" />
        <p>
    <h2> GROUP 4 INTERACTIVE VISUALIZATION ASSESMENT </h2>
    </p>

     <div id="mainbody" className="widecard">      
       
        <h4 align="center">WHAT IS INTERACTIVE VISUALIZATION</h4>
        <p> 
            The technique of developing interactive visualizations to comprehend patterns, variances, and derive useful and meaningful 
            insights from data is known as data visualization. <br/> Data visualization is primarily used for data cleansing, exploration, and discovery, as 
            well as for conveying outcomes to Business stakeholders. <br/> It can be used as a tool for data pre-processing as well as gaining insights into the data. 
            The key to effective communication of outcomes is having the correct selection of visuals for diverse data types and business scenarios. <br/> In this project, 
            we will be discussing business insights that can be drawn from the data gotten from a Superstore Giant in the United States of America.
        </p>

        <h4 className="sky" align="center">THE DATASET</h4>
        <p>The Superstore dataset was gotten from  
            <a href="https://www.kaggle.com/datasets/vivek468/superstore-dataset-final"> Kaggle </a>
            and it about a 
            superstore giant looking to understand which product, categories, regions and customer segment they focus on or be wary of. 
            The dataset contains 9994 rows of records and 21 columns of attributes with no missing values.
        </p>



        <h4 align="center" className="sky">DATA PREPROCESSING </h4>
        Data pre-processing is a data mining technique that transforms raw data into an understandable format.  <br/> It includes data cleaning, reduction, and transformation.
        The python 3 IDE was employed in the pre-processing of the data.
        The first step was to input and load the dataset into python after which the null values within the dataset was checked but none was found.  <br/> For the next step, unique () is used to check qualitative data for noises of impossible values such as incorrect misspelt data entries, or errors of inconsistent data such as not comparable numerical measurement formats and data types.
        Lastly, attributes that won’t be important in the course of our analysis were removed leaving the important features. <br/> For example, the attribute ‘Country’ was dropped since it is redundant with 100% exact same values of "United States" for all records. 'Postal Code' is also dropped since this attribute is less important towards the profit-centric task. The list of attributes/feature that are important for our analysis are as follows:


        
            City => City of residence of of the Customer. <br/>
            State => State of residence of the Customer.  <br/>
            Region => Region where the Customer belong.  <br/>
            Category => Category of the product ordered.  <br/>
            Sub-Category => Sub-Category of the product ordered.  <br/>
            Product Name => Name of the Product.  <br/>
            Sales => Sales of the Product.  <br/>
            Quantity => Quantity of the Product.  <br/>
            Discount => Discount provided.  <br/>
            Profit => Profit/Loss incurred. <br/>

   
            Find the preprocessed dataset at <a href="https://drive.google.com/file/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/view"> Superstore DATASET </a> <br/>
                
        <h4 align="center" className="sky"> THE CHARTS </h4>
    <p align="left">  
                  
            
            <div class="widecard">
            <a className="card" href="https://oyewalesbarchart.netlify.app">
                <div>
                    <h4 class="chart-title">Bar Chart</h4>
                    <p class="chart-paragraph">Name: OYEWALE OREDEIN</p>
                    <p class="chart-paragraph">Student Number: B1011452</p>
                </div>
            </a>
            <a className="card" href="https://likhitavadapalycircularbarchart.netlify.app/">
                <div>
                    <h4 class="chart-title">Circular Bar Chart</h4>
                    <p class="chart-paragraph">Name: LIKHITA VADAPALLY </p>
                    <p class="chart-paragraph">Student Number: W9543325</p>
                </div>
            </a>
            <a className="card" href="https://giftwigbuduslinechart.netlify.app/">
                <div>
                    <h4 class="chart-title">Line Graph</h4>
                    <p class="chart-paragraph">Name: GIFT WIGBUDU</p>
                    <p class="chart-paragraph">Student Number: B1153110</p>
                </div>
            </a>
    
        </div>
        <div className="scrum-link">
            <h3 className="sky" align="center"> SCRUM DOCUMENTATION </h3>
<p>To view the entire planning process, click the link below</p>
            <a href="https://docs.google.com/spreadsheets/d/1owUIFHjrN1pRiAGGPRhX84ZkpYWh56y_/edit#gid=1392942190">Scrum </a>
        </div>
<br/><br/><br/>

        </p>
    </div>
    </main>

    <Footer />
</div>
)
}
