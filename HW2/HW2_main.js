let HW2_myGraph = document.getElementById('HW2_myGraph');
let HW2_trace1 = {};
HW2_trace1.type = "bar";
HW2_trace1.name = "林書緯";//
HW2_trace1.textfont = {
    color:'white',
    size:14
};
HW2_trace1.marker = {
    color:['#F7C242','#F7C242','#F7C242']
};
HW2_trace1.x = [];
HW2_trace1.y = [];

HW2_trace1.x[0] = "兩分命中率";//兩分命中率
HW2_trace1.y[0] = two_point_shot[0]['percentage'];//two_point_shot 'percentage'
HW2_trace1.x[1] = "三分命中率";//三分命中率
HW2_trace1.y[1] = three_point_shot[0]['percentage'];//three_point_shot 'percentage'
HW2_trace1.x[2] = "罰球命中率";//罰球命中率
HW2_trace1.y[2] = free_throw[0]['percentage'];//free_throw 'percentage'

HW2_trace1.text = HW2_trace1.y; 

let HW2_trace2 = {};
HW2_trace2.type = "bar";
HW2_trace2.name = "李愷諺";
HW2_trace2.textfont = {
    color:'white',
    size:14
};
HW2_trace2.marker = {
    color:['#FAD689','#FAD689','#FAD689']
};
HW2_trace2.x = [];
HW2_trace2.y = [];

HW2_trace2.x[0] = "兩分命中率";//兩分命中率
HW2_trace2.y[0] = two_point_shot[1]['percentage'];//two_point_shot 'percentage'
HW2_trace2.x[1] = "三分命中率";//三分命中率
HW2_trace2.y[1] = three_point_shot[1]['percentage'];//three_point_shot 'percentage'
HW2_trace2.x[2] = "罰球命中率";//罰球命中率
HW2_trace2.y[2] = free_throw[1]['percentage'];//free_throw 'percentage'

HW2_trace2.text = HW2_trace2.y; 

let HW2_trace3 = {};
HW2_trace3.type = "bar";
HW2_trace3.name = "林俊吉";
HW2_trace3.textfont = {
    color:'white',
    size:14
};
HW2_trace3.marker = {
    color:['#90B44B','#90B44B','#90B44B']
};
HW2_trace3.x = [];
HW2_trace3.y = [];

HW2_trace3.x[0] = "兩分命中率";//兩分命中率
HW2_trace3.y[0] = two_point_shot[2]['percentage'];//two_point_shot 'percentage'
HW2_trace3.x[1] = "三分命中率";//三分命中率
HW2_trace3.y[1] = three_point_shot[2]['percentage'];//three_point_shot 'percentage'
HW2_trace3.x[2] = "罰球命中率";//罰球命中率
HW2_trace3.y[2] = free_throw[2]['percentage'];//free_throw 'percentage'

HW2_trace3.text = HW2_trace3.y; 


let HW2_trace4 = {};
HW2_trace4.type = "bar";
HW2_trace4.name = "周桂羽";
HW2_trace4.textfont = {
    color:'white',
    size:14
};
HW2_trace4.marker = {
    color:['#113285','#113285','#113285']
};
HW2_trace4.x = [];
HW2_trace4.y = [];

HW2_trace4.x[0] = "兩分命中率";//兩分命中率
HW2_trace4.y[0] = two_point_shot[3]['percentage'];//two_point_shot 'percentage'
HW2_trace4.x[1] = "三分命中率";//三分命中率
HW2_trace4.y[1] = three_point_shot[3]['percentage'];//three_point_shot 'percentage'
HW2_trace4.x[2] = "罰球命中率";//罰球命中率
HW2_trace4.y[2] = free_throw[3]['percentage'];//free_throw 'percentage'

HW2_trace4.text = HW2_trace4.y; 

let HW2_trace5 = {};
HW2_trace5.type = "bar";
HW2_trace5.name = "高國豪";//
HW2_trace5.textfont = {
    color:'white',
    size:14
};
HW2_trace5.marker = {
    color:['#8F77B5','#8F77B5','#8F77B5']
};
HW2_trace5.x = [];
HW2_trace5.y = [];

HW2_trace5.x[0] = "兩分命中率";//兩分命中率
HW2_trace5.y[0] = two_point_shot[4]['percentage'];//two_point_shot 'percentage'
HW2_trace5.x[1] = "三分命中率";//三分命中率
HW2_trace5.y[1] = three_point_shot[4]['percentage'];//three_point_shot 'percentage'
HW2_trace5.x[2] = "罰球命中率";//罰球命中率
HW2_trace5.y[2] = free_throw[4]['percentage'];//free_throw 'percentage'

HW2_trace5.text = HW2_trace5.y; 

let HW2_data = [];
HW2_data.push(HW2_trace1);
HW2_data.push(HW2_trace2);
HW2_data.push(HW2_trace3);
HW2_data.push(HW2_trace4);
HW2_data.push(HW2_trace5);

let HW2_layout = {
    margin:{
        t:10
    },
    title:'各隊控球後衛比較'
};

Plotly.newPlot(HW2_myGraph, HW2_data, HW2_layout);
