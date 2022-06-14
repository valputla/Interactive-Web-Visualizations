
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
        ;
        let samples = data.samples;
        let names = data.names;
    for(let i=0; i<names.length; i++){
      let option_sel = d3.select("#selDataset")
      option_sel.append("option").text(names[i]).attr("value", names[i]);
    }
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
        let demo_info = data.metadata;
    for(let i=0; i<demo_info.length; i++){
      let option_select = d3.select(".panel-body")
      option_select.append("option").text(demo_info[i]).attr("value", demo_info[i]);
}


  createBar(x_sliced,y_sliced, z_sliced);
  createBubble(x, y, z);
  createSummary();
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

function createSummary(){
  console.log(demo_info[i]);
};

  
   


    // // // // create dropdown/select
    // d3.selectAll("#selDataset").on("change", updatePlotly);
    // function updatePlotly() {
    //   let dropdownMenu = d3.select("#selDataset");
    //   let dataset = dropdownMenu.property("value");
    //   let x = [];
    //   let y = [];
      // if (dataset === 'dataset1') {
      //   x = [1, 2, 3, 4, 5];
      //   y = [1, 2, 4, 8, 16];
      // }
      // else if (dataset === 'dataset2') {
      //   x = [10, 20, 30, 40, 50];
      //   y = [1, 10, 100, 1000, 10000];
      // }
      // // Note the extra brackets around 'x' and 'y'
      // Plotly.restyle("plot", "x", [x]);
      // Plotly.restyle("plot", "y", [y]);
}
    
  

  
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