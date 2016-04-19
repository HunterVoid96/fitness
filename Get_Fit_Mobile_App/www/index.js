var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var fitnessLog;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }

    function TimeStamp() {
    var d = new Date();
    var n = d.getTime();
  
}

function updateLog1() {

	var heightType = $("#heightType").val ();
	var age = $("#Age").val();
	var weightType = $("#weightType").val();
$( "#heightType" ).click(updateLog() {
  alert( "heightType" );
   alert( "weightType" );
    alert( "Age" );
});

window.localStorage.setItem(
“heightType”,
“”
);
window.localStorage.setItem(
“weightType”,
“”
);
window.localStorage.setItem(
“Age”,
“”
);
	var entry = { "heightType":"++" ,
	"weightTypeType":"++" ,
	"Age":"++" 
	
	};


	fitnessLog.push( { TimeStamp: entry } );
}

function updateLog2() {

	var stepsType = $("#stepsType").val ();
	var DistanceType = $("#DistanceType").val();
	var ActiveType = $("ActiveType").val();
	var CaloriesType = $("CaloriesType").val();
$( "#stepsType" ).click(updateLog2() 
$( "#DistanceType" ).click(updateLog2()
$( "#ActiveType" ).click(updateLog2()
$( "#CaloriesType" ).click(updateLog2(){
  alert( "stepsType" );
   alert( "DistanceType" );
    alert( "ActiveType" );
		alert( "CaloriesTypeType" );
});

window.localStorage.setItem(
“stepsType”,
“”
);
window.localStorage.setItem(
“DistanceType”,
“”
);
window.localStorage.setItem(
“ActiveType”,
“”
);
window.localStorage.setItem(
“CaloriesType”,
“”
);
	var entry = { "stepsType":"++" ,
	"DistanceType":"++" ,
	"ActiveType":"++",
	"CaloriesType":"++"
	
	};


	fitnessLog.push( { TimeStamp: entry } );
}

function addItems() {
            //Declares the data (height, weight and age).
            var data1= document.getElementById('heightType');
            var data2 = document.getElementById('weightType');
			var data3 = document.getElementById('Age');
            //Sets the items in local storage.
            if ("localStorage" in window) {
                localStorage.setItem(data1.value, data2.value, data3.value);
                location.reload();
            } else {
                alert("no localStorage in window");
            }
            //Sets the items in session storage.
            if ("sessionStorage" in window) {
                sessionStorage.setItem(key.value, data.value);
                location.reload();
            } else {
                alert("no sessionStorage in window");
            }
        }





