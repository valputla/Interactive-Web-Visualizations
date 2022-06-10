const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// SAMPLE STRUCTURE
// 1.  Check inspector console to see if each function is running on page load


// function that contains instructions at page load/refresh
// function does not run until called
function init(){
    // code that runs once (only on page load or refresh)
    const dataPromise = d3.json(url);
    // this checks that our initial function runs.
    console.log(dataPromise);
    console.log("The Init() function ran");

    d3.json(url).then(function(data) {
        console.log(data);
      });

    let data = [{
        x: [940, 941, 943, 944],
        y: [1167, 3540, 922, 2745], 
        type: 'bar'
      }];
      Plotly.newPlot("plot", data);
  
    // // // run functions to generate plots
    // createScatter('940')
    function createScatter(){

    };


    // createBar('940')
    function createBar (){

    };


    // createSummary('940')
    function createSummary() {

    };


    // // // create dropdown/select
    d3.selectAll("#selDataset").on("change", updatePlotly);
    function updatePlotly() {
      let dropdownMenu = d3.select("#selDataset");
      let dataset = dropdownMenu.property("value");
      let x = [];
      let y = [];
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



