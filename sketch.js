//------------------GLOBAL PARAMETERS----------------//

var mouseY2 = 0;
var mouseX2 = 0;
var choiceSter1 = 0;
var choiceSter2 = 0;
var choiceTimer1 = 0;
var choiceTimer2 = 0;
var lastChoiceSter = 100;
var mobileDevice = 0;
var buttonH = 50;
var extraButtonH = 0;
var lastExtraButtonH = 0;
var mousePressX = 0;
var mousePressY = 0;
var mousePressX2 = 0;
var mousePressY2 = 0;
var pressedLong = 0;
var mouseMoveSpeed = 0;
var mouseMoveVectors = [];
var mouseMoveVectors2 = [];
var moveVector = 0;
var moveCount = 0;
var moveCount2 = 0;
var firstRun = 10;
var moverX = 0;
var lastMoverX = 0;
var moverY = 0;
var pos1 = 0;
var pos2 = 0;
var lastPosChange = 3;
var test1 = 0;
var nowChange = 0;
var lastNowChangeForMap = 0;
var isWindowsResized = 0;

function lastMouse() {
 mouseY2 = mouseY;
 mouseX2 = mouseX;  
}

function windowResized() {
 isWindowsResized = 3;
 redraw(1)
// loop();
 resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight)
 firstRun = 10;
 panelIsLoaded = 0;
 leftButtonsPanelIsLoaded = 0;
 rightButtonsPanelIsLoaded = 0;
 hidePanelIsLoaded = 0;
 openPanelIsLoaded = 0; 
 chartPanelIsLoaded = 0; 
 extraChartPanelIsLoaded = 0; 
 playButtonIsLoaded = 0;
 timerBeltIsLoaded = 0; 
}

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}


function mouseReleased() {
 loop(); 
 choiceTimer2 = choiceTimer1/5;
 choiceSter1 = 1;
 pressedLong = 0; 
 mouseMoveVectors2 = [];
 moveCount2 = 0;  
 moveCount = 0;
 panelScrollerGoOn = 0;
 panelStillScrolling = 0;

 if (mousePressY > mouseY){
  moveVector = -1; 
 }else{
  moveVector = 1; 
 }
  
 for (var s = 0; s < mouseMoveVectors.length; s++) {
  moveCount = moveCount+mouseMoveVectors[s];
 }
     
 if (mouseMoveVectors.length != 0){
  moveCount = moveCount/mouseMoveVectors.length*0.5;
 }
     
 mouseMoveVectors = [];   
}

function mouseWheel(event) {
 pos1 = pos1 + event.delta / 100;
 loop();  
}

function moveParameters() {
  
 if (mouseIsPressed){
  choiceTimer1 = min(100,choiceTimer1+1);
  pressedLong++;
  mouseMoveSpeed++;

   
 // SPRAWDZENIE DLUGOSCI PRZESUNIECIA  
   
  if(mouseMoveVectors2.length == 0){ 
//   mouseMoveVectors2.push(abs(mouseY-mouseY)); 
   mouseMoveVectors2.push(abs(11)); 
  }else{
   mouseMoveVectors2.push(abs(mouseY2-mouseY));     
  }
   
  if (mouseMoveVectors2.length > 100){
   mouseMoveVectors2.shift();
  }
   
  for (var s = 0; s < mouseMoveVectors2.length; s++) {
   moveCount2 = moveCount2+mouseMoveVectors2[s];
  }
  moveCount2 = moveCount2/mouseMoveVectors2.length;
   
 // SPRAWDZENIE DLUGOSCI DO PUSZCZENIA  
   
  if(mouseMoveVectors.length == 0){ 
   mouseMoveVectors.push(abs(mouseY-mouseY)); 
  }else{
   mouseMoveVectors.push(abs(mouseY2-mouseY));     
  }
  if (mouseMoveVectors.length > 10){
   mouseMoveVectors.shift();
  }  
   
 }else{  
  choiceTimer1 = max(0,choiceTimer1-choiceTimer2);
 }
  
  lastPosChange = max(0,lastPosChange-1);
}


function choiceController() {
 lastChoiceSter++;
  
 if (choiceSter1 == 1){
  choiceTimer1 = choiceTimer1-choiceTimer2;
  mouseMoveSpeed = 0;
  lastChoiceSter = 0;
 }

 choiceSter1 = 0;
}

function mousePressed() {
 mousePressX = mouseX;
 mousePressY = mouseY;
 loop();
}

function mouseMoved(){
 loop();
}

function mouseDragged(){
 loop();  
}

function mouseClicked(){
 loop();  
}  







//------------------PANEL PARAMETERS----------------//

var buttonsPanel;
var panelIsLoaded = 0;
var panelModulesController = 0;
var panelModulesController2 = 0;
var panelWidth = 0;
var maxPanelWidth = 400;
var panelMoveX = 0;
var lastPanelMoveX = 0;
var panelSter = 0;
var panelScrollStart = 0;
var panelScrollEnd = 0;
var panelScrollerGoOn = 0;
var panelStillScrolling = 0;
var moverYFromScroll = 0;
var panelEnd = 0;

var leftButtonsPanel;
var leftButtonsPanelIsLoaded = 0;
var leftButtonsPanelStart = 0;
var numberOfSlots = 5;

var circleHidePanel;
var hidePanelIsLoaded = 0;
var circleHideStart = 0;
var circleHideBigSize = -1;
var circlePanelWidth = 0;

var circleOpenPanel;
var openPanelIsLoaded = 0;
var circleOpenStart = 0;
var circleOpenBigSize = -1;

var iconsX = [0,0,0,0];
var iconsY = [0,0,0,0];






function panelController() {
 
 panelModulesController = 0;
 panelModulesController2 = 0;
 leftButtonsPanelStart = 0;
 rightButtonsPanelStart = 0;
 chartPanelStart = 0; 
  
 if (lastChoiceSter < 30 ||
     choiceSter1 == 1 ||
     pos1 != pos2 ||
     lastPosChange > 0 ||
     mouseIsPressed
    ){
   
  panelModulesController = 1;
  leftButtonsPanelStart = 1;
  rightButtonsPanelStart = 1;
  chartPanelStart = 1; 
 }
}


function hideChange() {
  
 if (circleHideBigSize == -1){
  if (panelMoveX == 0){
   if ((mouseX > wW-panelWidth-(panelWidth*0.1)*2.4+moverX && 
        mouseX < wW-panelWidth-(panelWidth*0.1)*0.4+moverX &&
        mouseY > 0 &&
        mouseY < (circlePanelWidth*0.1)*2)){
   
    circleHideStart = 1
    circleHideBigSize = 1; 
   }
  }
 }
  
 if (circleHideBigSize == 1){
  if (panelMoveX == 0){
   if (!(mouseX > wW-panelWidth-(panelWidth*0.1)*2.4+moverX && 
        mouseX < wW-panelWidth-(panelWidth*0.1)*0.4+moverX &&
        mouseY > 0 &&
        mouseY < (circlePanelWidth*0.1)*2)){
   
    circleHideStart = 1
    circleHideBigSize = -1; 
   }
  }
 } 
  
 if (panelMoveX != 0 ){
  circleHideStart = 1
  circleHideBigSize = -1;    
 }
}



function openChange() {
  
 if (circleOpenBigSize == -1){
  if (panelMoveX == panelWidth){
   if ((mouseX > wW-2.0*(panelWidth*0.1) && 
        mouseX < wW &&
        mouseY > wH-2.0*(panelWidth*0.1) &&
        mouseY < wH)){
   
    circleOpenStart = 1
    circleOpenBigSize = 1; 
   }
  }
 }
  
 if (circleOpenBigSize == 1){
  if (panelMoveX == panelWidth){
   if (!(mouseX > wW-2.0*(panelWidth*0.1) && 
        mouseX < wW &&
        mouseY > wH-2.0*(panelWidth*0.1) &&
        mouseY < wH)){
   
    circleOpenStart = 1
    circleOpenBigSize = -1; 
   }
  }
 } 
  
 if (((lastPanelMoveX != panelMoveX) && panelMoveX == panelWidth) ||
     ((lastPanelMoveX != panelMoveX) && panelMoveX == 0)){
  circleOpenStart = 1
  circleOpenBigSize = -1;    
 }
}




  
//---------------------BUTTONS-------------------//

var tableDataCategory;
var tableAnimationType;
var tableAnimationModel;
var tablePositionsTmp;
var tablePositionsTmp2 = [];
var tablePositionsTmpNames = ['gamesPositions','moviesPositions','seriesPositions','popularWordsPositions','carBrandsPositions','pairsOfWordsPositions','websitesPositions','influentialLeadersPositions','financialPeoplesPositions','biznesmensPositions','actorsPositions','celebritiesPositions','cityDestinationsPositions','musicArtistsPositions','baseballPlayersPositions','tableTennisPlayersPositions','volleyballPlayersPositions','tennisPlayersPositions','countriesPositions','spacePositions','stooqPositions','sportEventsPositions','footballPlayersPositions','nbaPlayersPositions','cricketPlayersPositions','nhlPlayersPositions'];
var tablePositionsName = [];
var tablePositionsRelation = [];
var tablePositionsDate = [];
var tableTimeRange;


var buttonsStatus = [0,0,0,0,0];
var buttonsNames = ['Data category','Animation type','Animation model','Positions','Time range'];
var actualButton = 0;
var lastActualButton = 0;
var actualButtonYLength = 0;
var dataCategoryPosition = 0;

var rightButtonsPanel;
var rightButtonsPanelIsLoaded = 0;
var rightButtonsPanelStart = 0;

var dataCategoryParameters = -1;
var animationTypeParameters = -1;
var animationModelParameters = -1;
var positionsParameters = -1;
var timeRangeParameters = -1;
var actualButtonParameters = [0,0,0,0,0];
var actualButtonPosition = 0
var pickedPosition1 = 0;
var pickedPosition2 = 0;
var lastDoublePicked = 1;
var buttonChanged = 0;







//--------------------CHARTS--------------------//

var tableGoogleResults;
var actualDivider = 100;
var actualBars = [1,1,1,2,2,2,10,10,10,20,20,1]
var actualBars2 = [1,1,1,2,2,2,10,10,10,20,20,1]
var chartGoogleResults = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
var chartGoogleDate = []

var chartPanel;
var chartPanelIsLoaded = 0;
var chartPanelStart = 0;

var chartName = []; 
var chartDate = []; 
var chartValue = []; 
var chartName2 = []; 
var chartDate2 = []; 
var chartValue2 = [];
var chartMaxValueStep = []; 
var chartTextWidth = 0;
var chartTextWidth2 = 0;
var chartValueWidth = 0;
var chartValueWidth2 = 0;
var chartValueWidth3 = 0;
var chartMaxValue = -999999999;
var chartMinValue = 999999999; 
var scaleLegend = '';
var scaleLegendValue = 1;
var chartJson = {};
var tableChartJson;
var chartStage = -1;
var lastChartStage = -1;
var maxChartStage = -1;
var chartWitchStage = -1;
var chartCalculate = 0;
var chartLineRefresh = 0;
var chartMoveCorrector = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var chartPositionCorrector = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var chartStop = 0;
var chartLastTimer1 = 0;
var chartLastTimer2 = 0;
var chartLineXMax = 0;
var chartLinePositions = [];
var chartLinePoints = [];
var chartLineYMax = [];
var chartLineValueMax = [];
var chartMoverY = 0;
var chartModelTypeForLegend = 0;
var chartLastModelTypeForLegend = 0;


var playButton;
var playButtonIsLoaded = 0;
var playButtonStart = 0;
var playButtonBigSize = -1;
var playButtonXStart = 0;
var playButtonYStart = 0;
var playButtonController = [0,0,0,0];
var chartPlayController = -1;

var timerBelt;
var timerBeltData;
var timerBeltDataEndY = 0;
var timerBeltDataEndX = 0;
var timerBeltIsLoaded = 0;
var maxScaleForBelt = 0;

var extraChartPanelIsLoaded = 0;
var extraChartPanel;
var extraChartYSize = 0;
var extraChartYEnd = 0;
var extraChartController = -1;
var extraChartControllerFill = -1;
var extraChartSter = 0;
var lastExtraChartSter = 0;
var extraChartMoverX = 0;
var extraChartYSizeEnd = 0;
var extraChartDivider = 1;

function playButtonNewController() {
 var xLongTmp = round(wH/(max(10,actualBars[max(7,actualButtonParameters[2])])+2));
 if (xLongTmp < 40){
  xLongTmp = 40;
 }

 if (playButtonBigSize == -1){
  if ((mouseX > playButtonXStart && 
       mouseX < playButtonXStart+xLongTmp &&
       mouseY > wH-xLongTmp*1.35 &&
       mouseY < wH-xLongTmp*0.35)){
   
   playButtonStart = 1
   playButtonBigSize = 1; 
  }
 }
  
 if (playButtonBigSize == 1){
  if (!(mouseX > playButtonXStart && 
        mouseX < playButtonXStart+xLongTmp &&
        mouseY > wH-xLongTmp*1.35 &&
        mouseY < wH-xLongTmp*0.35)){
   
   playButtonStart = 1
   playButtonBigSize = -1; 
  }
 }   
}






  
function preload() {
 tableDataCategory = loadStrings("dataCategories.txt");
 tableAnimationType = loadStrings("animationType.txt");
 tableAnimationModel = loadStrings("animationModel.txt");
 tableTimeRange = loadStrings("timeRange.txt");
 tableGoogleResults = loadStrings("googleResults3.txt");
  
 for (var a = 0; a < 26; a++) {
  var tTmp = tablePositionsTmpNames[a];
  eval('tablePositionsTmp =  loadStrings("'+tTmp+'.txt");');
//  eval('tablePositionsTmp =  loadStrings("'+tTmp+'.txt");');
//  var str1 = tablePositionsTmp.toString();
  // str = str.split(";");
   
  // for (var b = 0; b < tablePositionsTmp.length; b++) {
  //  var str2 = str[0].toString();
  //  tTmp2.push(tablePositionsTmp[b]);
  // }
  tablePositionsTmp2.push(tablePositionsTmp)
 }
  
} 
  


  

function setup() {
 wW = document.documentElement.clientWidth;
 wH = document.documentElement.clientHeight;  
 
 mouseY2 = mouseY;
 mouseX2 = mouseX; 
 
 if ( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  mobileDevice = 1; 
 } 
  
 panelWidth = max(250,min(wW/2,maxPanelWidth));
 if(mobileDevice == 1){
  panelWidth = max(250,min(wW/2,200)); 
 } 
 circlePanelWidth = min(panelWidth,300);
  
  
 for (var a = 0; a < tablePositionsTmp2.length; a++) {
  // var str1 = tablePositionsTmp2[a].toString();
  var str1 = tablePositionsTmp2[a];
  // str1 = str1.split(";");   
  var tTmp1 = [];
  var tTmp2 = [];
  var tTmp3 = [];
  
  for (var b = 0; b < str1.length; b++) {
   var str2 = str1[b].toString();
   str2 = str2.split(";");
    
   tTmp1.push(str2[0]); 
   tTmp2.push(str2[1]); 
   tTmp3.push(str2[2]); 
  }
  tablePositionsName.push(tTmp1)
  tablePositionsRelation.push(tTmp2)
  tablePositionsDate.push(tTmp3)
   
 }
  
  
 for (var a = 0; a < tableGoogleResults.length; a++) {
      
  if (tableGoogleResults[a][4] == '-'){
   chartGoogleDate.push(tableGoogleResults[a]) 
   var itemTMP = 0 
    
   for (var b = a+1; b < tableGoogleResults.length; b++) {
    if (tableGoogleResults[b][4] != '-'){
     var itemTableTMP = [];
     var firstPart = 0;
      
     for (var c = 0; c < tableGoogleResults[b].length; c++) {
      if (tableGoogleResults[b][c] == ',' || c == tableGoogleResults[b].length-1){
       var tekstTMP = tableGoogleResults[b].substr(firstPart, c-firstPart+1*(c == tableGoogleResults[b].length-1)) 
//       var tekstTMP = tableGoogleResults[b].substr(0, 3) 
       itemTableTMP.push(tekstTMP);
       firstPart = c+1
      }
     }
      
     chartGoogleResults[itemTMP].push(itemTableTMP)
     itemTMP = itemTMP+1
    }else{
     b = tableGoogleResults.length 
    }
   }
     
  }
   
 }
  

}










function draw() {
 loop();
  
 moveParameters();
  
 wW = document.documentElement.clientWidth;
 wH = document.documentElement.clientHeight;  
 // wW = windowWidth
 // wH = windowHeight; 
  
 if (firstRun){
  createCanvas(wW, wH);
  background(90,120,200,40);
 }
  
 panelWidth = max(250,min(wW/2,maxPanelWidth));
 if(mobileDevice == 1){
  panelWidth = max(250,min(wW/2,200)); 
 }
 circlePanelWidth = min(panelWidth,300);
  
  
//--------------OTWIERANIE/ZAMYKANIE PANELA-----------------
   
 hideChange();

 if ((circleHideStart == 1 && ((moverX < panelWidth || firstRun))) ||
     choiceSter1 == 1 ||
     hidePanelIsLoaded == 0) {   
   
   
  hidePanel = new HidePanel(panelWidth,0,0.1);
  hidePanel.hidePanelCreateGraphic();
  hidePanel.hidePanel();
  hidePanel.controlHidePanel(); 
 }

  
 circleHideStart = 0;   
 openChange();
  
 if (circleOpenStart == 1 || 
     choiceSter1 == 1 ||
     openPanelIsLoaded == 0 || firstRun
    ) { 
   
  
  openPanel = new OpenPanel(panelWidth,0,0.1);
  openPanel.openPanelCreateGraphic();
  openPanel.openPanel();
  openPanel.controlOpenPanel(); 
 }
 circleOpenStart = 0 
//===========================================================  
  
 panelController();  
  
 if (panelIsLoaded == 0 || panelModulesController == 1 || choiceSter2) { 
   
  panel1 = new Panel(panelWidth,0,0.1);
  panel1.panelCreateGraphic(); 
  panel1.scrollerPanel();
  panel1.controlScrollPanel();
 }
  
 if (leftButtonsPanelIsLoaded == 0 || leftButtonsPanelStart == 1 || 
     choiceSter1 == 1 || choiceSter2) { 
   
   
  leftPanel1 = new LeftPanel(panelWidth,0,0.1,numberOfSlots);
  leftPanel1.leftPanelCreateGraphic(); 
  leftPanel1.chooseBarLeftPanelCreate();
  leftPanel1.slotsLeftPanelCreate();
   
  icons1 = new Icons(circlePanelWidth*0.1);
  icons1.createIconDataCategory();
  icons1.createIconAnimationType();
  icons1.createIconAnimationModel();
  icons1.createIconDataType();
  icons1.createIconTime();
 }
  
 buttonChanged = 0;
 
 if (rightButtonsPanelIsLoaded == 0 || rightButtonsPanelStart == 1 ||
      (mouseX > wW-panelWidth && (mouseY2 != mouseY || mouseX2 != mouseX))) { 
   
    
  buttons1 = new Buttons(panelWidth,0);
  buttons1.buttonsCreateGraphic();
  buttons1.showPositionsButtons();
  buttons1.showFirstButton();
  buttons1.showPositionsExtraText();
 }
 
 rightButtonsPanelStart = 0;
  
// to jest po to, aby jak mamy max kafelków, to aby ich okres pokazywał się dla całych 30 dni. Jeżeli któryś w międzyczasie nie był w top, to ten okres był pomijany. Jednak to nie działa dla 1-2 kafelków, a w przypadku 10 i 20 trzeba byłoby to udoskonalić. Na razie zostawiam tylko dla max kafelków  
  
 if (actualButtonParameters[2] == 10
    ){
  actualBars.splice(actualButtonParameters[2],1,min(30,chartGoogleResults[actualButtonParameters[0]+1][0].length)); 
 }
  
 if (choiceSter1 == 1 || firstRun > 8 || choiceSter2 ||
     chartPlayController == -1 ||
      (chartPlayController == 1 && mouseIsPressed &&
        mousePressX >= playButtonController[0] &&
        mousePressX <= playButtonController[1] &&
        mousePressY >= playButtonController[2] &&
        mousePressY <= playButtonController[3]) || 
     (lastNowChangeForMap > 0) ||
     timerBeltIsLoaded == 0 || (lastExtraChartSter != 0 || extraChartSter != 0)
    ) { 

  timerBelt1 = new TimerBelt(actualDivider, actualBars[max(1,actualButtonParameters[2])], 10, panelWidth, 0.1);
  timerBelt1.timerBeltCreateGraphic();
  timerBelt1.timerBeltController();
  timerBelt1.timerBeltPCCreator();
  timerBelt1.timerBeltMobileCreator();
  timerBelt1.timerBelt();
 }
  
  

 if (chartPanelIsLoaded == 0 || chartPanelStart == 1 || chartPlayController == -1){
  
   
  startChart1 = new StartChart(actualDivider, actualBars[max(1,actualButtonParameters[2])], max(10,actualBars[actualButtonParameters[2]]), panelWidth, 0.1);
  startChart1.chartCreateGraphic();
  startChart1.chartFirstController();
  startChart1.chartSecondController();
  startChart1.chartLegend();
  startChart1.barChartStoperr();
  startChart1.extraChartCreator();
  startChart1.barChartCreator();
  startChart1.lineChartCreator();
  startChart1.tileChartCreator();
//  startChart1.extraChartCreator();
 }
  
  
 if (extraChartPanelIsLoaded == 0 || 1 == 1){ 
  ExtraChart1 = new ExtraChart(actualDivider, actualBars[max(1,actualButtonParameters[2])], max(10,actualBars[actualButtonParameters[2]]), panelWidth, 0.1);
  ExtraChart1.extraChartCreateGraphic();
  ExtraChart1.extraChartController();
 }

  
 chartPanel.remove();
 image(chartPanel,0,0);
  
 extraChartPanel.remove(); 
 image(extraChartPanel,0,max(wH/2-20,extraChartYEnd+5));
 
 circleHidePanel.remove();
 image(circleHidePanel,wW-panelWidth-(circlePanelWidth*0.1)*2.7+moverX,0);

 circleOpenPanel.remove();
 image(circleOpenPanel,wW-(circlePanelWidth*0.1)*2.0,wH-(circlePanelWidth*0.1)*2.0);
   
 buttonsPanel.remove();
 image(buttonsPanel,0,0);
  
 leftButtonsPanel.remove();
 image(leftButtonsPanel,wW-panelWidth-(circlePanelWidth*0.1)*2.7+moverX,0);
  
 rightButtonsPanel.remove();
 image(rightButtonsPanel,wW-panelWidth+moverX,0);
  
  
 playButtonNewController() 
  
 if (playButtonStart != 0 ||
     choiceSter1 == 1 ||
     playButtonIsLoaded == 0 ||
     chartModelTypeForLegend != chartLastModelTypeForLegend ||
     (lastChartStage+1 == maxChartStage && chartStage == maxChartStage) || (lastExtraChartSter != 0 || extraChartSter != 0)
    ) { 

  playButton1 = new PlayButton(actualDivider, actualBars[max(1,actualButtonParameters[2])], 10, panelWidth, 0.1);
  playButton1.playButtonCreateGraphic();
  playButton1.playButtonPCPlayController();
  playButton1.playButtonMobilePlayController();
 }  
  
  
 var xLongTmp = round(wH/(max(10,actualBars[max(1,actualButtonParameters[2])])+2));
 var xLongTmp = round(wH/(10+2));
 if (xLongTmp < 40){
  xLongTmp = 40;
 } 

 timerBelt.remove();
 image(timerBelt,0,wH-xLongTmp*2);
 timerBeltData.remove();
 image(timerBeltData,0,0);
  
 playButton.remove();
 if (mobileDevice == 0 && chartModelTypeForLegend != 2){
//  image(playButton,playButtonXStart,wH-xLongTmp*1.35);
  image(playButton,playButtonXStart,wH-xLongTmp*1.35);
 }else{
  image(playButton,playButtonXStart,wH-xLongTmp);   
 }
  
  
 
 if (pos1 != pos2) {
  lastPosChange = 51;
 }
 if (lastPanelMoveX != panelMoveX){
  firstRun = 10;
 }
  
 pos2 = pos1;
  
 lastMouse()
  
 if (moveCount != 0){
  moveCount = moveCount-moveCount/25;
     
  if (moveCount < 0.2){
   moveCount = 0;
   panelStillScrolling = 0;
  }
 }  
  
 lastChartStage = chartStage
 if (chartStage >= 0 && chartPlayController == (-1) && chartStop == 0 && chartModelTypeForLegend != 2){
  chartStage = min(chartStage+1,maxChartStage);
//  chartStage = chartStage+1;
  chartWitchStage = chartWitchStage+1;
 } 
  
 if (chartModelTypeForLegend != chartLastModelTypeForLegend){
     chartStage = Math.floor(chartStage/(actualDivider+1))*(actualDivider+1);
 }
            test1 = moveCount
  
 choiceSter2 = choiceSter1 
 choiceController();
 lastPanelMoveX = panelMoveX;
 lastMoverX = moverX 
 panelIsLoaded = 1;
 leftButtonsPanelIsLoaded = 1;
 rightButtonsPanelIsLoaded = 1; 
 hidePanelIsLoaded = 1;  
 openPanelIsLoaded = 1;
 chartPanelIsLoaded = 1;
 extraChartPanelIsLoaded = 1; 
 playButtonIsLoaded = 1;
 timerBeltIsLoaded = 1; 
 firstRun = max(0,firstRun-1)
 lastActualButton = actualButton;
 playButtonStart = max(0,playButtonStart-1); 
 lastNowChangeForMap = max(lastNowChangeForMap-1,0); 
 lastExtraChartSter = extraChartSter 
 isWindowsResized = max(0,isWindowsResized-1); 
  
 
  textSize(30);
  stroke(255,0,0,255)
  text(test1,100,100)  
  text(extraChartMoverX,100,130)  
  text(firstRun+200,100,150)  
  

 if ((chartPlayController != -1 && 
     firstRun == 0 &&
     (extraChartMoverX == 0 || extraChartMoverX == wW) && 
     !mouseIsPressed && 
     lastChoiceSter > 13 &&
     extraChartSter == 0 && 
     isWindowsResized == 0 && 
     lastExtraChartSter == 0 && 
     choiceTimer1 == 0 &&
     lastPosChange == 0 &&
     panelStillScrolling == 0)
     || (chartModelTypeForLegend == 2 && 
         lastPosChange < 40 && 
         firstRun == 0 &&
         choiceTimer1 == 0 &&
         moveCount == 0
        )
    ){
  noLoop();
 }  
  
  
}











class Panel {
 constructor(x, y, close) {

  this.x = x;
  this.y = y;
  this.close = close;
  this.long = this.x*this.close;
  this.longLine = this.long*0.3;
   
   
  this.panelScrollerXStart = wW-this.x+moverX-1.6*this.long; 
  this.panelScrollerXEnd = 1.1*this.long;
  this.panelScrollerYStart = this.y+0.2*this.long; 
  this.panelScrollerYEnd = wH-this.panelScrollerYStart*2; 
 }
  
 panelCreateGraphic() {
   
  if (panelIsLoaded && panelModulesController == 1) {    

   buttonsPanel.clear(); 
//   buttonsPanel.background(229,234,246,255);
  }
   
  if (panelIsLoaded == 0) {
    buttonsPanel = createGraphics(wW, wH);
//   buttonsPanel.background(229,234,246,255);

  }
   
  moverX = panelMoveX;
   
  buttonsPanel.noStroke();
  buttonsPanel.fill(100, 120, 190, 235);
  buttonsPanel.rect(wW-this.x+moverX,this.y,this.x,wH);
  buttonsPanel.strokeWeight(1);
  buttonsPanel.stroke(50, 60, 140, 185);
  buttonsPanel.line(wW-this.x+moverX,this.y,wW-this.x+moverX,wH);   
  
 }
  
  
 scrollerPanel() {  
  
  if (panelMoveX < panelWidth){     
    
    panelScrollStart = map(moverY*-1,0,max(actualButtonYLength,wH),this.panelScrollerYStart,this.panelScrollerYStart+this.panelScrollerYEnd);
    panelScrollEnd = map(wH,0,max(actualButtonYLength,wH),0,this.panelScrollerYEnd); 
    
    buttonsPanel.noFill();
    for (var b = 10; b > 0; b--) {
      
     var strokeTmp = 30*(b/10);
     if(b == 10){
      strokeTmp = 155; 
     }   
     if(b == 1){
      buttonsPanel.fill(50, 60, 140, 185); 
      buttonsPanel.fill(100, 100, 100, 185); 
     }   
     buttonsPanel.strokeWeight(10*((11-b)/10));
     buttonsPanel.stroke(100, 120, 255, strokeTmp); 
     buttonsPanel.stroke(0, 0, 0, strokeTmp); 
     buttonsPanel.rect(wW-this.x+moverX-0.4*this.long,
          this.y,
          0.4*this.long,
          wH,
          0,
          0); 
    }    

    buttonsPanel.noStroke(); 
    buttonsPanel.fill(255, 255, 255, 255);    
    buttonsPanel.rect(wW-this.x+moverX-0.3*this.long,
         panelScrollStart,
         0.2*this.long,
         panelScrollEnd,
         2,
         2);    
  }
 }
  
  
 controlScrollPanel() {

  
  if (wH-actualButtonYLength < 0) {
    
   var panelYRest = wH-actualButtonYLength; 
   
   if (pos1>pos2 &&
    mouseX > wW-this.x+moverX){    
    moverY = max(panelYRest,moverY-wH/30);
   }
     
   if (pos1<pos2 &&
    mouseX > wW-this.x+moverX){    
    moverY = min(0,moverY+wH/30);
   }
    
    // KLIKANIE 
     
   if (touches.length == 0
    && mouseX > wW-this.x+moverX-0.5*this.long
    && mouseX < wW-this.x+moverX
    && mouseY > this.panelScrollerYStart-10
    && mouseY < this.panelScrollerYStart+this.panelScrollerYEnd+20){

    if (mouseIsPressed){
     if(pressedLong < 10
      && mousePressY > panelScrollStart+panelScrollEnd){
     
      moverY = max(panelYRest,moverY-wH/50);
     }
    
     if (pressedLong < 10
      && mousePressY < panelScrollStart){
     
      moverY = min(0,moverY+wH/50);
     }
    }    
   }    
 
    
    //  PRZESUNIECIE
    
   if ((mouseIsPressed && 
        pressedLong > 5 && 
        mousePressX > this.panelScrollerXStart-this.panelScrollerXEnd*0.3 && 
        mousePressX < wW && 
        mousePressY > this.panelScrollerYStart && 
        mousePressY < this.panelScrollerYEnd) ||
       (panelScrollerGoOn == 1)){

      mousePressX2 = mousePressX;
      mousePressY2 = mousePressY;       
     
    if (touches.length == 0){  
     moverY = max(panelYRest,min(0,moverY+(mouseY2-mouseY))); 
     panelScrollerGoOn = 1;
    }

    if (touches.length == 1 && moveCount2 > 1){  
     moverY = max(panelYRest,min(0,moverY-(mouseY2-mouseY))); 
     panelScrollerGoOn = 1;
    }
   }
    
    
//     PRZESUNIĘCIE PO PUSZCZENIU    

   if (choiceSter1 == 1){
    if (mobileDevice != 0
     && mousePressX > this.panelScrollerXStart-this.panelScrollerXEnd*0.3
     && mousePressX < wW
     && mousePressY > this.panelScrollerYStart
     && mousePressY < this.panelScrollerYEnd){
    
     panelStillScrolling = 1;
    }
   }
   
   if (moveCount != 0 && panelStillScrolling == 1){
    moverY = max(panelYRest,min(0,moverY+(moveCount*moveVector))); 
    mousePressX2 = 0;
    mousePressY2 = 0;       
   }    
    
  }else{
    moverY = 0;
  }
 }
}








class LeftPanel {
 constructor(x, y, close) {
  this.x = x;
  this.y = y;
  this.close = close;
   
  this.long = circlePanelWidth*this.close;
  this.longLine = this.long*0.3; 
 }
  
  
 leftPanelCreateGraphic() {
   
  if (leftButtonsPanelIsLoaded &&
       (leftButtonsPanelStart == 1 || choiceSter1 == 1)) {    

   leftButtonsPanel.clear(); 
//   buttonsPanel.background(229,234,246,255);
  }
   
  if (leftButtonsPanelIsLoaded == 0) {
    leftButtonsPanel = createGraphics(this.long*2, wH);
//   leftButtonsPanel.background(229,234,246,255);

  }  
 }
  
  
 chooseBarLeftPanelCreate() {  
  
  if (panelMoveX < panelWidth){
    
    
   leftButtonsPanel.fill(77, 255, 255, 155); 
   leftButtonsPanel.strokeWeight(1);
   leftButtonsPanel.stroke(10,196,215,255); 
   leftButtonsPanel.rect(this.long*0.4,
          this.long*2,
          this.long*1.2,
          this.long*1.5*(numberOfSlots),
          20,
          20,
          20,
          20); 
    
   for (var a = 10; a > 0; a--) {
     
    var strokeTmp = 20*(a/10);
    if(a == 10){
     strokeTmp = 155; 
    } 
    leftButtonsPanel.strokeWeight(10*((11-a)/10));
    leftButtonsPanel.stroke(0,0,255,strokeTmp);
    leftButtonsPanel.noFill();
    leftButtonsPanel.rect(this.long*0.4,
          this.long*2,
          this.long*1.2,
          this.long*1.5*(numberOfSlots),
          20,
          20,
          20,
          20); 
   }
  }    
 }
  
  
 slotsLeftPanelCreate() {  
  
  if (panelMoveX < panelWidth){
    
   for (var a = 0; a < numberOfSlots; a++) { 
    
//     if ((mouseX > wW-this.x-this.long*2.7+this.long*0.5+moverX && 
//          mouseX < wW-this.x-this.long*2.7+this.long*0.5+this.long*1.0+moverX &&
//          mouseY > this.long*2.25+this.long*1.5*a &&
//          mouseY < this.long*2.25+this.long*1.5*a+this.long*1.0) && 
//         choiceSter1 == 1 && 
//         choiceTimer1 > 1 && 
//         choiceTimer1 < 10){
      
//       actualButton = a;
//       if (actualButton != lastActualButton){
//        moverY = 0   
//           }
//     }
    if ((mouseX > wW-this.x-this.long*2.7+this.long*0.4+moverX && 
         mouseX < wW-this.x-this.long*2.7+this.long*0.5+this.long*1.2+moverX &&
         mouseY > this.long*2+this.long*1.5*a &&
         mouseY < this.long*2+this.long*1.5*a+this.long*1.5) && 
        choiceSter1 == 1){
      
      actualButton = a;
      if (actualButton != lastActualButton){
       moverY = 0   
          }
    }

    leftButtonsPanel.fill(255, 255, 255, 255); 
    leftButtonsPanel.strokeWeight(1+(actualButton == a)*2);
    leftButtonsPanel.stroke(70, 255, 255, 255); 
//    leftButtonsPanel.stroke(255, 0, 0, 255); 
    leftButtonsPanel.noStroke(); 
    if(actualButtonParameters[a] != -1){
     leftButtonsPanel.fill(0, 0, 255, 255); 
    }
    if(actualButton == a){
     leftButtonsPanel.fill(255, 133, 0, 255); 
    }
     
    // leftButtonsPanel.circle(this.long*0.625,
    //        buttonH*2+buttonH*a,
    //        this.long*1.0);
    iconsX.splice(a, 1, this.long*1.0);
    iconsY.splice(a, 1, this.long*2.75+this.long*1.5*a);

    leftButtonsPanel.rect(this.long*0.5,
          this.long*2.25+this.long*1.5*a,
          this.long*1.0,
          this.long*1.0,
          20,
          20,
          20,
          20); 

   for (var b = 10; b > 0; b--) {
     
    var strokeTmp = 10*(b/10);
    if(b == 10){
     strokeTmp = 155; 
    } 
    leftButtonsPanel.strokeWeight(6*((11-b)/10));
    leftButtonsPanel.stroke(0,226,247,strokeTmp);
    leftButtonsPanel.noFill();
    leftButtonsPanel.rect(this.long*0.5,
          this.long*2.25+this.long*1.5*a,
          this.long*1.0,
          this.long*1.0,
          20,
          20,
          20,
          20); 
   }    
   }    
  }
 }
  
  
  
 chooseBarLeftPanelButton() {  

   
 }
}





class HidePanel {
 constructor(x, y, close) {
  this.x = x;
  this.y = y;
  this.close = close;
   
  this.long = circlePanelWidth*this.close;
  this.longLine = this.long*0.3;

 }
  
 hidePanelCreateGraphic() {
   
 if ((circleHideStart == 1 || firstRun ||
     choiceSter1 == 1 ) && 
      hidePanelIsLoaded == 1) {
   circleHidePanel.clear(); 
  }
   
  if (hidePanelIsLoaded == 0) {
   circleHidePanel = createGraphics(2*this.long, 2*this.long);
//   circleHidePanel.background(0,0,0,255);
//   jakisTestHide = 1;
  }   
 }
  
  
 hidePanel() {
    
  if (panelMoveX < panelWidth){  
    
   var pPlayButton = (circleHideBigSize == 1);

   circleHidePanel.noFill();
   for (var a = 10; a > 0; a--) {
     
    var strokeTmp = 20*(a/10);
    if(a == 10){
     strokeTmp = 155; 
    } 
    circleHidePanel.strokeWeight(10*((11-a)/10));
    circleHidePanel.stroke(100,100,100,strokeTmp);
    circleHidePanel.circle(this.long,
           this.long,
           this.long*1.3+pPlayButton*3);
   }
          
  circleHidePanel.fill(0,0,255,255);

  circleHidePanel.circle(this.long,
          this.long,
          this.long*1.3+pPlayButton*3);

           
   circleHidePanel.strokeWeight(this.long/8);
   circleHidePanel.stroke(255,0,0);
   circleHidePanel.fill(255,0,0,255);

   circleHidePanel.line(this.long*1.0-this.longLine,
        this.long*1.0+this.longLine,
        this.long*1.0+this.longLine,
        this.long*1.0-this.longLine);
   // circleHidePanel.line(this.long*1.25-this.longLine,
   //      buttonH*0.5+this.longLine,
   //      this.long*1.25+this.longLine,
   //      buttonH*0.5-this.longLine);
   circleHidePanel.line(this.long*1.0+this.longLine,
        this.long*1.0+this.longLine,
        this.long*1.0-this.longLine,
        this.long*1.0-this.longLine);

  }
 }
  
 controlHidePanel() {

  if (panelSter == 0){
   if (choiceSter1 == 1){
    if (mousePressX >= wW-this.x-2.7*this.long
     && mousePressX <= wW-this.x-0.7*this.long
     && mousePressY >= this.y
     && mousePressY <= this.y+2*this.long){

     panelSter = 1;
     firstRun = 10; 
    }
   }
  }

  if (panelSter == 1){
   panelMoveX = min(this.x,panelMoveX+10);
  }else{
   panelMoveX = max(0,panelMoveX-10);     
  }
 }  
}






class OpenPanel {
 constructor(x, y, close) {
  this.x = x;
  this.y = y;
  this.close = close;
   
  this.long = circlePanelWidth*this.close;
  this.longLine = this.long*0.3;

 }
  
 openPanelCreateGraphic() {
   
 if ((circleOpenStart == 1 || 
     choiceSter1 == 1  || 
     ((lastPanelMoveX != panelMoveX) && panelMoveX == panelWidth)) && 
      openPanelIsLoaded == 1) {
   circleOpenPanel.clear(); 
//   circleOpenPanel.background(255,255,255,255);
  }
   
  if (openPanelIsLoaded == 0) {
   circleOpenPanel = createGraphics(2.0*this.long, 2.0*this.long);
//   circleOpenPanel.background(255,255,255,255);
//   jakisTestOpen = 1;
  }   
 }
  
  
 openPanel() {
   
  if (panelMoveX == this.x){
    
   var pPlayButton = (circleOpenBigSize == 1);

   
    
   circleOpenPanel.noFill();
   for (var a = 10; a > 0; a--) {
     
    var strokeTmp = 20*(a/10);
    if(a == 10){
     strokeTmp = 155; 
    } 
    circleOpenPanel.strokeWeight(10*((11-a)/10)+pPlayButton*8);
    circleOpenPanel.stroke(100,100,100,strokeTmp);
    circleOpenPanel.line(0.5*this.long,
         0.65*this.long,
         1.5*this.long,
         0.65*this.long);
    circleOpenPanel.line(0.5*this.long,
         1.0*this.long,
         1.5*this.long,
         1.0*this.long);
    circleOpenPanel.line(0.5*this.long,
         1.35*this.long,
         1.5*this.long,
         1.35*this.long);
   }  
    
//    if (pPlayButton){
// //    firstRun = 10;     
//    }
 
    
   circleOpenPanel.strokeWeight(4);
   circleOpenPanel.stroke(255,0,0);
   circleOpenPanel.fill(255,0,0,255);
 
   circleOpenPanel.line(0.5*this.long,
        0.65*this.long,
        1.5*this.long,
        0.65*this.long);
   circleOpenPanel.line(0.5*this.long,
        1.0*this.long,
        1.5*this.long,
        1.0*this.long);
   circleOpenPanel.line(0.5*this.long,
        1.35*this.long,
        1.5*this.long,
        1.35*this.long);
  
  }   
 }
  
 controlOpenPanel() {
   
  if (panelSter == 1){
    
   if (choiceSter1 == 1){
    if (mousePressX >= wW-2.5*this.long
     && mousePressX <= wW
     && mousePressY >= wH-2.5*this.long
     && mousePressY <= wH){   
   
     panelSter = 0;
     firstRun = 10; 
    }
   }
  }

  if (panelSter == 1){
   panelMoveX = min(this.x,panelMoveX +10);
  }else{
   panelMoveX = max(0,panelMoveX -10);     
  }
 }  
}






class Icons {
 constructor(size) {
   
 this.size = size;
 }
  
 createIconDataCategory() { 
   
  if (panelMoveX < panelWidth){
   leftButtonsPanel.fill(255);
   // if(actualButton == 0){
   //  leftButtonsPanel.fill(0, 0, 255, 255); 
   // }
   leftButtonsPanel.circle(iconsX[0],
         iconsY[0],
         this.size*0.3);
   leftButtonsPanel.circle(iconsX[0]+this.size*0.3,
         iconsY[0],
         this.size*0.1);
   leftButtonsPanel.circle(iconsX[0]-this.size*0.3,
         iconsY[0],
         this.size*0.1);
   leftButtonsPanel.circle(iconsX[0],
         iconsY[0]+this.size*0.3,
         this.size*0.1);
   leftButtonsPanel.circle(iconsX[0],
         iconsY[0]-this.size*0.3,
         this.size*0.1);
   leftButtonsPanel.circle(iconsX[0]+this.size*0.2,
         iconsY[0]+this.size*0.2,
         this.size*0.1);
   leftButtonsPanel.circle(iconsX[0]-this.size*0.2,
         iconsY[0]-this.size*0.2,
         this.size*0.1);
   leftButtonsPanel.circle(iconsX[0]-this.size*0.2,
         iconsY[0]+this.size*0.2,
         this.size*0.1);
   leftButtonsPanel.circle(iconsX[0]+this.size*0.2,
         iconsY[0]-this.size*0.2,
         this.size*0.1);

   leftButtonsPanel.strokeWeight(1);
   leftButtonsPanel.stroke(255);

   leftButtonsPanel.line(iconsX[0]+this.size*0.2,
        iconsY[0]+this.size*0.2,
        iconsX[0]-this.size*0.2,
        iconsY[0]-this.size*0.2);  
   leftButtonsPanel.line(iconsX[0]+this.size*0.2,
        iconsY[0]-this.size*0.2,
        iconsX[0]-this.size*0.2,
        iconsY[0]+this.size*0.2);  
   leftButtonsPanel.line(iconsX[0]-this.size*0.3,
        iconsY[0],
        iconsX[0]+this.size*0.3,
        iconsY[0]);  
   leftButtonsPanel.line(iconsX[0],
        iconsY[0]-this.size*0.3,
        iconsX[0],
        iconsY[0]+this.size*0.3);  
  }
 }

 createIconAnimationType() { 
   
  if (panelMoveX < panelWidth){
   leftButtonsPanel.noStroke();
   leftButtonsPanel.fill(255);
    
   leftButtonsPanel.rect(iconsX[1]-this.size*0.2,
        iconsY[1]-this.size*0.3,
        this.size*0.09,
        this.size*0.5)
   leftButtonsPanel.rect(iconsX[1]-this.size*0.1,
        iconsY[1]-this.size*0.2,
        this.size*0.09,
        this.size*0.4)
   leftButtonsPanel.rect(iconsX[1]-this.size*0.0,
        iconsY[1]-this.size*0.1,
        this.size*0.09,
        this.size*0.3)
   leftButtonsPanel.rect(iconsX[1]+this.size*0.1,
        iconsY[1]-this.size*0.0,
        this.size*0.09,
        this.size*0.2)
   leftButtonsPanel.rect(iconsX[1]+this.size*0.2,
        iconsY[1]+this.size*0.1,
        this.size*0.09,
        this.size*0.1)
  }
 }

 createIconAnimationModel() { 
   
  if (panelMoveX < panelWidth){
   leftButtonsPanel.strokeWeight(2);
   leftButtonsPanel.stroke(255);
   leftButtonsPanel.line(iconsX[2]-this.size*0.3,
        iconsY[2]+this.size*0.3,
        iconsX[2]-this.size*0.3,
        iconsY[2]-this.size*0.3);  
   leftButtonsPanel.line(iconsX[2]-this.size*0.3,
        iconsY[2]+this.size*0.3,
        iconsX[2]+this.size*0.3,
        iconsY[2]+this.size*0.3);  
   leftButtonsPanel.line(iconsX[2]-this.size*0.3,
        iconsY[2]+this.size*0.3,
        iconsX[2]+this.size*0.3,
        iconsY[2]-this.size*0.3);  
   leftButtonsPanel.strokeWeight(0);
   leftButtonsPanel.rect(iconsX[2]-this.size*0.3,
        iconsY[2]-this.size*0.3,
        this.size*0.5,
        this.size*0.09);
   leftButtonsPanel.rect(iconsX[2]-this.size*0.3,
        iconsY[2]-this.size*0.2,
        this.size*0.2,
        this.size*0.09);
   leftButtonsPanel.rect(iconsX[2]-this.size*0.3,
        iconsY[2]-this.size*0.1,
        this.size*0.4,
        this.size*0.09);
   leftButtonsPanel.rect(iconsX[2]-this.size*0.3,
        iconsY[2]-this.size*0.0,
        this.size*0.1,
        this.size*0.09);
   leftButtonsPanel.rect(iconsX[2]-this.size*0.3,
        iconsY[2]+this.size*0.1,
        this.size*0.2,
        this.size*0.09);
    
   leftButtonsPanel.rect(iconsX[2]+this.size*0.0,
        iconsY[2]+this.size*0.1,
        this.size*0.09,
        this.size*0.2)   
   leftButtonsPanel.rect(iconsX[2]+this.size*0.1,
        iconsY[2]+this.size*0.0,
        this.size*0.09,
        this.size*0.3)   
   leftButtonsPanel.rect(iconsX[2]+this.size*0.2,
        iconsY[2]-this.size*0.1,
        this.size*0.09,
        this.size*0.4)  
  }
 }
  
 createIconDataType() { 
   
  if (panelMoveX < panelWidth){

   leftButtonsPanel.rect(iconsX[3]-this.size*0.09,
        iconsY[3]-this.size*0.3,
        this.size*0.18,
        this.size*0.1);
   leftButtonsPanel.rect(iconsX[3]-this.size*0.3,
        iconsY[3]-this.size*0.1,
        this.size*0.18,
        this.size*0.1);
   leftButtonsPanel.rect(iconsX[3]+this.size*0.1,
        iconsY[3]-this.size*0.1,
        this.size*0.18,
        this.size*0.1);
   leftButtonsPanel.rect(iconsX[3]-this.size*0.3,
        iconsY[3]+this.size*0.1,
        this.size*0.18,
        this.size*0.1);
   leftButtonsPanel.rect(iconsX[3]+this.size*0.1,
        iconsY[3]+this.size*0.1,
        this.size*0.18,
        this.size*0.1);
   leftButtonsPanel.rect(iconsX[3]-this.size*0.1,
        iconsY[3]+this.size*0.0,
        this.size*0.18,
        this.size*0.1);
   leftButtonsPanel.strokeWeight(2);
   leftButtonsPanel.stroke(255);
   leftButtonsPanel.line(iconsX[3]-this.size*0.0,
        iconsY[3]-this.size*0.25,
        iconsX[3]-this.size*0.2,
        iconsY[3]-this.size*0.05);  
   leftButtonsPanel.line(iconsX[3]-this.size*0.0,
        iconsY[3]-this.size*0.25,
        iconsX[3]+this.size*0.2,
        iconsY[3]-this.size*0.05);  
   leftButtonsPanel.line(iconsX[3]-this.size*0.2,
        iconsY[3]-this.size*0.05,
        iconsX[3]+this.size*0.0,
        iconsY[3]+this.size*0.05);  
   leftButtonsPanel.line(iconsX[3]+this.size*0.2,
        iconsY[3]-this.size*0.05,
        iconsX[3]+this.size*0.0,
        iconsY[3]+this.size*0.05);  
   leftButtonsPanel.line(iconsX[3]-this.size*0.2,
        iconsY[3]-this.size*0.1,
        iconsX[3]-this.size*0.2,
        iconsY[3]+this.size*0.1);  
   leftButtonsPanel.line(iconsX[3]+this.size*0.2,
        iconsY[3]-this.size*0.1,
        iconsX[3]+this.size*0.2,
        iconsY[3]+this.size*0.1);  
  }
 } 
  
  
 createIconTime() { 
   
  if (panelMoveX < panelWidth){

   leftButtonsPanel.strokeWeight(2);
   leftButtonsPanel.stroke(255);
   leftButtonsPanel.noFill();

//    leftButtonsPanel.rect(iconsX[4]*0.6,
//         iconsY[4]-+iconsX[4]*0.6,
//         iconsX[4]*0.6,
//         iconsX[4]*0.6,20,20,20,20);    
    
  leftButtonsPanel.circle(iconsX[4],
       iconsY[4],
       this.size*0.7,
       this.size*0.7)  
   leftButtonsPanel.line(iconsX[4],
        iconsY[4],
        iconsX[4],
        iconsY[4]-this.size*0.2);      
   leftButtonsPanel.line(iconsX[4],
        iconsY[4],
        iconsX[4]+this.size*0.2,
        iconsY[4]);  
    
  }
 }
}


//     iconsX.splice(a, 1, this.long*1.0);
//     iconsY.splice(a, 1, this.long*2.75+this.long*1.5*a);

//     leftButtonsPanel.rect(this.long*0.5,
//           this.long*2.25+this.long*1.5*a,
//           this.long*1.0,
//           this.long*1.0,
//           20,
//           20,
//           20,
//           20); 











class Buttons {
 constructor(x, y) { 
  this.x = x;
  this.y = y;
  this.stroke = 2; 
 }
  
 buttonsCreateGraphic() {
   
   
  if (rightButtonsPanelIsLoaded &&
       (rightButtonsPanelStart == 1 ||
        mouseX > wW-this.x)) {    

   rightButtonsPanel.clear(); 
//   rightButtonsPanel.background(55,234,246,255);
  }
   
  if (rightButtonsPanelIsLoaded == 0) {
   rightButtonsPanel = createGraphics(this.x, wH);
//   rightButtonsPanel.background(55,234,246,255);

  } 
 }
  
  
 showFirstButton() {
   
  if (panelMoveX < wW){
    
   rightButtonsPanel.strokeWeight(this.stroke);
   rightButtonsPanel.fill(50, 50, 150, 255);
   rightButtonsPanel.stroke(0,0,0,255);
   extraButtonH = 0;
   if(actualButton == 3){
    lastExtraButtonH = extraButtonH;
    extraButtonH = buttonH*0.5;  
   }
    
    
   rightButtonsPanel.rect(0,
        0,
        this.x,
        buttonH*1.5,
        2,
        2);
    
   rightButtonsPanel.fill(110, 110, 255, 255);
   rightButtonsPanel.rect(0,
        buttonH*1.5,
        this.x,
        buttonH*0.5+extraButtonH,
        2,
        2);
   

   var sizeCorrector = 1
   if ((this.x-20) < rightButtonsPanel.textWidth(buttonsNames[actualButton]))

   rightButtonsPanel.textStyle(BOLD);
   rightButtonsPanel.textFont('Georgia');
   rightButtonsPanel.fill(255, 255, 255, 255);
   rightButtonsPanel.strokeWeight(0);
   rightButtonsPanel.textSize(30);    
   var sizeCorrector = 1
   if ((this.x-20) < rightButtonsPanel.textWidth(buttonsNames[actualButton])){
    sizeCorrector = (this.x-20)/rightButtonsPanel.textWidth(buttonsNames[actualButton])
   }
   rightButtonsPanel.textSize(30*sizeCorrector);    
     
     
   rightButtonsPanel.text(buttonsNames[actualButton],
        this.x/2-rightButtonsPanel.textWidth(buttonsNames[actualButton])/2,
        buttonH*1.5-rightButtonsPanel.textSize()); 
    
    
   rightButtonsPanel.stroke(255);
   rightButtonsPanel.strokeWeight(2);
   rightButtonsPanel.line(this.x/10,
        buttonH*1.3,
        this.x-this.x/10,
        buttonH*1.3);
   
  }
 }
  


 showPositionsButtons() {
   
  if (panelMoveX < wW){
    
   var buttonYNumber = 0;
   var tableTMP = tableDataCategory;
   if (actualButton == 1){
    tableTMP = tableAnimationType;
   }
   if (actualButton == 2){
    tableTMP = tableAnimationModel;    
   }
   if (actualButton == 3){
    tableTMP = tablePositionsName[actualButtonParameters[0]];
   }
   if (actualButton == 4){
    tableTMP = tableTimeRange;
   }
    
  
   actualButtonYLength = buttonH*2+tableTMP.length*buttonH+extraButtonH;
    
   for (var a = 0; a < tableTMP.length; a++) { 
     
    var extraStrokePosition = 0; 
    if ((mouseX > wW-this.x && 
         mouseX < wW &&
         mouseY > buttonH*2 &&
         mouseY > buttonH*2+buttonYNumber*buttonH+moverY+extraButtonH &&
         mouseY < buttonH*2+buttonYNumber*buttonH+buttonH+moverY+extraButtonH) &&
       (actualButtonParameters[max(0,actualButton-1)] != -1 || actualButton == 0)){
     extraStrokePosition = 1;
     actualButtonPosition = a; 
 
    }
     
    if (choiceSter1 == 1 &&
        choiceTimer1 > 1 && 
        choiceTimer1 < 10 && 
        moveCount == 0 &&
        panelMoveX == 0 &&
        extraStrokePosition == 1 &&
        actualButtonParameters[actualButton] != a
       ){
//     moverY = 0

      
     buttonChanged = 1; 
     if(actualButton == 2){
      if(actualButtonParameters[actualButton] > 2 &&
         a <= 2){
       actualButtonParameters.splice(3, 1, 0)  
       actualButtonParameters.splice(4, 1, 0)
       pickedPosition2 = 0 
      }
      if(actualButtonParameters[actualButton] > 5 &&
         a > 2){
       actualButtonParameters.splice(4, 1, 0)
       pickedPosition1 = 0 
       pickedPosition2 = 1 
      }   
      if(a > 5){
       actualButtonParameters.splice(3, 1, 0)
      }
      if(pickedPosition1 == pickedPosition2){
       pickedPosition2 = pickedPosition1-1 
       if(pickedPosition2 == -1){
        pickedPosition2 = 2
       }
      } 
     }
      
     if(actualButton == 3){
      if(actualButtonParameters[actualButton-1] <= 2){
       if(pickedPosition1 == -1 || 
          (pickedPosition1 != -1 && pickedPosition1 != a)){
        pickedPosition1 = a;
       }
      }
      if(actualButtonParameters[actualButton-1] > 2 && actualButtonParameters[actualButton-1] <= 5){
       if (lastDoublePicked == 1){
         buttonChanged = 0; 
        if (pickedPosition1 != a && pickedPosition2 != a){
         pickedPosition2 = a;
         lastDoublePicked = 2; 
         buttonChanged = 1; 
        }
       }else{
         buttonChanged = 0; 
        if (pickedPosition1 != a && pickedPosition2 != a){
         pickedPosition1 = a; 
         lastDoublePicked = 1; 
         buttonChanged = 1; 
        }
       }
      }     
      if(actualButtonParameters[actualButton-1] > 5){
       buttonChanged = 0;         
      }
     }
     actualButtonParameters.splice(actualButton, 1, a);
    }

     
    if (actualButton == 2){
     chartLastModelTypeForLegend = chartModelTypeForLegend;
     if (choiceSter1 == 1){
      chartModelTypeForLegend = 2
      if(actualButtonParameters[actualButton] == 0 ||
         actualButtonParameters[actualButton] == 3 ||
         actualButtonParameters[actualButton] == 6){
       chartModelTypeForLegend = 0        
      }
      if(actualButtonParameters[actualButton] == 1 ||
         actualButtonParameters[actualButton] == 4 ||
         actualButtonParameters[actualButton] == 7){
       chartModelTypeForLegend = 1  
      }
     }     
    }
     
     
     
     
    rightButtonsPanel.strokeWeight(this.stroke);
    rightButtonsPanel.fill(125, 125, 125, 255);
    rightButtonsPanel.stroke(0,0,0,255);
    
    rightButtonsPanel.rect(0,
         buttonH*2+buttonYNumber*buttonH+moverY+extraButtonH,
         this.x,
         buttonH,
         2,
         2);
     
    rightButtonsPanel.strokeWeight(this.stroke);
    rightButtonsPanel.fill(255, 0, 0, 255);
    if (extraStrokePosition*!mobileDevice){
     rightButtonsPanel.fill(70,255,255,255);
    }
    if ((actualButtonParameters[actualButton] == a && actualButton != 3) ||
        (actualButton == 3 && 
         actualButtonParameters[actualButton-1] <= 2 &&
         actualButtonParameters[actualButton] == a) ||
        (actualButton == 3 && 
         actualButtonParameters[actualButton-1] > 2 &&
         actualButtonParameters[actualButton-1] <= 5 &&
         (pickedPosition1 == a || pickedPosition2 == a)) ||
        (actualButton == 3 && 
         actualButtonParameters[actualButton-1] > 5)
        ){
     rightButtonsPanel.fill(0,255,0,255);
    }
    rightButtonsPanel.stroke(0,0,0,255);
    
    rightButtonsPanel.rect(0,
         buttonH*2+buttonYNumber*buttonH+moverY+extraButtonH,
         this.x/20,
         buttonH,
         5,
         5);
     
    rightButtonsPanel.textStyle(BOLD);
    rightButtonsPanel.textFont('Georgia');
    rightButtonsPanel.stroke(0, 0, 0, 255);
    rightButtonsPanel.fill(255,255,255,255);
    if (extraStrokePosition*!mobileDevice){
     rightButtonsPanel.fill(70,255,255,255);
    }
    if ((actualButtonParameters[actualButton] == a && actualButton != 3) ||
        (actualButton == 3 && 
         actualButtonParameters[actualButton-1] <= 2 &&
         actualButtonParameters[actualButton] == a) ||
        (actualButton == 3 && 
         actualButtonParameters[actualButton-1] > 2 &&
         actualButtonParameters[actualButton-1] <= 5 &&
         (pickedPosition1 == a || pickedPosition2 == a)) ||
        (actualButton == 3 && 
         actualButtonParameters[actualButton-1] > 5)
        ){
     rightButtonsPanel.fill(0,255,0,255);
    }
    rightButtonsPanel.strokeWeight(1+extraStrokePosition*2*!mobileDevice);
    rightButtonsPanel.textSize(20);
    var textToButton = tableTMP[a];  
     
    if (rightButtonsPanel.textWidth(textToButton) > this.x*0.8){            
     textToButton = textToButton.slice(0, round((this.x*0.8)/rightButtonsPanel.textWidth(textToButton)*textToButton.length))+'...';
    }

    rightButtonsPanel.text(textToButton,
         this.x/2-rightButtonsPanel.textWidth(textToButton)/2,
         buttonH*2+buttonYNumber*buttonH+buttonH/2+rightButtonsPanel.textSize()/2+moverY+extraButtonH); 
     
     
     
     
     
      
     
    buttonYNumber = buttonYNumber + 1; 
     
     
   }
    
  }
 }
  
 showPositionsExtraText() {
   
  if (panelMoveX < wW){
   if (actualButton == 3){

    rightButtonsPanel.textSize(buttonH*0.27);    
    rightButtonsPanel.textStyle(NORMAL);
    rightButtonsPanel.textFont('Georgia');
    rightButtonsPanel.stroke(0, 0, 0, 255);
    rightButtonsPanel.fill(255,255,255,255);

    
    rightButtonsPanel.text('Main phrase: ',
         10,
         buttonH*1.5+buttonH*0.30);
    var widthTmp = rightButtonsPanel.textWidth('Main phrase: ');
    rightButtonsPanel.strokeWeight(2);
    rightButtonsPanel.textStyle(BOLD);
    rightButtonsPanel.fill(0,255,110,255);
    rightButtonsPanel.stroke(0, 0, 0, 255);
    rightButtonsPanel.text(tablePositionsName[actualButtonParameters[0]][actualButtonPosition],
         10+widthTmp,
         buttonH*1.5+buttonH*0.30);
    rightButtonsPanel.fill(255,255,255,255);
    rightButtonsPanel.stroke(0, 0, 0, 255);
     
     
    rightButtonsPanel.strokeWeight(2);
    rightButtonsPanel.textStyle(NORMAL);
    rightButtonsPanel.text('Related to the phrase: ',
         10,
         buttonH*1.5+buttonH*0.60);
    rightButtonsPanel.fill(76,255,255,255);
    rightButtonsPanel.text(tablePositionsRelation[max(0,actualButtonParameters[0])][actualButtonPosition],
         10+rightButtonsPanel.textWidth('Related to the phrase: '),
         buttonH*1.5+buttonH*0.60);
    rightButtonsPanel.fill(255,255,255,255);
     
     
    rightButtonsPanel.text('Launtch date: ',
         10,
         buttonH*1.5+buttonH*0.90);
    rightButtonsPanel.fill(76,255,255,255);
    rightButtonsPanel.text(tablePositionsDate[max(0,actualButtonParameters[0])][actualButtonPosition],
         10+rightButtonsPanel.textWidth('Launtch date: '),
         buttonH*1.5+buttonH*0.90);
   }
  }
 }
}










class PlayButton {
 constructor(divider, bars, stages, x, close) {
//  this.nextBar = round(wH/(max(10,bars)+2));
  this.nextBar = round(wH/(10+2));
//  this.nextBar2 = round(wH/(max(10,bars)+2));
  this.nextBar2 = round(wH/(10+2));
  if (this.nextBar2 < 40){
   this.tmp = round((40-this.nextBar2)/10)*2;
   this.nextBar2 = 40;
   this.nextBar = this.nextBar-this.tmp     
  }
  this.bars = bars; 
  this.stages = stages; 
  this.divider = divider;
  this.long = x*close;

 }
  
  
  
 playButtonCreateGraphic(){
   
  if ((playButtonStart != 0 ||
       choiceSter1 == 1 ||
     chartModelTypeForLegend != chartLastModelTypeForLegend) &&
      playButtonIsLoaded == 1 || (lastExtraChartSter != 0 || extraChartSter != 0)){
    playButton.clear();
//   playButton.background(0,0,0,255);
  }
   
  if (playButtonIsLoaded == 0) {
   if(mobileDevice == 0){
    playButton = createGraphics(this.nextBar2, this.nextBar2);
   }else{
    playButton = createGraphics(chartValueWidth3*(max(12,this.nextBar*0.3)/10)+10, this.nextBar2); 
   }
     
//   playButton.background(0,0,0,255);
  }
 }
  
  
  
  
  
 playButtonPCPlayController() {   
   
  if (chartCalculate > 0 && mobileDevice == 0 && chartModelTypeForLegend != 2){

//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth3;
//   var bCCChartValueWidth = chartValueWidth+circlePanelWidth*0.25;
   var bCCControllerLength = bCCChartTextWidth;
   if (chartModelTypeForLegend == 0){
     bCCControllerLength = bCCChartValueWidth;
   }
   playButtonXStart = chartValueWidth-this.nextBar2/2;
   playButtonXStart = bCCControllerLength-this.nextBar2-10;
   
   // var bCCMaxSize = min(wW*0.8,wW*0.6+panelMoveX[0]*0.6,wW-bCCChartTextWidth-bCCChartValueWidth);
   var bCCMaxSize = wW-bCCChartTextWidth-bCCChartValueWidth;
   if (wW > wH) {
    bCCMaxSize = round(wW-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX*0.75);
   }
   var bCCWidth = bCCControllerLength-(this.nextBar*0.8);
   var minBars = max(10,this.bars);

   var bCPCPlayButton = (touches.length == 0
    && playButtonBigSize == 1); 
    
    
    
    
   var bCCWidth2 = bCCControllerLength-(this.nextBar*0.8+bCPCPlayButton*3);

   playButton.noFill();
   for (var a = 10; a > 0; a--) {
     
    var strokeTmp = 20*(a/10);
    if(a == 10){
     strokeTmp = 155; 
    } 
    playButton.strokeWeight(10*((11-a)/10));
    playButton.stroke(100,100,100,strokeTmp);
    playButton.circle(this.nextBar2/2,
           this.nextBar2/2,
           this.nextBar2*0.8+bCPCPlayButton*3);
   }
    
   playButton.noStroke();
   playButton.fill(0,0,255,255);
   // playButton.circle(bCCWidth,
   //         wH-this.nextBar*0.8,
   //         this.nextBar2*0.8+bCPCPlayButton*3);
   playButton.circle(this.nextBar2/2,
           this.nextBar2/2,
           this.nextBar2*0.8+bCPCPlayButton*3);
    
   if (bCPCPlayButton){
    lastNowChangeForMap = 25;     
   }

    
   playButton.fill(255,!(bCPCPlayButton)*255,!(bCPCPlayButton)*255,255);


   if (choiceSter1 == 1){
    if (lastChoiceSter > 2 && 
        choiceTimer1 > 1 && 
        choiceTimer1 < 10
     && mousePressX >= playButtonXStart
     && mousePressX <= playButtonXStart+this.nextBar2
     && mousePressY >= wH-this.nextBar2*1.35
     && mousePressY <= wH-this.nextBar2*0.35){

     
     chartPlayController = chartPlayController*(-1);
     lastNowChangeForMap = 25; 
    }
   }    
  //   if ((mouseX > playButtonXStart && 
//        mouseX < playButtonXStart+xLongTmp &&
//        mouseY > wH-xLongTmp*1.35 &&
//        mouseY < wH-xLongTmp*0.35)){  
    
   if (chartPlayController == 1 || chartStop == 1){
     
     
   playButton.strokeWeight(1);
   playButton.stroke(0,0,0,255);
   // playButton.triangle(bCCWidth-this.nextBar2*0.15, 
   //          wH-this.nextBar*0.8+this.nextBar2*0.22, 
   //          bCCWidth-this.nextBar2*0.15, 
   //          wH-this.nextBar*0.8-this.nextBar2*0.22, 
   //          bCCWidth+this.nextBar2*0.25, 
   //          wH-this.nextBar*0.8);
   playButton.triangle(this.nextBar2*0.35, 
            this.nextBar2*0.25, 
            this.nextBar2*0.8, 
            this.nextBar2*0.5, 
            this.nextBar2*0.35, 
            this.nextBar2*0.75);
   }else{
     
    playButton.stroke(255,!(bCPCPlayButton)*255,!(bCPCPlayButton)*255,255);
    playButton.strokeWeight(this.nextBar2/8);
    // playButton.line(bCCWidth-this.nextBar2*0.12,
    //      wH-this.nextBar*0.8+this.nextBar2*0.2,
    //      bCCWidth-this.nextBar2*0.12,
    //      wH-this.nextBar*0.8-this.nextBar2*0.2
    //     ); 
    playButton.line(this.nextBar2*0.37,
         this.nextBar2*0.3,
         this.nextBar2*0.37,
         this.nextBar2*0.7
        ); 
    // playButton.line(bCCWidth+this.nextBar2*0.12,
    //      wH-this.nextBar*0.8+this.nextBar2*0.2,
    //      bCCWidth+this.nextBar2*0.12,
    //      wH-this.nextBar*0.8-this.nextBar2*0.2
    //     );     
    playButton.line(this.nextBar2*0.62,
         this.nextBar2*0.3,
         this.nextBar2*0.62,
         this.nextBar2*0.7
        );     
   }
  }
 }

  
  
 playButtonMobilePlayController() {   
   
  if (chartCalculate > 0 && mobileDevice == 1 && chartModelTypeForLegend != 2){
   
//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth3;
//   var bCCChartValueWidth = chartValueWidth+circlePanelWidth*0.25;
   var bCCControllerLength = bCCChartValueWidth;
   if (chartModelTypeForLegend == 0){
    bCCControllerLength = bCCChartValueWidth;
   }
   // }
   playButtonXStart = 0;
   
   // var bCCMaxSize = min(wW*0.8,wW*0.6+panelMoveX[0]*0.6,wW-bCCChartTextWidth-bCCChartValueWidth);
   var bCCMaxSize = wW-bCCChartTextWidth-bCCChartValueWidth;
   if (wW > wH) {
    bCCMaxSize = round(wW-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX*0.75);
   }
   var bCCWidth = bCCControllerLength-(this.nextBar*0.8);
   var minBars = max(10,this.bars);   
    
    
   var bCCWidth2 = bCCControllerLength-(this.nextBar*0.8);


   if (choiceSter1 == 1){
    if (lastChoiceSter > 2 && 
        choiceTimer1 > 1 && 
        choiceTimer1 < 10
     && mousePressX >= playButtonXStart
     && mousePressX <= bCCControllerLength
     && mousePressY >= wH-this.nextBar2*1.5
     && mousePressY <= wH){

     chartPlayController = chartPlayController*(-1);
     lastNowChangeForMap = 25; 
    }
   }    

    
   if (chartPlayController == 1 || chartStop == 1){
     
     
   playButton.strokeWeight(1);
   playButton.stroke(0,0,0,255);
   playButton.noStroke();
   playButton.fill(255,255,255,255);

   playButton.triangle(bCCControllerLength*0.30, 
            this.nextBar2*0.15, 
            bCCControllerLength*0.30, 
            this.nextBar2*0.85, 
            bCCControllerLength*0.70, 
            this.nextBar2*0.50);
   }else{
     
    playButton.stroke(255,0,0,255);
    playButton.strokeWeight(this.nextBar2/8);

    playButton.line(bCCControllerLength*0.42,
         this.nextBar2*0.2,
         bCCControllerLength*0.42,
         this.nextBar2*0.8
        ); 
 
    playButton.line(bCCControllerLength*0.58,
         this.nextBar2*0.2,
         bCCControllerLength*0.58,
         this.nextBar2*0.8
        );     
   }
  }
 }  
}

  
  



class TimerBelt {
 constructor(divider, bars, stages, x, close) {
//  this.nextBar = round(wH/(max(10,bars)+2));
  this.nextBar = round(wH/(10+2));
//  this.nextBar2 = round(wH/(max(10,bars)+2));
  this.nextBar2 = round(wH/(10+2));
  if (this.nextBar2 < 40){
   this.tmp = round((40-this.nextBar2)/10)*2;
   this.nextBar2 = 40;
   this.nextBar = this.nextBar-this.tmp     
  }
  this.x = x; 
  this.bars = bars; 
  this.stages = stages; 
  this.divider = divider;
  this.long = x*close;
  this.minBars = max(10,this.bars);
 }
 
  
 timerBeltCreateGraphic(){
   
  if ((choiceSter1 == 1 || firstRun > 8 || choiceSter2 ||
       (chartPlayController == -1) ||
       (chartPlayController == 1 && mouseIsPressed &&
        mousePressX >= playButtonController[0] &&
        mousePressX <= playButtonController[1] &&
        mousePressY >= playButtonController[2] &&
        mousePressY <= playButtonController[3]) || 
     (lastNowChangeForMap > 0)) &&
      timerBeltIsLoaded == 1 || (lastExtraChartSter != 0 || extraChartSter != 0)){
    timerBelt.clear();
    timerBeltData.clear();
//   timerBeltData.background(0,0,0,255);
  }
   
  if (timerBeltIsLoaded == 0) {
   timerBelt = createGraphics(wW, this.nextBar2*2);
   timerBeltData = createGraphics(wW, this.nextBar2);
//   timerBeltData.background(0,0,0,255);
  }
 }
  
  

  
 timerBeltController() {   
  
  if (chartCalculate > 0 && chartModelTypeForLegend != 2){
    
//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth3;
//   var bCCChartValueWidth = chartValueWidth+circlePanelWidth*0.25;
   var bCCControllerLength = bCCChartTextWidth;
   if (chartModelTypeForLegend == 0){
    bCCControllerLength = bCCChartValueWidth;
   }

   var bCPCPlayButton = (touches.length == 0
    && playButtonBigSize == 1); 
    
   var bCCMaxSize = wW-bCCChartTextWidth-bCCChartValueWidth;
   if (wW > wH) {
    bCCMaxSize = round(wW-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX);
   }
    
   var bCCWidth2 = bCCControllerLength-(this.nextBar*0.8+bCPCPlayButton*3);


   playButtonController.splice(0, 1, bCCWidth2-this.nextBar2*0.5);    
   playButtonController.splice(1, 1, bCCControllerLength+bCCMaxSize+10);    
   playButtonController.splice(2, 1, this.nextBar2*(this.minBars+0.8));    
   playButtonController.splice(3, 1, this.nextBar2*(this.minBars+0.8)+this.nextBar2*1.0);    
    
 //--------------------------------------------------------------    
   var kkkok =  chartStage
   if (choiceSter1 == 1){
    if (mousePressX >= bCCControllerLength-10
     && mousePressX <= bCCControllerLength+bCCMaxSize+10
     && mousePressY >= wH-this.nextBar2*0.8-this.nextBar2*0.40
     && mousePressY <= wH && 
        choiceTimer1 > 1 && 
        choiceTimer1 < 10){
     
     firstRun = 2 
     chartLineRefresh = 1;
     lastNowChangeForMap = lastNowChangeForMap+2
     chartStage = min(chartValue2.length/this.bars-1,
                      min(chartValue2.length/this.bars,
                          max(0,round(map(mouseX,
                                          bCCControllerLength,
                                          bCCControllerLength+bCCMaxSize,
                                          0,
                                          chartValue2.length/(this.bars*this.divider)))*(this.divider+1)))); 
    }
     
   }
  }
 }

 
  
 timerBeltPCCreator() {   
   
  if (chartCalculate > 0 && mobileDevice == 0 && chartModelTypeForLegend != 2){
    
//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth3;
//    var bCCChartValueWidth = chartValueWidth+circlePanelWidth*0.25;
   var bCCControllerLength = max(this.nextBar2,bCCChartTextWidth);
   if (chartModelTypeForLegend == 0){
    bCCControllerLength = max(this.nextBar2,bCCChartValueWidth);
   }

    
   // var bCCMaxSize = min(wW*0.8,wW*0.6+panelMoveX[0]*0.6,wW-bCCChartTextWidth-bCCChartValueWidth);
   var bCCMaxSize = wW-bCCChartTextWidth-bCCChartValueWidth;
   if (wW > wH) {
    bCCMaxSize = round(wW-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX);
   }
   
   timerBelt.noStroke();
   timerBelt.fill(50, 60, 140, 225);

    

   buttonsPanel.noFill();
   for (var b = 10; b > 0; b--) {
      
    var strokeTmp = 30*(b/10);
    if(b == 10){
     strokeTmp = 155; 
    }   
    if(b == 1){
     timerBelt.fill(50, 60, 140, 185); 
    }   
//     timerBelt.fill(255, 255, 255, 255); 
    timerBelt.strokeWeight(10*((11-b)/10));
//    buttonsPanel.stroke(70, 255, 255, strokeTmp); 
    timerBelt.stroke(100, 120, 255, strokeTmp); 
    timerBelt.rect(bCCControllerLength,
//         wH-this.nextBar*0.8-this.nextBar*0.15,
         this.nextBar*1.05,
         bCCMaxSize,
         this.nextBar*0.3,
         10,
         10);
   }     

//-------------dodatkowe linie z przedziałem czasowym-----------
     
   var xLongToMultiply = bCCControllerLength+bCCMaxSize;
   timerBelt.textStyle(NORMAL);
   timerBelt.textFont('Arial');
   timerBelt.strokeWeight(1);
   timerBelt.textSize(max(10,this.nextBar*0.3));  

   maxScaleForBelt = 10; 
   
   for (var u = 0; u < maxScaleForBelt+1; u++) {
     
    timerBelt.stroke(0, 0, 0, 255); 
    // if (mapCalculate > 7 && animationStartParameters[2] == 2){
    //  timerBelt.stroke(255,255, 255, 255);       
    // }
     
    if (u % 2 == 0){
     timerBelt.strokeWeight(2);
     timerBelt.line(bCCControllerLength+bCCMaxSize/maxScaleForBelt*u,
//          this.nextBar*(minBars+1.1)+this.nextBar*0.4/1,
          this.nextBar2*1.4,
          bCCControllerLength+bCCMaxSize/maxScaleForBelt*u,
          this.nextBar2*2);   
    }else{
     timerBelt.strokeWeight(2);
     timerBelt.line(bCCControllerLength+bCCMaxSize/maxScaleForBelt*u,
//          this.nextBar*(minBars+1.1)+this.nextBar*0.7/1,
          this.nextBar2*1.7,
          bCCControllerLength+bCCMaxSize/maxScaleForBelt*u,
          this.nextBar2*2);   
    }
    timerBelt.strokeWeight(2);
      
      
     
     
    if (u == 0 || u == round(maxScaleForBelt/2) || u == maxScaleForBelt){
     var xTmp = 0
     var textTmp = chartDate2[0]
     if (u == 0){
      timerBelt.textAlign(LEFT);
      timerBelt.fill(0,255, 0, 255);  
      timerBelt.stroke(0,0, 0, 255);  
      xTmp = bCCControllerLength+5
     }
     if (u == round(maxScaleForBelt/2)){
      timerBelt.textAlign(CENTER);
      timerBelt.fill(255,255, 0, 255);  
      timerBelt.stroke(0,0, 0, 255);  
      xTmp = bCCControllerLength+bCCMaxSize/2
      textTmp = chartDate2[round(chartDate2.length/2)] 
     }
     if (u == maxScaleForBelt){
      timerBelt.textAlign(RIGHT);
      timerBelt.fill(255,0, 0, 255);  
      timerBelt.stroke(0,0, 0, 255);  
      xTmp = bCCControllerLength+bCCMaxSize-5
      textTmp = chartDate2[round(chartDate2.length-1)] 
     }

    timerBelt.strokeWeight(2);
      timerBelt.stroke(0,0, 0, 255);  
      timerBelt.fill(0,255, 0, 255);  
//      timerBelt.noFill();  
     
     // if (mapCalculate > 7 && animationStartParameters[2] == 2){
     //  timerBelt.fill(255,255, 255, 255);  
     //  timerBelt.stroke(122,122, 122, 255);       
     // }
     if (this.nextBar >= 30){
      timerBelt.text(textTmp,
           xTmp,
//           this.nextBar*(minBars+1.1)+this.nextBar/2+10);
           this.nextBar2*1.5+10);
     }
     timerBelt.textAlign(LEFT);

    }
   }
    
    
   timerBelt.noFill();
   var bCTTimer = map(chartStage*this.bars,0,chartValue2.length,bCCControllerLength,bCCControllerLength+bCCMaxSize);

   // if(startAnimation == 0){
   //  bCTTimer = chartLastTimer1 
   // }
  }
 }
  
 
 timerBeltMobileCreator() {   
   
  if (chartCalculate > 0 && mobileDevice == 1 && chartModelTypeForLegend != 2){
    
//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth3;
   var bCCControllerLength = bCCChartTextWidth;
   if (chartModelTypeForLegend == 0){
    bCCControllerLength = bCCChartValueWidth;
   }

    
   // var bCCMaxSize = min(wW*0.8,wW*0.6+panelMoveX[0]*0.6,wW-bCCChartTextWidth-bCCChartValueWidth);
   var bCCMaxSize = wW-bCCChartTextWidth-bCCChartValueWidth;
   if (wW > wH) {
    bCCMaxSize = round(wW-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX);
   }
    
   var bCTTimer = min(bCCMaxSize+bCCControllerLength,map(chartStage*this.bars,0,chartValue2.length,bCCControllerLength,bCCControllerLength+bCCMaxSize));

   // if(startAnimation == 0){
   //  bCTTimer = chartLastTimer1 
   // } 
   
   timerBelt.noStroke();
   timerBelt.fill(120, 130, 150, 155); 
   timerBelt.rect(0,
         this.nextBar2*1.05,
         wW-this.x-0.4*this.long*(panelMoveX == 0)+panelMoveX,
         this.nextBar2*0.95,);
    
    
   timerBelt.fill(120, 130, 150, 155);
   timerBelt.rect(bCCControllerLength,
         this.nextBar2*1.05,
         bCCMaxSize,
         this.nextBar2*0.95,);    
   timerBelt.noFill();
     

//-------------dodatkowe linie z przedziałem czasowym-----------
     
   var xLongToMultiply = bCCControllerLength+bCCMaxSize;
   timerBelt.textStyle(NORMAL);
   timerBelt.textFont('Arial');
   timerBelt.strokeWeight(2);
   timerBelt.textSize(max(10,this.nextBar2*0.5));  

//   if ((lastPanelMoveX == panelWidth || lastPanelMoveX == 0) && (panelMoveX == panelWidth || panelMoveX == 0)){ 
    maxScaleForBelt = round(bCCMaxSize/(timerBelt.textWidth(chartDate2[3])*2)); 
//   }
   timerBelt.strokeWeight(2);
    
   for (var u = 0; u < maxScaleForBelt+1; u++) {
     
    timerBelt.stroke(255, 255, 255, 255); 
     
    if (u % 1 == 0 || u == 0 || u == maxScaleForBelt){
//     timerBelt.strokeWeight(2);
     timerBelt.line(bCCControllerLength+bCCMaxSize/maxScaleForBelt*u,
//          this.nextBar*(minBars+1.1)+this.nextBar*0.4/1,
          this.nextBar2*1.05,
          bCCControllerLength+bCCMaxSize/maxScaleForBelt*u,
          this.nextBar2*2);   
    }
//   timerBelt.strokeWeight(2);
   timerBelt.stroke(0,0,0,255);  
      
     
     
//    if (u == 0 || u == round(maxScaleForBelt/2) || u == maxScaleForBelt){
     var xTmp = 0
     var textTmp = chartDate2[0]
     if (u == 0){
      timerBelt.textAlign(LEFT);
      timerBelt.fill(0,255, 0, 255);  
      xTmp = bCCControllerLength+5
     }
     if (u != 0 && u != maxScaleForBelt){

      timerBelt.textAlign(LEFT);
      timerBelt.fill(255,255, 0, 255);  
      xTmp = bCCControllerLength+(u-1)*bCCMaxSize/maxScaleForBelt+10
      textTmp = chartDate2[round(chartDate2.length/u)] 
     }
     if (u == maxScaleForBelt){
      timerBelt.textAlign(RIGHT);
      timerBelt.fill(255,0, 0, 255);  
      xTmp = bCCControllerLength+bCCMaxSize-5
      textTmp = chartDate2[round(chartDate2.length-1)] 
     }

     timerBelt.fill(120, 240, 255, 255);

      timerBelt.text(textTmp,
           xTmp,
//           this.nextBar*(minBars+1.1)+this.nextBar/2+10);
           this.nextBar2*2.0-15);
//     }

//     }
     timerBelt.textAlign(LEFT);

//    }
   }
    
   timerBelt.stroke(40, 40, 100, 255); 
//    if (mapCalculate > 7 && animationStartParameters[2] == 2){
//     timerBelt.stroke(255,255, 255, 255);       
//    }
    
   timerBelt.line(0,
          this.nextBar2*1.05,
          wW-this.x-0.4*this.long*(panelMoveX == 0)+panelMoveX,
          this.nextBar2*1.05);   
 
    
   timerBelt.stroke(255, 0, 0, 255); 
   timerBelt.strokeWeight(2); 
   timerBelt.line(bCTTimer,
                  this.nextBar2*1.05,
                  bCTTimer,
                  this.nextBar2*2);   
     
   timerBelt.noFill();

    
  }
 }
   
  
  
  
  
  
 timerBelt() {
   
  if (chartCalculate > 0 && chartModelTypeForLegend != 2){
    

   timerBelt.textStyle(NORMAL);
   timerBelt.textFont('Arial');
   timerBelt.strokeWeight(0);
   timerBelt.textSize(this.nextBar2*0.3);  
    
    
//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth3;
//   var bCCChartValueWidth = chartValueWidth+circlePanelWidth*0.25;
   var bCCControllerLength = bCCChartTextWidth;
   bCCControllerLength = bCCChartTextWidth;
   if (chartModelTypeForLegend == 0){
    bCCControllerLength = bCCChartValueWidth;
   }
    
    
    
   var bCCMaxSize = wW-bCCChartTextWidth-bCCChartValueWidth;
   if (wW > wH) {
    bCCMaxSize = round(wW-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX);
   }
//   var minBars = max(10,this.bars);
   var bCTTimer = min(bCCMaxSize+bCCControllerLength,map(chartStage*this.bars,0,chartValue2.length,bCCControllerLength,bCCControllerLength+bCCMaxSize));
   var bCTText = chartDate2[chartStage*this.bars];
   // if(startAnimation == 0){
   //  bCTTimer = chartLastTimer1 
   //  bCTText = chartLastTimer2 
   // }
//     timerBelt.rect(bCCControllerLength,
// //         wH-this.nextBar*0.8-this.nextBar*0.15,
//          this.nextBar*1.05,
//          bCCMaxSize,
//          this.nextBar*0.3,
//          10,
//          10);   
   chartLastTimer1 = bCTTimer;
   chartLastTimer2 = bCTText;
 
    
   if (mobileDevice == 0) { 
    for (var a = 10; a > 0; a--) {
     
     var strokeTmp = 20*(a/10);
     if(a == 10){
      strokeTmp = 155; 
     } 
     timerBelt.strokeWeight(10*((11-a)/10));
     timerBelt.stroke(100,100,100,strokeTmp);
     timerBelt.circle(bCTTimer,
           this.nextBar*1.2,
           this.nextBar2*0.4);
    }
    
    timerBelt.fill(0,255,255,255);
    timerBelt.circle(bCTTimer,
          this.nextBar*1.2,
          this.nextBar2*0.4);
   }
    
   
   timerBelt.noFill();
   for (var a = 10; a > 0; a--) {
     
    var strokeTmp = 20*(a/10);
    if(a == 10){
     strokeTmp = 155; 
    }    
   
    timerBelt.strokeWeight(10*((11-a)/10));
    timerBelt.stroke(100,100,100,strokeTmp);
    timerBelt.rect(bCTTimer-this.nextBar*0.5,
//         wH-this.nextBar*0.8-this.nextBar*0.32-this.nextBar2*0.4,
         this.nextBar2*0.48,
         timerBelt.textWidth(bCTText)+20,
         this.nextBar2*0.4,
         7,
         7);
   }
       
   timerBelt.fill(0,255,255,255);
   timerBelt.rect(bCTTimer-this.nextBar*0.5,
        this.nextBar2*0.48,
        timerBelt.textWidth(bCTText)+20,
        this.nextBar2*0.4,
        7,
        7);
   playButtonYStart = this.nextBar2*2-this.nextBar2*0.48

   // miniChartBarYStart = this.nextBar*(this.minBars+1.25)-this.nextBar*0.7;
    
   timerBelt.strokeWeight(0);
   timerBelt.fill(0,255,255,255);
   timerBelt.triangle(bCTTimer-this.nextBar2*0.2, 
            this.nextBar2*0.48, 
//            wH-this.nextBar*0.8-this.nextBar*0.32, 
            bCTTimer+this.nextBar2*0.2, 
            this.nextBar2*0.48, 
//            wH-this.nextBar*0.8-this.nextBar*0.32, 
            bCTTimer, 
            this.nextBar2*1.05);
//            wH-this.nextBar*0.8-this.nextBar*0.15);
         // this.nextBar*0.48-min(this.nextBar*0.40,this.nextBar2-this.nextBar),
         // timerBelt.textWidth(bCTText)+20,
         // this.nextBar2*0.4,    
   timerBelt.fill(0,0,0, 255);
   timerBelt.strokeWeight(1);
   timerBelt.stroke(111,111,111,255);
   timerBelt.text(bCTText,
        bCTTimer-this.nextBar*0.5+10,
        this.nextBar2*0.48-min(this.nextBar2*0.40,this.nextBar2-this.nextBar2)+this.nextBar2*0.3);
    
    
    
    
    

    
    
    
//------------------------    
    
   timerBeltData.strokeWeight(3);
   timerBeltData.stroke(0,0,0,255);
   timerBeltData.textStyle(BOLD);
   timerBeltData.textSize(this.nextBar*1.0);
   timerBeltData.textSize(max(12,round((this.nextBar2*1.0)*((wW/10)/timerBeltData.textWidth(bCTText)))-5));   
   var bCTDateSize = timerBeltData.textWidth(bCTText)+10;
    
    
    
    
   timerBeltData.noFill();
   timerBeltDataEndY = max(timerBeltData.textSize(),this.nextBar2*1.0-max(12,this.nextBar2*0.3))
   timerBeltDataEndX = bCTDateSize+20
   
   for (var a = 10; a > 0; a--) {
     
    var strokeTmp = 20*(a/10);
    if(a == 10){
     strokeTmp = 155; 
    }    
    timerBeltData.strokeWeight(30*((11-a)/10));
    timerBeltData.stroke(100,100,100,strokeTmp);
    bCTDateSize = timerBeltData.textWidth(bCTText);
    timerBeltData.rect(0,
         0,
         timerBeltDataEndX,
         timerBeltDataEndY,
         0,
         0,
         0,
         0);
   }   
       
   // map10ChartYStart = max(timerBeltData.textSize(),this.nextBar2*1.0-max(12,this.nextBar2*0.3));
   // map10ChartXEnd = bCTDateSize+20
     
     
   timerBeltData.noStroke();
   timerBeltData.fill(100, 120, 190, 255);
   bCTDateSize = timerBeltData.textWidth(bCTText);
   timerBeltData.rect(0,
        0,
        timerBeltDataEndX,
        timerBeltDataEndY,
        0,
        0,
        0,
        0);
    
   timerBeltData.fill(255,255,255,255);
   timerBeltData.strokeWeight(3);
   timerBeltData.stroke(0,0,0,255);
   timerBeltData.text(bCTText,
        10,
        (this.nextBar2*1.0-max(12,this.nextBar2*0.4))*0.5+timerBeltData.textSize()*0.5);
    
   // timerBeltData.textStyle(NORMAL);
   // timerBeltData.textSize(this.nextBar*0.35);
   // timerBeltData.strokeWeight(1);
   // timerBeltData.stroke(0,0,0,255);
   // timerBeltData.fill(255,0,0,255);
   // timerBeltData.text(scaleLegend,
   //      10+bCTDateSize+20,
   //      (this.nextBar2*1.0-max(12,this.nextBar2*0.4))*0.5+timerBeltData.textSize()*0.5);
    
  }
 }  
  
  
}






  



class StartChart {
 constructor(divider, bars, stages, x, close) {
  this.nextBar = round(wH/(max(10,bars)+2));
  this.nextBar2 = round(wH/(max(10,bars)+2));
  if (this.nextBar2 < 40){
   this.tmp = round((40-this.nextBar2)/10)*2;
   this.nextBar2 = 40;
   this.nextBar = this.nextBar-this.tmp-this.tmp*0.5     
  }
  this.nextBar3 = round(wH/(10+2));
  this.bars = bars; 
  this.stages = stages; 
  this.divider = divider;
  this.long = x*close;
  this.x = x;
 }
  
  
 chartCreateGraphic(){

 var doBackground = 0;
 if (chartPanelIsLoaded == 1){ 
  if (chartModelTypeForLegend == 0){
   if (chartCalculate == 1 && ((chartPlayController == -1 && 
       chartStage % 15 == 0) ||
//       chartLineRefresh == 1 ||
       firstRun > 0) || (lastExtraChartSter != 0 || extraChartSter != 0)){
     
    doBackground = 1; 
    chartPanel.clear();

   }
  }else{
   doBackground = 1; 
   chartPanel.clear();    
  }

 if (doBackground == 1){ 
    
  chartPanel.background(230,230,230,255);
  chartPanel.noFill(); 
 
    for (var y = 0; y <= this.nextBar2; y++) {

     var addLong = this.long*0.4;
     if (panelMoveX == panelWidth){
      addLong = 0; 
     }
      
     var addDensity = 0 
     if (y < this.nextBar2/3){
      addDensity = 60
     }
     if (y > this.nextBar2/3 && y < this.nextBar2/3*2){
      addDensity = 30
     }
      
     chartPanel.strokeWeight(1);
     chartPanel.stroke(100, 120, 190,105/this.nextBar2*(this.nextBar2-y)+addDensity);
     chartPanel.rect(y,y,wW-y*2-(panelWidth)+panelMoveX-addLong,wH-y*2)
      
     if (y == round(this.nextBar2/3)){
      chartPanel.stroke(255,255,255,155);
      chartPanel.rect(y,y,wW-y*2-(panelWidth)+panelMoveX-addLong,wH-y*2)        
     }
     if (y == round(this.nextBar2/3*2)){
      chartPanel.stroke(0,0,255,55);
      chartPanel.rect(y,y,wW-y*2-(panelWidth)+panelMoveX-addLong,wH-y*2)        
     }
    }
 }
 }

     
  
   
  if (chartPanelIsLoaded == 0) {
   chartPanel = createGraphics(wW, wH);
   chartPanel.background(230,230,230,255);
   chartPanel.noFill();  
   buttonChanged = 1
  }
 }
  
  

  
 chartFirstController() { 
   
  if ((choiceSter1 == 1 || lastPosChange > 0) && buttonChanged == 1){

   chartName = [];
   chartDate = [];
   chartValue = [];
   chartMaxValueStep = []; 
   chartName2 = [];
   chartDate2 = [];
   chartValue2 = [];  
   chartTextWidth = 0;
   chartValueWidth = 0;
   chartMaxValue = -999999999;
   chartMinValue = 999999999; 
   var lastDateLp = 1;

   var tableValueTMP = chartGoogleResults[actualButtonParameters[0]+1]
   var tableValueTMPcorrector = tableValueTMP.length
   if (actualButtonParameters[4] == 1){
    var tableValueTMP2 = []
    tableValueTMPcorrector = 7
    // pickedPosition1 = 0;
    // pickedPosition2 = 0;
    // for (var c = tableValueTMP.length-7; c < tableValueTMP.length; c++) {
    //  tableValueTMP2.push(tableValueTMP[c]) 
    // }
    // tableValueTMP = tableValueTMP2
   }
   if (actualButtonParameters[4] == 2){
    tableValueTMPcorrector = 30
   }
   if (actualButtonParameters[4] == 3){
    tableValueTMPcorrector = 365
   }
   
   
   for (var a = max(0,tableValueTMP.length-tableValueTMPcorrector); a < tableValueTMP.length; a++) {
//   for (var a = 0; a < tableValueTMP.length; a++) {
     
    var lastDateCotroller = 0;
    if (actualButtonParameters[2] <= 2){ 
     lastDateCotroller = pickedPosition1;
    }
    if (actualButtonParameters[2] > 2 && actualButtonParameters[2] <= 5){ 
     lastDateCotroller = min(pickedPosition1,pickedPosition2);
    }
     
    for (var b = 0; b < tableValueTMP[a].length; b++) {
      
     if ((actualButtonParameters[2] <= 2 && pickedPosition1 == b) ||
         (actualButtonParameters[2] > 2 && actualButtonParameters[2] <= 5 && (pickedPosition1 == b || pickedPosition2 == b)) ||
         actualButtonParameters[2] > 5
        ){ 
      
//     var col1 = tablePositionsName[actualButtonParameters[0]][b]
      var col1 = tablePositionsName[actualButtonParameters[0]][b]
      var col2 = chartGoogleDate[a];
      var col3 = parseInt(tableValueTMP[a][b]);

      if (b == lastDateCotroller && a != max(0,tableValueTMP.length-tableValueTMPcorrector)){
       lastDateLp = lastDateLp+1 
      }
      
      var fileLp = lastDateLp*this.bars;

      for (var c = fileLp-this.bars; c < fileLp; c++) {
      
       if (chartValue[c] <= col3 || chartValue[c] == null){
       
        chartName.splice(c,0,col1);
        chartDate.splice(c,0,col2);
        chartValue.splice(c,0,col3);
       
        c = fileLp;
       }
      }
    
      if (chartValue.length >= fileLp){
      
       chartName.splice(fileLp, 1);
       chartDate.splice(fileLp, 1);
       chartValue.splice(fileLp, 1);
      }    
     }
    }     
   }
  
 
   for (var c = 0; c < chartValue.length; c = c + this.bars) {
    var cFCMax = -99999999999;
    for (var d = 0; d < this.bars; d++) {
      
     cFCMax = max(cFCMax,chartValue[c+d]);
     chartMaxValue = max(chartMaxValue,chartValue[c+d]);
     chartMinValue = min(chartMinValue,chartValue[c+d]);
    }
    chartMaxValueStep.push(cFCMax); 
   }
  } 
 }

  
  
  
 chartSecondController() {   

  if ((choiceSter1 == 1 || lastPosChange > 0) && buttonChanged == 1){
    
// PODZIAŁ NA DROBNIEJSZE WARTOŚCI    

    var repeats = 0;
   chartJson = {};
   chartPanel.textStyle(BOLD);
   chartPanel.textFont('Georgia');
   chartPanel.textSize(this.nextBar2*0.3);
   tableChartJson = chartJson;
    
   for (var z = 0; z < chartValue.length; z = z+this.bars) {

    var nextRepeat = repeats*this.bars;

    for (var x = 0; x < this.bars; x++) {

//     var cSCChartName = chartName[nextRepeat+x].replaceAll(" ", "");
     var cSCChartName = chartName.indexOf(chartName[nextRepeat+x]);
     var cSCChartNameTest = 1; 
     // eval('cSCChartNameTest = (tableChartJson._1 == null)');
     // if (cSCChartNameTest){
      var t1 = [random(0,155),random(255),random(100,255)];
      eval('tableChartJson.'+'_'+cSCChartName+' = t1;')
     // }

     chartName2.push(chartName[nextRepeat+x]);
     chartDate2.push(chartDate[nextRepeat+x]);
     chartValue2.push(chartValue[nextRepeat+x]);
     chartPanel.strokeWeight(2);
     chartPanel.textSize(20);
     var textToButton = chartName[nextRepeat+x]  
     
     if (chartPanel.textWidth(textToButton) > this.x*0.4){            
      textToButton = textToButton.slice(0, round((this.x*0.4)/chartPanel.textWidth(textToButton)*textToButton.length))+'...';
     }
     chartPanel.textFont('Georgia');
     chartTextWidth = max(chartTextWidth,chartPanel.textWidth(textToButton));
     chartPanel.textFont('Arial');
     chartValueWidth = max(chartValueWidth,chartPanel.textWidth(chartValue[nextRepeat+x]));

     if (x < min(3,this.bars)){ 
    chartPanel.textStyle(NORMAL);
    chartPanel.textFont('Georgia');
    chartPanel.strokeWeight(1);
    chartPanel.textSize(max(10,this.nextBar2/2*0.3));    
    chartPanel.stroke(0,0,0,155);  
      if (chartPanel.textWidth(textToButton) > this.x*0.4){            
       textToButton = textToButton.slice(0, round((this.x*0.4)/chartPanel.textWidth(textToButton)*textToButton.length))+'...';
      }
      chartTextWidth2 = max(chartTextWidth2,chartPanel.textWidth(textToButton));
//      chartValueWidth2 = max(chartValueWidth2,chartPanel.textWidth(chartValue[nextRepeat+x]));
      chartPanel.textFont('Arial');
      chartValueWidth2 = max(chartValueWidth2,chartPanel.textWidth(round(chartValue[nextRepeat+x]/scaleLegendValue).toLocaleString("en-US")+scaleLegend));
     }
      
    }
    
    for (var v = 0; v < this.divider; v++) {
      
     for (var c = 0; c < this.bars; c++) {
     
      if (nextRepeat+c+this.bars < chartValue.length){ 
      
       var name1 = chartName[nextRepeat+c];
       var date1 = chartDate[nextRepeat+c];
       var value1 = chartValue[nextRepeat+c];
       var value2 = value1;
      
       for (var d = 0; d < this.bars; d++) {
     
        if (name1 == chartName[nextRepeat+this.bars+d]){
         value2 = chartValue[nextRepeat+this.bars+d];
         d = this.bars;
        }
       }
        
       var value3 = round(value1+((value2-value1)/(this.divider+1))*(v+1));
       var dividerTmp = repeats*((this.divider+1)*this.bars);
      
       for (var e = dividerTmp+(v+1)*this.bars; e < dividerTmp+(v+1)*this.bars+this.bars; e++) {
        if (chartValue2[e] < value3 || chartValue2[e] == null){
          
         chartName2.splice(e,0,name1);
         chartDate2.splice(e,0,date1);
         chartValue2.splice(e,0,value3);
         e = dividerTmp+(v+1)*this.bars+this.bars;
        }
       }        
      }   
     }
    }
    repeats++;
   }
   maxChartStage = chartValue2.length/this.bars-1;    
   chartStage = min(chartStage,chartValue2.length/this.bars-1),
   
   chartCalculate = 1; 
   if (chartStage < 0){
    chartStage = 0;
    chartWitchStage = 0;
   }
   chartLineRefresh = 1;
   firstRun = 2     
  }
 }  
  


 chartLegend() { 
   
  if ((choiceSter1 == 1 || lastPosChange > 0) && buttonChanged == 1){
//  if (chartModelTypeForLegend != chartLastModelTypeForLegend){
    
// OBLICZENIE DZIELNIKA WARTOŚCI I SKLAI 1:...   
   
   scaleLegend = ''
   scaleLegendValue = 1; 
   var scaleDivider = 1
   // if (chartMaxValue > 9999){
   //  for (var d = chartMaxValue; d > 9999; d = d/10) {
   //   scaleDivider = scaleDivider*10     
   //  }
   //  scaleLegend = 1+':'+scaleDivider
   //  scaleLegendValue = scaleDivider 
   // }
   
   if (chartMaxValue > 9999 && chartMaxValue < 1000000){
    scaleDivider = 1000 
    scaleLegend = ' K'
   }
   if (chartMaxValue > 999999 && chartMaxValue < 1000000000){
    scaleDivider = 1000000 
    scaleLegend = ' mln.'
   }
   if (chartMaxValue > 999999999 && chartMaxValue < 1000000000000){
    scaleDivider = 1000000000 
    scaleLegend = ' bil.'
   }
    
   scaleLegendValue = scaleDivider 
     
    
   if (scaleDivider > 1){
    for (var e = 0; e < chartValue.length; e++) {
     chartValue.splice(e,1,round(chartValue[e]));      
    }
     
    chartMaxValue = round(chartMaxValue);
    chartMinValue = round(chartMinValue);     
   }    
  }  
 }
  
  
 barChartStoperr() { 
   
  if (chartCalculate > 0 && chartModelTypeForLegend != 2){
    
   if (chartStage+1 >= chartValue2.length/this.bars){
    chartStop = 1;
    chartPlayController = 1; 
   }else{
    chartStop = 0; 
   }   
  }
 }
  
  
  
  
  
 barChartCreator() {   
   
//  if (choiceSter1 == 1 || lastPosChange > 0 || 1 == 1){
  if (chartModelTypeForLegend == 1){
    
   chartMoverY = 0;
//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth+circlePanelWidth*0.25+chartPanel.textWidth(scaleLegend);
   chartValueWidth3 = bCCChartValueWidth
   var bCCControllerLength = bCCChartTextWidth;
//   if (animationStartParameters[2] == 1){
    bCCControllerLength = bCCChartTextWidth;
//   }
//   var bCCMaxSize = min(wW*0.8,wW*0.6+panelMoveX[0]*0.6,wW-bCCChartTextWidth-bCCChartValueWidth);
   var bCCMaxSize = wW-bCCChartTextWidth-bCCChartValueWidth;
   if (wW > wH) {
    bCCMaxSize = round(wW-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX);
   }
   var bCCWidth = bCCControllerLength;
     
    
   if(chartStage*this.bars % (this.divider+1)*this.bars == 0 || (chartLineRefresh == 1 && nowChange > 0) || buttonChanged == 1){
    if (firstRun > 0){
     chartStage = Math.floor(chartStage/(this.divider+1))*(this.divider+1);
    }
    chartMoveCorrector = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    chartPositionCorrector = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    chartWitchStage = 0;
    chartLineRefresh = 0;
   }
    
      
     chartPanel.fill(100, 100, 100, 100);    
     chartPanel.textSize(this.nextBar2*0.3);
     chartPanel.textStyle(BOLD);
     chartPanel.textFont('Georgia');   
    
   //  WYLICZENIE POZYCJI W NASTEPNYM ETAPIE
    
   if (chartWitchStage == 0){
      
    for (var z = 0; z < this.bars; z++) {
             
     var name1 = chartName2[chartStage*this.bars+z];
     var date1 = chartDate2[chartStage*this.bars+z];
     var value1 = chartValue2[chartStage*this.bars+z];
     var position1 = z;
     var value2 = value1;
     var position2 = z;
     var testT = 0;
      
     for (var d = 0; d < this.bars; d++) {
        
      if (name1 == chartName2[(chartStage+this.divider+1)*this.bars+d]){
         
       value2 = chartValue2[(chartStage+this.divider+1)*this.bars+d];
       position2 = d;
       d = this.bars;
       testT = 1;

      }
     }
     
    if (testT == 0){
     if (chartValue2[(chartStage+this.divider+1)*this.bars+z] != null){
      value2 = chartValue2[(chartStage+this.divider+1)*this.bars+z] 
     }
    }
      
     var value3 = (value2-value1);
     var position3 = (position1-position2);        
     chartMoveCorrector.splice(z, 1, value3);
     chartPositionCorrector.splice(z, 1, position3); 
//       noLoop();
      
      
      
    }
   }
        
        
   for (var a = 0; a < this.bars; a++) {
      
    // if (a == 0){
    //  var bCCMaxSizeValue = chartValue2[chartStage*this.bars];
    // }
    chartPanel.textFont('Arial');
    var bCCChartValue = round(chartValue2[(chartStage-chartWitchStage)*this.bars+a]+(chartMoveCorrector[a]/(this.divider+1))*chartWitchStage);
       

       // CREATE CHART SCALE
      
    if (a == 0){

     var bCCMaxSizeValue = chartValue2[chartStage*this.bars];
     var bCCFirstDigit = parseInt(bCCMaxSizeValue.toString()[0]);
     var bCCDivider = 1;
       
     if (bCCFirstDigit == 4 || bCCFirstDigit == 5){
      bCCFirstDigit = 2;
      bCCDivider = 2;
     }
     if (bCCFirstDigit == 6 || bCCFirstDigit == 7){
      bCCFirstDigit = 3;
      bCCDivider = 2;
     }
     if (bCCFirstDigit == 8 || bCCFirstDigit == 9){
      bCCFirstDigit = 2;
      bCCDivider = 4;
     }
     if (bCCFirstDigit == 1){
      if (parseInt(bCCMaxSizeValue.toString()[1]) < 5){        
       bCCFirstDigit = 2;
       bCCDivider = 5;
      }else{
       bCCFirstDigit = 3;
       bCCDivider = 5;         
      }
     }
       
     var bCCValueLength = max(0,round(bCCMaxSizeValue/bCCFirstDigit).toString().length-1);
     var bCCMultiplier = bCCDivider*Math.pow(10,bCCValueLength);
        
       
       
     chartPanel.textStyle(BOLD);
     chartPanel.textFont('Arial');
     chartPanel.fill(0, 0, 0, 255);
     chartPanel.strokeWeight(0);
     chartPanel.textSize(max(12,this.nextBar*0.2));    
     chartPanel.text(0,bCCWidth,this.nextBar3-this.nextBar/this.bars);
     chartPanel.strokeWeight(1);
     chartPanel.stroke(0, 0, 0, 255);
     chartPanel.line(bCCWidth,
          this.nextBar3,
          bCCWidth,
          this.nextBar*this.stages+this.nextBar2*0.7);
     chartPanel.strokeWeight(0);
     chartPanel.fill(0, 0, 0, 255);
 
     for (var b = 1; b <= bCCFirstDigit; b++) {
        
      var bCCMultiplierValue = bCCMultiplier*b;
      chartPanel.text(bCCMultiplierValue.toLocaleString("en-US"),
           bCCWidth+bCCMaxSize*bCCMultiplierValue/bCCMaxSizeValue-chartPanel.textWidth(bCCMultiplierValue)/2,
           this.nextBar3-this.nextBar/10);
      chartPanel.strokeWeight(1);
      chartPanel.stroke(0, 0, 0, 150);
      chartPanel.line(bCCWidth+bCCMaxSize*bCCMultiplierValue/bCCMaxSizeValue,
           this.nextBar3,
           bCCWidth+bCCMaxSize*bCCMultiplierValue/bCCMaxSizeValue,
           this.nextBar*this.stages+this.nextBar2*0.7);
      chartPanel.strokeWeight(0);
     }
    } 
       
    var bCCChartName = chartName2[(chartStage-chartWitchStage)*this.bars+a];
   
    chartPanel.textStyle(BOLD);
    chartPanel.textFont('Georgia');
    chartPanel.fill(111, 111, 111, 255);
    chartPanel.strokeWeight(2);
    chartPanel.textSize(this.nextBar2*0.3);    
    chartPanel.fill(111, 111, 111, 255);
    chartPanel.stroke(0,0,0,155);  

    
    var bCCChartValue = round(chartValue2[(chartStage-chartWitchStage)*this.bars+a]+(chartMoveCorrector[a]/(this.divider+1))*chartWitchStage);       
    var cSCChartName2 = chartName.indexOf(bCCChartName);
    var r = 0;
    var g = 0;
    var b = 0;          
    eval('r = tableChartJson.'+'_'+cSCChartName2+'['+0+'];')
    eval('g = tableChartJson.'+'_'+cSCChartName2+'['+1+'];')
    eval('b = tableChartJson.'+'_'+cSCChartName2+'['+2+'];')
    
    var textToButton = bCCChartName  
     
    if (chartPanel.textWidth(textToButton) > this.x*0.4){            
      textToButton = textToButton.slice(0, round((this.x*0.4)/chartPanel.textWidth(textToButton)*textToButton.length))+'...';
    }
     
     
    chartPanel.strokeWeight(1);
    chartPanel.stroke(0, 0, 0, 150); 
    chartPanel.fill(r, g, b, 255);        
    chartPanel.rect(bCCWidth,
         this.nextBar3+a*this.nextBar-((this.nextBar*chartPositionCorrector[a])/(this.divider+1))*chartWitchStage,
         bCCMaxSize*bCCChartValue/bCCMaxSizeValue,
         this.nextBar*0.7,0,2,2,0); 
      

    chartPanel.textStyle(BOLD);
    chartPanel.textFont('Georgia');
    chartPanel.fill(r, g, b, 255);
    chartPanel.strokeWeight(2-mobileDevice*1);
    chartPanel.textSize(this.nextBar2*0.3);    
    chartPanel.fill(r, g, b, 255);
    chartPanel.stroke(0,0,0,155+mobileDevice*100);  
    chartPanel.textAlign(RIGHT);
    chartPanel.text(textToButton,
         bCCWidth-5,
         this.nextBar3+this.nextBar*0.5+a*this.nextBar-((this.nextBar*chartPositionCorrector[a])/(this.divider+1))*chartWitchStage);

    chartPanel.textFont('Arial');
    chartPanel.fill(0, 0, 0, 255);
    chartPanel.textAlign(LEFT);     
    chartPanel.text(bCCChartValue.toLocaleString("en-US"),
         bCCWidth+bCCMaxSize*bCCChartValue/bCCMaxSizeValue+5,
         this.nextBar3+this.nextBar*0.5+a*this.nextBar-((this.nextBar*chartPositionCorrector[a])/(this.divider+1))*chartWitchStage);
     
      
   }
            chartPanel.fill(0);
  }
 }  

  
  
//    var bCCChartTextWidth = chartTextWidth+10;
// //   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
//    var bCCChartValueWidth = chartValueWidth+circlePanelWidth*0.25;
//    var bCCControllerLength = bCCChartTextWidth;
//    if (chartModelTypeForLegend == 0){
//     bCCControllerLength = bCCChartValueWidth;
//    }


  
  
 lineChartCreator() { 
   
//  if (choiceSter1 == 1 || lastPosChange > 0 || 1 == 1){
  if (chartModelTypeForLegend == 0){

   chartMoverY = 0;
   chartPanel.textStyle(NORMAL);
   chartPanel.textFont('Georgia');
   chartPanel.textSize(max(12,this.nextBar*0.2));    
    //   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var lCCChartTextWidth = chartTextWidth+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var lCCChartValueWidth = max(chartValueWidth+circlePanelWidth*0.25,round((100+100*(this.bars > 1)+chartPanel.textWidth(round(1000).toLocaleString("en-US")+scaleLegend)+10)*extraChartDivider));
   chartValueWidth3 = lCCChartValueWidth 
   var lCCControllerLength = lCCChartTextWidth;
//   if (animationStartParameters[2] == 1){
    lCCControllerLength = lCCChartTextWidth;
    lCCControllerLength = lCCChartValueWidth;
//   }    
    

   var lCCMaxSize = round(wW-lCCChartTextWidth-lCCChartValueWidth);
   if (wW > wH) {
    lCCMaxSize = round(wW-lCCChartTextWidth-lCCChartValueWidth-panelWidth+panelMoveX);
   }
   var lCCWidth = lCCControllerLength;
   var lCCYSize = round(this.nextBar*this.stages-extraChartYSize);
   choiceSter1 == 1

   if (((firstRun > 0) && 
        chartStage % 15 == 0)|| lastNowChangeForMap > 0 || firstRun > 0 || (extraChartMoverX != 0 && extraChartMoverX != wW)) {
    
    chartLineXMax = 0; 
    chartLinePositions = [];
    chartLinePoints = [];
    chartLineYMax = [];
    chartLineValueMax = [];
    var lCCMaxForSize = -99999999;
    var lCCMaxForSize2 = -99999999;
    var lCCMinForSize = 99999999;
    
    for (var a = 0; a < chartValue.length; a++) {  
   
     var cykl = Math.floor(a/this.bars);
//     var lCCChartName = chartName[a];
     var lCCChartName = chartName.indexOf(chartName[a]);
     var lCCChartValue = round(chartValue[a]);       
//     lCCChartValue = 3555;       
//     var cSCChartName2 = lCCChartName.replaceAll(" ", "");
     var r = 0;
     var g = 0;
     var b = 0;          
     eval('r = tableChartJson.'+'_'+lCCChartName+'['+0+'];')
     eval('g = tableChartJson.'+'_'+lCCChartName+'['+1+'];')
     eval('b = tableChartJson.'+'_'+lCCChartName+'['+2+'];')
     var pointX = round(map(cykl,0,chartValue.length/this.bars-1,lCCWidth,lCCWidth+lCCMaxSize));
     var pointY = map(lCCChartValue,0,chartMaxValue,0,this.nextBar3*this.stages*1.0-extraChartYSize, true);
//      pointY = 100
     var doShape = 1;
     lCCMaxForSize = max(lCCMaxForSize,map(lCCChartValue,0,chartMaxValue,0,this.nextBar3*this.stages*1.0-extraChartYSize, true)); 

     lCCMaxForSize2 = max(lCCMaxForSize2,lCCChartValue);
     chartLineXMax = max(chartLineXMax,pointX); 

      
     if (a % this.bars == 0){
      chartLineYMax.push(lCCMaxForSize);
      chartLineValueMax.push(lCCMaxForSize2);
     }
     
     for (var c = 0; c < chartLinePositions.length; c++) {     
      if (chartLinePositions[c] == lCCChartName){
       doShape = 0;
      }
     }    
     if (doShape == 1 && lCCChartValue != chartMinValue){   
      chartLinePositions.push(lCCChartName);
     }

     if (cykl == 0 && lCCChartValue != chartMinValue){
      chartLinePoints.push(chartName[a]); 
      chartLinePoints.push(pointX); 
      chartLinePoints.push(pointY); 
      chartLinePoints.push(r); 
      chartLinePoints.push(g); 
      chartLinePoints.push(b);
      var checkCykle = 0;         
      
      for (var b = min(cykl+1,chartValue.length/this.bars)*this.bars; b < min(cykl+2,chartValue.length/this.bars)*this.bars; b++){       
       if (chartName[a] == chartName[b]){
        checkCykle = 1;         
       }       
      }
      
      if (checkCykle == 1){
       chartLinePoints.push(1); 
      }else{
       chartLinePoints.push(4);        
      }
      chartLinePoints.push(lCCChartValue); 
     }else{
      chartLinePoints.push(chartName[a]); 
      chartLinePoints.push(pointX); 
      chartLinePoints.push(pointY); 
      chartLinePoints.push(r); 
      chartLinePoints.push(g); 
      chartLinePoints.push(b);
      var checkCykle = 0;    
      var checkCykle2 = 0;    
      
      for (var b = (cykl-1)*this.bars; b < cykl*this.bars; b++){       
       if (chartName[a] == chartName[b] && chartValue[b] != 0){
        checkCykle = 1;         
       }       
      }
      for (var b = min(cykl+1,chartValue.length/this.bars)*this.bars; b < min(cykl+2,chartValue.length/this.bars)*this.bars; b++){      
       if (chartName[a] == chartName[b] && chartValue[b] != 0){
        checkCykle2 = 1;         
       }       
      }

      if (checkCykle == 1 && checkCykle2 == 1){
       chartLinePoints.push(2);
      }
      if (checkCykle == 0 && checkCykle2 == 1){
       chartLinePoints.push(1);
      }
      if (checkCykle == 1 && checkCykle2 == 0){
       chartLinePoints.push(3);
      }
      if (checkCykle == 0 && checkCykle2 == 0){
       chartLinePoints.push(4);
      }
      chartLinePoints.push(lCCChartValue); 
     }
    }
     
    for (var o = 0; o < chartLineYMax.length; o++) {
     var yMaxLength = chartLineYMax.length-1
      
     if (o < round(yMaxLength*0.25)){
      chartLineYMax.splice(o, 1, chartLineYMax[round(yMaxLength*0.25)]); 
      chartLineValueMax.splice(o, 1, chartLineValueMax[round(yMaxLength*0.25)]);       
     }
     if (o >= round(yMaxLength*0.25) && o < round(yMaxLength*0.5)){
      chartLineYMax.splice(o, 1, chartLineYMax[round(yMaxLength*0.5)]); 
      chartLineValueMax.splice(o, 1, chartLineValueMax[round(yMaxLength*0.5)]); 
     }
     if (o >= round(yMaxLength*0.5) && o < round(yMaxLength*0.75)){
      chartLineYMax.splice(o, 1, chartLineYMax[round(yMaxLength*0.75)]); 
      chartLineValueMax.splice(o, 1, chartLineValueMax[round(yMaxLength*0.75)]); 
     }
     if (o >= round(yMaxLength*0.75)){
      chartLineYMax.splice(o, 1, chartLineYMax[round(yMaxLength*1)]); 
      chartLineValueMax.splice(o, 1, chartLineValueMax[round(yMaxLength*1)]); 
     }      
    }     
   }

    
   if (chartCalculate == 1 && ((chartPlayController == -1 && 
       chartStage % 15 == 0) ||
       firstRun > 0) || (extraChartMoverX != 0 && extraChartMoverX != wW)){ 

    var chartStageTmp = chartStage/(this.divider+1);
    var chartStageFloor = Math.floor(chartStageTmp); 
//    chartPanel.pixelDensity(1.0);
    chartPanel.strokeWeight(2);
    chartPanel.noFill();
    chartPanel.curveTightness(0.9);
    chartPanel.textStyle(NORMAL);
    chartPanel.textFont('Georgia');
//     chartPanel.background(0);

        

        
    for (var d = 0; d < chartLinePositions.length; d++) {  
      
     var ChartName1 = chartLinePositions[d];
     
     for (var e = 0; e < chartStageFloor+1; e++) {  
        
      for (var f = 0; f < this.bars; f++) { 
       
       var lCCChartNextPack = e*this.bars*8+f*8;
       var lCCActualX = chartLinePoints[lCCChartNextPack+1];
       var lCCActualY = chartLinePoints[lCCChartNextPack+2];
       var lCCActualR = chartLinePoints[lCCChartNextPack+3];
       var lCCActualG = chartLinePoints[lCCChartNextPack+4];
       var lCCActualB = chartLinePoints[lCCChartNextPack+5];
       
       if (chartName.indexOf(chartLinePoints[lCCChartNextPack]) == ChartName1){ 
        
        // if(e > 10 && stoper == 0){
        //   teeeest =1;
        // }
        

        var lCCCMultiply = lCCYSize/chartLineYMax[chartStageFloor];
        var porownanie1 = lCCCMultiply
        var lCCCMultiply2 = lCCYSize/chartLineYMax[min(chartValue.length/this.bars-1,chartStageFloor+1)];
        var lCCCMultiplyStage = chartStageTmp-chartStageFloor;
        lCCCMultiply = (lCCCMultiply+(lCCCMultiply2-lCCCMultiply)*lCCCMultiplyStage)*1.0; 
        var porownanie2 = lCCCMultiply2/lCCCMultiply
        chartPanel.stroke(lCCActualR, lCCActualG, lCCActualB, 255);
//    if(e  == 0){
//    }

        if (chartLinePoints[lCCChartNextPack+6] == 1){ 
         chartPanel.beginShape();
         if(round(lCCActualY) == 0){
          chartPanel.vertex(lCCActualX,max(2,min(628,lCCYSize-round(lCCActualY)*lCCCMultiply))+this.nextBar+extraChartYSize);
          chartPanel.vertex(lCCActualX,max(2,min(628,lCCYSize-round(lCCActualY)*lCCCMultiply))+this.nextBar+extraChartYSize);
         }else{
          chartPanel.vertex(lCCActualX,max(2,min(628,lCCYSize-lCCActualY*lCCCMultiply))+this.nextBar+extraChartYSize);
          chartPanel.vertex(lCCActualX,max(2,min(628,lCCYSize-lCCActualY*lCCCMultiply))+this.nextBar+extraChartYSize);         
         }
        }
         
 
        if (chartLinePoints[lCCChartNextPack+6] == 2){
         
         if (e+1 >= chartStageFloor+1){
          for (var g = 0; g < this.bars; g++) { 
      
           var lCCChartNextPack2 = (e+1)*this.bars*8+g*8;
       
           if (chartName.indexOf(chartLinePoints[lCCChartNextPack2]) == ChartName1){ 
            
            var testX = lCCActualX+(chartLinePoints[lCCChartNextPack2+1]-lCCActualX)*lCCCMultiplyStage; 
            var testY = lCCActualY+(chartLinePoints[lCCChartNextPack2+2]-lCCActualY)*lCCCMultiplyStage; 

            chartPanel.vertex(testX,max(2,min(628,lCCYSize-testY*lCCCMultiply))+this.nextBar+extraChartYSize);
            chartPanel.vertex(testX,max(2,min(628,lCCYSize-testY*lCCCMultiply))+this.nextBar+extraChartYSize); 
           }     
          }
          
          chartPanel.endShape();
          chartPanel.ellipse(testX,max(2,min(628,lCCYSize-testY*lCCCMultiply))+this.nextBar+extraChartYSize,3); 
          chartPanel.fill(lCCActualR, lCCActualG, lCCActualB, 255);
          chartPanel.strokeWeight(2-mobileDevice*1);
          chartPanel.textSize(max(12,this.nextBar*0.3));    
          chartPanel.stroke(0,0,0,155+mobileDevice*100); 
          var textToButton = chartName[ChartName1]  
     
          if (chartPanel.textWidth(textToButton) > this.x*0.4){            
           textToButton = textToButton.slice(0, round((this.x*0.4)/chartPanel.textWidth(textToButton)*textToButton.length))+'...';
          }
          chartPanel.text(textToButton,testX+4,max(2+chartPanel.textSize(),min(628,lCCYSize-testY*lCCCMultiply)+this.nextBar+extraChartYSize));         
          chartPanel.stroke(lCCActualR, lCCActualG, lCCActualB, 255);
          chartPanel.noFill();
         
         }else{
          chartPanel.curveVertex(lCCActualX,max(2,min(628,lCCYSize-lCCActualY*lCCCMultiply))+this.nextBar+extraChartYSize);
         } 
        }
        
        if (chartLinePoints[lCCChartNextPack+6] == 3){ 
         chartPanel.vertex(lCCActualX,max(2,min(628,lCCYSize-lCCActualY*lCCCMultiply))+this.nextBar+extraChartYSize);
         chartPanel.vertex(lCCActualX,max(2,min(628,lCCYSize-lCCActualY*lCCCMultiply))+this.nextBar+extraChartYSize);
         chartPanel.endShape(); 
         chartPanel.ellipse(lCCActualX,max(2,min(628,lCCYSize-lCCActualY*lCCCMultiply))+this.nextBar+extraChartYSize,3); 
         if (chartStageFloor+1 >= chartValue.length/this.bars && lCCActualX == chartLineXMax){

          chartPanel.fill(lCCActualR, lCCActualG, lCCActualB, 255);
          chartPanel.strokeWeight(2-mobileDevice*1);
          chartPanel.textSize(max(12,this.nextBar*0.3));    
          chartPanel.stroke(0,0,0,155+mobileDevice*100); 
          var textToButton = chartName[ChartName1]  
     
          if (chartPanel.textWidth(textToButton) > this.x*0.4){            
           textToButton = textToButton.slice(0, round((this.x*0.4)/chartPanel.textWidth(textToButton)*textToButton.length))+'...';
          }
          chartPanel.text(textToButton,lCCActualX+4,max(2+chartPanel.textSize(),min(628,lCCYSize-lCCActualY*lCCCMultiply))+this.nextBar+extraChartYSize);         
          chartPanel.stroke(lCCActualR, lCCActualG, lCCActualB, 255);
          chartPanel.noFill();
         }
        }
       }
        
        
       if (e == chartStageFloor && d == 0 && f == 0){
      
        var bCCMaxSizeValue = chartValue2[chartStage*this.bars];
        var bCCMaxSizeValue = chartLineValueMax[chartStageFloor];
        
        // trzeba to jeszcze dobrze posprawdzać, ale chyba dobrze!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        if (porownanie2 != 1){
//         bCCMaxSizeValue = chartLineValueMax[chartStageFloor]+(chartLineValueMax[chartStageFloor+1]-chartLineValueMax[chartStageFloor])*porownanie2
         bCCMaxSizeValue = chartLineValueMax[chartStageFloor+1]*porownanie2
        }           
        if(d == 0){
         }

          
        var bCCFirstDigit = parseInt(bCCMaxSizeValue.toString()[0]);
        var bCCDivider = 1;

        if (bCCFirstDigit == 4 || bCCFirstDigit == 5){
         bCCFirstDigit = 2;
         bCCDivider = 2;
        }
        if (bCCFirstDigit == 6 || bCCFirstDigit == 7){
         bCCFirstDigit = 3;
         bCCDivider = 2;
        }
        if (bCCFirstDigit == 8 || bCCFirstDigit == 9){
         bCCFirstDigit = 2;
         bCCDivider = 4;
        }
        if (bCCFirstDigit == 1){
         if (parseInt(bCCMaxSizeValue.toString()[1]) < 5){        
          bCCFirstDigit = 2;
          bCCDivider = 5;
         }else{
          bCCFirstDigit = 3;
          bCCDivider = 5;         
         }
        }
         
        var bCCValueLength = max(0,round(bCCMaxSizeValue/bCCFirstDigit).toString().length-1);
        var bCCMultiplier = bCCDivider*Math.pow(10,bCCValueLength);
        var lCCYSizeTmp = lCCYSize-max(12,this.nextBar*0.2);
         

        chartPanel.fill(0, 0, 0, 255);
        chartPanel.strokeWeight(0);
        chartPanel.textSize(max(12,this.nextBar*0.2));    
        chartPanel.textAlign(RIGHT);
        chartPanel.text(0,lCCWidth-5,lCCYSize+this.nextBar+extraChartYSize);
        chartPanel.textAlign(LEFT);
        chartPanel.strokeWeight(1);
        chartPanel.stroke(0, 0, 0, 150);
        chartPanel.line(lCCWidth,
                lCCYSize+this.nextBar+extraChartYSize,
                lCCWidth-lCCWidth/this.stages+lCCMaxSize,
                lCCYSize+this.nextBar+extraChartYSize);         
        for (var b = 1; b <= bCCFirstDigit; b++) {
        
         var bCCMultiplierValue = bCCMultiplier*b;
        chartPanel.strokeWeight(0);
        chartPanel.textStyle(BOLD);
         chartPanel.textAlign(RIGHT);
         chartPanel.text(round(bCCMultiplierValue/scaleLegendValue).toLocaleString("en-US")+scaleLegend,
                 lCCWidth-5,
                 lCCYSize-lCCYSizeTmp*bCCMultiplierValue/bCCMaxSizeValue+this.nextBar+extraChartYSize);
//                 lCCYSize+lCCMaxSize*bCCMultiplierValue/bCCMaxSizeValue-textWidth(bCCMultiplierValue)/2);
         chartPanel.textAlign(LEFT);
         chartPanel.strokeWeight(1);
         chartPanel.stroke(0, 0, 0, 150);
         chartPanel.line(lCCWidth,
                 lCCYSize-lCCYSizeTmp*bCCMultiplierValue/bCCMaxSizeValue+this.nextBar+extraChartYSize,
                 lCCWidth+lCCMaxSize,
                 lCCYSize-lCCYSizeTmp*bCCMultiplierValue/bCCMaxSizeValue+this.nextBar+extraChartYSize);
         chartPanel.strokeWeight(0);
        }         
        chartPanel.noFill(); 
         


       }

       chartPanel.strokeWeight(2);
      }     
     }
    }
   }

   chartLineRefresh = 0;
    
   fill(0);


  }
 }   
  
  
 tileChartCreator() { 
  
  if (chartModelTypeForLegend == 2){
    
   var maxInLine = floor((wW-panelWidth+panelMoveX-circlePanelWidth*0.3)/230)
   chartPanel.strokeWeight(1);
   chartPanel.textSize(20);
   chartPanel.textStyle(NORMAL);
   chartPanel.stroke(0, 0, 0, 255); 
   chartPanel.fill(190, 70, 222, 255);    
   var textToButton = 'Last 30 days';  
   chartPanel.text(textToButton,(wW-panelWidth+panelMoveX-chartPanel.textWidth(textToButton))/2,this.nextBar2);
    
    
   for (var a = 0; a < this.bars; a++) {
    
    var xTmp = this.nextBar2*1.5+(a % maxInLine)*230
    var nextLine = floor(a/maxInLine)*(300+this.nextBar2)
    var yTmp = this.nextBar2*1.5+nextLine
    



     
    chartPanel.strokeWeight(1);
    chartPanel.stroke(110, 0, 210, 250); 
    chartPanel.fill(0, 122, 255, 40);        
    chartPanel.rect(xTmp,yTmp+chartMoverY,200,300,10,10,10,10); 
    chartPanel.noStroke();
    chartPanel.fill(0, 0, 155, 140);        
    chartPanel.rect(xTmp,yTmp+chartMoverY,200,50,10,10,0,0); 

    chartPanel.strokeWeight(1);
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(255, 255, 255, 255);        
    chartPanel.textSize(15);
    chartPanel.textStyle(NORMAL);
    chartPanel.textFont('Georgia');
    var textToButton = chartName2[maxChartStage*this.bars+a];
    var textToButton1 = '';
    var textToButton2 = '';
  
     
    if (chartPanel.textWidth(textToButton) > 170){            
     textToButton1 = textToButton.slice(0, round(170/chartPanel.textWidth(textToButton)*textToButton.length))+'-';
     var moverX1 = (200-chartPanel.textWidth(textToButton1))/2
     textToButton2 = textToButton.slice(round(170/chartPanel.textWidth(textToButton)*textToButton.length),500);
     var moverX2 = (200-chartPanel.textWidth(textToButton2))/2
     chartPanel.text(textToButton1,xTmp+moverX1,yTmp+chartMoverY+20);
     chartPanel.text(textToButton2,xTmp+moverX2,yTmp+chartMoverY+40);
     
    }else{     
     var moverX1 = (200-chartPanel.textWidth(textToButton))/2
     chartPanel.text(textToButton,xTmp+moverX1,yTmp+chartMoverY+30);
    }    
    
    chartPanel.fill(0, 0, 255, 80);        
    chartPanel.rect(xTmp,yTmp+50+chartMoverY,100,50); 
     
    chartPanel.strokeWeight(1);
    chartPanel.textSize(15);
    chartPanel.textStyle(BOLD);
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(255, 0, 0, 255);        
    var textToButton = 'Rank '+(a+1); 
    var moverX1 = (100-chartPanel.textWidth(textToButton))/2
    chartPanel.text(textToButton,xTmp+moverX1,yTmp+chartMoverY+80);     
    
    chartPanel.fill(0, 0, 255, 30);        
    chartPanel.rect(xTmp+100,yTmp+50+chartMoverY,100,50); 
 

    var lastValueTmp = 0; 
    var R = 100
    var G = 100
    var B = 100

    for (var t = maxChartStage*this.bars-this.bars*this.divider; t < maxChartStage*this.bars-this.bars*this.divider+this.bars; t++) {
     if (chartName2[t] == chartName2[maxChartStage*this.bars+a]){ 
           
      lastValueTmp = round(100-(chartValue2[t]*scaleLegendValue)*100/(chartValue2[maxChartStage*this.bars+a]*scaleLegendValue),1)
      if (lastValueTmp > 0){
       R = 0
       G = 255
       B = 0
      }
      if (lastValueTmp < 0){
       R = 255
       G = 0
       B = 0
      }
      lastValueTmp = lastValueTmp+'%' 
     }
    }
     
    chartPanel.strokeWeight(2);
    chartPanel.textSize(15);
    chartPanel.textFont('Arial');
    chartPanel.textStyle(BOLD);
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(R, G, B, 255);        
    var moverX1 = (100-chartPanel.textWidth(lastValueTmp))/2
    chartPanel.text(lastValueTmp.toLocaleString("en-US"),xTmp+100+moverX1,yTmp+80+chartMoverY);
     
     
    chartPanel.strokeWeight(1);
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(0, 255, 255, 70);        
    chartPanel.rect(xTmp,yTmp+100+chartMoverY,200,30); 

    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(0, 0, 0, 255);        
    var textToButton = chartValue2[maxChartStage*this.bars+a]; 
    var moverX1 = (200-chartPanel.textWidth(textToButton))/2
    chartPanel.text(textToButton.toLocaleString("en-US"),xTmp+moverX1,yTmp+chartMoverY+120);
     
    chartPanel.stroke(0, 0, 0, 155); 
    chartPanel.line(xTmp,yTmp+130+chartMoverY,xTmp+200,yTmp+130+chartMoverY); 
    
    chartPanel.stroke(110, 0, 210, 250); 
    chartPanel.fill(150, 150, 150, 135);        
    chartPanel.rect(xTmp+30,yTmp+150+chartMoverY,140,130); 
     
     
     
//----------------TWORZENIE MINI WYKRESU------------------//
     

     
     
     
     
     
     
    var tmp1 = 0; 
    var tmp2 = 0; 
    var tmp3 = 0; 
    var tmp4 = 0; 
    var tmp5 = 0; 
    var tmp6 = 0; 
    var tmp7 = 0; 
    var tmp8 = 0; 
    var tmp9 = 0; 
    var tmp10 = 0; 
    var tmp11 = 0; 
    var tmp12 = 0; 
    var tmp13 = 0; 
    var tmp14 = 0; 
    var tmp15 = 0; 
    var tmp16 = 0; 
    var tmp17 = 0; 
    var tmp18 = 0;
    var tmp19 = 0;
    var tmp20 = 0; 
    var tmp21 = 0; 
    var tmp22 = 0; 
    var tmp23 = 0; 
    var tmp24 = 0; 
    var tmp25 = 0; 
    var tmp26 = 0; 
    var tmp27 = 0; 
    var tmp28 = 0;
    var tmp29 = 0;
    var tmp30 = chartValue2[maxChartStage*this.bars+a]/10; 
     
//     for (var b = 1; b < 20; b++) {
//      for (var c = maxChartStage-this.bars*b*(this.divider+1); c < maxChartStage-this.bars*(b-1)*(this.divider+1); c = c+(this.divider+1)) {
       

//       if (chartName2[c] == chartName2[maxChartStage-(this.bars-a-1)]){ 
//        var numberTmp = 20-b 
//        var valueTmp = chartValue2[c]/10         
//        eval('tmp'+numberTmp+' = valueTmp;');        

//       }
//      }
//     }
     
    for (var b = 0; b < 29; b++) {
     for (var c = maxChartStage*this.bars-(this.bars*(this.divider+0))*(b+1); c < maxChartStage*this.bars-(this.bars*(this.divider+0))*(b+1)+this.bars; c++) {
       

      if (chartName2[c] == chartName2[maxChartStage*this.bars+a]){ 
       var numberTmp = 29-b 
       var valueTmp = chartValue2[c]/10         
       eval('tmp'+numberTmp+' = valueTmp;');        

      }
     }
    }

    chartPanel.fill(255, 0, 0, 255);        
//    var tmpMax = max(tmp1,tmp2,tmp3,tmp4,tmp5,tmp6,tmp7,tmp8,tmp9,tmp10,tmp11,tmp12,tmp13,tmp14,tmp15,tmp16,tmp17,tmp18,tmp19,tmp20) 
//    var tmpMin = min(tmp1,tmp2,tmp3,tmp4,tmp5,tmp6,tmp7,tmp8,tmp9,tmp10,tmp11,tmp12,tmp13,tmp14,tmp15,tmp16,tmp17,tmp18,tmp19,tmp20)
    var tmpMin = 999999999999
    var tmpMax = 0
    var tmpSize = tmpMax-tmpMin
    var tmpSizeRest = 15*tmpSize/90
    var tmp0 = tmpMin-tmpSizeRest
    var tmp130 = tmpMax+tmpSizeRest
    
    for (var e = 1; e < 31; e++){
     var actualTmp = 0; 
     eval('actualTmp = tmp'+e+';'); 
     if (actualTmp > 0){
      tmpMin = min(tmpMin,actualTmp);  
      tmpMax = max(tmpMax,actualTmp);  
     }else{
      tmpMin = 999999999999
      tmpMax = 0
     }
    }
    
    
                   // Wykres słupkowy dolny
     
     
    var minLine = 0;
    var maxLine = 0;
    var chartFirstBar = 1;
    for (var d = 1; d < 31; d++) {
     var actualTmp = 0;
     eval('actualTmp = tmp'+d+';');
   if(actualTmp == 0){
    chartFirstBar = d+1; 
   }
     if (actualTmp == tmpMax){
      maxLine = d;   
     }
     if (actualTmp == tmpMin){
      minLine = d;   
     }
     var dividerTmp =  (actualTmp-tmpMin)/max(tmpMax-tmpMin,0.1)
     eval('tmp'+d+' = dividerTmp;');        
    }
     
     
                   // Wykres słupkowy środkowy
     
     
     
    var lastActualTmp = 0.5;
    for (var d = chartFirstBar; d < 31; d++) {
      
     chartPanel.stroke(0, 0, 0, 255);
     var actualTmp = 0;
     eval('actualTmp = tmp'+d+';');
     var upDown = 1
     if (d > 0 && lastActualTmp > actualTmp){
      upDown = 0        
     }      
      
     var y1tmp = yTmp+150+chartMoverY+115-(100*actualTmp)
     if (upDown == 1){
      var y2tmp = abs(lastActualTmp-actualTmp)*100
      chartPanel.fill(0, 255, 0, 255);
     }else{
      var y2tmp = abs(lastActualTmp-actualTmp)*100*-1        
      chartPanel.fill(255, 0, 0, 255);
     }
     lastActualTmp = actualTmp 
      
      
      chartPanel.rect(xTmp+30+(d-1)*4.66,y1tmp,4.66,y2tmp); 
      chartPanel.stroke(0, 0, 0, 65);
      if (d == maxLine){
       chartPanel.textStyle(NORMAL);
       chartPanel.textFont('Arial');
       chartPanel.stroke(255, 0, 0, 255); 
       chartPanel.textSize(10);    
       chartPanel.strokeWeight(1);
       chartPanel.noFill();
       textToButton = round(tmpMax*10).toLocaleString("en-US")
       chartPanel.text(textToButton,xTmp+30+(d-1)*4.66-chartPanel.textWidth(textToButton)/2,y1tmp-15-4);
//       chartPanel.text(round(tmpMax*10/max(1,scaleLegendValue*(chartModelTypeForLegend == 2))),xTmp+30+140+5,y1tmp);
       chartPanel.stroke(0, 0, 0, 65); 
//       chartPanel.line(xTmp+30+(d-1)*4.66,y1tmp,xTmp+30+140,y1tmp);         
       chartPanel.line(xTmp+30+(d-1)*4.66+4.66/2,y1tmp,xTmp+30+(d-1)*4.66+4.66/2,y1tmp-15);         
      }

      
      if (d == minLine){
       chartPanel.textStyle(NORMAL);
       chartPanel.textFont('Arial');
       chartPanel.stroke(0, 0, 255, 255); 
       chartPanel.textSize(10);    
       chartPanel.strokeWeight(1);
       chartPanel.noFill();
       textToButton = round(tmpMin*10).toLocaleString("en-US")
       chartPanel.text(textToButton,xTmp+30+(d-1)*4.66+4.66/2-chartPanel.textWidth(textToButton)/2,y1tmp+15+12);
//       chartPanel.text(round(tmpMin*10/max(1,scaleLegendValue*(chartModelTypeForLegend == 2))),xTmp+30+140+5,y1tmp);
       chartPanel.stroke(0, 0, 0, 65); 
       chartPanel.line(xTmp+30+(d-1)*4.66+4.66/2,y1tmp,xTmp+30+(d-1)*4.66+4.66/2,y1tmp+15);         
      }
      
    }
     
     
    // chartPanel.strokeWeight(1);
    // chartPanel.textSize(10);
    // chartPanel.textStyle(NORMAL);
    // chartPanel.stroke(0, 0, 0, 255); 
    // chartPanel.fill(190, 70, 222, 255);    
    // var textToButton = 'Last 30 days (1 = 1 '+scaleLegend+')'; 
    // var moverX1 = (200-chartPanel.textWidth(textToButton))/2
    // chartPanel.text(textToButton,xTmp+moverX1,yTmp+290+chartMoverY);

//---------------------------SCROLLOWANIE-------------------------//    
    
    if (a+1 == this.bars){
      
     if (mouseX < wW-this.x+moverX-this.nextBar2){
      if (touches.length == 0){
       if (pos1>pos2){
        chartMoverY = max(min(0,wH-300-2*this.nextBar2-yTmp),chartMoverY-wH/(this.nextBar2*0.5));
       }
       if (pos1<pos2){
        chartMoverY = min(0,chartMoverY+wH/(this.nextBar2*0.5));
       }
      }
      
      // if (touches.length == 1){
      //  if (mousePressY > mouseY){
      //   chartMoverY = max(min(0,wH-300-2*this.nextBar2-yTmp),chartMoverY-wH/(this.nextBar2*0.5));
      //  }
      //  if (mousePressY < mouseY){
      //   chartMoverY = min(0,chartMoverY+wH/(this.nextBar2*0.5));
      //  }
      // }
     }
      
    //  PRZESUNIECIE
      
      
     if ((mouseIsPressed && 
        pressedLong > 5 && 
        mousePressX < wW-this.x+moverX-this.nextBar2) ||
       (panelScrollerGoOn == 1)){

      mousePressX2 = mousePressX;
      mousePressY2 = mousePressY;       
     
      if (touches.length == 0){  
       chartMoverY = max(min(0,wH-300-2*this.nextBar2-yTmp),chartMoverY-(mouseY2-mouseY));
       panelScrollerGoOn = 1;
      }

      if (touches.length == 1 && moveCount2 > 1){  
       chartMoverY = max(min(0,wH-300-2*this.nextBar2-yTmp),chartMoverY-(mouseY2-mouseY));
       panelScrollerGoOn = 1;
      }
     }      
      
//     PRZESUNIĘCIE PO PUSZCZENIU    

     if (choiceSter1 == 1){
      if (mobileDevice != 0 && 
        mousePressX < wW-this.x+moverX-this.nextBar2){
    
       panelStillScrolling = 1;
      }
     }
   
     if (moveCount != 0 && panelStillScrolling == 1){
      chartMoverY = max(min(0,wH-300-2*this.nextBar2-yTmp),chartMoverY+(moveCount*moveVector));
      mousePressX2 = 0;
      mousePressY2 = 0;       
     }    
      
      
    
     if (chartMoverY < wH-300-2*this.nextBar2-yTmp){
      chartMoverY = wH-300-2*this.nextBar2-yTmp
     }
     if (chartMoverY > 0){
      chartMoverY = 0
     }
    }
     
   }    
  }
 }
  
  
  
  
  
  
 extraChartCreator() { 
   
  if (chartModelTypeForLegend == 0 && extraChartMoverX != wW){
   

   
   chartMoverY = 0;
//   var bCCChartTextWidth = chartTextWidth*(max(12,this.nextBar*0.3)/10)+10;
   var bCCChartTextWidth = chartTextWidth2+10;
//   var bCCChartValueWidth = chartValueWidth*(max(12,this.nextBar*0.3)/10)+10+circlePanelWidth*0.25;
   var bCCChartValueWidth = chartValueWidth2+circlePanelWidth*0.25+chartPanel.textWidth(scaleLegend);
//   var bCCControllerLength = bCCChartTextWidth;
   var bCCControllerLength = 0;
//   if (animationStartParameters[2] == 1){
//    bCCControllerLength = bCCChartTextWidth+this.nextBar2/3*2*0;
    bCCControllerLength = bCCChartTextWidth;
//   }
//   var bCCMaxSize = min(wW*0.8,wW*0.6+panelMoveX[0]*0.6,wW-bCCChartTextWidth-bCCChartValueWidth);
   var bCCMaxSize = wW/3-bCCChartTextWidth-chartValueWidth2-15;
//   var bCCMaxSize = 100;
   if (wW > wH) {
//    bCCMaxSize = round(400-bCCChartTextWidth-bCCChartValueWidth-panelWidth+panelMoveX*0.75);
    bCCMaxSize = round(wW/3-bCCChartTextWidth-chartValueWidth2-15);
   }
//   var bCCWidth = bCCControllerLength+max(this.nextBar2,100*(this.bars > 1));
   var bCCWidth = bCCControllerLength+100+100*(this.bars > 1);
    
    
    
     
   
   if(chartStage*this.bars % (this.divider+1)*this.bars == 0 || (chartLineRefresh == 1 && nowChange > 0) || buttonChanged == 1 || extraChartMoverX != 0){
    if (firstRun > 0){
     chartStage = Math.floor(chartStage/(this.divider+1))*(this.divider+1);
    }
    chartMoveCorrector = [0,0,0];
    chartPositionCorrector = [0,0,0];
    chartWitchStage = 0;
    chartLineRefresh = 0;
   }
    
      
     chartPanel.fill(100, 100, 100, 100);    
     chartPanel.textSize(max(10,this.nextBar2/3*0.3));
     chartPanel.textStyle(BOLD);
     chartPanel.textFont('Georgia');   
    
   //  WYLICZENIE POZYCJI W NASTEPNYM ETAPIE
    
   if (chartWitchStage == 0){
      
    for (var z = 0; z < this.bars; z++) {
             
     var name1 = chartName2[chartStage*this.bars+z];
     var date1 = chartDate2[chartStage*this.bars+z];
     var value1 = chartValue2[chartStage*this.bars+z];
     var position1 = z;
     var value2 = value1;
     var position2 = z;
     var testT = 0;
      
     for (var d = 0; d < this.bars; d++) {
        
      if (name1 == chartName2[(chartStage+this.divider+1)*this.bars+d]){
         
       value2 = chartValue2[(chartStage+this.divider+1)*this.bars+d];
       position2 = d;
       d = this.bars;
       testT = 1;

      }
     }
     
    if (testT == 0){
     if (chartValue2[(chartStage+this.divider+1)*this.bars+z] != null){
      value2 = chartValue2[(chartStage+this.divider+1)*this.bars+z] 
     }
    }
      
     var value3 = (value2-value1);
     var position3 = (position1-position2);        
     chartMoveCorrector.splice(z, 1, value3);
     chartPositionCorrector.splice(z, 1, position3); 
//       noLoop();
      
      
      
    }
   }
        
   extraChartYSizeEnd = 0;
   if (chartStage % 15 == 0 || firstRun > 0 || extraChartMoverX != 0) {
    
   for (var a = 0; a < min(3,this.bars); a++) {
      
    // if (a == 0){
    //  var bCCMaxSizeValue = chartValue2[chartStage*this.bars];
    // }
    var bCCChartValue = round(chartValue2[(chartStage-chartWitchStage)*this.bars+a]+(chartMoveCorrector[a]/(this.divider+1))*chartWitchStage);
       

       // CREATE CHART SCALE
      
    if (a == 0){

     var bCCMaxSizeValue = chartValue2[chartStage*this.bars]/3;
     var bCCFirstDigit = parseInt(bCCMaxSizeValue.toString()[0]);
     var bCCDivider = 1;
    } 
       
    var bCCChartName = chartName2[(chartStage-chartWitchStage)*this.bars+a];
   
    chartPanel.textStyle(BOLD);
    chartPanel.textFont('Georgia');
    chartPanel.fill(111, 111, 111, 255);
    chartPanel.strokeWeight(2);
    chartPanel.textSize(max(10,this.nextBar2/3*0.3));    
    chartPanel.fill(111, 111, 111, 255);
    chartPanel.stroke(0,0,0,155);  
    
    var bCCChartValue = round(chartValue2[(chartStage-chartWitchStage)*this.bars+a]+(chartMoveCorrector[a]/(this.divider+1))*chartWitchStage);       
     // var bCCChartValue = round(round(chartValue2[(chartStage-chartWitchStage)*this.bars+a]+(chartMoveCorrector[a]/(this.divider+1))*chartWitchStage)/scaleLegendValue);       
    var cSCChartName2 = chartName.indexOf(bCCChartName);
    var r = 0;
    var g = 0;
    var b = 0;          
    eval('r = tableChartJson.'+'_'+cSCChartName2+'['+0+'];')
    eval('g = tableChartJson.'+'_'+cSCChartName2+'['+1+'];')
    eval('b = tableChartJson.'+'_'+cSCChartName2+'['+2+'];')
    
    var textToButton = bCCChartName  
    chartPanel.textSize(this.nextBar2*0.3);    
     
    if (chartPanel.textWidth(textToButton) > this.x*0.4){            
      textToButton = textToButton.slice(0, round((this.x*0.4)/chartPanel.textWidth(textToButton)*textToButton.length))+'...';
    }
     
   extraChartYSizeEnd = this.nextBar2/2+a*this.nextBar2/3;
     
    chartPanel.strokeWeight(1);
    chartPanel.stroke(0, 0, 0, 150); 
    chartPanel.fill(r, g, b, 255);        
    chartPanel.rect(bCCWidth+5-extraChartMoverX,
         this.nextBar2+a*this.nextBar2/3-((this.nextBar2/3*chartPositionCorrector[a])/(this.divider+1))*chartWitchStage,
         bCCMaxSize*(bCCChartValue/3)/bCCMaxSizeValue,
         this.nextBar2/3*0.7,0,2,2,0); 
      

    chartPanel.textStyle(NORMAL);
    chartPanel.textFont('Arial');
    chartPanel.fill(r, g, b, 255);
    chartPanel.strokeWeight(1);
    chartPanel.textSize(max(10,this.nextBar2/3*0.3));    
    chartPanel.fill(r, g, b, 255);
    chartPanel.stroke(0,0,0,155);  
    chartPanel.textAlign(RIGHT);
    // chartPanel.text(textToButton,
    //      bCCWidth+this.nextBar2/3*2,
    //      this.nextBar3+this.nextBar/3*0.5+a*this.nextBar/3-((this.nextBar/3*chartPositionCorrector[a])/(this.divider+1))*chartWitchStage);
    chartPanel.text(textToButton,
         bCCWidth-extraChartMoverX,
         this.nextBar2+this.nextBar2/3*0.5+a*this.nextBar2/3-((this.nextBar2/3*chartPositionCorrector[a])/(this.divider+1))*chartWitchStage);
    chartPanel.fill(0, 0, 0, 255);
    chartPanel.textAlign(LEFT);     
    chartPanel.text(bCCChartValue.toLocaleString("en-US"),
         bCCWidth+bCCMaxSize*(bCCChartValue/3)/bCCMaxSizeValue+10-extraChartMoverX,
         this.nextBar2+this.nextBar2/3*0.5+a*this.nextBar2/3-((this.nextBar2/3*chartPositionCorrector[a])/(this.divider+1))*chartWitchStage);
     
      
   }

     
     
     
//-------------------- tile na wykresie line----------------------//
     
     
   var maxInLine = 2
   var allValueTmp = 0
   var maxInHeight = round((wH-this.nextBar2*3)/60)*2
   
     
   for (var a = 0; a < min(this.bars,maxInHeight); a++) {
 
    var xTmp = (a % maxInLine)*100
    var nextLine = floor(a/maxInLine)*(60)
    var yTmp = timerBeltDataEndY+nextLine
     
     
    chartPanel.strokeWeight(1);
    chartPanel.stroke(110, 0, 210, 250); 
    chartPanel.fill(0, 122, 255, 40);        
    chartPanel.rect(xTmp-extraChartMoverX,yTmp+chartMoverY,100,60); 
    chartPanel.noStroke();
    chartPanel.fill(0, 0, 155, 140);        
    chartPanel.rect(xTmp-extraChartMoverX,yTmp+chartMoverY,100,20); 

    chartPanel.strokeWeight(1);
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(255, 255, 255, 255);        
    chartPanel.textSize(10);
    chartPanel.textStyle(NORMAL);
    chartPanel.textFont('Georgia');
    var textToButton = chartName2[(chartStage-chartWitchStage)*this.bars+a];
    var textToButton1 = '';
    var textToButton2 = '';
  
     
    if (chartPanel.textWidth(textToButton) > 70){            
     textToButton1 = textToButton.slice(0, round(70/chartPanel.textWidth(textToButton)*textToButton.length))+'-';
     var moverX1 = (100-chartPanel.textWidth(textToButton1))/2
     textToButton2 = textToButton.slice(round(70/chartPanel.textWidth(textToButton)*textToButton.length),500);
     var moverX2 = (100-chartPanel.textWidth(textToButton2))/2
     chartPanel.text(textToButton1,xTmp+moverX1-extraChartMoverX,yTmp+chartMoverY+8);
     chartPanel.text(textToButton2,xTmp+moverX2-extraChartMoverX,yTmp+chartMoverY+18);
     
    }else{     
     var moverX1 = (100-chartPanel.textWidth(textToButton))/2
     chartPanel.text(textToButton,xTmp+moverX1-extraChartMoverX,yTmp+chartMoverY+12);
    }    
     
     
    chartPanel.fill(0, 0, 255, 80);        
    chartPanel.rect(xTmp-extraChartMoverX,yTmp+20+chartMoverY,50,20); 
     
    chartPanel.strokeWeight(1);
    chartPanel.textSize(10);
    chartPanel.textStyle(BOLD);
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(255, 0, 0, 255);        
    var textToButton = 'Rank '+(a+1); 
    var moverX1 = (50-chartPanel.textWidth(textToButton))/2
    chartPanel.text(textToButton,xTmp+moverX1-extraChartMoverX,yTmp+chartMoverY+32);     
    
    chartPanel.fill(0, 0, 255, 30);        
    chartPanel.rect(xTmp+50-extraChartMoverX,yTmp+20+chartMoverY,50,20); 
      
    if (a == 0){ 
     for (var b = 0; b < this.bars; b++) {
      allValueTmp = allValueTmp+round(parseInt(chartValue2[(chartStage-chartWitchStage)*this.bars+b]+(chartMoveCorrector[b]/(this.divider+1))*chartWitchStage))
     }
    }
    
     
     
    var lastValueTmp = round(round(parseInt(chartValue2[(chartStage-chartWitchStage)*this.bars+a]+(chartMoveCorrector[a]/(this.divider+1))*chartWitchStage))*100/allValueTmp,1)+'%' ; 

     
    chartPanel.strokeWeight(1);
    chartPanel.textSize(10);
    chartPanel.textFont('Arial');
    chartPanel.textStyle(NORMAL);
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(0, 0, 255, 255);        
    var moverX1 = (50-chartPanel.textWidth(lastValueTmp))/2
    chartPanel.text(lastValueTmp.toLocaleString("en-US"),xTmp+50+moverX1-extraChartMoverX,yTmp+32+chartMoverY);
     

     
    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(0, 255, 255, 70);        
    chartPanel.rect(xTmp-extraChartMoverX,yTmp+40+chartMoverY,100,20); 
    extraChartYEnd = yTmp+40+chartMoverY+20

    chartPanel.stroke(0, 0, 0, 255); 
    chartPanel.fill(0, 0, 0, 255);        
    var textToButton = round(parseInt(chartValue2[(chartStage-chartWitchStage)*this.bars+a]+(chartMoveCorrector[a]/(this.divider+1))*chartWitchStage)); 
    var moverX1 = (100-chartPanel.textWidth(textToButton))/2
    chartPanel.text(textToButton.toLocaleString("en-US"),xTmp+moverX1-extraChartMoverX,yTmp+chartMoverY+52);
     
   }
     
     
     
     
     
     
     
     
   chartPanel.fill(0, 0, 115, 35);        
   chartPanel.noStroke();        
//   chartPanel.strokeWeight(2);
//   chartPanel.stroke(0, 0, 0, 155);
//   chartPanel.rect(this.nextBar2/3*2,this.nextBar2/3*2.5,wW/3,this.nextBar3+this.bars*(this.nextBar/3*0.7+this.nextBar/3),5,5,5,5);
   extraChartYSize = (extraChartYSizeEnd+this.nextBar2-timerBeltDataEndY)*extraChartDivider
   chartPanel.rect(100+100*(this.bars > 1)-extraChartMoverX,timerBeltDataEndY,wW/3,extraChartYSize); 
//   chartPanel.rect(0,extraChartYSizeEnd+this.nextBar2,200,yTmp+40+chartMoverY); 
    
    
    
   }
  }
 }
}



class ExtraChart {
 constructor(divider, bars, stages, x, close) {
  this.nextBar = round(wH/(max(10,bars)+2));
  this.nextBar2 = round(wH/(max(10,bars)+2));
  if (this.nextBar2 < 40){
   this.tmp = round((40-this.nextBar2)/10)*2;
   this.nextBar2 = 40;
   this.nextBar = this.nextBar-this.tmp-this.tmp*0.5     
  }
  this.nextBar3 = round(wH/(10+2));
  this.bars = bars; 
  this.stages = stages; 
  this.divider = divider;
  this.long = x*close;
  this.x = x;
 }


 extraChartCreateGraphic(){

  if (extraChartPanelIsLoaded == 1){ 
   extraChartPanel.clear();    
  }
      
  if (extraChartPanelIsLoaded == 0) {
   extraChartPanel = createGraphics(this.nextBar2+2, this.nextBar2+2);
  }
 }
  
  
 extraChartController() { 

  if (chartModelTypeForLegend == 0){
   
   extraChartPanel.fill(133, 133, 133, 155);    
//   extraChartPanel.noFill();    
    
  
   if (extraChartControllerFill == 1){
    extraChartPanel.noStroke()    
   } else {
    extraChartPanel.strokeWeight(2);
    extraChartPanel.stroke(111, 111, 255, 55);        
   }
     
     
     
   extraChartPanel.rect(0,1,this.nextBar2,this.nextBar2,0,5,5,0);
   if (extraChartControllerFill == 1){
    extraChartPanel.fill(255, 255, 255, 255);    
   } else {
    extraChartPanel.fill(255, 0, 0, 255);          
   }
     
   if (extraChartController == 1){ 
    extraChartPanel.triangle(this.nextBar2/4,
                         this.nextBar2/5,
                         this.nextBar2/4,
                         (this.nextBar2/5)*4,
                         this.nextBar2*0.8,
                         this.nextBar2/2);            
   } else {
    extraChartPanel.triangle(this.nextBar2*0.75,
                         this.nextBar2/5,
                         this.nextBar2*0.75,
                         (this.nextBar2/5)*4,
                         this.nextBar2*0.2,
                         this.nextBar2/2);                  
   }
     
     
  }    
    
  if (mouseX <= this.nextBar2 &&
      mouseY >= max(wH/2-20,extraChartYEnd+5) &&
      mouseY <= max(wH/2-20,extraChartYEnd+5)+this.nextBar2 
     ){
   extraChartControllerFill = -1   
   if (choiceSter1 == 1){
    if (lastChoiceSter > 2 && 
        choiceTimer1 > 1 && 
        choiceTimer1 < 10
     && mousePressX <= this.nextBar2
     && mousePressY >= max(wH/2-20,extraChartYEnd+5)
     && mousePressY <= max(wH/2-20,extraChartYEnd+5)+this.nextBar2){
       
     extraChartController = extraChartController*(-1)       
     extraChartSter = 1;
     firstRun = 35 
    }
   }    
  } else {
   extraChartControllerFill = 1   
  }
    
  if (extraChartSter == 1){
   if (extraChartController == 1){
    extraChartMoverX = min(wW,extraChartMoverX+wW/30) 
    extraChartDivider = 1-(extraChartMoverX*100/wW)/100
    if (extraChartMoverX == wW){
     extraChartSter = 0; 
     extraChartYSize = 0;
     playButtonStart = 2 
     firstRun = 12 
      
    }
   }
   if (extraChartController == -1){
    extraChartMoverX = max(0,extraChartMoverX-wW/30)
    extraChartDivider = 1-(extraChartMoverX*100/wW)/100
    if (extraChartMoverX == 0){
     extraChartSter = 0;
     extraChartDivider = 1 
     playButtonStart = 2 
     firstRun = 12 
    }
   }     
  }
 }
}
