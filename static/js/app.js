
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

        let samples = data.samples;

        let names = data.names;
    for(let i=0; i<names.length; i++){
      let option_sel = d3.select("#selDataset")
      option_sel.append("option").text(names[i]).attr("value", names[i]);
    }
  let patient_id = "940"
  let results = samples.filter(i => i.id == patient_id);
  // let results_sorted = results.sort()
  console.log(results[0]);

  let x = results[0].otu_ids; 
  let y = results[0].sample_values;
  let z = results[0].otu_labels;
  let y_sliced = y.slice(0,10).reverse();
  let x_sliced = x.slice(0,10).reverse();
  let z_sliced = z.slice(0,10).reverse();
  console.log(x_sliced);
  console.log(y_sliced);

  createBar(x_sliced,y_sliced, z_sliced);

  // }

  // function createBar(id){
//     // code that makes bar chart at id='bar'

//     // checking to see if function is running
//     console.log(`This function generates bar chart of ${id} `)


     });

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

    //     // createBar('940')
    function createBar(x, y, z){
      let trace1 = {
        x: y,
        y: x,
        text: z,
        name: "Greek",
        type: "bar",
        orientation: "h"
      };
      
      let traceData = [trace1];
      
      // Apply a title to the layout
      let layout = {
        title: "Greek gods search results",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
      
      Plotly.newPlot("bar", traceData, layout);
        
      }

    // };

    // Plotly.newPlot("plot", data);
  
    // // // // run functions to generate plots
    // // createScatter('940')
    // function createScatter('940'){

    // };


    // // createBar('940')
    // function createBar ('940'){

    // };


    // // createSummary('940')
    // function createSummary('940') {

    // };


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
//     createScatter(newID)
//     createBar(newID)
//     createSummary(newID)

// }

// function createScatter(id){
//     // code that makes scatter plot at id='bubble'

//     // checking to see if function is running
//     console.log(`This function generates scatter plot of ${id} `)
// }

// function createBar(id){
//     // code that makes bar chart at id='bar'

//     // checking to see if function is running
//     console.log(`This function generates bar chart of ${id} `)

// }

// function createSummary(id){
//     // code that makes list, paragraph, text/linebreaks at id='sample-meta'

//     // checking to see if function is running
//     console.log(`This function generates summary info of ${id} `)
// }


// function called, runs init instructions
// runs only on load and refresh of browser page
init();



