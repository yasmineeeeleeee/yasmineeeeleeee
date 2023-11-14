let HW1_myGraph = document.getElementById('HW1_myGraph');

let HW1_trace1 = {};
HW1_trace1.mode = "markers+text";
HW1_trace1.type = "scatter";
HW1_trace1.name = "TAIWAN";
HW1_trace1.marker = {
    size:5,
    color:'#1C1C1C'
};
HW1_trace1.x = [];
HW1_trace1.y = [];
HW1_trace1.text = [];
HW1_trace1.textposition = "bottom center";
HW1_trace1.textfont = {
    family:"Raleway, sans-serif",
    size:8
};

for(let i = 0; i < HW1_set1.length; i++){
    HW1_trace1.x[i] = HW1_set1[i][0];
    HW1_trace1.y[i] = HW1_set1[i][1];
    HW1_trace1.text[i] = HW1_set1[i][2];
}

let HW1_trace2 = {};
HW1_trace2.mode = "lines+text";
HW1_trace2.type = "scatter";
HW1_trace2.name = "SWITZERLAND";
HW1_trace2.line = {
    color: '#E83015' 
};
HW1_trace2.x = [];
HW1_trace2.y = [];
HW1_trace2.text = [];
HW1_trace2.textposition = "bottom center";
HW1_trace2.textfont = {
    family:"Raleway, sans-serif",
    size:8
};

for(let i = 0; i < HW1_set2.length; i++){
    HW1_trace2.x[i] = HW1_set2[i][0];
    HW1_trace2.y[i] = HW1_set2[i][1];
    HW1_trace2.text[i] = HW1_set2[i][2];
}

let HW1_trace3 = {};
HW1_trace3.mode = "lines+markers+text";
HW1_trace3.type = "scatter";
HW1_trace3.name = "URUGUAY";
HW1_trace3.marker = {
    size:5,
    color: '#F7C242',
    line: {
        color: '#F7C242' 
    }
};
HW1_trace3.x = [];
HW1_trace3.y = [];
HW1_trace3.text = [];
HW1_trace3.textposition = "bottom center";
HW1_trace3.textfont = {
    family:"Raleway, sans-serif",
    size:8
};

for(let i = 0; i < HW1_set1.length; i++){
    HW1_trace3.x[i] = HW1_set3[i][0];
    HW1_trace3.y[i] = HW1_set3[i][1];
    HW1_trace3.text[i] = HW1_set3[i][2];
}

let HW1_data = [];
HW1_data.push(HW1_trace1);
HW1_data.push(HW1_trace2);
HW1_data.push(HW1_trace3);

let HW1_layout = {
    margin:{
        t:50
    },
    xaxis:{
        range:[2003,2023]
    },
    yaxis:{
        range:[0,10]
    },
    title:'大麥克指數',
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchour:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false]],
                    label:'TAIWAN'
                },
                {
                    method:'restyle',
                    args:['visible',[false, true, false]],
                    label:'SWITZERLAND'
                },
                {
                    method:'restyle',
                    args:['visible',[false, false, true]],
                    label:'URUGUAY'
                },
                {
                    method:'restyle',
                    args:['visible',[true, true, true]],
                    label:'DISPLAY ALL'
                }
            ]
        }
    ]
};

Plotly.newPlot(HW1_myGraph, HW1_data, HW1_layout);