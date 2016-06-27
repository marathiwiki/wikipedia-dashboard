var graph_array_cat = [];
var graph_array_sct = [];
var arr1 = [];
//var arry=[];
//arry['y']=[];
var arra = [];
arra['a'] = [];
arra['y'] = [];
//$("#btn").click(function () {

function test()
{

    var a = $("#list").val();

    //////////////display number of pages and category///////////////////////////////            
    var wikiUrl = "https://mr.wikipedia.org/w/api.php?action=query&format=json&prop=categoryinfo&titles=category%3A" + a + "&utf8=1";
    $.ajax(wikiUrl, {
        dataType: "jsonp",
        success: function (wikiResponse) {

            var t = wikiResponse.query.pages;
            //alert(t);
            for (i in t) {

                jQuery("#huge").append("pages-");
                jQuery("#huge").append(t[i].categoryinfo.pages);


                jQuery("#subcat").append("subcat-");
                jQuery("#subcat").append(t[i].categoryinfo.subcats);

            }



        }







    });
}

//});
$("#btn1").click(function () {
    
    test();

    var a = $("#list").val();

 //var a = $("#categ").val();
    var wikiUrl = "https://mr.wikipedia.org/w/api.php?action=query&format=json&prop=categoryinfo&titles=" + a + "&generator=categorymembers&utf8=1&gcmtitle=वर्ग%3A" + a + "&gcmprop=ids%7Ctitle%7Ctype&gcmtype=subcat";
    $.ajax(wikiUrl, {
        dataType: "jsonp",
        success: function (wikiResponse) {

            var t = wikiResponse.query.pages;
            //alert(t);
            var tableHeaderRowCount = 1;
            var table = document.getElementById('tbid');
            var rowCount = table.rows.length;
            for (var i = tableHeaderRowCount; i < rowCount; i++) {
                table.deleteRow(tableHeaderRowCount);
            }
            var len = 0;

//var arry=new Array;
//var arra=new Array;
            var arr_new = {};
            var  y_arr=[];
            var count=0;
            for (i in t) {
                var arr_ymp = new Array;

                var table = document.getElementById("tbid");
                graph_array_cat[len] = t[i].title;
                graph_array_sct[len] = t[i].categoryinfo.subcats;

                //window[arra['y'].push(t[i].title)];
               // window[ arra['a'].push(t[i].categoryinfo.subcats)];

               var  ty_arr = { y: t[i].title,
            a:t[i].categoryinfo.subcats }
//                arr_ymp['a'] = ;
//                y_arr[count]=arr_ymp;
               // alert(y_arr);
               y_arr.push(ty_arr);
count++;
                
                //alert(arr_ymp['y']);
               // alert(arr_ymp['a']);
               
               
              // alert(arr_new[len]);
                
                
                ////arr_new[0]=arr_ymp;
                
                //alert(arr_new);


                len++;
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = t[i].categoryinfo.subcats;
                cell2.innerHTML = i;
                cell3.innerHTML = t[i].title;
                //alert(len);   
            }
            console.log(JSON.stringify(y_arr));
        // alert(y_arr);
            //var newa =  graph_array_cat.split(",");

            var d = arra.y;
            var d1 = arra.a;
//            Morris.Bar({
//                element: 'morris-bar-chart',
//                data: [y_arr],
//                xkey: 'y',
//                ykeys: ['a'],
//                labels: ['Series A', 'Series B'],
//                hideHover: 'auto',
//                resize: true
//            });

//var str="{y: 2006, a:100, b:90}";


    
    
  
    Morris.Bar({
        element: 'morris-bar-chart',
        data: y_arr,
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });


        }






    });




    //var a=new Array();
    //var t = graph_array_cat.length;
    // alert(t);

//           var d=arra.y[0];
//           var d1=arra.a[0];
//            Morris.Bar({
//        element: 'morris-bar-chart',
//        //for( i=0 ;i<graph_array_cat.length;i++){
//        
//        data: [ {
//            y:11,
//            a: "name",
//        }],
//        xkey: 'y',
//        ykeys: ['a'],
//        labels: ['Series A', 'Series B'],
//        hideHover: 'auto',
//        resize: true
//    });






});
