let HW3_myGraph = document.getElementById('HW3_myGraph');
let HW3_trace1 = {};
HW3_trace1.type = "pie";
HW3_trace1.title = "2023年10月支出";
HW3_trace1.hole = 0.5;
HW3_trace1.labels = [];
HW3_trace1.values = [];
HW3_trace1.marker = { colors: ['#FEDFE1', '#E87A90', '#B5495B','#D05A6E','#FEDFE1', '#B5495B','#D05A6E'] };
HW3_trace1.domain = {
    row:0,
    column:0
};

for(let x = 0; x < evaluation_ratio_1.length; x++){
    HW3_trace1.labels[x] = evaluation_ratio_1[x]['name'];
    HW3_trace1.values[x] = evaluation_ratio_1[x]['count'];
}

let HW3_data = [];
HW3_data.push(HW3_trace1);

let HW3_layout = {
    margin:{
        t:10,
        l:0
    }
};
Plotly.newPlot(HW3_myGraph, HW3_data, HW3_layout);