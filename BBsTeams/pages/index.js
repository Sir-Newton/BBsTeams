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
        <Header className="title" title="INTERACTIVE VISUALIZATION GROUP ASSESMENT" />
        <p className="description">
    <code> GROUP 4 INTERACTIVE VISUALIZATION ASSESMENT
    </code>
    </p>

     <div id="mainbody" className="card">      
       
        <h4>WHAT IS INTERACTIVE VISUALIZATION</h4>
        <p> 
            The technique of developing interactive visualizations to comprehend patterns, variances, and derive useful and meaningful 
            insights from data is known as data visualization. <br/> Data visualization is primarily used for data cleansing, exploration, and discovery, as 
            well as for conveying outcomes to Business stakeholders. <br/> It can be used as a tool for data pre-processing as well as gaining insights into the data. 
            The key to effective communication of outcomes is having the correct selection of visuals for diverse data types and business scenarios. <br/> In this project, 
            we will be discussing business insights that can be drawn from the data gotten from a Superstore Giant in the United States of America.
        </p>

        <h4 align="center">THE DATASET</h4>
        <p>The Superstore dataset was gotten from  
            <a href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true"> Kaggle </a>
            (https://www.kaggle.com/datasets/vivek468/superstore-dataset-final ) and it about a 
            superstore giant looking to understand which product, categories, regions and customer segment they focus on or be wary of. 
            The dataset contains 9994 rows of records and 21 columns of attributes with no missing values.
        </p>



        <h4 align="center">DATA PREPROCESSING </h4>
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

        <h4 align="center"> THE CHARTS </h4>
    <p align="left">  
        <a href="./BBsTeams/teammates/Oyewale - Bar-chart/index.html"> Oyewale </a>
    OYEWALE OREDEIN  <br/>
        B1011452  <br/>
        (link to the chart) (bar chart)  <br/>

        LIKHITA VADAPALLY  <br/>
        W9543325  <br/>
        Link to chart (circular bar chart) <br/>

        GIFT WIGBUDU <br/>
        B1153110  <br/>
        Link to chart(line graph)  <br/>

            
            
            <div class="charts">
            <a class="chart" href="./Stanley-B1204687/ICA.html">
                <div>
                    <h4 class="chart-title">Lollipop Chart</h4>
                    <p class="chart-paragraph">Name: Stanley Osondu</p>
                    <p class="chart-paragraph">Student Number: B1161681</p>
                </div>
            </a>
            <a class="chart" href="./GodspowerWodi-B1257513/index.html">
                <div>
                    <h4 class="chart-title">Area Chart</h4>
                    <p class="chart-paragraph">Name: Godspower Wodi</p>
                    <p class="chart-paragraph">Student Number: B1257513</p>
                </div>
            </a>
            <a class="chart" href="./Rita-B1161681/ica.html">
                <div>
                    <h4 class="chart-title">Bar/Pie Chart</h4>
                    <p class="chart-paragraph">Name: Rita Ozoh</p>
                    <p class="chart-paragraph">Student Number: B1161681</p>
                </div>
            </a>
            <a class="chart" href="./Olaide-A0137168/index.html">
                <div>
                    <h4 class="chart-title">Chained Chart</h4>
                    <p class="chart-paragraph">Name: Olaide Olanipekun</p>
                    <p class="chart-paragraph">Student Number: A0137168</p>
                </div>
            </a>
            <a class="chart" href="./Seyi-A0308843/myica.html">
                <div>
                    <h4 class="chart-title">Connected Scatter plot</h4>
                    <p class="chart-paragraph">Name: Oluseyi Olukola</p>
                    <p class="chart-paragraph">Student Number: A0308843</p>
                </div>
            </a>
        </div>
        <div class="scrum-link">
            <h3>Want to view the planning process?</h3>
            <p>Click on the link below to view the scrum process carried out</p>
            <a href="https://1drv.ms/x/s!Ahhb1f06IvoagQn9Q4z8ylh7EQrN?e=K9Rtw4">Scrum </a>
        </div>
<br/><br/><br/>


        <a href="https://docs.google.com/spreadsheets/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/edit?rtpof=true"> Link to the dataset </a>
        </p>
    </div>
    </main>

    <Footer />
</div>
)
}
