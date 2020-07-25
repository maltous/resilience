function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dNJ4ofRNPI":
        Script1();
        break;
      case "5gxtXyN6hst":
        Script2();
        break;
      case "5kfvNQetG7M":
        Script3();
        break;
      case "6kuqq5wuazp":
        Script4();
        break;
      case "6Ss82jXcHTg":
        Script5();
        break;
      case "6K0251uwSG1":
        Script6();
        break;
      case "6XDYgG51sNH":
        Script7();
        break;
      case "6IIXs2rSddc":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

