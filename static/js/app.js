
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init(){
    // code that runs once (only on page load or refresh)
    const dataPromise = d3.json(url);
    // this checks that our initial function runs.
    console.log(dataPromise);
    console.log("The Init() function ran");

   let myJSON = d3.json(url).then(function(data) {
        // console.log(data);
        // console.log(data.names);
        
        // creates IDs into the dropdown menu
        let samples = data.samples;
        let names = data.names;
    for(let i=0; i<names.length; i++){
      let option_sel = d3.select("#selDataset")
      option_sel.append("option").text(names[i]).attr("value", names[i]);
    }

    // charts for patient ID '940'
  let patient_id = "940"
  let results = samples.filter(i => i.id == patient_id);
  console.log(results[0]);

  let x = results[0].otu_ids; 
  let y = results[0].sample_values;
  let z = results[0].otu_labels;
  let y_sliced = y.slice(0,10).reverse();
  let x_sliced = x.slice(0,10).map(i => `"OTU ${i}"`).reverse();
  let z_sliced = z.slice(0,10).reverse();
  
  // console.log(x_sliced);
  // console.log(y_sliced);

      let demo_info = data.metadata.filter(i => i.id == patient_id);
      console.log(`This is demo info ${demo_info[0].length}`);
      Object.entries(demo_info[0]).forEach(([key, value])=> {
        let option_select = d3.select(".panel-body");
        option_select.append("p").text(`${key.toUpperCase()}: ${value}`);
      });
    // for(let i=0; i<demo_info[0].length; i++){
    //   let option_select = d3.select(".panel-body")
    //   option_select.append("p").text("hello");
    // }

  createBar(x_sliced,y_sliced, z_sliced);
  createBubble(x, y, z);
  // createGauge(x, y);
  // createSummary(value);

  // createDemographics(value)
  // optionChanged(value);

     });

function createBar(x, y, z){
  let trace1 = {
    x: y,
    y: x,
    text: z,
    type: "bar",
    orientation: "h"
  };
  
  let traceData = [trace1];

  let layout = {
    title: "Top 10 OTUs Found in a Given Indivdual",
    margin: {
      l: 75,
      r: 75,
      t: 75,
      b: 75
    }
  };
  
  Plotly.newPlot("bar", traceData, layout);
    
  };

function createBubble(x, y, z){
  let trace2 = {
    x: x,
    y: y,
    text: z,
    mode: 'markers',
    marker: {
      size: y, 
      color: x
    }
  };
  var data = [trace2];
  
  var layout = {
    title: "Sample Values of Microbes in the Human Belly Button",
    showlegend: false,
    height: 500,
    width: 1000
  };
  
  Plotly.newPlot("bubble", data, layout);
};


// function createGauge(x, y, z){
//   let trace3 = 	{
//     domain: { x: [0, 1], y: [0, 1] },
//   value: 270
//   title: { text: "Speed" },
//   type: "indicator",
//   mode: "gauge+number"
// }};
//   var dataGauge =[trace3]

//   var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
//   Plotly.newPlot("gauge", trace3, layout);

// ];

// function createSummary(ID){
//   for(i=0; i<metadata.length; i++){
//     if (ID !=)
//   };



// }
// function optionChanged(newID){
//     createBubble(newID)
//     createBar(newID)
//     createSummary(newID)
// };
   


}


// });

// function that runs whenever the dropdown is changed
// this function is in the HTML and is called with an input called 'this.value'
// that comes from the select element (dropdown)
// function optionChanged(newID){
//     // code that updates graphics
//     // one way is to recall each function
//     createBubble(newID)
//     createBar(newID)
//     createSummary(newID)

// }
init();

// function createSummary(value) {
//   let demo_info = [];
//   d3.json(url).then(function(data) {
//     for(let i=0; i < 10; i++){
//       demo_info.push(data.metadata[i]);
//   }
//     console.log(demo_info);
//     let demo_chart_data = "";
//     for (let i=0; i < metadata.length; i++){
//       if (value == demo_chart_data[i].id){
//         demo_chart_data = demo_info[i];
//       }
//     }
//     console.log("Demo Data", demo_chart_data);
//           let demo_select = d3.select('#sample-metadata');
//           demo_select.html("ID: " + demo_chart_data.id + "<br> ethnicity: " + demo_chart_data.ethnicity + "<br> gender: " + demo_chart_data.gender + "<br> age: " + demo_chart_data.age + "<br> location: " + demo_chart_data.location + "<br> bbtype: " + demo_chart_data.bbtype + "<br> wfreq: " + demo_chart_data.wfreq);
    
  
//   });
// }

//   function alertMe(){

  //     // Below, two methods for getting the select element value
  //     // Select DOM node
  //     let val = d3.select("#cars").node().value;
  //     console.log(`Node Selection is ${val}`);
  //     alert(`Node Selection is ${val}`);
      //     // Select the element property
  //     function alertMe(){
  //     let valAlt = d3.select("#selDataset").property("value");
  //     console.log(`Property Selection is ${valAlt}`);
  //     alert(`Property Selection is ${valAlt}`);
  
  
//   function optionChanged(value) {
//     if (value != "Select ID") {
//         createBarChart(value);
//         createBubbleChart(value);
//         createDemographics(value);
//     }
// };


